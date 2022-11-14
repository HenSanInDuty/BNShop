import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreValidators, convertPhoneNumber } from '@core/validators';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'hrm-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  isShowPassWord = false
  changePasswordForm!: FormGroup;
  returnUrl = '/property-management/rent-schedule';
  isSubmit: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private mgs: TDSMessageService,
    private account: AccountService,
    private destroy$: TDSDestroyService
  ) { }

  ngOnInit(): void {

    this.changePasswordForm = this.formBuilder.group({
      phoneNumber: new FormControl('', [Validators.required, CoreValidators.isMobile]),
      password: new FormControl('', Validators.required)
    });

  }

  showPassword() {
    this.isShowPassWord = !this.isShowPassWord
  }

  onSubmit() {
    let that = this;
    if (this.changePasswordForm.valid) {
      this.isSubmit = true;
      let phoneNumber = convertPhoneNumber(this.changePasswordForm.controls['phoneNumber'].value);
      this.account.signInPassword(phoneNumber, this.changePasswordForm.controls['password'].value)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          {
            next: (data: TDSSafeAny) => {

              that.router.navigate([that.returnUrl]);
            },
            error: err => {
              if (!err || !err.error) {
                this.mgs.error('Đăng nhập không thành công');
              } else {
                if (!err.error.validationErrors) {
                  this.mgs.error(err?.error?.message);
                }
                else {
                  for (let i = 0; i < err.error?.validationErrors.length; i++) {
                    this.mgs.error(err.error?.validationErrors[i]?.message);
                  }
                }
              }
              this.isSubmit = false;
            },
            complete: () => {
              this.isSubmit = false;
            }
          }

        );
    }
  }

}
