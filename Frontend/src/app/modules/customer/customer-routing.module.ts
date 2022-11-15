import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerGuardService } from '@core/authentication';
import { LayoutComponent } from './components/layout/layout.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix'
      },
      {
        path: 'home',
        component: HomePageComponent,

      },
      {
        path: 'signUp',
        component: SignUpComponent,

      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
