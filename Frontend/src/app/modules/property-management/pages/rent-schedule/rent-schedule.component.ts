import { Component, OnInit } from '@angular/core';
import { ResourceOverviewScheduleDto, ResourceTicketFilterStatusOverView, ResourceTypeDto } from '@commom/hrm/models';
import { ResourceService, ResourceTypeService } from '@commom/hrm/services';
import { CoreAuthService } from '@core/authentication';
import { eachDayOfInterval, endOfWeek, isSameDay, startOfWeek } from 'date-fns';
import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { WeekDayIndex } from 'tds-ui/core/time';
import { DateHelperService } from 'tds-ui/i18n';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalAddEventComponent } from '../../components/rent-schedule/modal-add-event/modal-add-event.component';
import { ScheduleDetailsComponent } from '../../components/rent-schedule/schedule-details/schedule-details.component';

@Component({
  selector: 'hrm-rent-schedule',
  templateUrl: './rent-schedule.component.html',
  styleUrls: ['./rent-schedule.component.scss'],
  host: {
    class: "flex w-full"
  },
  providers: [
    TDSDestroyService
  ]
})
export class RentScheduleComponent implements OnInit {
  currentUserId: string = '';
  viewDate: Date = new Date();
  branchId: string = '';
  isLoadingData: boolean = false;
  isLoadingResource: boolean = false;
  resourceTypeId: string = '';
  searchText: string = '';
  weekStartsOn: WeekDayIndex | undefined = 1;
  resourceTypes: ResourceTypeDto[] = [];
  resourceOverviewSchedules: ResourceOverviewScheduleDto[] = [];
  filterStatus: ResourceTicketFilterStatusOverView = ResourceTicketFilterStatusOverView.$0;
  dayOfWeek: Array<Date> = [];
  isResourceId!: string;
  idxclick = -1;
  filterStatusOptions: Array<any> = [
    {
      name: 'Liên quan đến tôi',
      id: ResourceTicketFilterStatusOverView.$1
    },
    {
      name: 'Tất cả sự kiện',
      id: ResourceTicketFilterStatusOverView.$0
    },
    {
      name: 'Sự kiện tôi thêm',
      id: ResourceTicketFilterStatusOverView.$2
    },
  ]
  constructor(
    private resourceTypeService: ResourceTypeService,
    private resourceService: ResourceService,
    private destroy$: TDSDestroyService,
    private modalService: TDSModalService,
    private dateHelper: DateHelperService,
    public authService: CoreAuthService,
    private msg: TDSMessageService,
  ) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.isLoadingData = true;
    this.authService.getObsUserProfile()
      .pipe(finalize(() => {
        this.isLoadingData = false
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            if (TDSHelperObject.hasValue(res)) {
              this.currentUserId = res?.id;
              // this.branchId = res?.branchId;
              this.getAllResourceType();
            }
          },
          error: (err) => {
            if (TDSHelperObject.hasValue(err)) {
              this.msg.error('Có lỗi xảy ra sau khi đăng nhập xin vui lòng thử lại !');
            }
          }
        }
      )
  }

  checkNowDate() {
    let nowDate = new Date();
    this.dayOfWeek.find(x => {
      if (x.getDate() == nowDate.getDate() && x.getMonth() == nowDate.getMonth() && x.getFullYear() == nowDate.getFullYear()) {
        this.viewDate = x;
      }
    })
  }

  getDayOfWeek(viewDate: Date) {
    let startWeek = startOfWeek(viewDate, { weekStartsOn: this.weekStartsOn });
    let endWeek = endOfWeek(viewDate, { weekStartsOn: this.weekStartsOn });
    return eachDayOfInterval({
      start: startWeek,
      end: endWeek,
    });
  }

  getAllResourceType() {
    this.isLoadingResource = true;
    this.resourceTypeService.getResourceType_Json()
      .pipe(finalize(() => {
        this.isLoadingResource = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            if (TDSHelperObject.hasValue(res)) {
              this.resourceTypes = res;
              this.resourceTypeId = res[0]?.id!;
              this.getResourceOverviewSchedule();
            }
          },
          error: (err) => {
            if (TDSHelperObject.hasValue(err)) {
              this.resourceTypes = [];
            }
          }
        }
      )
  }

  getResourceOverviewSchedule() {
    this.isLoadingData = true;
    this.dayOfWeek = this.getDayOfWeek(this.viewDate);
    this.checkNowDate();
    let formTime = this.dayOfWeek[0];
    let ToTime = this.dayOfWeek[this.dayOfWeek.length - 1];
    this.resourceService.getResourceOverviewSchedule_Json(
      {
        FromTime: this.dateHelper.format(formTime, 'yyyy-MM-dd'),
        ToTime: this.dateHelper.format(ToTime, 'yyyy-MM-dd'),
        BranchId: this.branchId,
        ResourceTypeId: this.resourceTypeId,
        SearchText: this.searchText,
        SkipCount: 0,
        MaxResultCount: 1000,
        FilterStatus: this.filterStatus
      }
    )
      .pipe(finalize(() => {
        this.isLoadingData = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            this.resourceOverviewSchedules = res.items!;
          },
          error: (err) => {
            this.resourceOverviewSchedules = [];
            this.msg.error(err.error.code);
          }
        }
      )
  }

  searchResource(e: TDSSafeAny) {
    if (e) {
      this.searchText = e.value;
      this.getResourceOverviewSchedule();
    }
  }

  changeResourceType(event: TDSSafeAny) {
    if (event) {
      this.resourceTypeId = event;
      this.getResourceOverviewSchedule();
    }
  }

  changeFilterStatus(e: number) {
    if (e || e == 0) {
      this.getResourceOverviewSchedule();
    }
  }

  onchange(date: Date) {
    this.viewDate = date;
    this.dayOfWeek = this.getDayOfWeek(this.viewDate);
    this.checkNowDate();
    this.getResourceOverviewSchedule();
  }

  showModalAddEvent(): void {
    const modal = this.modalService.create({
      title: 'Thêm sự kiện mới',
      content: ModalAddEventComponent,
      size: "xl",
      componentParams: {
        resourceTypes: this.resourceTypes,
        resourceTypeId: this.resourceTypeId,
        currentUser: this.currentUserId,
        branchId: this.branchId
      },
      centered: true
    });
    modal.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.getResourceOverviewSchedule();
        }
      }
    )
  }

  showModalAddEventOfChoosed(choosedDate?: TDSSafeAny, resourceId?: string): void {
    let today = new Date();
    const date: Date = new Date(choosedDate);
    if (isSameDay(today, date) || today < date) {
      const modal = this.modalService.create({
        title: 'Thêm sự kiện mới',
        content: ModalAddEventComponent,
        size: "xl",
        componentParams: {
          resourceTypes: this.resourceTypes,
          resourceTypeId: this.resourceTypeId,
          choosedDate: date,
          resourceId: resourceId,
          currentUser: this.currentUserId
        },
        centered: true
      });
      modal.afterClose.subscribe(
        {
          next: (res) => {
            if (TDSHelperObject.hasValue(res))
              this.getResourceOverviewSchedule();
          }
        }
      )
    }
  }

  showModalScheduleDetails(id: string): void {
    this.isResourceId = '' as string;
    this.idxclick = -1;
    const modal = this.modalService.create({
      title: 'Chi tiết lịch họp',
      content: ScheduleDetailsComponent,
      size: "xl",
      componentParams: {
        id: id,
        resourceOverviewSchedules: this.resourceOverviewSchedules,
        resourceTypes: this.resourceTypes,
        resourceTypeId: this.resourceTypeId,
        branchId: this.branchId
      }
    });
    modal.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
          this.getResourceOverviewSchedule();
        }
      }
    )
  }

  openPopover(id: any, index: number) {
    if (id)
      this.isResourceId = id as string;
    this.idxclick = index;
  }

  onPopoverVisibleChange(value: boolean) {
    if (!value) {
      this.isResourceId = '' as string;
      this.idxclick = -1;
    }
  }
  onClickToday() {
    this.viewDate = new Date();
    this.getResourceOverviewSchedule();
  }
}
