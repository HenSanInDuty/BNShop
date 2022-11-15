import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FurloughKindUpdateDto } from '@commom/hrm/models';
import { FurloughKindService, WorkingKindService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSI18nService } from 'tds-ui/i18n';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-modal-add-edit-working-kind',
  templateUrl: './modal-add-edit-working-kind.component.html',
  styleUrls: ['./modal-add-edit-working-kind.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalAddEditWorkingKindComponent implements OnInit {

  radioValue: boolean = false
  @Input() lstWorkingKinds: TDSSafeAny;
  isSubmit: boolean = false
  addEditWorkingKindForm!: FormGroup;
  params: TDSSafeAny
  body?: FurloughKindUpdateDto
  constructor(
    private fb: FormBuilder,
    private destroy$: TDSDestroyService,
    private modal: TDSModalRef,
    private WorkingKindService: WorkingKindService,
    private message: TDSMessageService,
    private i18n: TDSI18nService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.updateForm();
  }

  ngAfterViewInit(): void {

  }

  createForm() {
    this.addEditWorkingKindForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      descripsion: new FormControl(),
      key: new FormControl('', [Validators.required]),
      factor: new FormControl('', [Validators.required]),
    })
  }

  updateForm() {
    if (this.lstWorkingKinds) {
      this.addEditWorkingKindForm.patchValue(this.lstWorkingKinds);
    }
  }

  cancel() {
    this.modal.destroy(null);
  }
  onSubmit(): void {
    if (this.addEditWorkingKindForm.valid && this.addEditWorkingKindForm.dirty) {
      this.isSubmit = true;
      this.body = {
        ...this.addEditWorkingKindForm.value,
      }
      if (this.lstWorkingKinds) {
        this.params = {
          id: this.lstWorkingKinds.id,
          body: this.body
        }
        this.WorkingKindService.putWorkingKindUpdate_Response(this.params)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.isSubmit = false
                this.message.success("Sửa hình thức làm việc thành công")
                this.modal.destroy(this.params);
              },
            }
          )
      }
      else {
        this.params = {
          body: this.body
        }
        this.WorkingKindService.postWorkingKindCreate_Response(this.params)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.isSubmit = false
                this.message.success("Thêm  hình thức làm việc thành công")
                this.modal.destroy(this.params);
              },
            }
          )
      }
    }
  }
}
