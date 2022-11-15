import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './components/v1.1/notification/notification.component';
import { ProfileComponent } from './components/v1.1/profile/profile.component';
import { UserComponent } from './pages/user/user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component:DashboardComponent,
  },
  {
    path: 'user',
    component:  UserComponent,
    children: [
      {
        path: '',
        redirectTo:'profile',
        pathMatch:'prefix'
      },
      {
        path: 'profile',
        component:  ProfileComponent,
      },
      // {
      //   path: 'notification',
      //   component:  NotificationComponent,
      // },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
