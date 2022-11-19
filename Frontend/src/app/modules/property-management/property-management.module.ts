import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PropertyManagementRoutingModule } from './property-management-routing.module';
import { PropertyManagementComponent } from './property-management.component';
import { RouterModule } from '@angular/router';
import { TDSPageHeaderModule } from "tds-ui/page-header";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TDSTagModule } from 'tds-ui/tag';
import { RentScheduleComponent } from './pages/rent-schedule/rent-schedule.component';
import { PersonalRentComponent } from './pages/personal-rent/personal-rent.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSButtonMenuModule } from 'tds-ui/button-menu';
import { TDSPopoverModule } from 'tds-ui/popover';
import { TDSDatePickerModule } from 'tds-ui/date-picker';
import { TDSFilterStatusModule } from 'tds-ui/filter-status';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSBadgeModule } from 'tds-ui/badges';
import { TDSToolTipModule } from 'tds-ui/tooltip';

import { ModalShowInviteeComponent } from './components/modal-show-invitee/modal-show-invitee.component';
import { TDSMessageModule } from 'tds-ui/message';
import { TDSEmptyModule } from 'tds-ui/empty';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSSelectModule } from 'tds-ui/select';

import { TDSCalendarDatepickerComponent, TDSCalendarModule } from 'tds-ui/calendar';
import { TDSSpinnerModule } from 'tds-ui/progress-spinner';
import { ScheduleDetailsComponent } from './components/rent-schedule/schedule-details/schedule-details.component';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { ModalAddEventComponent } from './components/rent-schedule/modal-add-event/modal-add-event.component';
import { TDSTimePickerModule } from 'tds-ui/time-picker';
import { ModalAddGuestComponent } from './components/rent-schedule/modal-add-guest/modal-add-guest.component';
import { TDSUploadModule } from 'tds-ui/upload';

import { ModalDeleteResourceSticketComponent } from './components/modal-delete-resource-sticket/modal-delete-resource-sticket.component';
import { ModalRefundResourceSticketComponent } from './components/modal-refund-resource-sticket/modal-refund-resource-sticket.component';
import { TDSTableModule } from 'tds-ui/table';
import { TDSDividerModule } from 'tds-ui/divider';
import { TDSEchartsModule } from 'tds-report';
import { CheckBusyParticipantPipe } from './pipe/check-busy-participant.pipe';

@NgModule({
  declarations: [

    PropertyManagementComponent,
    RentScheduleComponent,
    PersonalRentComponent,
    StatisticComponent,
    ModalDeleteResourceSticketComponent,
    ModalRefundResourceSticketComponent,
    ModalShowInviteeComponent,
    ScheduleDetailsComponent,
    ModalAddEventComponent,
    ModalAddGuestComponent,
    CheckBusyParticipantPipe,


  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PropertyManagementRoutingModule,
    TDSPageHeaderModule,
    TDSTagModule,
    TDSFormFieldModule,
    TDSButtonMenuModule,
    TDSPopoverModule,
    TDSDatePickerModule,
    TDSFilterStatusModule,
    TDSDropDownModule,
    TDSButtonModule,
    TDSInputModule,
    TDSBadgeModule,
    TDSToolTipModule,
    TDSMessageModule,
    TDSEmptyModule,
    TDSModalModule,
    TDSSelectModule,
    TDSCalendarModule,
    TDSSpinnerModule,
    TDSEmptyModule,
    TDSModalModule,
    TDSAvatarModule,
    TDSTimePickerModule,
    TDSTableModule,
    TDSUploadModule,
    TDSSelectModule,
    TDSTableModule,
    TDSDividerModule,
    TDSEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ],
  providers: [
    DatePipe,
  ],
})
export class PropertyManagementModule { }
