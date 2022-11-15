import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TimekeeperManagementRoutingModule } from './timekeeper-management-routing.module';
import { TimesheetsComponent } from './pages/timesheets/timesheets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSBreadCrumbModule } from 'tds-ui/breadcrumb';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSDatePickerModule } from 'tds-ui/date-picker';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSInputNumberModule } from 'tds-ui/input-number';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSPopoverModule } from 'tds-ui/popover';
import { TDSSpinnerModule } from 'tds-ui/progress-spinner';
import { TDSRadioModule } from 'tds-ui/radio';
import { TDSSelectModule } from 'tds-ui/select';
import { TDSTableModule } from 'tds-ui/table';
import { TDSTagModule } from 'tds-ui/tag';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSTimelineModule } from 'tds-ui/timeline';
import { TDSUploadModule } from 'tds-ui/upload';
import { HrManagementRoutingModule } from '../hr-management/hr-management-routing.module';
import { HrManagementModule } from '../hr-management/hr-management.module';
import { WorkDayPipe } from './pipes/work-day.pipe';
import { TotalWorkPipe } from './pipes/total-work.pipe';
import { LeaveHistoryComponent } from './pages/leave-history/leave-history.component';
import { ConfirmWorkComponent } from './pages/confirm-work/confirm-work.component';
import { TDSPageHeaderModule } from 'tds-ui/page-header';
import { ConfirmWorkFormComponent } from './components/confirm-work/confirm-work-form/confirm-work-form.component';
import { HistoryConfirmComponent } from './components/confirm-work/history-confirm-time-keeping/history-confirm.component';
import { LeaveAbsenceComponent } from './components/leave-absence-and-woking-form/leave-absence/leave-absence.component';
import { HistoryConfirmKeepingOtherComponent } from './components/leave-absence-and-woking-form/history-confirm-keeping-other/history-confirm-keeping-other.component';

@NgModule({
  declarations: [
    TimesheetsComponent,
    WorkDayPipe,
    TotalWorkPipe,
    LeaveHistoryComponent,
    ConfirmWorkComponent,
    ConfirmWorkFormComponent,
    HistoryConfirmComponent,
    LeaveAbsenceComponent,
    HistoryConfirmKeepingOtherComponent,
    
  ],
  imports: [
    CommonModule,
    HrManagementModule,
    TimekeeperManagementRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HrManagementRoutingModule,
    TDSButtonModule,
    TDSSelectModule,
    TDSFormFieldModule,
    TDSInputModule,
    TDSTableModule,
    TDSTagModule,
    TDSModalModule,
    TDSUploadModule,
    TDSRadioModule,
    TDSDatePickerModule,
    TDSAvatarModule,
    TDSInputNumberModule,
    TDSSpinnerModule,
    TDSBreadCrumbModule,
    TDSTimelineModule,
    TDSPopoverModule,
    TDSDatePickerModule,
    TDSPageHeaderModule,
  ],
  providers:[
    DatePipe
  ]
})
export class TimekeeperManagementModule { }
