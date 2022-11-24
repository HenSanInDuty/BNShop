import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginSmsComponent } from './pages/login-sms/login-sms.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    component:AccountComponent,
    children:[
      {
        path:'',
        redirectTo:'/account/login',
        pathMatch:'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signUp',
        component: SignUpComponent
      },
      {
        path: 'login-sms',
        component: LoginSmsComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
