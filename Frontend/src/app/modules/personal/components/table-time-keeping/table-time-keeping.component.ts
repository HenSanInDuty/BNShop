import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';

import * as saveAs from 'file-saver';
import { TDSModalService } from 'tds-ui/modal';
import { ModalLeaveApplicationComponent } from '../modal-leave-application/modal-leave-application.component';
import { ModalWorkingDateComponent } from '../modal-working-date/modal-working-date.component';
import { TDSMessageService } from 'tds-ui/message';
import { TDSDestroyService } from 'tds-ui/core/services';
import { UserService } from '@commom/hrm/services';
import { AppUserKeepingDto } from '@commom/hrm/models';
import { ParamUserDTO } from '../../models/user.dto';
import { TimeKeepingPersonalService } from '../../services/time-keeping-personal.service';
import { takeUntil } from 'rxjs';
import { ModalAddImgTimeKeepingComponent } from '../modal-add-img-time-keeping/modal-add-img-time-keeping.component';
import { endOfMonth, format, startOfMonth } from 'date-fns';

@Component({
  selector: 'hrm-table-time-keeping',
  templateUrl: './table-time-keeping.component.html',
  styleUrls: ['./table-time-keeping.component.scss'],
  host: { class: 'bg-white flex flex-col rounded-xl w-full h-full' },
  providers: [
    TDSDestroyService
  ]
})
export class TableTimeKeepingComponent implements OnInit {

  date = new Date();
  fistDateMonth = startOfMonth(new Date())
  lastDateMonth = endOfMonth(new Date())
  selectedStatus = 1;
  loading = false;
  user?: AppUserKeepingDto;
  public lstKeepingTime?: TDSSafeAny = []
  public lstSaveKeepingTime?: TDSSafeAny = []
  lstStatus: Array<TDSSafeAny> = [
    {
      name: 'Vi phạm',
      value: 0,
    },
    {
      name: "Tất cả",
      value: 1,
    },
    {
      name: 'Thứ 7 - CN',
      value: 2,
    },

  ]
  params: ParamUserDTO = {
    year: this.date.getFullYear(),
    month: this.date.getMonth() + 1,
  }
  constructor(
    private userService: UserService,
    private timeKeepingPersonalService: TimeKeepingPersonalService,
    private modalService: TDSModalService,
    private destroy$: TDSDestroyService,
    private viewContainerRef: ViewContainerRef,
    private message: TDSMessageService
  ) {

  }

  ngOnInit(): void {
    this.getTimeKeepingUser(this.params)

  }

  onSelectStatus(value: TDSSafeAny) {
    this.loading = true
    switch (value) {
      case 0: {
        setTimeout(() => this.loading = false, 1000)
        this.lstKeepingTime = this.lstSaveKeepingTime
        this.lstKeepingTime = this.lstKeepingTime.filter(
          (item: TDSSafeAny) => item?.timeKeeping?.timeKeepingProperties.length)
        break;
      }
      case 1: {
        setTimeout(() => this.loading = false, 1000);
        this.lstKeepingTime = this.lstSaveKeepingTime
        break;
      }
      case 2: {
        setTimeout(() => this.loading = false, 1000);
        this.lstKeepingTime = this.lstSaveKeepingTime
        this.lstKeepingTime = this.lstKeepingTime.filter(
          (item: TDSSafeAny) => (new Date(item.date).getDay() == 0 || new Date(item.date).getDay() == 6))
        break;
      }
    }
  }

  onChangeDateTime(result: Date): void {
    this.params.month = result.getMonth() + 1;
    this.params.year = result.getFullYear();
    this.fistDateMonth = startOfMonth(result);
    this.lastDateMonth = endOfMonth(result);
    this.getTimeKeepingUser(this.params);
    this.selectedStatus = 1;
  }

  getTimeKeepingUser(params: ParamUserDTO) {
    this.loading = true
    this.userService.getUserKeepingByUser_Json({ year: params.year, month: params.month })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.user = res
            this.lstKeepingTime = res.keepingDtos
            this.lstSaveKeepingTime = res.keepingDtos
            this.loading = false
          }
        },
        error: (err) => {
          if (!err || !err.error) {
            this.message.error('Lỗi tải dữ liệu');
          } else {
            if (!err.error.validationErrors) {
              this.message.error(err?.error?.message);
              this.loading = false
            }
            else {
              for (let i = 0; i < err.error?.validationErrors.length; i++) {
                this.message.error(err.error?.validationErrors[i]?.message);
              }
            }
          }
          this.loading = false
        }
      })
  }

  getTimeKeepingUserExport() {
    this.loading = true
    this.timeKeepingPersonalService.getKeepingByUserExport({ year: this.params.year, month: this.params.month })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (blob: TDSSafeAny) => {
          saveAs(blob, 'Bảng chấm công cá nhân tháng' + ' ' + (this.params.month) + '-' + this.params.year);
          this.loading = false
        },
        error: (err) => {
            if (!err || !err.error) {
              this.message.error('Lỗi dữ liệu');
            } else {
              if (!err.error.validationErrors) {
                this.message.error(err?.error?.message);
                this.loading = false
              }
              else {
                for (let i = 0; i < err.error?.validationErrors.length; i++) {
                  this.message.error(err.error?.validationErrors[i]?.message);
                }
              }
            }
          this.loading = false
        }
      })
  }

  showModaChangeWorkingKind(index: number): void {
    const modalWorkingKind = this.modalService.create({
      title: 'Đơn xin thay đổi hình thức làm việc',
      content: ModalLeaveApplicationComponent,
      size: "md",
      footer: null,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        year: this.params.year,
        index: index
      },
    });
    modalWorkingKind.afterClose.subscribe({
      next: (res) => {
      },
      error: (err) => {
      }
    }
    )
  }

  showModaLeaveApplication(): void {
    const modalLeaveApplication = this.modalService.create({
      title: 'Đơn xin nghỉ phép',
      content: ModalLeaveApplicationComponent,
      size: "md",
      footer: null,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        year: this.params.year
      },
    });
    modalLeaveApplication.afterClose.subscribe({
      next: (res) => {
      },
      error: (err) => {
      }
    }
    )
  }

  showModalWorkingdate(index: number): void {
    const modalWorkingDate = this.modalService.create({
      title: 'Trạng thái khiếu nại công',
      content: ModalWorkingDateComponent,
      size: "lg",
      footer: null,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        workingDate: this.lstKeepingTime[index].date,
        userId: this.user?.id
      },
    });
    modalWorkingDate.afterClose.subscribe({
      next: (res) => {
      },
      error: (err) => {
      }
    }
    )
  }
}
