import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TDSEchartsModule } from 'tds-report';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSBadgeModule } from 'tds-ui/badges';
import { TDSDividerModule } from 'tds-ui/divider';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSMessageModule } from 'tds-ui/message';
import { TDSPageHeaderModule } from 'tds-ui/page-header';
import { TDSTagModule } from 'tds-ui/tag';

import { UserComponent } from './pages/user/user.component';
import { ModalRegisterPasswordComponent } from './components/modal-register-password/modal-register-password.component';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSSpinnerModule } from 'tds-ui/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TDSSelectModule } from 'tds-ui/select';
import { NotificationComponent } from './components/v1.1/notification/notification.component';
import { ProfileComponent } from './components/v1.1/profile/profile.component';
import { TDSTimelineModule } from 'tds-ui/timeline';
import { TDSTabsModule } from 'tds-ui/tabs';
import { TDSToolTipModule } from 'tds-ui/tooltip';
import { ModalSettingNotificationComponent } from './components/v1.2/modal-setting-notification/modal-setting-notification.component';
import { TDSSwitchModule } from 'tds-ui/switch';
import { TDSFilterStatusModule } from 'tds-ui/filter-status';
import { TDSMapperPipeModule } from 'tds-ui/cdk/pipes/mapper';


@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    ProfileComponent,
    NotificationComponent,
    ModalRegisterPasswordComponent,
    ModalSettingNotificationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule,
    TDSButtonModule,
    TDSDropDownModule,
    TDSBadgeModule,
    TDSDividerModule,
    TDSAvatarModule,
    TDSTagModule,
    TDSPageHeaderModule,
    TDSMessageModule,
    TDSModalModule,
    TDSFormFieldModule,
    TDSInputModule,
    TDSSpinnerModule,
    TDSSelectModule,
    TDSTimelineModule,
    TDSTabsModule,
    TDSToolTipModule,
    TDSSwitchModule,
    TDSFilterStatusModule,
    TDSEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    TDSMapperPipeModule
  ],
  providers: [
    DatePipe
  ]
})
export class DashboardModule { }
