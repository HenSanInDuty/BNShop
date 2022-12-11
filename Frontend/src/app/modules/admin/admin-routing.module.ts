import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { AccountAgencyComponent } from './pages/account-agency/account-agency.component';
import { AccountCustomerComponent } from './pages/account-customer/account-customer.component';
import { AccountComponent } from './pages/account/account.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { ReviewComponent } from './pages/review/review.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'prefix'
      },
      {
        path: 'review',
        component: ReviewComponent,

      },
      {
        path: 'order',
        component: OrderDetailComponent,

      },
      {
        path: 'product',
        component: ProductsComponent,

      },
      {
        path: 'account',
        component: AccountComponent,

        children: [
          {
            path: '',
            redirectTo: 'account-customer',
            pathMatch: 'prefix'
          },
          {
            path: 'account-customer',
            component: AccountCustomerComponent,
            pathMatch: "full"
          },
          {
            path: 'account-agency',
            component: AccountAgencyComponent,
          },
        ]

      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
