import { formatDate } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSI18nService, vi_VN, en_US } from 'tds-ui/i18n';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { FurloughKindService } from '@commom/hrm/services';
import { FurloughKindUpdateDto } from '@commom/hrm/models';
import { TDSDestroyService } from 'tds-ui/core/services';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'hrm-modal-add-edit-furlough-kind',
  templateUrl: './modal-add-edit-furlough-kind.component.html',
  styleUrls: ['./modal-add-edit-furlough-kind.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ]
})
export class ModalAddEditFurloughKindComponent implements OnInit {

  radioValue: boolean = false
  @Input() lstFurloughKind: TDSSafeAny;
  isSubmit: boolean = false
  addEditFurloughKindForm!: FormGroup;
  params: TDSSafeAny
  body?: FurloughKindUpdateDto
  constructor(
    private fb: FormBuilder,
    private modal: TDSModalRef,
    private furloughKindService: FurloughKindService,
    private message: TDSMessageService,
    private i18n: TDSI18nService,
    private destroy$: TDSDestroyService,
    private cd: ChangeDetectorRef
  ) {
    this.createForm();
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.updateForm();
    this.cd.detectChanges()
  }

  createForm() {
    this.addEditFurloughKindForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(),
      maxDay: new FormControl(),
      code: new FormControl(),
      year: new FormControl('', [Validators.required]),
      isPaid: new FormControl('', [Validators.required]),
      factor: new FormControl('', [Validators.required]),
    })
  }

  updateForm() {
    if (this.lstFurloughKind) {
      let parseYear = {
        year: new Date(this.lstFurloughKind.year, 1, 1)
      }
      const item = { ...this.lstFurloughKind, ...parseYear };
      this.addEditFurloughKindForm.patchValue(item);
    }
  }

  cancel() {
    this.modal.destroy(null);
  }
  onSubmit(): void {
    if (this.addEditFurloughKindForm.valid && this.addEditFurloughKindForm.dirty) {
      this.isSubmit = true;
      this.body = {
        ...this.addEditFurloughKindForm.value,
        year: this.addEditFurloughKindForm.controls['year'].value.getFullYear()
      }
      if (this.lstFurloughKind) {
        this.params = {
          id: this.lstFurloughKind.id,
          body: this.body
        }
        this.furloughKindService.putFurloughKindUpdate(this.params)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.isSubmit = false
                this.message.success("Sửa loại nghỉ phép thành công")
                this.modal.destroy(this.params);
              },
            }
          )
      }
      else {
        this.params = {
          body: this.body
        }
        this.furloughKindService.postFurloughKindCreate(this.params)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.isSubmit = false
                this.message.success("Thêm  loại nghỉ phép thành công")
                this.modal.destroy(this.params);
              },
            }
          )
      }
    }
  }
}
