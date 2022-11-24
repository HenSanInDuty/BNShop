import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MemberDto, ResourceTicketDtoPagedResultDto, ResourceTypeDto, UserResourceTicketDto, UserResourceTicketDtoPagedResultDto } from '@commom/hrm/models';
import { ResourceTicketService, ResourceTypeService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageModule, TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperArray, TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalDeleteResourceSticketComponent } from '../../components/modal-delete-resource-sticket/modal-delete-resource-sticket.component';
import { ModalRefundResourceSticketComponent } from '../../components/modal-refund-resource-sticket/modal-refund-resource-sticket.component';
import { PersonalResourceTicketDTO } from '../../models/PersonalResourceTicketDTO';
import { TDSBarChartComponent, TDSChartOptions, TDSPieChartComponent } from 'tds-report';
import { ModalShowInviteeComponent } from '../../components/modal-show-invitee/modal-show-invitee.component';
import { DatePipe } from '@angular/common';
import { ScheduleDetailsComponent } from '../../components/rent-schedule/schedule-details/schedule-details.component';

@Component({
  selector: 'hrm-personal-rent',
  templateUrl: './personal-rent.component.html',
  styleUrls: ['./personal-rent.component.scss'],
  host: { class: 'flex w-full h-full' },
  providers: [
    TDSDestroyService
  ]
})

export class PersonalRentComponent implements OnInit {
  // Biến cho biết status tab nào đang được chọn
  valueTab = 0;
  // Biến cho biết status của ticket
  selected = 0;
  //Nếu không có giá trị trả về hiện template empty
  isShow = false;
  // spin status
  loading = false;
  // Khai báo chart
  barCharOptions: TDSSafeAny;
  chartOptions = TDSChartOptions();
  // Biến nhận danh sách ticket từ api
  lstResourceTicket: UserResourceTicketDto[] = []
  // Biến lấy ngày hôm qua
  date = [new Date(), this.getPreviousDay(new Date())];
  // Danh sách trạng thái của ticket
  selectedStatusTab = 0;
  // lấy resourceType
  resourceTypes: ResourceTypeDto[] = [];
  // Danh sách status của resource ticket
  listStatus = [
    { id: 0, name: "Tất cả trạng thái", value: null },
    { id: 1, name: "Sắp diễn ra", value: 0 },
    { id: 2, name: "Đang diễn ra", value: 1 },
    { id: 3, name: "Đã kết thúc", value: 2 },
    { id: 4, name: "Đã hủy", value: 3 },
  ]
  // Danh sách trạng thái của tab
  lstStatus: Array<TDSSafeAny> = [
    {
      name: 'Vé của tôi',
      value: 0,
    },
    {
      name: "Được mời",
      value: 1,
    },
  ]
  // Tham số của ticket
  params: PersonalResourceTicketDTO = {
    from: this.datePipe.transform(new Date(), 'M/dd/yyyy')!,
    to: this.datePipe.transform(this.getPreviousDay(new Date()), 'M/dd/yyyy, 23:59:59')!,
    maxResultCount: 10,
    skipCount: 0,
    ticketStatus: 0,
  }

  constructor(
    private resourceTicketService: ResourceTicketService,
    private resourceTypeService: ResourceTypeService,
    private destroy$: TDSDestroyService,
    private message: TDSMessageService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.getListPersonalRent(this.params)
  }

