import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MemberDto, ResourceOverviewScheduleDto, ResourceTicketDto, ResourceTypeDto } from '@commom/hrm/models';
import { ResourceTicketService } from '@commom/hrm/services';
import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef, TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalAddEventComponent } from '../modal-add-event/modal-add-event.component';

@Component({
  selector: 'hrm-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ScheduleDetailsComponent implements OnInit {
  result: TDSSafeAny
  @Input() resourceOverviewSchedules: ResourceOverviewScheduleDto[] = [];
  @Input() resourceTypes: ResourceTypeDto[] = [];
  @Input() resourceTypeId: string = '';
  @Input() id: string = '';
  @Input() branchId: string = '';
  isLoadingData: boolean = true;
  checkDeleteTicket: boolean = false;
  scheduleDetails!: ResourceTicketDto | null;
  frameTime: string = '';
  members: MemberDto[] = [];
  titleName: string = '';
  amountMember: number = 0;
  constructor(
    private modalService: TDSModalService,
    private modal: TDSModalRef,
    private resourceTicketService: ResourceTicketService,
    private destroy$: TDSDestroyService,
    private msg: TDSMessageService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.loadDataDetails();
  }

  loadDataDetails() {
    this.isLoadingData = true;
    this.resourceTicketService.getResourceTicketId_Json({ id: this.id })
    .pipe(finalize(() => {
      this.isLoadingData = false;
    }), takeUntil(this.destroy$))
    .subscribe(
      {
        next: (res) => {
          this.scheduleDetails = res!;
          this.members = res.members!;
          this.frameTime = `${this.datePipe.transform(res.startTime, 'HH:mm')} - ${this.datePipe.transform(res.endTime, 'HH:mm')}`;
          this.amountMember = this.members?.length;
        },
        error: (err) => {
          this.scheduleDetails = {};
        }
      }
    )
  }

  showModalCopyEvent(idOfCopy: string): void {
    const modal = this.modalService.create({
      title: 'Thêm sự kiện mới',
      content: ModalAddEventComponent,
      size: "xl",
      componentParams: {
        resourceTypes: this.resourceTypes,
        resourceTypeId: this.resourceTypeId,
        idOfCopy: idOfCopy,
        branchId: this.branchId
      },
    });
    modal.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res)){
            this.modal.destroy(res);
          }
        }
      }
    )
  }

  showModalEditSchedule(): void {
    const modal = this.modalService.create({
      title: 'Chỉnh sửa thông tin lịch họp',
      content: ModalAddEventComponent,
      size: "xl",
      componentParams: {
        idOfEdit: this.id,
        resourceTypes: this.resourceTypes,
        resourceTypeId: this.resourceTypeId,
        branchId: this.branchId
      },
      centered: true
    });
    modal.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res)) {
            this.modal.destroy(res);
          }
        }
      }
    )
  }

  deleteTicket(): void {
    this.checkDeleteTicket = true;
    this.titleName = this.scheduleDetails?.title!;
    this.modalService.error({
      title: 'Hủy lịch đặt',
      content: `Bạn có chắc chắn xóa lịch đặt <span class="font-semibold">${this.titleName}</span> này?<br><span class="text-error-500">lưu ý: Khi đã xóa sẽ không thể khôi phục dữ liệu</span>`,
      onOk: () => {
        this.isLoadingData = true;
        this.resourceTicketService.putResourceTicketCancelTicket({ id: this.id })
          .pipe(finalize(() => {
            this.isLoadingData = false;
          }), takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.msg.success('Xóa lịch đặt sự kiện thành công');
                this.modal.destroy(this.checkDeleteTicket);
              },
              error: (err) => {
                if (err) {
                  if(err || err.code) {
                    this.msg.error(err.code);
                  } else {
                    this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
                  }
                }
              }
            }
          )
      },
      confirmIcon: 'tdsi-trash-fill',
      okText: "Xác nhận",
      cancelText: "Đóng"
    });
  }

  close() {
    this.modal.destroy(this.result);
  }
}
