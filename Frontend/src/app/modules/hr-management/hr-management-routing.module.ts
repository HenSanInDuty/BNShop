import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './pages/department/department.component';
import { PositionComponent } from './pages/position/position.component';
import { StaffDetailComponent } from './pages/staff-detail/staff-detail.component';
import { StaffComponent } from './pages/staff/staff.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  {
    path: 'staff',
    component: StaffComponent,
  },
  {
    path: 'staff/detail/:id',
    component: StaffDetailComponent,
  },
  {
    path: 'department',
    component: DepartmentComponent,
  },
  {
    path: 'position',
    component: PositionComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrManagementRoutingModule { }
