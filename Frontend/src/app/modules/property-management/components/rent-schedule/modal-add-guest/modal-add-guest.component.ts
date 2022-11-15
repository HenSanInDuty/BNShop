import { Component, Input, OnInit } from '@angular/core';
import { AppUserDto, DepartmentDto, ResourceTicketCheckBusyTimeDto } from '@commom/hrm/models';
import { TDSDestroyService } from 'tds-ui/core/services';
import { DepartmentService, UserService } from '@commom/hrm/services';
import { finalize, takeUntil } from 'rxjs';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';
export interface ResultDataDTO {
  data: ResourceTicketCheckBusyTimeDto[],
  ids: Set<string>
}
export interface ParamGetListStaffDTO {
  BranchId?: string,
  DepartmentId?: string,
  SearchText?: string,
  IgnoreUsers?: Array<string>
  Sorting?: string,
  SkipCount?: number,
  MaxResultCount: number,
}

@Component({
  selector: 'hrm-modal-add-guest',
  templateUrl: './modal-add-guest.component.html',
  styleUrls: ['./modal-add-guest.component.scss'],
  providers: [
    TDSDestroyService
  ]
})

export class ModalAddGuestComponent implements OnInit {
  @Input() setOfCheckedId = new Set<string>();
  @Input() listOfdata: ResourceTicketCheckBusyTimeDto[] = [];
  public listDataOfDepartment: DepartmentDto[] = [];
  listDataOfStaff: readonly AppUserDto[] = [];
  listOfCurrentPageData: readonly AppUserDto[] = [];
  loadingStaffList: boolean = true;

  isSubmit: boolean = false;
  indeterminate = false;
  checked = false;
  skipCount = 0;
  pageIndex = 1;
  total = 0;
  pageSize = 10;
  paramsOfStaff: ParamGetListStaffDTO = {
    SkipCount: 0,
    MaxResultCount: 10,
    DepartmentId: '',
    SearchText: ''
  };

  constructor(
    private modal: TDSModalRef,
    private msg: TDSMessageService,
    private userService: UserService,
    private destroy$: TDSDestroyService,
    private departmentService: DepartmentService,
  ) { }

  ngOnInit(): void {
    this.getListDepartment();
  }

  onCurrentPageDataChange($event: readonly AppUserDto[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData?.every(item => this.setOfCheckedId.has(item.id!));
    this.indeterminate = this.listOfCurrentPageData?.some(item => this.setOfCheckedId.has(item.id!)) && !this.checked;
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData?.forEach(
      item => this.updateCheckedSet(item.id!, value)
    );
    this.refreshCheckedStatus();
  }

  updateCheckedSet(id: string, checked: boolean): void {
    const index = this.listOfdata?.findIndex(staff => staff.userId === id);
    if (checked) {
      this.setOfCheckedId?.add(id);
      if (index < 0) {
        let item = this.listDataOfStaff?.find(staff => staff.id === id);
        if (item) {
          this.listOfdata?.push(item);
        }
      }
    } else {
      this.setOfCheckedId.delete(id);
      this.listOfdata?.splice(index, 1);
    }
  }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  getListDepartment() {
    this.departmentService.getDepartment_Json({ MaxResultCount: 0 })
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.listDataOfDepartment = [...res.items!];
      })
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

  onSubmit() {
    this.isSubmit = true;
    if (this.setOfCheckedId.size > 0) {
      let models: ResultDataDTO = {
        data: this.listOfdata,
        ids: this.setOfCheckedId
      }
      this.modal.destroy(models);
    }
  }

  search(event: TDSSafeAny): void {
    if (event.value != null) {
      this.paramsOfStaff.SkipCount = 0;
      this.resetPage();
    }
    this.paramsOfStaff.SearchText = event.value;
    this.loadDataOfStaff();
  }

  filterOfDepartment(event: TDSSafeAny): void {
    this.paramsOfStaff.DepartmentId = event;
    this.skipCount = 0;
    this.resetPage();
    this.loadDataOfStaff();
  }

  onQueryParamsChange(params: TDSTableQueryParams): void {
    this.paramsOfStaff.SkipCount = (params.pageIndex - 1) * this.pageSize;
    this.paramsOfStaff.MaxResultCount = params.pageSize;
    this.skipCount = this.paramsOfStaff.SkipCount;
    this.loadDataOfStaff();
  }

  resetPage() {
    this.pageIndex = 1;
  }

  cancel() {
    this.modal.destroy(null);
  }

}
