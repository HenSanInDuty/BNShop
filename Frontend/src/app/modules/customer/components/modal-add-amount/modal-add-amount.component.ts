import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HolidayUpdateDto } from '@commom/hrm/models';
import { HolidayService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-modal-add-amount',
  templateUrl: './modal-add-amount.component.html',
  styleUrls: ['./modal-add-amount.component.scss']
})
export class ModalAddAmountComponent implements OnInit {
  demoValue3 = null;
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
      qty: new FormControl('', [Validators.required]),
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
      if (this.lstHolidays) {
        // this.params = {
        //   id: this.lstHolidays.id,
        //   body: this.body
        // }
        // this.holidayService.putHolidayUpdate_Response(this.params)
        //   .pipe(takeUntil(this.destroy$))
        //   .subscribe({
        //     next: (res) => {
        //       this.isSubmit = false
        //       this.message.success("Sửa ngày nghỉ làm việc thành công")
        //       this.modal.destroy(this.params);
        //     },
        //     error: (err) => {
        //       this.isSubmit = false
        //       this.error = err.error.message
        //     }
        //   })
      }
      else {
        this.modal.destroy(this.addEditHolidaysForm.value)
      }
    }
  }

}
