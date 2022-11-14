import { TDSDestroyService } from 'tds-ui/core/services';
import { Component, OnInit } from '@angular/core';
import { finalize, takeUntil } from 'rxjs';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';
import { ModalAddDepartmentComponent } from '../../components/department/modal-add-department/modal-add-department.component';
import { ModalEditDepartmentComponent } from '../../components/department/modal-edit-department/modal-edit-department.component';
import { ParamsGetListDepartmentDTO } from '../../models/department.dto';
import { DepartmentDto } from '@commom/hrm/models';
import { DepartmentService } from '@commom/hrm/services';

@Component({
  selector: 'hrm-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class DepartmentComponent implements OnInit {

  listOfCurrentPageData: readonly DepartmentDto[] = [];
  listDataOfDepartment: readonly DepartmentDto[] = [];
  setOfCheckedId = new Set<string>();
  expandSet = new Set<string>();
  checked = false;
  indeterminate = false;
  loadingDepartmentList: boolean = true;
  total = 0;
  pageIndex = 1;
  pageSize = 10;
  skipCount = 0;
  params: ParamsGetListDepartmentDTO = {
    SkipCount: 0,
    MaxResultCount: 10,
    SearchText: ''
  };

  constructor(
    private departmentService: DepartmentService,
    private modalService: TDSModalService,
    private msg: TDSMessageService,
    private destroy$: TDSDestroyService
  ) { }

  ngOnInit(): void {
  }

  loadDataOfDepartment() {
    this.loadingDepartmentList = true;
    if (this.params.SearchText == null)
      this.params.SearchText = '';
    this.departmentService.getDepartment_Json(this.params)
      .pipe(finalize(() => {
        this.loadingDepartmentList = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            if (res) {
              this.listDataOfDepartment = [...res.items!];
              this.total = res.totalCount!;
            } else {
              this.listDataOfDepartment = [];
              this.total = 0;
            }
          },
          error: (err) => {
            this.listDataOfDepartment = [];
            this.total = 0;
          }
        }
      )
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

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id!));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id!)) && !this.checked;
  }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly DepartmentDto[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  onExpandChange(departmentId: string, checked: boolean): void {
    if (checked) {
      this.expandSet.add(departmentId);
    } else {
      this.expandSet.delete(departmentId);
    }
  }

  // Phân trang
  onQueryParamsChange(params: TDSTableQueryParams): void {
    this.params.SkipCount = (params.pageIndex - 1) * this.pageSize;
    this.params.MaxResultCount = params.pageSize;
    this.skipCount = this.params.SkipCount;
    this.onDeleteSetOfCheck()
    this.loadDataOfDepartment();
  }

  // xóa nhiều dòng được chọn
  onDeleteSetOfCheck() {
    this.setOfCheckedId = new Set<string>();
    this.refreshCheckedStatus();
  }

  onDeleteSetOfCheckShift() {
    this.setOfCheckedId = new Set<string>();
    this.refreshCheckedStatus();
  }

  // tìm kiếm theo tên phòng ban
  search(event: TDSSafeAny): void {
    if (event.value != null) {
      this.params.SkipCount = 0;
      this.pageIndex = 1;
    }
    this.params.SearchText = event.value;
    this.loadDataOfDepartment();
  }

  // modal thêm mới phòng ban
  showModalAddDepartment(): void {
    const modal = this.modalService.create({
      title: 'Thêm mới phòng ban',
      content: ModalAddDepartmentComponent,
      size: "md",
    });
    modal.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.loadDataOfDepartment();
        }
      }
    )
  }

  // modal chỉnh sửa phòng ban
  showModalEditDepartment(id: string) {
    const modal = this.modalService.create({
      title: 'Chỉnh sửa thông tin phòng ban',
      content: ModalEditDepartmentComponent,
      size: "md",
      componentParams: {
        departmentId: id
      },
    });
    modal.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.loadDataOfDepartment();
        }
      }
    )
  }

  // modal xóa 1 phòng ban
  deleteDepartment(data: DepartmentDto): void {
    this.modalService.error({
      title: 'Xóa phòng ban',
      content: `Bạn có chắc chắn xóa phòng ban <span class="font-semibold">${data.name}</span> này ?<br><span class="text-error-500">Lưu ý: khi đã xóa sẽ không thể khôi phục dữ liệu</span>`,
      onOk: () => {
        this.loadingDepartmentList = true;
        this.departmentService.deleteDepartmentId({ id: data.id! })
          .pipe(finalize(() => {
            this.loadingDepartmentList = false;
          }), takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.msg.success('xóa phòng ban thành công');
                this.loadDataOfDepartment();
              },
              error: (err) => {
                if (err || err.code) {
                  this.msg.error(err.code);
                } else {
                  this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
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

  // xóa nhiều phòng ban
  deleteMultipleDepartment() {
    let listIds = [...this.setOfCheckedId];
    this.modalService.error({
      title: 'Xóa phòng ban',
      content: `Bạn có chắc chắn xóa những phòng ban này không ?<br><span class="text-error-500">Lưu ý: khi đã xóa sẽ không thể khôi phục dữ liệu</span>`,
      onOk: () => {
        this.loadingDepartmentList = true;
        this.departmentService.deleteDepartmentDeleteMany({ listId: listIds })
          .pipe(finalize(() => {
            this.loadingDepartmentList = false;
          }), takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.msg.success('Xóa phòng ban thành công');
                this.loadDataOfDepartment();
                this.onDeleteSetOfCheck();
              },
              error: (err) => {
                if (err || err.code) {
                  this.msg.error(err.code);
                } else {
                  this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
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

  onDeleteShift(event: TDSSafeAny) {
    if (!event.shiftIds) {
      this.loadDataOfDepartment()
    }
  }
}

