import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrManagementRoutingModule } from './hr-management-routing.module';
import { StaffComponent } from './pages/staff/staff.component';
import { TeamComponent } from './pages/team/team.component';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSSelectModule } from 'tds-ui/select';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSTableModule } from 'tds-ui/table';
import { DepartmentComponent } from './pages/department/department.component';
import { PositionComponent } from './pages/position/position.component';
import { TDSTagModule } from 'tds-ui/tag';
import { ModalAddStaffComponent } from './components/staff/modal-add-staff/modal-add-staff.component';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSUploadModule } from 'tds-ui/upload';
import { TDSRadioModule } from 'tds-ui/radio';
import { TDSDatePickerModule } from 'tds-ui/date-picker';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { TDSInputNumberModule } from 'tds-ui/input-number';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TDSMessageService } from 'tds-ui/message';
import { TDSSpinnerModule } from 'tds-ui/progress-spinner';
import { ModalDuplicateStaffComponent } from './components/staff/modal-duplicate-staff/modal-duplicate-staff.component';
import { StaffDetailComponent } from './pages/staff-detail/staff-detail.component';
import { TDSBreadCrumbModule } from 'tds-ui/breadcrumb';
import { ModalUpdateStaffComponent } from './components/staff/modal-update-staff/modal-update-staff.component';
import { ModalAddDepartmentComponent } from './components/department/modal-add-department/modal-add-department.component';
import { ModalEditDepartmentComponent } from './components/department/modal-edit-department/modal-edit-department.component';
import { TDSTimelineModule } from 'tds-ui/timeline';
import { TDSPopoverModule } from 'tds-ui/popover';
import { ModalAddPositionComponent } from './components/position/modal-add-position/modal-add-position.component';
import { TableShiftComponent } from './components/department/table-shift/table-shift.component';
import { MemberListComponent } from './components/team/member-list/member-list.component';
import { ModalAddMemberComponent } from './components/team/modal-add-member/modal-add-member.component';
import { ModalAddTeamComponent } from './components/team/modal-add-team/modal-add-team.component';
import { TDSEmptyModule } from 'tds-ui/empty';
import { ValidateTimePipe } from './pipe/validate-time.pipe';
import { TDSImageModule } from 'tds-ui/image';
import { TDSCollapseModule } from 'tds-ui/collapse';


@NgModule({
  declarations: [
    StaffComponent,
    TeamComponent,
    DepartmentComponent,
    PositionComponent,
    ModalAddStaffComponent,
    ModalDuplicateStaffComponent,
    StaffDetailComponent,
    ModalUpdateStaffComponent,
    ModalAddDepartmentComponent,
    ModalEditDepartmentComponent,
    ModalAddPositionComponent,
    TableShiftComponent,
    MemberListComponent,
    ModalAddMemberComponent,
    ModalAddTeamComponent,
    ValidateTimePipe,
  ],
  imports: [
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
    TDSEmptyModule,
    TDSImageModule,
    TDSCollapseModule
  ],
  providers: [
    TDSMessageService
  ]
})
export class HrManagementModule { }
