
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HolidayUpdateDto } from '@commom/hrm/models';
import { HolidayService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { RatingService } from 'src/app/services/rating.service';
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

  @Input() data: TDSSafeAny
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
    private RatingService: RatingService,
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

 
  createForm() {
    this.addEditHolidaysForm = this.fb.group({
      content: new FormControl('', [Validators.required]),
    })
  }

  updateForm() {
    if (this.data) {
      this.addEditHolidaysForm.patchValue(this.data);
    }
  }

  onSubmit(): void {
    if (this.addEditHolidaysForm.valid && this.addEditHolidaysForm.dirty) {
      this.isSubmit = true;
      if (this.data) {
        this.params = {
          user: 0,
          content: this.addEditHolidaysForm.controls["content"].value
        }
        this.RatingService.replyRating(this.data, this.params)
        .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              this.isSubmit = false
              this.message.success("Đã gửi phản hồi")
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
