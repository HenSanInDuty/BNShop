import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { convertPhoneNumber, CoreValidators } from '@core/validators';
import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'hrm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ]
})
export class LoginComponent implements OnInit {

  isShowPassWord = false
  loginForm!: FormGroup;
  returnUrl = '/customer';
  isSubmit: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private mgs: TDSMessageService,
    private account: AccountService,
    private destroy$: TDSDestroyService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      phone: new FormControl('', [Validators.required, CoreValidators.isMobile]),
      // phone: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    });
    this.cd.detectChanges();
  }
  onSubmit() {
    let that = this;
    if (this.loginForm.valid) {
      this.isSubmit = true;
      let phone = convertPhoneNumber(this.loginForm.controls['phone'].value);
      this.account.signInPassword(phone, this.loginForm.controls['password'].value)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          {
            next: (data: TDSSafeAny) => {
              switch (data.data.role) {
                case 'Admin':
                  that.router.navigate(['/admin']);
                  break;
                case 'Agency':
                  that.router.navigate(['/dashboard']);
                  break;
                default:
                  that.router.navigate([that.returnUrl]);
              }
            },
            error: (err:TDSSafeAny) => {
              if (!err || !err.error) {
                this.mgs.error('Đã sảy ra lỗi trong quá trình truy cập');
              } else {
                if (!err.error.validationErrors) {
                  this.mgs.error(err?.error?.detail);
                  this.isSubmit = false
                }
                else {
                  for (let i = 0; i < err.error?.validationErrors.length; i++) {
                    this.mgs.error(err.error?.validationErrors[i]?.detail);
                  }
                }
              }
              this.isSubmit = false;
              this.cd.detectChanges();
            },
            complete: () => {
              this.isSubmit = false;
              this.cd.detectChanges();
            }
          }

        );
    }
  }

  showPassword() {
    this.isShowPassWord = !this.isShowPassWord
  }
}
