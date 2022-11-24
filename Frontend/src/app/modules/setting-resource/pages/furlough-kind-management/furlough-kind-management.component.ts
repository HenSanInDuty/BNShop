import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { FurloughKindDto, FurloughKindDtoPagedResultDto } from '@commom/hrm/models';
import { FurloughKindService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';
import { ModalAddEditFurloughKindComponent } from '../../components/modal-add-edit-furlough-kind/modal-add-edit-furlough-kind.component';
import { ModalDeleteAllComponent } from '../../components/modal-delete-all/modal-delete-all.component';

import { ParamGetFurloughKindDTO } from '../../models/time-attendace.dto';


@Component({
  selector: 'hrm-furlough-kind-management',
  templateUrl: './furlough-kind-management.component.html',
  styleUrls: ['./furlough-kind-management.component.scss'],
  host: { class: 'h-full w-full flex' },
  providers: [
    TDSDestroyService
  ]
})
export class FurloughKindManagementComponent implements OnInit {

  loading = false
  listOfData: Array<string> = [];
  setOfCheckedId = new Set<TDSSafeAny>();
  listOfCurrentPageData: Array<FurloughKindDto> = [];
  pageIndex = 1;
  pageSize = 20;
  skipCount = 0
  params: ParamGetFurloughKindDTO = {
    Year: 0,
    SkipCount: 0,
    MaxResultCount: 10,
    SearchText: '',
    Sorting: '',
  }
  indeterminate = false
  checked = false
  public lstFurloughKind: FurloughKindDtoPagedResultDto = {
    items: [],
    totalCount: 0
  }

  constructor(
    private furloughKindService: FurloughKindService,
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
    this.onResetpage()
  }

  onCurrentPageDataChange($event: TDSSafeAny): void {
    this.listOfCurrentPageData = $event
    this.refreshCheckedStatus()
  }

  onQueryParamsChange(params: TDSTableQueryParams): void {
    this.params.SkipCount = (params.pageIndex - 1) * this.pageSize;
    this.params.MaxResultCount = params.pageSize
    this.skipCount = this.params.SkipCount
    this.getListFurloughKind(this.params)
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item))
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item)) && !this.checked
  }

  onResetpage() {
    this.pageIndex = 1
  }

  getListFurloughKind(params: ParamGetFurloughKindDTO) {
    this.loading = true
    this.setOfCheckedId = new Set<TDSSafeAny>()
    this.refreshCheckedStatus()
    this.furloughKindService.getFurloughKind_Json(params)
    .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.lstFurloughKind.items = res.items
            this.lstFurloughKind.totalCount = res.totalCount
            this.loading = false
            if (res.items!.length == 0) {
              this.onResetpage()
            }
          }
          else {
            this.lstFurloughKind.items = []
            this.lstFurloughKind.totalCount = 0
            this.loading = false
          }
        },
        error: () => {
          this.lstFurloughKind.items = [];
          this.loading = false
          this.lstFurloughKind.totalCount = 0
        }
      })
  }

  search(event: TDSSafeAny): void {
    if (event.value != null) {
      this.params.SkipCount = 0;
      this.onResetpage();
      this.params.SearchText = event.value;
      this.getListFurloughKind(this.params);
    }
  }

  showModalAdd(): void {
    const modalAdd = this.modalService.create({
      title: 'Thêm loại nghỉ phép',
      content: ModalAddEditFurloughKindComponent,
      footer: null,
      size: "md",
      viewContainerRef: this.viewContainerRef,
      componentParams: {

      },
    });
    modalAdd.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.getListFurloughKind(this.params);
        },
        error: (err) => {

        }
      }
    )
  }

  onDeleteOne(data: TDSSafeAny): void {
    const modal = this.modalService.error({
      title: 'Xác nhận xóa loại nghỉ phép',
      content: `<span  class="text-error-500">
      Lưu ý: Không thể khôi phục thông tin loại nghỉ phép này sau khi xóa
    </span>`,
      onOk: () => {
        this.furloughKindService.deleteFurloughKindDelete_Response({ id: data.id })
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          {
            next: (res) => {
              modal.destroy(this.params);
              this.message.success("Xóa loại nghỉ phép thành công")
              this.getListFurloughKind(this.params)
            },
            error: (err) => {
              this.message.error(err.code)
              this.getListFurloughKind(this.params)
            }
          })
      },
      onCancel: () => { },
      confirmIcon: 'tdsi-trash-fill',
      okText: "Xóa",
      cancelText: "Hủy"
    });
  }

  showModalEdit(data: TDSSafeAny): void {
    const modalEdit = this.modalService.create({
      title: 'Sửa ca loại nghỉ phép',
      content: ModalAddEditFurloughKindComponent,
      size: "md",
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        lstFurloughKind: data,
      },
    });
    modalEdit.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.getListFurloughKind(this.params);
        },
        error: (err) => {
        }
      }
    )
  }

  onDeleteAll(): void {
    let modalDelete = this.modalService.create({
      title: "Xác nhận xóa loại nghỉ phép ",
      content: ModalDeleteAllComponent,
      size: "lg",
      viewContainerRef: this.viewContainerRef,
      footer: null,
      componentParams: {
        lstFurloughKind: [...this.setOfCheckedId]
      },
    })
    modalDelete.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.getListFurloughKind(this.params);
        },
        error: (err) => {
        }
      }
    )
  }
}
