import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ShiftDto, ShiftDtoPagedResultDto } from '@commom/hrm/models';
import { ShiftService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';
import { ModalAddEditShiftComponent } from '../../components/modal-add-edit-shift/modal-add-edit-shift.component';
import { ModalDeleteAllComponent } from '../../components/modal-delete-all/modal-delete-all.component';
import { ParamGetShiftDTO } from '../../models/time-attendace.dto';


@Component({
  selector: 'hrm-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  host: { class: 'h-full w-full flex' },
  providers: [
    TDSDestroyService
  ]
})
export class ReviewComponent implements OnInit {

  loading = false
  listOfData: Array<string> = [];
  setOfCheckedId = new Set<TDSSafeAny>();
  listOfCurrentPageData: Array<ShiftDto> = [];
  pageIndex = 1;
  pageSize = 20;
  total = 0
  skipCount = 0
  params: ParamGetShiftDTO = {
    SkipCount: 0,
    MaxResultCount: 10,
    SearchText: '',
    Sorting: '',
  }

  indeterminate = false
  checked = false
  public lstShift: ShiftDtoPagedResultDto = {
    items: [],
    totalCount: 0
  }

  constructor(
    private shiftService: ShiftService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private message: TDSMessageService,
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
  }


  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item))
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item)) && !this.checked
  }

  onCurrentPageDataChange($event: TDSSafeAny): void {
    this.listOfCurrentPageData = $event
    this.refreshCheckedStatus()
  }

  onQueryParamsChange(params: TDSTableQueryParams): void {
    this.params.SkipCount = (params.pageIndex - 1) * this.pageSize;
    this.params.MaxResultCount = params.pageSize
    this.skipCount = this.params.SkipCount
    this.getListShift(this.params)
  }



  onResetpage() {
    this.pageIndex = 1
  }

  getListShift(params: ParamGetShiftDTO) {
    this.loading = true
    this.setOfCheckedId = new Set<TDSSafeAny>()
    this.refreshCheckedStatus()
    this.shiftService.getShift_Json(params)
    .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.lstShift.items = res.items
            this.lstShift.totalCount = res.totalCount
            this.loading = false
            if (res.items!.length == 0) {
              this.onResetpage()
            }
          }
          else {
            this.lstShift.items = []
            this.total = 0
            this.loading = false
          }
        },
        error: () => {
          this.lstShift.items = [];
          this.loading = false
          this.total = 0;
        }
      })
  }

  showModalAdd(): void {
    const modalAdd = this.modalService.create({
      title: 'Thêm ca làm việc',
      content: ModalAddEditShiftComponent,
      footer: null,
      size: "lg",
      viewContainerRef: this.viewContainerRef,
      componentParams: {

      },
    });
    modalAdd.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.getListShift(this.params);
        },
        error: (err) => {

        }
      }
    )
  }

  search(event: TDSSafeAny): void {
    if (event.value != null) {
      this.params.SkipCount = 0;
      this.onResetpage();
      this.params.SearchText = event.value;
      this.getListShift(this.params);
    }
  }

  showModalEdit(data: TDSSafeAny): void {
    const modalEdit = this.modalService.create({
      title: 'Sửa ca làm việc',
      content: ModalAddEditShiftComponent,
      size: "lg",
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        //isDeviation: data.isDeviation,
        lstShift: data,
      },
    });
    modalEdit.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.getListShift(this.params);
        },
        error: (err) => {
        }
      }
    )
  }

  onDeleteOne(data: TDSSafeAny): void {
    const modal = this.modalService.error({
      title: 'Xác nhận xóa ca làm việc',
      content: `<span  class="text-error-500">
      Lưu ý: Không thể khôi phục thông tin ca làm việc này sau khi xóa
    </span>`,
      onOk: () => {
        this.shiftService.deleteShiftDelete_Response({ id: data.id })
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          {
            next: (res) => {
              modal.destroy(this.params);
              this.message.success("Xóa ca làm việc thành công")
              this.getListShift(this.params)
            },
            error: (err) => {
              this.message.error(err.code)
              this.getListShift(this.params)
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
      title: "Xác nhận xóa ca làm ",
      content: ModalDeleteAllComponent,
      size: "lg",
      viewContainerRef: this.viewContainerRef,
      footer: null,
      componentParams: {
        lstShift: [...this.setOfCheckedId]
      },
    })
    modalDelete.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.getListShift(this.params);
        },
        error: (err) => {
        }
      }
    )
  }
}
