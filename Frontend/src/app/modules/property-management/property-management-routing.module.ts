import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalRentComponent } from './pages/personal-rent/personal-rent.component';
import { RentScheduleComponent } from './pages/rent-schedule/rent-schedule.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { PropertyManagementComponent } from './property-management.component';

const routes: Routes = [
  {
    path: '',
    component: PropertyManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'rent-schedule',
        pathMatch: 'prefix'
      },
      {
        path: 'personal-rent',
        component: PersonalRentComponent,
      },
      {
        path: 'rent-schedule',
        component: RentScheduleComponent,
      },
      {
        path: 'statistic',
        component: StatisticComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyManagementRoutingModule { }
