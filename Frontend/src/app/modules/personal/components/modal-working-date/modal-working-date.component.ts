import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { TimeKeepingService } from '@commom/hrm/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef, TDSModalService } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { ParamRequestWorkingDateUser } from '../../models/time-keeping.dto';
import { ModalCreateRequestTimeKeepingComponent } from '../modal-create-request-time-keeping/modal-create-request-time-keeping.component';

@Component({
  selector: 'hrm-modal-working-date',
  templateUrl: './modal-working-date.component.html',
  styleUrls: ['./modal-working-date.component.scss']
})
export class ModalWorkingDateComponent implements OnInit {

  loading = false
  index = 0;
  disable = false;
  @Input() workingDate?: string
  @Input() userId?: TDSSafeAny
  getKeepingRequestUser?: TDSSafeAny
  hasRequest?: number

  constructor(
    private modal: TDSModalRef,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private message: TDSMessageService,
    private timeKeepingService: TimeKeepingService
  ) { }

  ngOnInit(): void {
    this.getKeepingRequestWorkingDateByUser({ workingDate: this.workingDate })
  }

  onIndexChange(index: number): void {
    this.index = index;
  }

  ngAfterViewInit(): void {
    // this.timeKeepingPersonalService.workingDate$.subscribe(WorkingDate=>{
    //   this.workingDate = WorkingDate
    // })
  }

  cancel() {
    this.modal.destroy(null);
  }

  showModalWorkingdate(): void {
    const modalRequestTimeKeeping = this.modalService.create({
      title: 'Trạng thái khiếu nại công',
      content: ModalCreateRequestTimeKeepingComponent,
      size: "md",
      footer: null,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        workingDate: this.workingDate,
        userId: this.userId
      },
    });
    modalRequestTimeKeeping.afterClose.subscribe(
      {
        next: (res) => {
          this.getKeepingRequestWorkingDateByUser({ workingDate: this.workingDate })
        },
        error: (err) => {
          this.message.error(err.error.message)
        }
      }
    )
  }

  getKeepingRequestWorkingDateByUser(params: ParamRequestWorkingDateUser) {
    this.loading = true;
    this.timeKeepingService.getTimeKeepingRequestUserByWorkingdate_Json(params).subscribe((res: TDSSafeAny) => {
      this.getKeepingRequestUser = res
      this.hasRequest = this.getKeepingRequestUser?.length
      this.loading = false;
    });
  }

  cancelKeepingRequestWorkingDateByUser(idRequest: string) {
    this.loading = true;
    this.timeKeepingService.postTimeKeepingRequestCancel_Response({ body: `"${idRequest}"` }).subscribe({
      next: (res) => {
        this.getKeepingRequestWorkingDateByUser({ workingDate: this.workingDate })
        this.message.success("Hủy gửi xác nhận công thành công")
        this.loading = false;
      },
      error: (err) => {
        this.message.error(err.code)
        this.loading = false;
      }
    });
  }
}
