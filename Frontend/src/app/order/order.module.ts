import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OrderComponent } from './component/order/order.component';
import { OrderDetailComponent } from './component/order-detail/order-detail.component';
import { OrderRefundComponent } from './component/order-refund/order-refund.component';
import { OrderRefundListComponent } from './component/order-refund/order-refund-list/order-refund-list.component';
import { OrderRefundDetailComponent } from './component/order-refund/order-refund-detail/order-refund-detail.component';
import { TDSBadgeModule } from 'tds-ui/badges';
import { TDSBreadCrumbModule } from 'tds-ui/breadcrumb';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSCollapseModule } from 'tds-ui/collapse';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDSFilterStatusModule } from 'tds-ui/filter-status';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSHeaderModule } from 'tds-ui/header';
import { TDSMenuModule } from 'tds-ui/menu';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSSelectModule } from 'tds-ui/select';
import { TDSStepsModule } from 'tds-ui/step';
import { TDSSwitchModule } from 'tds-ui/switch';
import { TDSTableModule } from 'tds-ui/table';
import { TDSTabsModule } from 'tds-ui/tabs';
import { TDSTagModule } from 'tds-ui/tag';
import { TDSCheckBoxModule } from 'tds-ui/tds-checkbox';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSTimePickerModule } from 'tds-ui/time-picker';



@NgModule({
  declarations: [
    OrderListComponent,
    OrderComponent,
    OrderDetailComponent,
    OrderRefundComponent,
    OrderRefundListComponent,
    OrderRefundDetailComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    TDSHeaderModule,
    TDSFormFieldModule,
    TDSSelectModule,
    TDSButtonModule,
    TDSInputModule,
    TDSMenuModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    TDSTagModule,
    TDSBreadCrumbModule,
    TDSDropDownModule,
    TDSCheckBoxModule,
    TDSTimePickerModule,
    FormsModule,
    ReactiveFormsModule,
    TDSSwitchModule,
    TDSModalModule,
    TDSCollapseModule,
    TDSBadgeModule,
    TDSTableModule, 
    TDSTabsModule,
    TDSFilterStatusModule,
    TDSStepsModule
  ]
})
export class OrderModule { }
