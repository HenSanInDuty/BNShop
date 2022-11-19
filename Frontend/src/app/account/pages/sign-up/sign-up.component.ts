import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { convertPhoneNumber, CoreValidators } from '@core/validators';
import { takeUntil } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSSafeAny } from 'tds-ui/shared/utility';
const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

@Component({
  selector: 'hrm-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  // param thay đổi mật khẩu
  checkOldPass = true;
  isShowPassWord = false;
  isShowPassWordNew = false;
  isSubmit = false
  RegisterForm!: FormGroup;
  returnUrl = '/account/login';
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private accountService: AccountService,
    private cd: ChangeDetectorRef,
    private destroy$: TDSDestroyService,
    private message: TDSMessageService,
  ) { }

  resetForm() {
    this.RegisterForm = this.fb.group({
      phone: new FormControl('', [Validators.required, CoreValidators.isMobile]),
      name: new FormControl('', [Validators.required]),
      main_industry: new FormControl('', [Validators.required]),
      identify: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{9,15}$/i)]),
      password1: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(32),
          Validators.pattern(PASSWORD_PATTERN)
        ])
      ],
      password2: [
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
    this.RegisterForm.controls["password2"].setValidators([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
      Validators.pattern(PASSWORD_PATTERN),
      this.checkPasswordsMath()
    ])
  }

  checkPasswordsMath(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const reNewPassword = this.RegisterForm.controls['password2'].value;
      const newPassword = this.RegisterForm.controls['password1'].value;
      if (newPassword === reNewPassword) {
        return null
      }
      return { notSame: true }
    }
  }

  onSubmit(): void {
    if (this.RegisterForm.valid) {
      this.isSubmit = true;
      this.accountService.createAgency(this.RegisterForm.value).pipe(takeUntil(this.destroy$)).subscribe({
        next: (res) => {
          this.isSubmit = false;
          this.message.success("Đăng kí tài khoản thành công");
          this.router.navigate([this.returnUrl])
        },
        error: (err) => {
          this.isSubmit = false;
          this.cd.detectChanges();
        },
        complete() {
        },
      })
    }
  }

  showPassword() {
    this.isShowPassWord = !this.isShowPassWord
  }

  showPasswordNew() {
    this.isShowPassWordNew = !this.isShowPassWordNew
  }


}
