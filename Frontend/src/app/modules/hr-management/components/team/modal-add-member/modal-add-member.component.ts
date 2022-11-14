import { TDSDestroyService } from 'tds-ui/core/services';
import { Component, Input, OnInit } from '@angular/core';
import { finalize, takeUntil } from 'rxjs';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';
import { ParamGetListStaffDTO } from '../../../models/staff.dto';
import { ResultDataDTO } from '../../../models/team.dto';
import { AppUserDto, DepartmentDto } from '@commom/hrm/models';
import { DepartmentService, TeamUserService, UserService } from '@commom/hrm/services';

@Component({
  selector: 'hrm-modal-add-member',
  templateUrl: './modal-add-member.component.html',
  styleUrls: ['./modal-add-member.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalAddMemberComponent implements OnInit {

  @Input() setOfCheckedId = new Set<string>();
  @Input() teamId = '';
  @Input() listOfdata: AppUserDto[] = [];
  isSubmit: boolean = false;
  listDataOfStaff: readonly AppUserDto[] = [];
  listOfCurrentPageData: readonly AppUserDto[] = [];
  loadingStaffList: boolean = true;
  public listDataOfDepartment: DepartmentDto[] = [];
  skipCount = 0;
  total = 0;
  indeterminate = false;
  checked = false;
  pageIndex = 1;
  pageSize = 10;
  paramsOfStaff: ParamGetListStaffDTO = {
    SkipCount: 0,
    MaxResultCount: 10,
    DepartmentId: '',
    SearchText: ''
  };

  constructor(
    private userService: UserService,
    private teamUserService: TeamUserService,
    private departmentService: DepartmentService,
    private modal: TDSModalRef,
    private msg: TDSMessageService,
    private destroy$: TDSDestroyService
  ) { }

  ngOnInit(): void {
    this.getListDepartment();
  }

  onCurrentPageDataChange($event: readonly AppUserDto[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(
      item => this.updateCheckedSet(item.id!, value)
    );
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id!));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id!)) && !this.checked;
  }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  updateCheckedSet(id: string, checked: boolean): void {
    const index = this.listOfdata.findIndex(staff => staff.id === id);
    if (checked) {
      this.setOfCheckedId.add(id);
      if (index < 0) {
        let item = this.listDataOfStaff.find(staff => staff.id === id);
        if (item) {
          this.listOfdata.push(item);
        }
      }
    } else {
      this.setOfCheckedId.delete(id);
      this.listOfdata.splice(index, 1);
    }
  }

  loadDataOfStaff() {
    this.loadingStaffList = true;
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

  getListDepartment() {
    this.departmentService.getDepartment_Json({ MaxResultCount: 0 })
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.listDataOfDepartment = [...res.items!];
      })
  }

  resetPage() {
    this.pageIndex = 1;
  }

  filterOfDepartment(event: TDSSafeAny): void {
    this.paramsOfStaff.DepartmentId = event;
    this.skipCount = 0;
    this.resetPage();
    this.loadDataOfStaff();
  }

  // Phân trang
  onQueryParamsChange(params: TDSTableQueryParams): void {
    this.paramsOfStaff.SkipCount = (params.pageIndex - 1) * this.pageSize;
    this.paramsOfStaff.MaxResultCount = params.pageSize;
    this.skipCount = this.paramsOfStaff.SkipCount;
    this.loadDataOfStaff();
  }

  search(event: TDSSafeAny): void {
    if (event.value != null) {
      this.paramsOfStaff.SkipCount = 0;
      this.resetPage();
    }
    this.paramsOfStaff.SearchText = event.value;
    this.loadDataOfStaff();
  }

  onSubmit() {
    this.isSubmit = true;
    if (this.teamId) {
      if (this.setOfCheckedId.size > 0) {
        let memberIds = [...this.setOfCheckedId];
        this.teamUserService.postTeamUserCreate({ body: { teamId: this.teamId, members: memberIds } })
          .pipe(finalize(() => {
            this.isSubmit = false;
          }), takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.msg.success('Thêm mới thành viên thành công');
                this.modal.destroy(this.setOfCheckedId);
              },
              error: (err) => {
                this.msg.error('Nhân viên này đã tồn tại trong team');
                this.setOfCheckedId = new Set<string>();
                this.refreshCheckedStatus();
              }
            }
          )
      } else {
        this.msg.error('Vui lòng chọn nhân viên cần thêm vào team');
        this.isSubmit = false;
      }
    } else {
      if (this.setOfCheckedId.size > 0) {
        let models: ResultDataDTO = {
          data: this.listOfdata,
          ids: this.setOfCheckedId
        }
        this.modal.destroy(models);
      } else {
        this.msg.error('Vui lòng chọn thành viên cần thêm vào team');
        this.isSubmit = false;
      }
    }
  }

  cancel() {
    this.modal.destroy(null);
  }

}
