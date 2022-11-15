import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { el } from 'date-fns/locale';
import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef, TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { AccountService } from '../../services/account.service';
import { ModalResetPasswordComponent } from '../modal-reset-password/modal-reset-password.component';

@Component({
  selector: 'hrm-modal-confirm-otp',
  templateUrl: './modal-confirm-otp.component.html',
  styleUrls: ['./modal-confirm-otp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ]
})
export class ModalConfirmOtpComponent implements OnInit {

  @Input() isForgotPasswordForm: TDSSafeAny;
  phoneNumber = '';
  formConfirm!: FormGroup;
  isSubmit = false;
  constructor(
    private accountService: AccountService,
    private mgservice: TDSMessageService,
    private modal: TDSModalRef,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private cd: ChangeDetectorRef,
    private readonly destroy$: TDSDestroyService
  ) { }

  ngOnInit(): void {
    this.formConfirm = new FormGroup({
      otp: new FormControl('', [Validators.required])
    });
  }

  //modal resetpassword
  showModal(data: TDSSafeAny, otp: string) {
    const modal = this.modalService.create({
      title: 'Tạo mật khẩu mới',
      content: ModalResetPasswordComponent,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        phoneNumber: this.phoneNumber,
        token: data,
        otp: otp
      }
    });
    modal.afterClose.subscribe({
      next: (res) => {
       this.modal.destroy(res)
      },
      error: (err) => {
      },
    });
  }

  save() {
    if (this.formConfirm.valid) {
      this.isSubmit = true;
      if (this.isForgotPasswordForm) {
        this.accountService.resetPasswordVerifyOtpsms({
          phoneNumber: this.phoneNumber,
          otpCode: this.formConfirm.getRawValue().otp
        })
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (data) => {
              this.showModal(data, this.formConfirm.getRawValue().otp);
              this.isSubmit = false;
              this.cd.detectChanges()
            },
            error: (error) => {
              if (TDSHelperObject.hasValue(error) && TDSHelperObject.hasValue(error.error)) {
                const { message, validationErrors } = error.error;
                if (TDSHelperObject.hasValue(validationErrors)) {
                  for (let i = 0; i < validationErrors.length; i++) {
                    this.mgservice.error(validationErrors[i]?.message);
                  }
                } else {
                  this.mgservice.error(message);
                }
              }
              this.isSubmit = false;
              this.cd.detectChanges()
            }
          })
      }
      else {
        this.accountService.signInVerifyOtpsms({
          phoneNumber: this.phoneNumber,
          otpCode: this.formConfirm.getRawValue().otp
        })
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (data) => {
              this.modal.destroy(data);
              this.cd.detectChanges()
            },
            error: (error) => {
              if (TDSHelperObject.hasValue(error) && TDSHelperObject.hasValue(error.error)) {
                const { message, validationErrors } = error.error;
                if (TDSHelperObject.hasValue(validationErrors)) {
                  for (let i = 0; i < validationErrors.length; i++) {
                    this.mgservice.error(validationErrors[i]?.message);
                  }
                } else {
                  this.mgservice.error(message);
                }
              }
              this.isSubmit=false;
              this.cd.detectChanges()
            }
          })
      }
    }
  }
  cancel() {
    this.modal.destroy(null);
  }
}