  // Hàm lấy thời gian 1 tuần tiếp theo
  getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() + 6);
    return previous;
  }

  // Hàm thay đổi trạng thái hiển thị ticket
  onChangeStatusTicket(data: TDSSafeAny) {
    this.params.ticketStatus = data
    if (this.valueTab == 0) {
      this.getListPersonalRent(this.params)
    }
    else {
      this.getListUserParticipant(this.params)
    }
  }

  // Xóa ticket
  onDelete(data: TDSSafeAny): void {
    let modalDelete = this.modalService.create({
      content: ModalDeleteResourceSticketComponent,
      size: "md",
      viewContainerRef: this.viewContainerRef,
      footer: null,
      componentParams: {
        id: data.id,
      },
    })
    modalDelete.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res)) {
            this.getListPersonalRent(this.params)
          }
        },
        error: (err) => {
        }
      }
    )
  }

  // Hiển thị danh sách người tham gia
  showInvitee(data: TDSSafeAny): void {
    let modalDelete = this.modalService.create({
      title: "Danh sách thành viên",
      content: ModalShowInviteeComponent,
      size: "lg",
      viewContainerRef: this.viewContainerRef,
      footer: null,
      componentParams: {
        members: data.members
      },
    })
    modalDelete.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res)) {
            this.getListPersonalRent(this.params)
          }
        },
        error: (err) => {
        }
      }
    )
  }

  getAllResourceType() {
    this.resourceTypeService.getResourceType_Json()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            this.resourceTypes = res;
          },
          error: (err) => {
            this.resourceTypes = [];
          }
        }
      )
  }

  // modal chỉnh sửa resource ticket
  showModalSchuduleDetails(data: TDSSafeAny): void {
    this.loading = true;
    if (this.resourceTypes.length > 0) {
      const modal = this.modalService.create({
        title: 'Chi tiết lịch họp',
        content: ScheduleDetailsComponent,
        size: "xl",
        componentParams: {
          id: data.id,
          resourceTypes: this.resourceTypes,
          resourceTypeId: data.resourceTypeId,
        }
      })
      modal.afterClose.subscribe(
        {
          next: (res) => {
            if (TDSHelperObject.hasValue(res)) {
              if (this.valueTab == 0) {
                this.getListPersonalRent(this.params)
                this.loading = false;
              }
              else {
                this.getListUserParticipant(this.params);
                this.loading = false;
              }
            }
            else {
              this.loading = false;
            }
          },
          error: (err) => {
            this.loading = false;
          }
        }
      )
    } else {
      this.resourceTypeService.getResourceType_Json()
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          {
            next: (res) => {
              this.resourceTypes = res;
              this.showModalSchuduleDetails(data)
            },
            error: (err) => {
              this.showModalSchuduleDetails(data)
              this.resourceTypes = [];
            }
          }
        )
    }
  }
  // Hàm thay đổi trạng thái tham gia
  onParticipan(data: TDSSafeAny): void {
    let modalDelete = this.modalService.create({
      content: ModalRefundResourceSticketComponent,
      size: "md",
      viewContainerRef: this.viewContainerRef,
      footer: null,
      componentParams: {
        id: data.id
      },
    })
    modalDelete.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res)) {
            if (this.valueTab == 0) {
              this.getListPersonalRent(this.params)
            }
            else {
              this.getListUserParticipant(this.params)
            }
          }
        },
        error: (err) => {
        }
      }
    )
  }

  // Hàm chọn thời gian
  onChangeDateTime(result: Date): void {
    //Nhận res sau khi changeTime
    let time: TDSSafeAny = result;
    //Gán giá trị vào params gửi lên api
    this.params.from = this.datePipe.transform(time[0], 'M/dd/yyyy')!;
    // Lấy giá trị datetime đến chính xác giờ
    this.params.to = this.datePipe.transform(time[1], 'M/dd/yyyy, 23:59:59')!;
    // Chuyển tab thì chạy 1 trong 2 hàm
    if (this.valueTab == 0) {
      this.getListPersonalRent(this.params)
    }
    else {
      this.getListUserParticipant(this.params)
    }
  }

  //Hàm thay đổi status của tab
  onSelectStatus(value: TDSSafeAny) {
    this.valueTab = value;
    // Chuyển tab thì chạy 1 trong 2 hàm
    if (value == 0) {
      this.getListPersonalRent(this.params);
    }
    else {
      this.getListUserParticipant(this.params);
    }
  }

  // Hàm lấy danh sách Ticket cá nhân
  getListPersonalRent(params: PersonalResourceTicketDTO) {
    this.loading = true;
    this.resourceTicketService.getResourceTicketGetByUser_Json(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          //Kiểm tra res trả về có hay không
          if (TDSHelperArray.hasListValue(res.items)) {
            this.lstResourceTicket = res.items!;
            this.loading = false;
            this.isShow = false;
          }
          else {
            this.lstResourceTicket = [];
            this.loading = false;
            this.isShow = true;
          }
        },
        error: (err) => {
          this.message.error(err.error.message)
          this.loading = false;
        },
      })
  }

  //Hàm lấy danh sách ticket được mời tham gia
  getListUserParticipant(params: PersonalResourceTicketDTO) {
    this.loading = true;
    this.resourceTicketService.getResourceTicketGetForUserParticipant_Json(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (TDSHelperArray.hasListValue(res.items)) {
            this.lstResourceTicket = res.items!
            this.loading = false;
            this.isShow = false;
          }
          else {
            this.lstResourceTicket = []
            this.isShow = true;
            this.loading = false;
          }
        },
        error: (err) => {
          this.message.error(err.error.message)
          this.loading = false;
        },
      })
  }
}
