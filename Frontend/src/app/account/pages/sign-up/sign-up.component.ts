import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { convertPhoneNumber, CoreValidators } from '@core/validators';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'hrm-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  isShowPassWord = false
  changePasswordForm!: FormGroup;
  returnUrl = '/account/login';
  isSubmit: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private mgs: TDSMessageService,
    private account: AccountService,
    private destroy$: TDSDestroyService
  ) { }

  ngOnInit(): void {

    this.changePasswordForm = this.formBuilder.group({
      phone: new FormControl('', [Validators.required, CoreValidators.isMobile]),
      password1: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      main_industry: new FormControl('', Validators.required),
      identify: new FormControl('', Validators.required),
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
      // this.account.signUpPassword()
      //   .pipe(takeUntil(this.destroy$))
      //   .subscribe(
      //     {
      //       next: (data: TDSSafeAny) => {

      //         that.router.navigate([that.returnUrl]);
      //       },
      //       error: (err: TDSSafeAny) => {
      //         if (!err || !err.error) {
      //           this.mgs.error('Tạo tài khoản không thành công');
      //         } else {
      //           if (!err.error.validationErrors) {
      //             this.mgs.error(err?.error?.message);
      //           }
      //           else {
      //             for (let i = 0; i < err.error?.validationErrors.length; i++) {
      //               this.mgs.error(err.error?.validationErrors[i]?.message);
      //             }
      //           }
      //         }
      //         this.isSubmit = false;
      //       },
      //       complete: () => {
      //         this.isSubmit = false;
      //       }
      //     }

      //   );
    }
  }

}
