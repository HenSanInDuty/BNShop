import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FurloughKindManagementComponent } from './pages/furlough-kind-management/furlough-kind-management.component';
import { HolidaysManagementComponent } from './pages/holidays-management/holidays-management.component';
import { ShipManagementComponent } from './pages/ship-management/ship-management.component';
import { StoreComponent } from './store.component';
import { ReviewComponent } from './pages/review/review.component';
import { WorkingKindManagementComponent } from './pages/working-kind-management/working-kind-management.component';
import { ProductManagementComponent } from './pages/product-management/product-management.component';
import { ProductComponent } from './pages/product/product.component';
import { CategoryManagementComponent } from './pages/category-management/category-management.component';
import { OrderComponent } from './pages/order/order.component';
import { ChatComponent } from './pages/chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children: [
      {
        path: '',
        redirectTo: 'product/product-manage',
        pathMatch: 'prefix'
      },
      {
        path: 'product',
        component: ProductComponent,
        children: [
          {
            path: '',
            redirectTo: 'product-manage',
            pathMatch: 'prefix'
          },
          {
            path: 'product-manage',
            component: ProductManagementComponent,
            pathMatch: "full"
          },
        ]
      },
      {
        path: 'category',
        component: CategoryManagementComponent,
      },
      {
        path: 'review',
        component: ReviewComponent,
        pathMatch: "full"
      },
      {
        path: 'chat',
        component: ChatComponent,
        pathMatch: "full"
      },
      {
        path: 'ship',
        component: ShipManagementComponent,
        children: [
          {
            path: '',
            redirectTo: 'order',
            pathMatch: 'prefix'
          },
          {
            path: 'order',
            component: OrderComponent,
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
