import { Component, Input, OnInit } from '@angular/core';
import { KeepingOtherRequestDto, KeepingOtherRequestLogDto } from '@commom/hrm/models';
import { KeepingOtherService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';

@Component({
  selector: 'hrm-history-confirm-keeping-other',
  templateUrl: './history-confirm-keeping-other.component.html',
  styleUrls: ['./history-confirm-keeping-other.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class HistoryConfirmKeepingOtherComponent implements OnInit {

  @Input() requestHistoryOfKeepingOther!: KeepingOtherRequestDto;
  listDataOfRequestHistory: KeepingOtherRequestLogDto[] = [];
  isLoadingTable: boolean = false;

  constructor(
    private keepingOtherService: KeepingOtherService,
    private destroy$: TDSDestroyService,

  ) { }

  ngOnInit(): void {
    this.getListHistoryOfRequest();
  }

  getListHistoryOfRequest() {
    this.isLoadingTable = true;
    this.keepingOtherService.getKeepingOtherRequestHistory_Json({requestId: this.requestHistoryOfKeepingOther.id!})
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            this.listDataOfRequestHistory = res;
            this.isLoadingTable = false;
          },
          error: (error) => {
            this.listDataOfRequestHistory = [];
            this.isLoadingTable = false;
          }
        }
      )
  }

}
