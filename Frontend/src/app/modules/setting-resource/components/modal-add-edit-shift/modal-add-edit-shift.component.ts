import { formatDate } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShiftUpdateDto } from '@commom/hrm/models';
import { ShiftService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { vi_VN } from 'tds-ui/i18n';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-modal-add-edit-shift',
  templateUrl: './modal-add-edit-shift.component.html',
  styleUrls: ['./modal-add-edit-shift.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ]
})
export class ModalAddEditShiftComponent implements OnInit {

  @Input() lstShift: TDSSafeAny;
  isSubmit = false
  addEditShiftForm!: FormGroup;
  isDeviation: boolean = true
  error?: TDSSafeAny
  params: TDSSafeAny
  body?: ShiftUpdateDto
  constructor(
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private message: TDSMessageService,
    private destroy$: TDSDestroyService,
    private shiftService: ShiftService,
    private cd: ChangeDetectorRef,
  ) {

    this.createForm();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.lstShift) {
      this.isDeviation = this.lstShift.isDeviation
    }
    this.updateForm();
    this.cd.detectChanges()
  }

  cancel() {
    this.modal.destroy(null);
  }

  createForm() {
    this.addEditShiftForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      start: new FormControl(null, [Validators.required]),
      end: new FormControl(null, [Validators.required]),
      midStart: new FormControl(null, [Validators.required]),
      midEnd: new FormControl(null, [Validators.required]),
      midStartEndIsDay: new FormControl(true),
      startEndIsDay: new FormControl(true),
      isDeviation: new FormControl(false),
      keepingNumber: new FormControl(0),
      startDeviation: new FormControl(0),
      endDeviation: new FormControl(0),
      ignoreDeviation: new FormControl(false),
    })
  }

  updateForm() {
    if (this.lstShift) {
      let parseYear = {
        start: new Date(2022, 1, 1, this.lstShift.start.split(":")[0], this.lstShift.start.split(":")[1], this.lstShift.start.split(":")[2]),
        end: new Date(2022, 1, 1, this.lstShift.end.split(":")[0], this.lstShift.end.split(":")[1], this.lstShift.end.split(":")[2]),
        midStart: new Date(2022, 1, 1, this.lstShift.midStart?.split(":")[0], this.lstShift.midStart?.split(":")[1],),
        midEnd: new Date(2022, 1, 1, this.lstShift.midEnd?.split(":")[0], this.lstShift.midEnd?.split(":")[1],)
      }
      const item = { ...this.lstShift, ...parseYear };
      this.addEditShiftForm.patchValue(item);
    }
  }

  modelChangeisDeviation() {
    this.isDeviation = !this.isDeviation
  }

  onSubmit(): void {
    if (this.addEditShiftForm.valid && this.addEditShiftForm.dirty) {
      this.isSubmit = true;
      if (this.isDeviation) {
        this.body = {
          ...this.addEditShiftForm.value,
          isDeviation: true
        }
      }
      else {
        this.body = {
          ...this.addEditShiftForm.value,
          isDeviation: false
        }
      }
      if (this.body?.start) {
        this.body.start = formatDate(this.addEditShiftForm.value.start, 'HH:mm:ss', vi_VN.locale);
      }
      if (this.body?.end) {
        this.body.end = formatDate(this.addEditShiftForm.value.end, 'HH:mm:ss', vi_VN.locale);
      }
      if (this.body?.midStart) {
        this.body.midStart = formatDate(this.addEditShiftForm.value.midStart, 'HH:mm:ss', vi_VN.locale);
      }
      if (this.body?.midEnd) {
        this.body.midEnd = formatDate(this.addEditShiftForm.value.midEnd, 'HH:mm:ss', vi_VN.locale);
      }
      if (this.lstShift) {
        this.params = {
          id: this.lstShift.id,
          body: this.body
        }
        this.shiftService.putShiftUpdate_Response(this.params)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              this.isSubmit = false
              this.message.success("Sửa ca làm việc thành công")
              this.modal.destroy(this.params);
            },
            error: (err) => {
              this.isSubmit = false
              this.modal.destroy(this.params);
              this.message.error(err.code)
            }
          })
      }
      else {
        this.params = {
          body: this.body
        }
        this.shiftService.postShiftCreate_Response(this.params)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              this.isSubmit = false
              this.message.success("Thêm ca làm việc thành công")
              this.modal.destroy(this.params);
            },
            error: (err) => {
              this.isSubmit = false
              this.modal.destroy(this.params);
              this.message.error(err.code)
            }
          })
      }
    }
  }
}
