import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePassComponent } from './component/forget-pass/change-pass/change-pass.component';
import { ForgetPassComponent } from './component/forget-pass/forget-pass.component';
import { OtpComponent } from './component/forget-pass/otp/otp.component';
import { ResetpassComponent } from './component/forget-pass/resetpass/resetpass.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterStoreComponent } from './component/register-store/register-store.component';
import { PhoneComponent } from './component/register/phone/phone.component';
import { PinComponent } from './component/register/pin/pin.component';
import { RegisterComponent } from './component/register/register.component';
import { StoreComponent } from './component/store/store.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/account/login', pathMatch: 'full' },
  {
    path: 'account',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'store',
        component: StoreComponent,
      },
      {
        path: 'register-store',
        component: RegisterStoreComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
        children: [
          { path: '', redirectTo: 'phone', pathMatch: 'full' },
          { path: 'phone', component: PhoneComponent },
          { path: 'nhap-thong-tin', component: PinComponent },
          { path: 'thay-doi-mat-khau', component: ChangePassComponent },
        ],
      },
      {
        path: 'quen-mat-khau',
        component: ForgetPassComponent,
        children: [
          { path: '', redirectTo: 'dat-lai-mat-khau', pathMatch: 'full' },
          { path: 'dat-lai-mat-khau', component: ResetpassComponent },
          { path: 'nhap-ma-xac-minh', component: OtpComponent },
          { path: 'thay-doi-mat-khau', component: ChangePassComponent },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
