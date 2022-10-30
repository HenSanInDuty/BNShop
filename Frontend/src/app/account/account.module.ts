
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './component/login/login.component';
import { StoreComponent } from './component/store/store.component';
import { RegisterStoreComponent } from './component/register-store/register-store.component';
import { ForgetPassComponent } from './component/forget-pass/forget-pass.component';
import { ResetpassComponent } from './component/forget-pass/resetpass/resetpass.component';
import { OtpComponent } from './component/forget-pass/otp/otp.component';
import { ChangePassComponent } from './component/forget-pass/change-pass/change-pass.component';
import { RegisterComponent } from './component/register/register.component';
import { PhoneComponent } from './component/register/phone/phone.component';
import { PinComponent } from './component/register/pin/pin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './component/login/login-form/login-form.component';
import { RegisterFormComponent } from './component/register-store/register-form/register-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountRoutingModule } from './account-routing.module';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSCardModule } from 'tds-ui/card';
import { TDSDividerModule } from 'tds-ui/divider';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSHeaderModule } from 'tds-ui/header';
import { TDSSelectModule } from 'tds-ui/select';
import { TDSCheckBoxModule } from 'tds-ui/tds-checkbox';
import { TDSInputModule } from 'tds-ui/tds-input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from '../HttpInterceptor';

@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    StoreComponent,
    RegisterStoreComponent,
    ForgetPassComponent,
    ResetpassComponent,
    OtpComponent,
    ChangePassComponent,
    RegisterComponent,
    PhoneComponent,
    PinComponent,
    LoginFormComponent,
    RegisterFormComponent,
    



  ],
  imports: [
    CommonModule, 
    RouterModule,
    AccountRoutingModule,
    TDSAvatarModule,
    TDSHeaderModule,
    TDSDropDownModule,
    TDSButtonModule,
    TDSFormFieldModule,
    TDSCheckBoxModule,
    FormsModule,
    ReactiveFormsModule,
    TDSInputModule,
    TDSDividerModule,
    TDSSelectModule,
    BrowserAnimationsModule,
    TDSCardModule
    
    
  
    
    
    
    

  ],
  exports: [LayoutComponent, LoginComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ]
})
export class AccountModule { }
