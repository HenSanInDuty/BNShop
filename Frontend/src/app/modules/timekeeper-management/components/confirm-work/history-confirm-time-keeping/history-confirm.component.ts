import { Component, Input, OnInit } from '@angular/core';
import { TimeKeepingRequestDto, TimeKeepingRequestLogDto } from '@commom/hrm/models';
import { TimeKeepingService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';

@Component({
  selector: 'hrm-history-confirm-time-keeping',
  templateUrl: './history-confirm.component.html',
  styleUrls: ['./history-confirm.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class HistoryConfirmComponent implements OnInit {

  @Input() requestHistoryOfTimeKeeping!: TimeKeepingRequestDto;
  listDataOfRequestHistory: TimeKeepingRequestLogDto[] = [];
  isLoadingTable: boolean = false;

  constructor(
    private timeKeepingService: TimeKeepingService,
    private destroy$: TDSDestroyService,
  ) { }

  ngOnInit(): void {
    this.getListHistoryOfRequest();
  }

  getListHistoryOfRequest() {
    this.isLoadingTable = true;
    this.timeKeepingService.getTimeKeepingRequestHistory_Json({requestId: this.requestHistoryOfTimeKeeping.id!})
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
