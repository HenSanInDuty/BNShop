import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FurloughKindManagementComponent } from './pages/furlough-kind-management/furlough-kind-management.component';
import { HolidaysManagementComponent } from './pages/holidays-management/holidays-management.component';
import { TimeAttendanceManagementComponent } from './pages/time-attendance-management/time-attendance-management.component';
import { SettingResourceComponent } from './setting-resource.component';
import { ShiftComponent } from './pages/shift/shift.component';
import { WorkingKindManagementComponent } from './pages/working-kind-management/working-kind-management.component';
import { CompanyComponent } from './pages/company/company.component';
import { ProductManagementComponent } from './pages/product-management/product-management.component';
import { ResourceTypeManagementComponent } from './pages/resource-type-management/resource-type-management.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryManagementComponent } from './pages/category-management/category-management.component';

const routes: Routes = [
  {
    path: '',
    component: SettingResourceComponent,
    children: [
      {
        path: '',
        redirectTo: 'accset/accset-manage',
        pathMatch: 'prefix'
      },
      {
        path: 'accset',
        component: ProductComponent,
        children: [
          {
            path: '',
            redirectTo: 'accset-manage',
            pathMatch: 'prefix'
          },
          {
            path: 'accset-manage',
            component: ProductManagementComponent,
            pathMatch: "full"
          },
          {
            path: 'accset-type',
            component: ResourceTypeManagementComponent,
          },
        ]
      },
      {
        path: 'about-company',
        component: CompanyComponent,
      },
      {
        path: 'category',
        component: CategoryManagementComponent,
      },
      {
        path: 'time-attendance',
        component: TimeAttendanceManagementComponent,
        children: [
          {
            path: '',
            redirectTo: 'shift',
            pathMatch: 'prefix'
          },
          {
            path: 'shift',
            component: ShiftComponent,
            pathMatch: "full"
          },
          {
            path: 'holidays-manage',
            component: HolidaysManagementComponent,
            pathMatch: "full"
          },
          {
            path: 'furlough-kind-manage',
            component: FurloughKindManagementComponent,
            pathMatch: "full"
          },
          {
            path: 'working-kind-manage',
            component: WorkingKindManagementComponent,
            pathMatch: "full"
          },
        ]
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingResourceRoutingModule { }
