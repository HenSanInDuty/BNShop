
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HolidayUpdateDto } from '@commom/hrm/models';
import { HolidayService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { vi_VN } from 'tds-ui/i18n';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';


@Component({
  selector: 'hrm-modal-add-edit-holidays',
  templateUrl: './modal-add-edit-holidays.component.html',
  styleUrls: ['./modal-add-edit-holidays.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ],
})
export class ModalAddEditHolidaysComponent implements OnInit {

  @Input() lstHolidays: TDSSafeAny
  fromToDayOff!: Array<Date>;
  offDayReal!: Array<Date>;
  isSubmit = false
  dayOff: TDSSafeAny = 0;
  dayOffParams!: TDSSafeAny
  addEditHolidaysForm!: FormGroup;
  error?: TDSSafeAny
  params: TDSSafeAny
  body?: HolidayUpdateDto
  constructor(
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private destroy$: TDSDestroyService,
    private message: TDSMessageService,
    private holidayService: HolidayService,
    private cd: ChangeDetectorRef
  ) { this.createForm() }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateForm();
    }, 0);
    this.cd.detectChanges()
  }

  cancel() {
    this.modal.destroy(null);
  }

  onChangeDayOff(result: Array<Date>): void {
    this.fromToDayOff = result
    this.dayOff = (Number(this.fromToDayOff[1]) - Number(this.fromToDayOff[0])) / (1000 * 60 * 60 * 24)
    this.dayOffParams = {
      fromTime: this.fromToDayOff[0].toISOString(),
      toTime: this.fromToDayOff[1].toISOString()
    }
  }

  createForm() {
    this.addEditHolidaysForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      fromTime: new FormControl(''),
      toTime: new FormControl(''),
    })
  }

  updateForm() {
    if (this.lstHolidays) {
      let parse = [
        new Date(this.lstHolidays.fromTime),
        new Date(this.lstHolidays.toTime),
      ]
      this.dayOff = this.lstHolidays.quantityDayOff
      this.dayOffParams = {
        fromTime: parse[0],
        toTime: parse[1]
      }
      this.fromToDayOff = parse
      const item = { ...this.lstHolidays, ...parse };
      this.addEditHolidaysForm.patchValue(item);
    }
  }

  onSubmit(): void {
    if (this.addEditHolidaysForm.valid && this.addEditHolidaysForm.dirty) {
      this.isSubmit = true;
      this.body = {
        ...this.addEditHolidaysForm.value,
        fromTime: this.dayOffParams.fromTime,
        toTime: this.dayOffParams.toTime,
        quantityDayOff: this.dayOff
      }
      if (this.lstHolidays) {
        this.params = {
          id: this.lstHolidays.id,
          body: this.body
        }
        this.holidayService.putHolidayUpdate_Response(this.params)
        .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              this.isSubmit = false
              this.message.success("Sửa ngày nghỉ làm việc thành công")
              this.modal.destroy(this.params);
            },
            error: (err) => {
              this.isSubmit = false
              this.error = err.error.message
            }
          })
      }
      else {
        this.params = {
          body: this.body
        }
        this.holidayService.postHoliday_Response(this.params)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              this.isSubmit = false
              this.message.success("Thêm ngày nghỉ làm việc thành công")
              this.modal.destroy(this.params);
            },
            error: (err) => {
              this.isSubmit = false
              this.error = err.error.message
            }
          })
      }
    }
  }
}
