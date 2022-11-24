import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreAuthService } from '@core/authentication';
import { convertPhoneNumber, CoreValidators } from '@core/validators';
import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSHelperString, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalConfirmOtpComponent } from '../../components/modal-confirm-otp/modal-confirm-otp.component';
import { AccountService } from '../../services/account.service';


@Component({
  selector: 'hrm-login-sms',
  templateUrl: './login-sms.component.html',
  styleUrls: ['./login-sms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ]
})
export class LoginSmsComponent implements OnInit {

  loginForm!: FormGroup;
  returnUrl = '/property-management/rent-schedule';
  isSubmit: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private mgs: TDSMessageService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private accountService: AccountService,
    private destroy$: TDSDestroyService
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      phoneNumber: new FormControl('', [Validators.required, CoreValidators.isMobile]),
    });
  }
  onSubmit() {
    let that = this;
    if (this.loginForm.valid) {

      this.isSubmit = true;
      let phoneNumber = convertPhoneNumber(this.loginForm.controls['phoneNumber'].value);
      this.accountService.signInSendOtp({ phoneNumber: phoneNumber })
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          {
            next: () => {
              this.showModal(phoneNumber);
              this.isSubmit = false;
              this.cd.detectChanges();
            },
            error: (err: TDSSafeAny) => {
              if (!TDSHelperObject.hasValue(err) || !TDSHelperObject.hasValue(err.error)) {
                this.mgs.error('Lỗi khi gửi otp');
              } else {
                if (!TDSHelperObject.hasValue(err.error.validationErrors)) {
                  this.mgs.error(err?.error?.message);
                }
                else {
                  for (let i = 0; i < err.error?.validationErrors.length; i++) {
                    this.mgs.error(err.error?.validationErrors[i]?.message);
                  }
                }
              }
              this.cd.detectChanges();
            }
          }
        )

    }
  }
  showModal(phoneNumber: string) {
    const modal = this.modalService.create({
      title: 'Xác nhận mã OTP',
      content: ModalConfirmOtpComponent,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        phoneNumber: phoneNumber
      }
    });
    // Return a result when closed
    modal.afterClose.subscribe(result => {
      if (TDSHelperObject.hasValue(result)) {
        this.router.navigate([this.returnUrl]);
      }
    });
  }
}
