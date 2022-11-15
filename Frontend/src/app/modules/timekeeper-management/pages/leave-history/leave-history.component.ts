import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSSafeAny, TDSHelperObject } from 'tds-ui/shared/utility';
import { Component, OnInit } from '@angular/core';
import { KeepingOtherService } from '@commom/hrm/services';
import { KeepingOtherDto } from '@commom/hrm/models';

@Component({
  selector: 'hrm-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class LeaveHistoryComponent implements OnInit {

  listDataOfLeaveHistory: KeepingOtherDto[] = [];
  loadingPage: boolean = true;
  pageIndex: number = 1;
  pageSize: number = 10;
  skipCount: number = 0;
  kind: TDSSafeAny = '';
  total: number = 0;
  chooseMonth = new Date();

  constructor(
    private keepingOtherService: KeepingOtherService,
    private destroy$: TDSDestroyService,
  ) { }

  ngOnInit(): void {
  }

  getAllLeaveHistory() {
    this.loadingPage = true;
    if (!this.chooseMonth) {
      this.listDataOfLeaveHistory = [];
      this.loadingPage = false;
    }
    this.keepingOtherService.getKeepingOther_Json(
      {
        SkipCount: this.skipCount,
        MaxResultCount: this.pageSize,
        Kind: 1,
        Year: this.chooseMonth.getFullYear(),
        Month: this.chooseMonth.getMonth() + 1
      }
    )
      .pipe(finalize(() => {
        this.loadingPage = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            if (TDSHelperObject.hasValue(res)) {
              this.listDataOfLeaveHistory = [...res.items!];
              this.total = res.totalCount!;
            } else {
              this.listDataOfLeaveHistory = [];
              this.total = 0;
            }
          },
          error: (error) => {
            this.listDataOfLeaveHistory = [];
            this.total = 0;
          },
        }
      )
  }

  onChangeMonth(event: TDSSafeAny) {
    this.chooseMonth = event;
    this.getAllLeaveHistory();
  }

  onQueryParamsChange(event: TDSSafeAny): void {
    this.skipCount = (event.pageIndex - 1) * this.pageSize;
    this.getAllLeaveHistory();
  }

}
