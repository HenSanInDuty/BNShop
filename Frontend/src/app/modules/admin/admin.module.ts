import { TDSRateModule } from 'tds-ui/rate';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { AccountComponent } from './pages/account/account.component';
import { ReviewComponent } from './pages/review/review.component';
import { TypeComponent } from './pages/type/type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSBadgeModule } from 'tds-ui/badges';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDSFilterStatusModule } from 'tds-ui/filter-status';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSHeaderModule } from 'tds-ui/header';
import { TDSMenuModule } from 'tds-ui/menu';
import { TDSMessageModule } from 'tds-ui/message';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSSpinnerModule } from 'tds-ui/progress-spinner';
import { TDSSelectModule } from 'tds-ui/select';
import { TDSTabsModule } from 'tds-ui/tabs';
import { TDSTagModule } from 'tds-ui/tag';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSTableModule } from 'tds-ui/table';
import { AccountAgencyComponent } from './pages/account-agency/account-agency.component';
import { AccountCustomerComponent } from './pages/account-customer/account-customer.component';
import { TDSPageHeaderModule } from 'tds-ui/page-header';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { ShippersComponent } from './components/shippers/shippers.component';
import { TDSToolTipModule } from 'tds-ui/tooltip';
import { TDSBreadCrumbModule } from 'tds-ui/breadcrumb';
import { ProductsComponent } from './pages/products/products.component';


@NgModule({
  declarations: [
    LayoutComponent,
    AccountComponent,
    ReviewComponent,
    TypeComponent,
    AccountAgencyComponent,
    AccountCustomerComponent,
    OrderDetailComponent,
    ShippersComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TDSMenuModule,
    TDSHeaderModule,
    TDSAvatarModule,
    TDSFormFieldModule,
    TDSInputModule,
    TDSButtonModule,
    TDSTagModule,
    TDSDropDownModule,
    TDSSelectModule,
    TDSSpinnerModule,
    TDSModalModule,
    TDSMessageModule,
    TDSBadgeModule,
    TDSTabsModule,
    TDSFilterStatusModule,
    TDSTableModule,
    TDSPageHeaderModule,
    TDSToolTipModule,
    TDSBadgeModule,
    TDSBreadCrumbModule,
    TDSRateModule
  ]
})
export class AdminModule { }
