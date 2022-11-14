import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { HolidayDtoPagedResultDto } from '@commom/hrm/models';
import { HolidayService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';
import { ModalAddEditHolidaysComponent } from '../../components/modal-add-edit-holidays/modal-add-edit-holidays.component';
import { ModalDeleteAllComponent } from '../../components/modal-delete-all/modal-delete-all.component';
import { ParamGetHolidayDTO } from '../../models/time-attendace.dto';


@Component({
  selector: 'hrm-holidays-management',
  templateUrl: './holidays-management.component.html',
  styleUrls: ['./holidays-management.component.scss'],
  host: {class: 'h-full w-full flex'},
  providers: [
    TDSDestroyService
  ]

})
export class HolidaysManagementComponent implements OnInit {

  loading = false
  listOfData:   Array<string> = [];
  setOfCheckedId = new Set<TDSSafeAny>();
  listOfCurrentPageData:  Array<ParamGetHolidayDTO> = [];
  pageIndex = 1;
  pageSize = 20;
  skipCount = 0
  params: ParamGetHolidayDTO = {
    SkipCount: 0,
    MaxResultCount: 10,
    SearchText: '',
    Sorting: '',
  }

  indeterminate = false
  checked = false
  public lstHolidays:HolidayDtoPagedResultDto = {
    items: [],
    totalCount: 0
  }
  constructor(
    private holidayService: HolidayService,
    private modalService: TDSModalService,
    private destroy$: TDSDestroyService,
    private viewContainerRef: ViewContainerRef,
    private message: TDSMessageService
  ) { }

  ngOnInit(): void {
  }

  updateCheckedSet(id: TDSSafeAny, checked: boolean): void {
    if (checked) {
        this.setOfCheckedId.add(id)
    } else {
        this.setOfCheckedId.delete(id)
    }
  }

  onItemChecked(id: TDSSafeAny, checked: boolean): void {
      this.updateCheckedSet(id, checked)
      this.refreshCheckedStatus()
  }

  onAllChecked(value: boolean): void {
      this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item, value));
      this.refreshCheckedStatus()
      this.onResetpage()
  }

  onCurrentPageDataChange($event:TDSSafeAny): void {
      this.listOfCurrentPageData = $event
      this.refreshCheckedStatus()
  }

  onQueryParamsChange(params: TDSTableQueryParams): void {
    this.params.SkipCount = (params.pageIndex - 1) * this.pageSize;
    this.params.MaxResultCount = params.pageSize
    this.skipCount = this.params.SkipCount
    this.getListHolidays(this.params)
  }

  refreshCheckedStatus(): void {
      this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item))
      this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item)) && !this.checked
  }

  search(event: TDSSafeAny): void {
    if (event.value != null) {
      this.params.SkipCount = 0;
      this.onResetpage();
      this.params.SearchText = event.value;
      this.getListHolidays(this.params);
    }
  }

  onResetpage () {
    this.pageIndex = 1
  }

  getListHolidays(params: ParamGetHolidayDTO){
    this.loading = true
    this.setOfCheckedId = new Set<TDSSafeAny>()
    this.refreshCheckedStatus()
      this.holidayService.getHoliday_Json(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.lstHolidays.items = res.items
            this.lstHolidays.totalCount = res.totalCount
            this.loading = false
            if( res.items!.length == 0){
              this.onResetpage()
            }
          }
          else{
            this.lstHolidays.items = []
            this.lstHolidays.totalCount = 0
            this.loading = false
          }
        },
        error: () => {
          this.lstHolidays.items = [];
          this.loading = false
          this.lstHolidays.totalCount = 0;
        }
      })
  }

  showModalAdd(): void {
    const modalAdd = this.modalService.create({
      title: 'Thêm ngày nghỉ lễ',
      content: ModalAddEditHolidaysComponent,
      footer: null,
      size: "md",
      viewContainerRef: this.viewContainerRef,
      componentParams:{

      },
    });
    modalAdd.afterClose.subscribe(
      {
        next: (res) =>{
        if(TDSHelperObject.hasValue(res))
        this.getListHolidays(this.params);
        },
        error: (err) => {

        }
      }
    )
  }

  showModalEdit(data: TDSSafeAny): void {
    const modalEdit = this.modalService.create({
      title: 'Sửa ca loại nghỉ phép',
      content: ModalAddEditHolidaysComponent,
      size: "md",
      viewContainerRef: this.viewContainerRef,
      componentParams:{
        lstHolidays: data,
      },
    });
    modalEdit.afterClose.subscribe(
      {
        next: (res) =>{
        if(TDSHelperObject.hasValue(res))
          this.getListHolidays(this.params);
        },
        error: (err) => {
        }
      }
    )
  }

  onDeleteOne(data: TDSSafeAny): void {
    const modal = this.modalService.error({
      title: 'Xác nhận xóa ngày nghỉ lễ',
      content: `<span  class="text-error-500">
      Lưu ý: Không thể khôi phục thông tin ngày nghỉ lễ này sau khi xóa
    </span>`,
      onOk: () => {
        this.holidayService.deleteHolidayId_Response({ id: data.id })
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          {
            next: (res) => {
              modal.destroy(this.params);
              this.message.success("Xóa ngày nghỉ lễ thành công")
              this.getListHolidays(this.params)
            },
            error: (err) => {
              this.message.error(err.code)
              this.getListHolidays(this.params)
            }
          })
      },
      onCancel: () => { },
      confirmIcon: 'tdsi-trash-fill',
      okText: "Xóa",
      cancelText: "Hủy"
    });
  }

   onDeleteAll(): void {
    let modalDelete = this.modalService.create({
       title: "Xác nhận xóa ngày nghỉ lễ ",
       content: ModalDeleteAllComponent,
       size: "lg",
       viewContainerRef: this.viewContainerRef,
       footer: null,
       componentParams:{
        lstHolidays: [...this.setOfCheckedId]
       },
     })
     modalDelete.afterClose.subscribe(
       {
         next: (res) =>{
         if(TDSHelperObject.hasValue(res))
           this.getListHolidays(this.params);
         },
         error: (err) => {
         }
       }
     )
   }
}
