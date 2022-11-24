import { LeaveHistoryComponent } from './pages/leave-history/leave-history.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetsComponent } from './pages/timesheets/timesheets.component';
import { ConfirmWorkComponent } from './pages/confirm-work/confirm-work.component';
import { ConfirmWorkFormComponent } from './components/confirm-work/confirm-work-form/confirm-work-form.component';
import { LeaveAbsenceComponent } from './components/leave-absence-and-woking-form/leave-absence/leave-absence.component';

const routes: Routes = [
  {
    path: 'timesheets',
    component: TimesheetsComponent,
  },
  {
    path: 'leave-history',
    component: LeaveHistoryComponent,
  },
  {
    path: '',
    redirectTo: 'timekepper/confirm-work',
    pathMatch: 'full',
  },
  {
    path: 'confirm-work',
    component: ConfirmWorkComponent,
    children: [
      {
        path: '',
        redirectTo: 'confirm-work-form',
        pathMatch: 'prefix'
      },
      {
        path: 'confirm-work-form',
        component: ConfirmWorkFormComponent,
        pathMatch: 'full'
      },
      {
        path: 'leave-absence-and-woking-form',
        component: LeaveAbsenceComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimekeeperManagementRoutingModule { }
