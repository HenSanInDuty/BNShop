import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryWorkingDateComponent } from './components/summary-working-date/summary.component';
import { TableTimeKeepingComponent } from './components/table-time-keeping/table-time-keeping.component';
import { TimekeepingComponent } from './pages/timekeeping/timekeeping.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/personal/timekeeping',
    pathMatch: 'full'
  },
  {
    path: 'timekeeping',
    component: TimekeepingComponent,
    children: [
      {
        path: '',
        redirectTo: 'summary',
        pathMatch: 'prefix'
      },
      {
        path: 'summary',
        component: SummaryWorkingDateComponent,
        pathMatch: "full"
      },
      {
        path: 'table',
        component: TableTimeKeepingComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
