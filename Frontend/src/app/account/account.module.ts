import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { LoginSmsComponent } from './pages/login-sms/login-sms.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AccountComponent } from './account.component';
import { AccountLayoutComponent } from './components/account-layout/account-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import {  TDSInputModule } from 'tds-ui/tds-input';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSMessageModule, TDSMessageService } from 'tds-ui/message';
import { TDSSpinnerModule } from 'tds-ui/progress-spinner';
import { TDSImageModule } from 'tds-ui/image';
import { TDSCheckBoxModule } from 'tds-ui/tds-checkbox';
import { ModalConfirmOtpComponent } from './components/modal-confirm-otp/modal-confirm-otp.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ModalResetPasswordComponent } from './components/modal-reset-password/modal-reset-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginSmsComponent,
    ForgotPasswordComponent,
    AccountComponent,
    AccountLayoutComponent,
    ModalConfirmOtpComponent,
    ChangePasswordComponent,
    ModalResetPasswordComponent,
    RegisterComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TDSFormFieldModule,
    TDSInputModule,
    TDSButtonModule,
    TDSModalModule,
    TDSMessageModule,
    TDSSpinnerModule,
    TDSImageModule,
    TDSCheckBoxModule,

  ],
  providers:[
    TDSMessageService
  ]
})
export class AccountModule { }
