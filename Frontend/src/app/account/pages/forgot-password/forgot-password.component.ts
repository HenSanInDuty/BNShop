import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SendSmsOtpDto } from '@commom/hrm/models';

import { convertPhoneNumber, CoreValidators } from '@core/validators';
import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalConfirmOtpComponent } from '../../components/modal-confirm-otp/modal-confirm-otp.component';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'hrm-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ]
})
export class ForgotPasswordComponent implements OnInit {

  isForgotPasswordForm = true;
  //spinning
  loading = false;
  forgotPasswordForm!: FormGroup;
  constructor(
    private router: Router,
    private message: TDSMessageService,
    private accountService: AccountService,
    private destroy$: TDSDestroyService,
    private fb: FormBuilder,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private cd: ChangeDetectorRef
  ) {
    this.forgotPasswordForm = this.fb.group({
      phoneNumber: new FormControl('', [Validators.required, CoreValidators.isMobile]),
    });
  }

  ngOnInit(): void {
  }

  //modal nhận otp
  showModal(phoneNumber: string) {
    const modal = this.modalService.create({
      title: 'Xác nhận mã OTP',
      content: ModalConfirmOtpComponent,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        phoneNumber: phoneNumber,
        isForgotPasswordForm: this.isForgotPasswordForm
      }
    });
    modal.afterClose.subscribe({
      next: (res) => {
        this.loading = false;
      },
      error: (err) => {

      },
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.loading = true;
      let phoneNumber = convertPhoneNumber(this.forgotPasswordForm.controls['phoneNumber'].value);
      this.accountService.resetPasswordSendOtp({
        phoneNumber: phoneNumber,
      })
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          {
            next: () => {
              this.loading = false;
              this.showModal(phoneNumber);
              this.cd.detectChanges()
            },
            error: (err: TDSSafeAny) => {
              if (!TDSHelperObject.hasValue(err) || !TDSHelperObject.hasValue(err.error)) {
                this.message.error('Lỗi khi gửi otp');
              } else {
                if (!TDSHelperObject.hasValue(err.error.validationErrors)) {
                  this.message.error(err?.error?.message);
                }
                else {
                  for (let i = 0; i < err.error?.validationErrors.length; i++) {
                    this.message.error(err.error?.validationErrors[i]?.message);
                  }
                }
              }
              this.loading = false;
              this.cd.detectChanges()
            },
          }
        )
    }
  }
}
