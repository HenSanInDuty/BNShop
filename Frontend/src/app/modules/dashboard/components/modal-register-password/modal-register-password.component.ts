import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { pipe, takeUntil } from 'rxjs';
import { AccountService } from 'src/app/account/services/account.service';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSHelperString, TDSSafeAny } from 'tds-ui/shared/utility';
import { UserService } from '../../services/user.service';
const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

@Component({
  selector: 'hrm-modal-register-password',
  templateUrl: './modal-register-password.component.html',
  styleUrls: ['./modal-register-password.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalRegisterPasswordComponent implements OnInit {

  checkPassword = true;
  isShowPassWord = false
  isShowPassWordNew = false
  isShowRePassWordNew = false
  ChangePasswordForm!: FormGroup;
  loading = false;
  constructor(
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private message: TDSMessageService,
    private destroy$: TDSDestroyService,
    private accountService: AccountService

  ) { }

  changeForm() {
    this.ChangePasswordForm = this.fb.group({
      old_password: [
        '',
        Validators.compose([
          Validators.required,
        ])
      ],
      new_password1: [
        '',
        // Validators.compose([
        //   Validators.required,
        //   Validators.minLength(8),
        //   Validators.pattern(PASSWORD_PATTERN)
        // ])
      ],
      new_password2: [
        '',
        // Validators.compose([
        //   Validators.required,
        //   Validators.minLength(8),
        //   Validators.pattern(PASSWORD_PATTERN)
        // ])
      ],
    })
  }
  ngOnInit(): void {
    this.changeForm();
    this.ChangePasswordForm.controls["new_password2"].setValidators([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
      Validators.pattern(PASSWORD_PATTERN),
      this.checkPasswordsMath()
    ])
    this.ChangePasswordForm.controls["new_password1"].setValidators([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
      Validators.pattern(PASSWORD_PATTERN),
      this.checkOldPasswordsMath()
    ])
  }

  search(event: TDSSafeAny): void {
    if (!this.checkPassword) {
      this.checkPassword = true;
    }
  }

  checkPasswordsMath(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const new_password1 = this.ChangePasswordForm.controls['new_password1'].value;
      const new_password2 = this.ChangePasswordForm.controls['new_password2'].value;
      if (new_password1 === new_password2) {
        return null
      }
      return { notSame: true }
    }
  }

  checkOldPasswordsMath(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const old_password = this.ChangePasswordForm.controls['old_password'].value;
      const new_password1 = this.ChangePasswordForm.controls['new_password1'].value;
      if (old_password === new_password1) {
        return { math: true }
      }
      return null
    }
  }

  showPassword() {
    this.isShowPassWord = !this.isShowPassWord
  }

  showPasswordNew() {
    this.isShowPassWordNew = !this.isShowPassWordNew
  }

  showRePasswordNew() {
    this.isShowRePassWordNew = !this.isShowRePassWordNew
  }

  cancel() {
    this.modal.destroy(null);
  }

  onSubmit() {
    if (this.ChangePasswordForm.valid && this.ChangePasswordForm.dirty) {
      this.loading = true;
      let body = {
        old_password: this.ChangePasswordForm.controls['old_password'].value,
        new_password1: this.ChangePasswordForm.controls['new_password1'].value,
        new_password2: this.ChangePasswordForm.controls['new_password2'].value,
      }
      this.accountService.ChangePassword(body).pipe(takeUntil(this.destroy$)).subscribe(
          {
            next: (res) => {
              this.loading = false;
              this.message.success("Thay đổi mật khẩu thành công");
              this.modal.destroy(res)
            },
            error: (err) => {
              this.message.error("Thay đổi mật khẩu không thành công")
              this.loading = false;
            }
          })
    }
  }
}
