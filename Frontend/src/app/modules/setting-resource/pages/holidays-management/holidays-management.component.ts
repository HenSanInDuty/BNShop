import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { HolidayDtoPagedResultDto } from '@commom/hrm/models';
import { HolidayService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';
import { ModalAddEditHolidaysComponent } from '../../components/modal-add-edit-holidays/modal-add-edit-holidays.component';
import { ModalDeleteAllComponent } from '../../components/modal-delete-all/modal-delete-all.component';
import { ParamGetHolidayDTO } from '../../models/time-attendace.dto';


@Component({
  selector: 'hrm-holidays-management',
  templateUrl: './holidays-management.component.html',
  styleUrls: ['./holidays-management.component.scss'],
  host: {class: 'h-full w-full flex'},
  providers: [
    TDSDestroyService
  ]

})
export class HolidaysManagementComponent implements OnInit {

  loading = false
  listOfData:   Array<string> = [];
  setOfCheckedId = new Set<TDSSafeAny>();
  listOfCurrentPageData:  Array<ParamGetHolidayDTO> = [];
  pageIndex = 1;
  pageSize = 20;
  skipCount = 0
  params: ParamGetHolidayDTO = {
    SkipCount: 0,
    MaxResultCount: 10,
    SearchText: '',
    Sorting: '',
  }

  indeterminate = false
  checked = false
  public lstHolidays:HolidayDtoPagedResultDto = {
    items: [],
    totalCount: 0
  }
  constructor(
    private holidayService: HolidayService,
    private modalService: TDSModalService,
    private destroy$: TDSDestroyService,
    private viewContainerRef: ViewContainerRef,
    private message: TDSMessageService
  ) { }

  ngOnInit(): void {
  }

  
}
