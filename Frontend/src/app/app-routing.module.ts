import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardService, CustomerGuardService } from '@core/authentication';
import { LayoutComponent } from '@shared/layout/layout/layout.component';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: '',
    component:LayoutComponent,
    canActivate:[AdminGuardService],
    children:[
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      // {
      //   path: 'hr-management',
      //   loadChildren: () => import('./modules/hr-management/hr-management.module').then(m => m.HrManagementModule)
      // },
      // {
      //   path: 'personal',
      //   loadChildren: () => import('./modules/personal/personal.module').then(m => m.PersonalModule)
      // },
      {
        path: 'property-management',
        loadChildren: () => import('./modules/property-management/property-management.module').then(m => m.PropertyManagementModule)
      },
      {
        path: 'setting-resource',
        loadChildren: () => import('./modules/setting-resource/setting-resource.module').then(m => m.SettingResourceModule)
      },
      // {
      //   path: 'time-keepper',
      //   loadChildren: () => import('./modules/timekeeper-management/timekeeper-management.module').then(m => m.TimekeeperManagementModule)
      // },
    ]
  },
  {
    path: 'customer',
    loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
		useHash: true,})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
