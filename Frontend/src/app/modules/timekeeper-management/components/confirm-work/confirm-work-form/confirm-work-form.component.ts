import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { Component, OnInit } from '@angular/core';
import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { DataService } from '../../../services/data.service';
import { TeamService, TimeKeepingService } from '@commom/hrm/services';
import { TeamDto, TimeKeepingRequestDto } from '@commom/hrm/models';

@Component({
  selector: 'hrm-confirm-work-form',
  templateUrl: './confirm-work-form.component.html',
  styleUrls: ['./confirm-work-form.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ConfirmWorkFormComponent implements OnInit {

  dataOfTeam: TeamDto[] = [];
  listOfCurrentPageData: readonly TimeKeepingRequestDto[] = [];
  listTimeKeepingRequest: TimeKeepingRequestDto[] = [];
  setOfCheckedId = new Set<string>();
  pageIndex: number = 1;
  checked = false;
  indeterminate = false;
  pageSize: number = 10;
  skipCount: number = 0;
  total: number = 0;
  searchText: string = '';
  chooseMonth = new Date();
  loadingPage: boolean = true;
  expandSet = new Set<string>();
  firstTeam: string = '';
  teams: Array<string> = [];
  message!: string;
  role: string = '';

  constructor(
    private teamService: TeamService,
    private timeKeepingService: TimeKeepingService,
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

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(
      item => this.updateCheckedSet(item.id!, value)
    );
    this.refreshCheckedStatus();
  }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onDeleteSetOfCheck() {
    this.setOfCheckedId = new Set<string>();
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly TimeKeepingRequestDto[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id!));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id!)) && !this.checked;
  }

  onExpandChange(departmentId: string, checked: boolean): void {
    if (checked) {
      this.expandSet.add(departmentId);
    } else {
      this.expandSet.delete(departmentId);
    }
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
    this.timeKeepingService.getTimeKeepingLeaderGetAllRequest_Json(
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
            this.listTimeKeepingRequest = [...res.items!];
            this.total = res.totalCount!;
          },
          error: (error) => {
            this.listTimeKeepingRequest = [];
            this.total = 0;
          }
        }
      )
  }

  getListRequestOfHr() {
    this.loadingPage = true;
    this.timeKeepingService.getTimeKeepingHrGetAllRequest_Json(
      {
        SkipCount: this.skipCount,
        MaxResultCount: this.pageSize,
        Year: this.chooseMonth.getFullYear(),
        Month: this.chooseMonth.getMonth() + 1,
        SearchText: this.searchText
      }
    )
      .pipe(finalize(() => {
        this.loadingPage = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            this.listTimeKeepingRequest = [...res.items!];
            this.total = res.totalCount!;
          },
          error: (error) => {
            this.listTimeKeepingRequest = [];
            this.total = 0;
          }
        }
      )
  }

  onChangeMonth(event: TDSSafeAny) {
    this.pageIndex = 1;
    if (this.chooseMonth == null) {
      this.listTimeKeepingRequest = [];
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

  search(event: TDSSafeAny): void {
    if (this.role == 'leader') {
      this.searchText = event.value;
      this.getListRequestOfLeader();
    } else {
      this.searchText = event.value;
      this.getListRequestOfHr();
    }
  }

  onChangeTeam(value: TDSSafeAny) {
    this.firstTeam = value;
    this.getListRequestOfLeader();
  }

  onQueryParamsChange(event: TDSSafeAny): void {
    this.onDeleteSetOfCheck();
    this.expandSet = new Set<string>();
    this.skipCount = (event.pageIndex - 1) * this.pageSize;
    if (this.role == 'hr') {
      this.getListRequestOfHr();
    } else {
      this.getListRequestOfLeader();
    }
  }

  confirmForm(data: TimeKeepingRequestDto): void {
    this.modal.info({
      title: 'Xác nhận duyệt đơn xác nhận công',
      content: `Bạn có chắc chắn xác nhận công cho <span class="font-semibold">${data.user?.fullName}</span> không ?`,
      onOk: () => {
        if (this.role == 'leader') {
          this.timeKeepingService.postTimeKeepingRequestLeaderApprove({ body: JSON.stringify(data.id!) })
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
          this.timeKeepingService.postTimeKeepingRequestHrApprove({ body: JSON.stringify(data.id!) })
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

  declineForm(data: TimeKeepingRequestDto): void {
    this.modal.error({
      title: 'Từ chối duyệt đơn xác nhận công',
      content: `Bạn có chắc chắn từ chối xác nhận công cho <span class="font-semibold">${data.user?.fullName}</span> không ?`,
      onOk: () => {
        if (this.role == 'leader') {
          this.timeKeepingService.postTimeKeepingRequestLeaderReject({ body: JSON.stringify(data.id!) })
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
          this.timeKeepingService.postTimeKeepingRequestHrReject({ body: JSON.stringify(data.id!) })
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
          this.timeKeepingService.postTimeKeepingLeaderApproveRejectRequestMany({ body: { listRequestId, keepingAction } })
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
          this.timeKeepingService.postTimeKeepingHrApproveRejectRequestMany({ body: { listRequestId, keepingAction } })
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
          this.timeKeepingService.postTimeKeepingLeaderApproveRejectRequestMany({ body: { listRequestId, keepingAction } })
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
          this.timeKeepingService.postTimeKeepingLeaderApproveRejectRequestMany({ body: { listRequestId, keepingAction } })
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

  undoRequest(data: TimeKeepingRequestDto) {
    this.loadingPage = true;
    if (data.undoValidLogId != null) {
      this.timeKeepingService.postTimeKeepingRequestUndo({ id: data.undoValidLogId })
        .pipe(finalize(() => {
          this.loadingPage = false;
        }), takeUntil(this.destroy$))
        .subscribe(
          {
            next: (res) => {
              if (this.role == 'leader') {
                this.getListRequestOfLeader();
              } else {
                this.getListRequestOfHr();
              }
              this.msg.success('Hoàn tác thành công !');
            },
            error: (error) => {
              this.msg.error(error);
            }
          }
        )
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

}
