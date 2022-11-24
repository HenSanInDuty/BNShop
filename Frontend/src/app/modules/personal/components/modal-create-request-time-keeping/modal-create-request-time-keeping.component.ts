import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { TimeKeepingRequestCreateDto } from '@commom/hrm/models';
import { TimeKeepingService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { ParamSuggestShiftUser } from '../../models/time-keeping.dto';


@Component({
  selector: 'hrm-modal-create-request-time-keeping',
  templateUrl: './modal-create-request-time-keeping.component.html',
  styleUrls: ['./modal-create-request-time-keeping.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ]
})
export class ModalCreateRequestTimeKeepingComponent implements OnInit {

  @Input() userId?: string
  @Input() workingDate?: string
  loading = false;
  lstFurloughKind?: TDSSafeAny;
  public selectedShift = null
  createRequestTimeKeeping!: FormGroup;
  params: ParamSuggestShiftUser = {
    UserId: '',
    WorkingDate: ''
  }
  shiftReturn?: string = ''
  constructor(
    private modal: TDSModalRef,
    private timeKeepingService: TimeKeepingService,
    private fb: FormBuilder,
    private destroy$: TDSDestroyService,
    private message: TDSMessageService,
    private cd: ChangeDetectorRef
  ) {
    this.createRequestTimeKeeping = this.fb.group({
      workingDate: new FormControl('', [Validators.required]),
      shiftId: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    })
    this.params.UserId = this.userId
    this.params.WorkingDate = this.workingDate
  }

  ngOnInit(): void {
    this.getSuggestShiftUser(this.params)
  }

  ngAfterViewInit(): void {
    this.createRequestTimeKeeping.patchValue({
      workingDate: this?.workingDate
    })
    this.cd.detectChanges()
  }

  cancel() {
    this.modal.destroy(null);
  }

  onChangeShift(data: TDSSafeAny) {
    if (data) {
      let shift = this.lstFurloughKind.find((shift: TDSSafeAny) => { return shift.id === data?.id });
      this.shiftReturn = shift.start + ' - ' + shift.end;
    } else {
      delete this.shiftReturn;
    }
  }

  getSuggestShiftUser(params: ParamSuggestShiftUser) {
    this.loading = false;
    this.timeKeepingService.getTimeKeepingSuggestShift_Json(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loading = false
          this.lstFurloughKind = res;
        },
        error: (err) => {
          this.message.error(err.error.code)
          this.loading = false;
        }
      })
  }

  onSubmit(): void {
    if (this.createRequestTimeKeeping.valid) {
      this.loading = true
      let params: TimeKeepingRequestCreateDto = {
        description: this.createRequestTimeKeeping.value.description,
        workingDate: this.createRequestTimeKeeping.value.workingDate,
        shiftId: this.createRequestTimeKeeping.value.shiftId.id
      }
      this.timeKeepingService.postTimeKeepingRequestCreate_Response({ body: params })
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.loading = false
            this.message.success("Gửi yêu cầu chấm công thành công")
            this.modal.destroy(params);
          },
          error: (err) => {
            if (err) {
              this.loading = false;
              this.message.error(err.code)
            }
            else {
              this.loading = false;
              this.message.error(err.message)
            }

          }
        })
    }
  }
}
