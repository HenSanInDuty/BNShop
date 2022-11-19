import { TDSDestroyService } from 'tds-ui/core/services';
import { Component, OnInit } from '@angular/core';
import { finalize, takeUntil } from 'rxjs';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';
import { ModalAddPositionComponent } from '../../components/position/modal-add-position/modal-add-position.component';
import { ParamsGetListPositionDTO } from '../../models/position.dto';
import { PositionDto } from '@commom/hrm/models';
import { PositionService } from '@commom/hrm/services';

@Component({
  selector: 'hrm-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class PositionComponent implements OnInit {

  listDataOfPosition: readonly PositionDto[] = [];
  listOfCurrentPageData: readonly PositionDto[] = [];
  checked = false;
  setOfCheckedId = new Set<string>();
  indeterminate = false;
  loadingPostionList: boolean = true;
  total = 0;
  pageIndex = 1;
  pageSize = 10;
  skipCount = 0;
  params: ParamsGetListPositionDTO = {
    SkipCount: 0,
    MaxResultCount: 10,
    SearchText: ''
  };


  constructor(
    private positionService: PositionService,
    private msg: TDSMessageService,
    private modalService: TDSModalService,
    private destroy$: TDSDestroyService
  ) { }

  ngOnInit(): void {
  }

  onCurrentPageDataChange($event: readonly PositionDto[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id!));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id!)) && !this.checked;
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(
      item => this.updateCheckedSet(item.id!, value)
    );
    this.refreshCheckedStatus();
  }

  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  loadDataOfPosition() {
    this.loadingPostionList = true;
    if (this.params.SearchText == null)
      this.params.SearchText = '';
    this.positionService.getPosition_Json(this.params)
      .pipe(finalize(() => {
        this.loadingPostionList = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            if (res) {
              this.listDataOfPosition = [...res.items!];
              this.total = res.totalCount!;
            } else {
              this.listDataOfPosition = [];
              this.total = 0;
            }
          },
          error: (err) => {
            this.listDataOfPosition = [];
            this.total = 0;
          }
        }
      )
  }

  // Phân trang
  onQueryParamsChange(params: TDSTableQueryParams): void {
    this.params.SkipCount = (params.pageIndex - 1) * this.pageSize;
    this.params.MaxResultCount = params.pageSize;
    this.skipCount = this.params.SkipCount;
    this.onDeleteSetOfCheck();
    this.loadDataOfPosition();
  }

  search(event: TDSSafeAny): void {
    if (event.value != null) {
      this.params.SkipCount = 0;
      this.pageIndex = 1;
    }
    this.params.SearchText = event.value;
    this.loadDataOfPosition();
  }

  // xóa nhiều dòng được chọn
  onDeleteSetOfCheck() {
    this.setOfCheckedId = new Set<string>();
    this.refreshCheckedStatus();
  }

  // modal thêm mới chức vụ
  showModalAddStaff(): void {
    const modal = this.modalService.create({
      title: 'Thêm mới chức vụ',
      content: ModalAddPositionComponent,
      size: "md",
    });
    modal.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.loadDataOfPosition();
        }
      }
    )
  }

  // modal chỉnh sửa chức vụ
  showModalEditPosition(id: string) {
    const modal = this.modalService.create({
      title: 'Chỉnh sửa chức vụ',
      content: ModalAddPositionComponent,
      size: "md",
      componentParams: {
        positionId: id
      },
    });
    modal.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.loadDataOfPosition();
        }
      }
    )
  }

  // modal xóa 1 chức vụ
  deletePosition(data: PositionDto): void {
    this.modalService.error({
      title: 'Xóa chức vụ',
      content: `Bạn có chắc chắn xóa chức vụ <span class="font-semibold">${data.name}</span> không ?<br><span class="text-error-500">Lưu ý: khi đã xóa sẽ không thể khôi phục dữ liệu</span>`,
      onOk: () => {
        this.loadingPostionList = true;
        this.positionService.deletePositionId({ id: data.id! })
          .pipe(finalize(() => {
            this.loadingPostionList = false;
          }), takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.msg.success('Xóa chức vụ thành công');
                this.loadDataOfPosition();
              },
              error: (err) => {
                if (err) {
                  if (err || err.code) {
                    this.msg.error(err.code);
                  } else {
                    this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
                  }
                }
              }
            }
          )
      },
      confirmIcon: 'tdsi-trash-fill',
      okText: "Xác nhận",
      cancelText: "Đóng"
    });
  }

  // xóa nhiều chức vụ
  deleteMultipleDepartment() {
    let listId = [...this.setOfCheckedId];
    this.modalService.error({
      title: 'Xóa chức vụ',
      content: `Bạn có chắc chắn xóa những chức vụ này không ?<br><span class="text-error-500">Lưu ý: khi đã xóa sẽ không thể khôi phục dữ liệu</span>`,
      onOk: () => {
        this.loadingPostionList = true;
        this.positionService.deletePositionDeleteMany({ listId: listId })
          .pipe(finalize(() => {
            this.loadingPostionList = false;
          }), takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.msg.success('Xóa chức vụ thành công');
                this.loadDataOfPosition();
                this.onDeleteSetOfCheck();
              },
              error: (err) => {
                this.msg.error(JSON.parse(err).error ? JSON.parse(err).error.code : 'Có lỗi xảy ra xin vui lòng thử lại !');
              }
            }
          )
      },
      confirmIcon: 'tdsi-trash-fill',
      okText: "Xác nhận",
      cancelText: "Đóng"
    });
  }



}
