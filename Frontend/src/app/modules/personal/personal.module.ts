import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { TimekeepingComponent } from './pages/timekeeping/timekeeping.component';
import { TDSTagModule } from 'tds-ui/tag';
import { TDSPageHeaderModule } from 'tds-ui/page-header';
import { TableTimeKeepingComponent } from './components/table-time-keeping/table-time-keeping.component';
import { TDSDatePickerModule } from 'tds-ui/date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TDSInputModule } from 'tds-ui/tds-input';
import { SummaryWorkingDateComponent } from './components/summary-working-date/summary.component';
import { TDSDividerModule } from 'tds-ui/divider';
import { TDSTableModule } from 'tds-ui/table';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSFilterStatusModule } from 'tds-ui/filter-status';
import localeVi from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';
import { ModalLeaveApplicationComponent } from './components/modal-leave-application/modal-leave-application.component';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSSpinnerModule } from 'tds-ui/progress-spinner';
import { TDSInputNumberModule } from 'tds-ui/input-number';
import { TDSSelectModule } from 'tds-ui/select';
import { TDSCheckBoxModule } from 'tds-ui/tds-checkbox';
import { TDSMessageModule } from 'tds-ui/message';
import { ModalWorkingDateComponent } from './components/modal-working-date/modal-working-date.component';
import { ModalCreateRequestTimeKeepingComponent } from './components/modal-create-request-time-keeping/modal-create-request-time-keeping.component';
import { TDSStepsModule } from 'tds-ui/step';
import { ModalAddImgTimeKeepingComponent } from './components/modal-add-img-time-keeping/modal-add-img-time-keeping.component';
import { TDSEmptyModule } from 'tds-ui/empty';
import { TDSUploadModule } from 'tds-ui/upload';
import { TDSImageModule } from 'tds-ui/image';
import { DragDropModule } from '@angular/cdk/drag-drop';


registerLocaleData(localeVi);
@NgModule({
  declarations: [
    TimekeepingComponent,
    TableTimeKeepingComponent,
    SummaryWorkingDateComponent,
    ModalLeaveApplicationComponent,
    ModalWorkingDateComponent,
    ModalCreateRequestTimeKeepingComponent,
    ModalAddImgTimeKeepingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PersonalRoutingModule,
    TDSTagModule,
    TDSPageHeaderModule,
    TDSDatePickerModule,
    TDSInputModule,
    TDSDividerModule,
    TDSTableModule,
    TDSButtonModule,
    TDSFilterStatusModule,
    TDSModalModule,
    TDSSpinnerModule,
    TDSInputNumberModule,
    TDSSelectModule,
    TDSCheckBoxModule,
    TDSMessageModule,
    TDSStepsModule,
    TDSEmptyModule,
    TDSUploadModule,
    TDSImageModule,
    DragDropModule

  ],
  providers: [
    { provide: LOCALE_ID, useValue: "vi" }, //replace "de-at" with your locale
    //otherProviders...
  ]
})
export class PersonalModule { }
