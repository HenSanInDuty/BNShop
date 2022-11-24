import { ModalUpdateStaffComponent } from '../../components/staff/modal-update-staff/modal-update-staff.component';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { finalize, takeUntil } from 'rxjs';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';
import { ModalAddStaffComponent } from '../../components/staff/modal-add-staff/modal-add-staff.component';
import { ParamGetListStaffDTO } from '../../models/staff.dto';
import { TDSMessageService } from 'tds-ui/message';
import { Router } from '@angular/router';
import { TDSDestroyService } from 'tds-ui/core/services';
import { AppUserDto, BranchDto, DepartmentDto } from '@commom/hrm/models';
import { BranchService, DepartmentService, UserService } from '@commom/hrm/services';
@Component({
  selector: 'hrm-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
  providers: [
    TDSDestroyService
  ],
  host: {
    class: 'h-full w-full flex'
  }
})
export class StaffComponent implements OnInit {
  staffId: string = '';
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly AppUserDto[] = [];
  listDataOfStaff: readonly AppUserDto[] = [];
  setOfCheckedId = new Set<string>();
  expandSet = new Set<string>();
  loadingStaffList: boolean = true;
  skipCount = 0;
  total = 0;
  pageIndex = 1;
  pageSize = 10;
  public listDataOfBranch: BranchDto[] = [];
  public listDataOfDepartment: DepartmentDto[] = [];
  paramsOfStaff: ParamGetListStaffDTO = {
    SkipCount: 0,
    MaxResultCount: 2,
    BranchId: '',
    DepartmentId: '',
    SearchText: ''
  };

  constructor(
    private userService: UserService,
    private branchService: BranchService,
    private departmentService: DepartmentService,
    private modalService: TDSModalService,
    private msg: TDSMessageService,
    private viewContainerRef: ViewContainerRef,
    private Router: Router,
    private destroy$: TDSDestroyService
  ) { }

  ngOnInit(): void {
    this.getListBranch();
    this.getListDepartment();
  }


  // chuyển trang xem chi tiết nhân viên
  pagestaffDetail(data: TDSSafeAny) {
    this.Router.navigateByUrl(`hr-management/staff/detail/${data.id}`)
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

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(
      item => this.updateCheckedSet(item.id!, value)
    );
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly AppUserDto[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id!));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id!)) && !this.checked;
  }

  // xóa lựa chọn checkbox
  onDeleteSetOfCheck() {
    this.setOfCheckedId = new Set<string>();
    this.refreshCheckedStatus();
  }

  // lấy danh sách nhân sự
  loadDataOfStaff() {
    this.loadingStaffList = true;
    if (this.paramsOfStaff.BranchId == null)
      this.paramsOfStaff.BranchId = '';
    if (this.paramsOfStaff.DepartmentId == null)
      this.paramsOfStaff.DepartmentId = '';
    if (this.paramsOfStaff.SearchText == null)
      this.paramsOfStaff.SearchText = '';
    this.userService.getUser_Json(this.paramsOfStaff)
      .pipe(finalize(() => {
        this.loadingStaffList = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            if (res) {
              this.listDataOfStaff = [...res.items!];
              this.total = res.totalCount!;
            } else {
              this.listDataOfStaff = [];
              this.total = 0;
            }
          },
          error: () => {
            this.listDataOfStaff = [];
            this.total = 0;
          }
        }
      )
  }

  // lấy danh sách chi nhánh
  getListBranch() {
    this.branchService.getBranch_Json({ MaxResultCount: 0 }).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.listDataOfBranch = [...res.items!];
    })
  }

  // lọc chi nhánh
  filterOfBranch(event: TDSSafeAny): void {
    this.paramsOfStaff.BranchId = event;
    this.skipCount = 0;
    this.loadDataOfStaff();
    this.pageIndex = 1;
  }

  // lấy danh sách phòng ban
  getListDepartment() {
    this.departmentService.getDepartment_Json({ MaxResultCount: 0 }).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.listDataOfDepartment = [...res.items!];
    })
  }

  // lọc phòng ban
  filterOfDepartment(event: TDSSafeAny): void {
    this.paramsOfStaff.DepartmentId = event;
    this.skipCount = 0;
    this.loadDataOfStaff();
    this.pageIndex = 1;
  }

  // Phân trang
  onQueryParamsChange(params: TDSTableQueryParams): void {
    this.paramsOfStaff.SkipCount = (params.pageIndex - 1) * this.pageSize;
    this.paramsOfStaff.MaxResultCount = params.pageSize;
    this.skipCount = this.paramsOfStaff.SkipCount;
    this.onDeleteSetOfCheck();
    this.loadDataOfStaff();
  }

  // Search theo tên nhân sự
  search(event: TDSSafeAny): void {
    if (event.value != null) {
      this.paramsOfStaff.SkipCount = 0;
      this.pageIndex = 1;
    }
    this.paramsOfStaff.SearchText = event.value;
    this.loadDataOfStaff();
  }

  resetPage(e: TDSSafeAny) {
    this.pageIndex = 1;
    this.loadDataOfStaff();
  }

  // modal thêm mới nhân viên
  showModalAddStaff(): void {
    const modal = this.modalService.create({
      title: 'Thêm mới nhân viên',
      content: ModalAddStaffComponent,
      size: "xl",
      viewContainerRef: this.viewContainerRef,
      centered: true
    });
    modal.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.loadDataOfStaff();
        }
      }
    )
  }

  // tạo mới nhân viên
  createStaff() {
    this.showModalAddStaff()
  }

  // modal chỉnh sửa thông tin nhân viên
  showModalUpdateStaff(id: string) {
    const modal = this.modalService.create({
      title: 'Cập nhật thông tin nhân viên',
      content: ModalUpdateStaffComponent,
      size: "xl",
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        id: id
      },
      centered: true
    });
    modal.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.loadDataOfStaff();
        }
      }
    )
  }

  // modal xóa 1 nhân viên
  deleteStaff(data: AppUserDto): void {
    this.modalService.error({
      title: 'Xóa nhân viên',
      content: `Bạn có chắc chắn xóa nhân viên <span class="font-semibold">${data.fullName}</span> này?<br><span class="text-error-500">Lưu ý: khi đã xóa sẽ không thể khôi phục dữ liệu</span>`,
      onOk: () => {
        this.loadingStaffList = true;
        this.userService.deleteUserId({ id: data.id! })
          .pipe(finalize(() => {
            this.loadingStaffList = false;
          }), takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.msg.success('xóa nhân viên thành công');
                this.loadDataOfStaff();
                this.onDeleteSetOfCheck();
              },
              error: (err) => {
                if (err) {
                  if(err || err.code) {
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

  // modal xóa những nhân viên được chọn
  deleteMultipleStaff() {
    let listIds = [...this.setOfCheckedId];
    this.modalService.error({
      title: 'Xóa nhân viên',
      content: `Bạn có chắc chắn xóa những nhân viên này không ?<br><span class="text-error-500">Lưu ý: khi đã xóa sẽ không thể khôi phục dữ liệu</span>`,
      onOk: () => {
        this.loadingStaffList = true;
        this.userService.deleteUserDeleteMany({ listId: listIds })
          .pipe(finalize(() => {
            this.loadingStaffList = false;
          }), takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.msg.success('Xóa nhân viên thành công');
                this.loadDataOfStaff();
                this.onDeleteSetOfCheck();
              },
              error: (err) => {
                this.msg.error('Đã có nhân viên đang giữ chức vụ không cho phép xóa');
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
