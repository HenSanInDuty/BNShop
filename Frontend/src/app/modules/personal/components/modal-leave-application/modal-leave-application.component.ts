import { Component, Input, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSMessageService } from 'tds-ui/message';
import { TDSHelperString, TDSSafeAny } from 'tds-ui/shared/utility';
import { FurloughKindService, KeepingOtherService, ShiftService, WorkingKindService } from '@commom/hrm/services';
import { KeepingOtherRequestFurCreateDto, KeepingOtherRequestWkCreateDto } from '@commom/hrm/models';
import { TDSDestroyService } from 'tds-ui/core/services';
import { takeUntil } from 'rxjs';
@Component({
  selector: 'hrm-modal-leave-application',
  templateUrl: './modal-leave-application.component.html',
  styleUrls: ['./modal-leave-application.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalLeaveApplicationComponent implements OnInit {

  @Input() year: TDSSafeAny
  @Input() index: TDSSafeAny
  fromToDayOff!: Array<Date>;
  offDayReal!: Array<Date>;
  dayOffParams!: TDSSafeAny
  dayOff: TDSSafeAny = 0;
  lstFurloughKind?: TDSSafeAny;
  lstWorkingKind?: TDSSafeAny;
  lstShift?: TDSSafeAny
  loading = false
  addEditKeepingOtherForm!: FormGroup;
  constructor(
    private furloughKindService: FurloughKindService,
    private keepingOtherService: KeepingOtherService,
    private workingKindService: WorkingKindService,
    private shiftService: ShiftService,
    private destroy$: TDSDestroyService,
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private message: TDSMessageService
  ) {
    this.addEditKeepingOtherForm = this.fb.group({
      furloughKindId: new FormControl(null),
      shiftId: new FormControl(null),
      includingSun: new FormControl(false),
      includingSat: new FormControl(false),
      description: new FormControl(null),
    })
  }

  ngOnInit(): void {
    if (TDSHelperString.hasValueString(this.index)) {
      this.getWorkingKind()
    }
    else {
      this.getFurloughKind(this.year)
    }
    this.getListShift()
  }

  cancel() {
    this.modal.destroy(null);
  }

  onChange(result: Array<Date>): void {
    this.fromToDayOff = result
    this.dayOff = (Number(this.fromToDayOff[1]) - Number(this.fromToDayOff[0])) / (1000 * 60 * 60 * 24)
    this.dayOffParams = {
      from: this.fromToDayOff[0].toISOString(),
      to: this.fromToDayOff[1].toISOString()
    }
  }

  getFurloughKind(year: number) {
    this.furloughKindService.getFurloughKindByYear_Json({ year: year }).subscribe((res: TDSSafeAny) => {
      this.lstFurloughKind = res;
    });
  }

  getWorkingKind() {
    this.workingKindService.getWorkingKind_Json().subscribe((res: TDSSafeAny) => {
      this.lstWorkingKind = res.items;
    });
  }

  getListShift() {
    this.loading = true
    this.shiftService.getShift_Json()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.lstShift = res.items
            this.loading = false
          }
          else {
            this.lstShift = []
            this.loading = false
          }
        },
        error: () => {
          this.lstShift = [];
          this.loading = false
        }
      })
  }

  onSubmit(): void {
    this.loading = true
    if (this.addEditKeepingOtherForm.valid) {
      if (!isNaN(this.index)) {
        let params: KeepingOtherRequestWkCreateDto = {
          ...this.addEditKeepingOtherForm.value,
          ... this.dayOffParams
        }
        this.keepingOtherService.postKeepingOtherWorkingkindRequestCreate_Response({ body: params })
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              this.loading = false
              this.message.success("Gửi đơn xin thay đổi hình thức làm việc thành công")
              this.modal.destroy(params);
            },
            error: (err) => {
              this.loading = false
              this.message.error(err.error.message)
            }
          })
      }
      else {
        let params: KeepingOtherRequestFurCreateDto = {
          ...this.addEditKeepingOtherForm.value,
          ... this.dayOffParams
        }
        this.keepingOtherService.postKeepingOtherFurloughkindRequestCreate_Response({ body: params })
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              this.loading = false
              this.message.success("Gửi đơn xin nghỉ thành công")
              this.modal.destroy(params);
            },
            error: (err) => {
              this.loading = false
              this.message.error(err.error.message)
            }
          })
      }
    }
  }
}
