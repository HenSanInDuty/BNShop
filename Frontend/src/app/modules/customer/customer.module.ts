import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutComponent } from './components/layout/layout.component';
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
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TDSCarouselModule } from 'tds-ui/carousel';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomePageComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CustomerRoutingModule,
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
    TDSCarouselModule
  ]
})
export class CustomerModule { }
