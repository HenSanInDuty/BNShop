import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreResetPasswordOtpDTO } from '@core/dto/resetPassword-token.dto';
import { takeUntil } from 'rxjs';

import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { AccountService } from '../../services/account.service';
const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
@Component({
  selector: 'hrm-modal-reset-password',
  templateUrl: './modal-reset-password.component.html',
  styleUrls: ['./modal-reset-password.component.scss']
})
export class ModalResetPasswordComponent implements OnInit {

  // param thay đổi mật khẩu
  @Input() phoneNumber: TDSSafeAny
  @Input() token: TDSSafeAny
  @Input() otp: TDSSafeAny
  checkOldPass = true;
  isShowPassWord = false;
  isShowPassWordNew = false;
  isSubmit = false
  resetPasswordForm!: FormGroup;
  returnUrl = '/account/login';
  constructor(
    private router: Router,
    private accountService: AccountService,
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private destroy$: TDSDestroyService,
    private message: TDSMessageService,
  ) { }

  resetForm() {
    this.resetPasswordForm = this.fb.group({
      newPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(32),
          Validators.pattern(PASSWORD_PATTERN)
        ])
      ],
      reNewPassword: [
        ''
        // Validators.compose([
        //   Validators.required,
        //   Validators.minLength(8),
        //   Validators.maxLength(32),
        //   Validators.pattern(PASSWORD_PATTERN)
        // ])
      ],
    })
  }

  ngOnInit(): void {
    this.resetForm()
    this.resetPasswordForm.controls["reNewPassword"].setValidators([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
      Validators.pattern(PASSWORD_PATTERN),
      this.checkPasswordsMath()
    ])
  }

  checkPasswordsMath(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const reNewPassword = this.resetPasswordForm.controls['reNewPassword'].value;
      const newPassword = this.resetPasswordForm.controls['newPassword'].value;
      if (newPassword === reNewPassword) {
        return null
      }
      return { notSame: true }
    }
  }

  onSubmit(): void {
    if (this.resetPasswordForm.valid) {
      this.isSubmit = true;
      let params: CoreResetPasswordOtpDTO = {
        newPassword: this.resetPasswordForm.controls['newPassword'].value,
        phoneNumber: this.phoneNumber,
        token: this.token.token,
        otpCode: this.otp
      }
      this.accountService.resetPasswordsms(params).pipe(takeUntil(this.destroy$)).subscribe({
        next: (res) => {
          this.isSubmit = false;
          this.message.success("Thay đổi mật khẩu thành công");
          this.modal.destroy(res);
          this.router.navigate([this.returnUrl])
        },
        error: (err) => {
          if (TDSHelperObject.hasValue(err) && TDSHelperObject.hasValue(err.error)) {
            const { message, validationErrors } = err.error;
            if (TDSHelperObject.hasValue(validationErrors)) {
              for (let i = 0; i < validationErrors.length; i++) {
                this.message.error(validationErrors[i]?.message);
              }
            } else {
              if (message.indexOf("mật khẩu cũ") != -1) {
                this.isSubmit = false;
                this.checkOldPass = false;
                this.message.error(message);
              }
            }
          }
          this.isSubmit= false;
          this.cd.detectChanges();
        },
        complete() {
        },
      })
    }
  }

  cancel() {
    this.modal.destroy(null)
  }

  showPassword() {
    this.isShowPassWord = !this.isShowPassWord
  }

  showPasswordNew() {
    this.isShowPassWordNew = !this.isShowPassWordNew
  }
}
