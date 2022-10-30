import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewStoreRoutingModule } from './review-store-routing.module';
import { ReviewProductComponent } from './component/review-product/review-product.component';
import { ReviewTransportersComponent } from './component/review-transporters/review-transporters.component';

import { ReviewStoreComponent } from './component/review-store/review-store.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './review/review.component';
import { TDSBadgeModule } from 'tds-ui/badges';
import { TDSBreadCrumbModule } from 'tds-ui/breadcrumb';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSCollapseModule } from 'tds-ui/collapse';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDSFilterStatusModule } from 'tds-ui/filter-status';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSHeaderModule } from 'tds-ui/header';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSRateModule } from 'tds-ui/rate';
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
    ReviewStoreComponent,
    ReviewProductComponent,
    ReviewTransportersComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TDSHeaderModule,
    TDSFormFieldModule,
    TDSSelectModule,
    TDSButtonModule,
    TDSInputModule,
    TDSInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
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
    TDSStepsModule,
    TDSRateModule

    
  ]
})
export class ReviewStoreModule { }
