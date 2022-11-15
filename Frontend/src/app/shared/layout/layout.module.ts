import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSHeaderModule } from 'tds-ui/header';
import { TDSMenuModule } from 'tds-ui/menu';
import { TDSSelectModule } from 'tds-ui/select';
import { TDSTagModule } from 'tds-ui/tag';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSSpinnerModule } from 'tds-ui/progress-spinner';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSMessageModule } from 'tds-ui/message';
import { TDSBadgeModule } from 'tds-ui/badges';
import { TDSTabsModule } from 'tds-ui/tabs';
import { TDSFilterStatusModule } from 'tds-ui/filter-status';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
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
    TDSFilterStatusModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
