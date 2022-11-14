import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSModalRef, TDSModalService } from 'tds-ui/modal';
import { TDSSafeAny, TDSHelperObject } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';
import { ParamGetListStaffDTO } from '../../models/staff.dto';

import { FormGroup, FormBuilder } from '@angular/forms';
import { AppUserDto, BranchDto } from '@commom/hrm/models';
import { BranchService, UserService } from '@commom/hrm/services';



@Component({
  selector: 'hrm-modal-get-staff',
  templateUrl: './modal-get-staff.component.html',
  styleUrls: ['./modal-get-staff.component.scss'],
  host: { class: '' },
  providers: [
    TDSDestroyService
  ]
})
export class ModalGetStaffComponent implements OnInit {

  @Input() listOfdata: AppUserDto[] = [];
  @Input() listOfCheckedId: Array<TDSSafeAny> = [];
  setOfCheckedId = new Set<string>();
  checked = false;
  indeterminate = false;
  loading: boolean = false;
  total = 0
  pageIndex = 1;
  pageSize = 10;
  skipCount = 0;
  listOfCurrentPageData: readonly AppUserDto[] = [];
  public lstStaff: readonly AppUserDto[] = [];
  lstBranch: BranchDto[] = [];
  params: ParamGetListStaffDTO = {
    SkipCount: 0,
    MaxResultCount: 10,
    BranchId: '',
    DepartmentId: '',
    SearchText: ''
  };
  addEditTimeKeeperForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private destroy$: TDSDestroyService,
    private modal: TDSModalRef,
    private branchService: BranchService
  ) { }

  ngOnInit(): void {
    this.getListStaff(this.params);
    this.getBranch();
    this.setOfCheckedId = new Set(this.listOfCheckedId);
  }
  //checked item
  updateCheckedSet(id: string, checked: boolean): void {
    const index = this.listOfdata.findIndex(staff => staff.id === id)
    if (checked) {
      this.setOfCheckedId.add(id);
      if (index < 0) {
        let admin = this.lstStaff.find(staff => staff.id === id)
        if (admin) {
          this.listOfdata.push(admin);
        }
      }
    } else {
      this.setOfCheckedId.delete(id);
      this.listOfdata.splice(index, 1)
    }
  }

  onItemChecked(item: TDSSafeAny, id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => {
      this.updateCheckedSet(item.id!, value)
    });
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: TDSSafeAny): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id!));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id!)) && !this.checked;
  }

  cancel() {
    this.modal.destroy(null);
  }

  //filter with brand Id
  onChange(branchId: TDSSafeAny) {
    if (branchId) {
      this.params.BranchId = branchId;
      this.getListStaff(this.params);
    }
    else {
      this.params.BranchId = '';
      this.getListStaff(this.params);
    }
  }

  //filter with name
  search(event: TDSSafeAny): void {
    if (event.value != null) {
      this.params.SkipCount = 0;
      this.resetPage();
      this.params.SearchText = event.value;
      this.getListStaff(this.params);
    }
  }

  resetPage() {
    this.pageIndex = 1;
  }

  //Panigation
  onQueryParamsChange(params: TDSTableQueryParams): void {
    this.params.SkipCount = (params.pageIndex - 1) * this.pageSize;
    this.params.MaxResultCount = params.pageSize;
    this.skipCount = this.params.SkipCount;
    this.getListStaff(this.params);
  }

  //get branch
  getBranch() {
    this.branchService.getBranch_Json().subscribe((res: TDSSafeAny) => {
      this.lstBranch = res.items;
    });
  }

  //get staff list
  getListStaff(params: ParamGetListStaffDTO) {
    this.loading = true
    this.refreshCheckedStatus();
    this.userService.getUser_Json(params).pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          this.lstStaff = res.items;
          this.total = res.totalCount
          this.loading = false
        },
        error: (err) => {
          this.lstStaff = [];
          this.loading = false
        }
      });
  }

  onSubmit(): void {
    localStorage.setItem("admin-new", JSON.stringify(this.listOfdata))
    this.modal.destroy(this.setOfCheckedId);
  }
}
