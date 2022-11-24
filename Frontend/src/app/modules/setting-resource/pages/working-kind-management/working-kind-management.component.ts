import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {  WorkingKindDtoPagedResultDto } from '@commom/hrm/models';
import {  WorkingKindService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSSafeAny, TDSHelperObject } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';
import { ModalAddEditWorkingKindComponent } from '../../components/modal-add-edit-working-kind/modal-add-edit-working-kind.component';
import { ModalDeleteAllComponent } from '../../components/modal-delete-all/modal-delete-all.component';
import { ParamGetWorkingKindDTO } from '../../models/time-attendace.dto';


@Component({
  selector: 'hrm-working-kind-management',
  templateUrl: './working-kind-management.component.html',
  styleUrls: ['./working-kind-management.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class WorkingKindManagementComponent implements OnInit {

  loading = false
  listOfData:   Array<string> = [];
  setOfCheckedId = new Set<TDSSafeAny>();
  listOfCurrentPageData:  Array<ParamGetWorkingKindDTO> = [];
  pageIndex = 1;
  pageSize = 20;
  skipCount = 0
  params: ParamGetWorkingKindDTO = {
    SkipCount: 0,
    MaxResultCount: 10,
    SearchText: '',
    Sorting: '',
  }

  indeterminate = false
  checked = false
  public lstWorkingkind:WorkingKindDtoPagedResultDto = {
    items: [],
    totalCount: 0
  }
  constructor(
    private workingKindService: WorkingKindService,
    private message: TDSMessageService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private destroy$: TDSDestroyService
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
    this.getListWorkingkind(this.params)
  }

  refreshCheckedStatus(): void {
      this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item))
      this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item)) && !this.checked
  }

  onResetpage () {
    this.pageIndex = 1
  }

  search(event: TDSSafeAny): void {
    if (event.value != null) {
      this.params.SkipCount = 0;
      this.onResetpage();
      this.params.SearchText = event.value;
      this.getListWorkingkind(this.params);
    }
  }

  getListWorkingkind(params: ParamGetWorkingKindDTO){
    this.loading = true
    this.setOfCheckedId = new Set<TDSSafeAny>()
    this.refreshCheckedStatus()
      this.workingKindService.getWorkingKind_Json(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.lstWorkingkind = res
            this.loading = false
            if( res.items!.length == 0){
              this.onResetpage()
            }
          }
          else{
            this.lstWorkingkind.items = []
            this.lstWorkingkind.totalCount = 0
            this.loading = false
          }
        },
        error: () => {
          this.lstWorkingkind.items = [];
          this.loading = false
          this.lstWorkingkind.totalCount = 0;
        }
      })
  }

  showModalAdd(): void {
    const modalAdd = this.modalService.create({
      title: 'Thêm hình thức làm việc',
      content: ModalAddEditWorkingKindComponent,
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
        this.getListWorkingkind(this.params);
        },
        error: (err) => {

        }
      }
    )
  }

  showModalEdit(data: TDSSafeAny): void {
    const modalEdit = this.modalService.create({
      title: 'Thêm hình thức làm việc',
      content: ModalAddEditWorkingKindComponent,
      size: "md",
      viewContainerRef: this.viewContainerRef,
      componentParams:{
        lstWorkingKinds: data,
      },
    });
    modalEdit.afterClose.subscribe(
      {
        next: (res) =>{
        if(TDSHelperObject.hasValue(res))
          this.getListWorkingkind(this.params);
        },
        error: (err) => {
        }
      }
    )
  }

  onDeleteOne(data: TDSSafeAny): void {
    const modal = this.modalService.error({
      title: 'Xác nhận xóa hình thức làm việc',
      content: `<span  class="text-error-500">
      Lưu ý: Không thể khôi phục thông tin hình thức làm việc này sau khi xóa
    </span>`,
      onOk: () => {
        this.workingKindService.deleteWorkingKindDelete_Response({ id: data.id })
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          {
            next: (res) => {
              modal.destroy(this.params);
              this.message.success("Xóa hình thức làm việc thành công")
              this.getListWorkingkind(this.params)
            },
            error: (err) => {
              this.message.error(err.code)
              this.getListWorkingkind(this.params)
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
       title: "Xác nhận xóa hình thức làm việch",
       content: ModalDeleteAllComponent,
       size: "lg",
       viewContainerRef: this.viewContainerRef,
       footer: null,
       componentParams:{
        lstWorkingkind: [...this.setOfCheckedId]
       },
     })
     modalDelete.afterClose.subscribe(
       {
         next: (res) =>{
         if(TDSHelperObject.hasValue(res))
           this.getListWorkingkind(this.params);
         },
         error: (err) => {
         }
       }
     )
   }
}
