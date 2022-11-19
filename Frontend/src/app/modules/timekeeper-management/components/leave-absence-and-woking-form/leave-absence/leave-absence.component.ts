import { Component, OnInit } from '@angular/core';
import { KeepingOtherRequestDto, TeamDto } from '@commom/hrm/models';
import { KeepingOtherService, TeamService } from '@commom/hrm/services';
import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'hrm-leave-absence',
  templateUrl: './leave-absence.component.html',
  styleUrls: ['./leave-absence.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class LeaveAbsenceComponent implements OnInit {

  dataOfTeam: TeamDto[] = [];
  listKeepingOtherRequest: KeepingOtherRequestDto[] = [];
  listOfCurrentPageData: readonly KeepingOtherRequestDto[] = [];
  setOfCheckedId = new Set<string>();
  expandSet = new Set<string>();
  checked = false;
  indeterminate = false;
  loadingPage: boolean = true;
  firstTeam: string = '';
  teams: Array<string> = [];
  pageIndex: number = 1;
  pageSize: number = 10;
  skipCount: number = 0;
  chooseMonth = new Date();
  searchText: string = '';
  total: number = 0;
  role: string = '';

  constructor(
    private teamService: TeamService,
    private keepingOtherService: KeepingOtherService,
    private destroy$: TDSDestroyService,
    private modal: TDSModalService,
    private msg: TDSMessageService,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.data.$userRoleChanging.subscribe(message => {
      this.role = message;
      this.loadData();
    })
  }

  loadData() {
    this.pageIndex = 1;
    this.setOfCheckedId = new Set<string>();
    this.expandSet = new Set<string>();
    if (this.role == 'hr') {
      this.getListRequestOfHr();
    } else {
      this.getAllTeamOfLeader();
      this.getListRequestOfLeader();
    }
  }

  onDeleteSetOfCheck() {
    this.setOfCheckedId = new Set<string>();
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly KeepingOtherRequestDto[]): void {
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

  onExpandChange(departmentId: string, checked: boolean): void {
    if (checked) {
      this.expandSet.add(departmentId);
    } else {
      this.expandSet.delete(departmentId);
    }
  }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  getAllTeamOfLeader() {
    this.teamService.getTeamLeader_Json()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            if (res) {
              this.dataOfTeam = res;
              this.dataOfTeam.find(x => {
                this.firstTeam = x.id!;
                this.teams.push(this.firstTeam);
              })
            }
          },
          error: (error) => {
            this.dataOfTeam = [];
          }
        }
      )
  }

  getListRequestOfLeader() {
    this.loadingPage = true;
    this.keepingOtherService.getKeepingOtherLeaderGetAllRequest_Json(
      {
        SkipCount: this.skipCount,
        MaxResultCount: this.pageSize,
        Year: this.chooseMonth.getFullYear(),
        Month: this.chooseMonth.getMonth() + 1,
        SearchText: this.searchText,
        Teams: this.teams
      }
    )
      .pipe(finalize(() => {
        this.loadingPage = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            this.listKeepingOtherRequest = [...res.items!];
            this.total = res.totalCount!;
          },
          error: (error) => {
            this.listKeepingOtherRequest = [];
            this.total = 0;
          }
        }
      )
  }

  getListRequestOfHr() {
    this.loadingPage = true;
    this.keepingOtherService.getKeepingOtherHrGetAllRequest_Json(
      {
        SkipCount: this.skipCount,
        MaxResultCount: this.pageSize,
        Year: this.chooseMonth.getFullYear(),
        Month: this.chooseMonth.getMonth() + 1,
        SearchText: this.searchText,
      }
    )
      .pipe(finalize(() => {
        this.loadingPage = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            this.listKeepingOtherRequest = [...res.items!];
            this.total = res.totalCount!;
          },
          error: (error) => {
            this.listKeepingOtherRequest = [];
            this.total = 0;
          }
        }
      )
  }

  onQueryParamsChange(event: TDSSafeAny): void {
    this.onDeleteSetOfCheck();
    this.skipCount = (event.pageIndex - 1) * this.pageSize;
    if (this.role == 'hr') {
      this.getListRequestOfHr();
    } else {
      this.getListRequestOfLeader();
    }
  }

  onChangeMonth(event: TDSSafeAny) {
    this.pageIndex = 1;
    if (this.chooseMonth == null) {
      this.listKeepingOtherRequest = [];
      this.total = 0;
    } else {
      this.chooseMonth = event;
      if (this.role == 'hr') {
        this.getListRequestOfHr();
      } else {
        this.getListRequestOfLeader();
      }
    }
  }

  onChangeTeam(value: TDSSafeAny) {
    this.firstTeam = value;
    this.getListRequestOfLeader();
  }

  search(event: TDSSafeAny): void {
    if (this.role == 'leader') {
      this.searchText = event.value;
      this.getListRequestOfLeader();
    } else {
      this.searchText = event.value;
      this.getListRequestOfHr();
    }
  }

  resetPage(e: TDSSafeAny) {
    this.pageIndex = 1;
    if (this.role == 'leader') {
      this.getListRequestOfLeader();
    } else {
      this.getListRequestOfHr();
    }
  }

  confirmForm(data: KeepingOtherRequestDto): void {
    this.modal.info({
      title: 'Xác nhận duyệt đơn xác nhận công',
      content: `Bạn có chắc chắn xác nhận công cho <span class="font-semibold">${data.user?.fullName}</span> không ?`,
      onOk: () => {
        if (this.role == 'leader') {
          this.keepingOtherService.postKeepingOtherRequestLeaderApprove({ body: JSON.stringify(data.id!) })
            .pipe(takeUntil(this.destroy$))
            .subscribe(
              {
                next: (res) => {
                  this.msg.success('Xác nhận duyệt đơn thành công !');
                  this.getListRequestOfLeader();
                },
                error: (error) => {
                  this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
                }
              }
            )
        } else {
          this.keepingOtherService.postKeepingOtherRequestHrApprove({ body: JSON.stringify(data.id!) })
            .pipe(takeUntil(this.destroy$))
            .subscribe(
              {
                next: (res) => {
                  this.msg.success('Xác nhận duyệt đơn thành công !');
                  this.getListRequestOfHr();
                },
                error: (error) => {
                  this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
                }
              }
            )
        }
      },
      onCancel: () => { },
      okText: "Xác nhận",
      cancelText: "Đóng"
    });
  }

  declineForm(data: KeepingOtherRequestDto): void {
    this.modal.error({
      title: 'Từ chối duyệt đơn xác nhận công',
      content: `Bạn có chắc chắn từ chối xác nhận công cho <span class="font-semibold">${data.user?.fullName}</span> không ?`,
      onOk: () => {
        if (this.role == 'leader') {
          this.keepingOtherService.postKeepingOtherRequestLeaderReject({ body: JSON.stringify(data.id!) })
            .pipe(takeUntil(this.destroy$))
            .subscribe(
              {
                next: (res) => {
                  this.msg.success('Đơn xác nhận công đã được từ chối!');
                  this.getListRequestOfLeader();
                },
                error: (error) => {
                  this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
                }
              }
            )
        } else {
          this.keepingOtherService.postKeepingOtherRequestHrReject({ body: JSON.stringify(data.id!) })
            .pipe(takeUntil(this.destroy$))
            .subscribe(
              {
                next: (res) => {
                  this.msg.success('Đơn xác nhận công đã được từ chối!');
                  this.getListRequestOfHr();
                },
                error: (error) => {
                  this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
                }
              }
            )
        }
      },
      onCancel: () => { },
      okText: "Xác nhận",
      cancelText: "Đóng"
    });
  }

  // xác nhận nhiều đơn
  confirmMultipleForm(): void {
    let listRequestId = [...this.setOfCheckedId];
    let keepingAction = 0;
    this.modal.info({
      title: 'Xác nhận duyệt đơn xác nhận công',
      content: `Bạn có chắc chắn xác nhận công cho tất cả nhân viên này không ?`,
      onOk: () => {
        if (this.role == 'leader') {
          this.keepingOtherService.postKeepingOtherLeaderApproveRejectRequestMany({ body: { listRequestId, keepingAction } })
            .pipe(takeUntil(this.destroy$))
            .subscribe(
              {
                next: (res) => {
                  this.msg.success('Xác nhận duyệt đơn thành công !');
                  this.getListRequestOfLeader();
                  this.onDeleteSetOfCheck();
                },
                error: (error) => {
                  this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
                }
              }
            )
        } else {
          this.keepingOtherService.postKeepingOtherHrApproveRejectRequestMany({ body: { listRequestId, keepingAction } })
            .pipe(takeUntil(this.destroy$))
            .subscribe(
              {
                next: (res) => {
                  this.msg.success('Xác nhận duyệt đơn thành công !');
                  this.getListRequestOfHr();
                  this.onDeleteSetOfCheck();
                },
                error: (error) => {
                  this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
                }
              }
            )
        }
      },
      onCancel: () => { },
      okText: "Xác nhận",
      cancelText: "Đóng"
    });
  }

  // từ chối nhiều đơn
  declineMultipleForm(): void {
    let listRequestId = [...this.setOfCheckedId];
    let keepingAction = 1;
    this.modal.error({
      title: 'Từ chối duyệt đơn xác nhận công',
      content: `Bạn có chắc chắn từ chối xác nhận công cho tất cả nhân viên này không ?`,
      onOk: () => {
        if (this.role == 'leader') {
          this.keepingOtherService.postKeepingOtherLeaderApproveRejectRequestMany({ body: { listRequestId, keepingAction } })
            .pipe(takeUntil(this.destroy$))
            .subscribe(
              {
                next: (res) => {
                  this.msg.success('Đơn xác nhận công đã được từ chối!');
                  this.getListRequestOfLeader();
                  this.onDeleteSetOfCheck();
                },
                error: (error) => {
                  this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
                }
              }
            )
        } else {
          this.keepingOtherService.postKeepingOtherHrApproveRejectRequestMany({ body: { listRequestId, keepingAction } })
            .pipe(takeUntil(this.destroy$))
            .subscribe(
              {
                next: (res) => {
                  this.msg.success('Đơn xác nhận công đã được từ chối!');
                  this.getListRequestOfHr();
                  this.onDeleteSetOfCheck();
                },
                error: (error) => {
                  this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
                }
              }
            )
        }
      },
      onCancel: () => { },
      okText: "Xác nhận",
      cancelText: "Đóng"
    });
  }

  undoRequest(data: KeepingOtherRequestDto) {
    this.loadingPage = true;
    if (data.undoValidLogId != null) {
      this.keepingOtherService.postKeepingOtherRequestUndo({ id: data.undoValidLogId! })
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          {
            next: (res) => {
              if (this.role == 'leader') {
                this.getListRequestOfLeader();
              } else {
                this.getListRequestOfHr();
              }
              this.msg.success('Hoàn tác thành công !');
              this.loadingPage = false;
            },
            error: (error) => {
              this.msg.success(error);
              this.loadingPage = false;
            }
          }
        )
    }
  }

}
