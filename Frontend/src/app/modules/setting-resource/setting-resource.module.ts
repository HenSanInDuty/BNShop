import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingResourceRoutingModule } from './setting-resource-routing.module';
import { ProductManagementComponent } from './pages/product-management/product-management.component';
import { TimeAttendanceManagementComponent } from './pages/time-attendance-management/time-attendance-management.component';
import { SettingResourceComponent } from './setting-resource.component';
import { TDSTagModule } from 'tds-ui/tag';
import { TDSPageHeaderModule } from 'tds-ui/page-header';
import { TDSTableModule } from 'tds-ui/table';
import { TDSFilterStatusModule } from 'tds-ui/filter-status';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSSwitchModule } from 'tds-ui/switch';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSSelectModule } from 'tds-ui/select';
import { TDSMessageModule } from 'tds-ui/message';
import { TDSSpinnerModule } from 'tds-ui/progress-spinner';
import { ModalDeleteAllComponent } from './components/modal-delete-all/modal-delete-all.component';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { HolidaysManagementComponent } from './pages/holidays-management/holidays-management.component';
import { ShiftComponent } from './pages/shift/shift.component';
import { ModalAddEditShiftComponent } from './components/modal-add-edit-shift/modal-add-edit-shift.component';
import { TDSTimePickerModule } from 'tds-ui/time-picker';
import { TDSInputNumberModule } from 'tds-ui/input-number';
import { TDSCheckBoxModule } from 'tds-ui/tds-checkbox';
import { ModalAddEditHolidaysComponent } from './components/modal-add-edit-holidays/modal-add-edit-holidays.component';
import { TDSDatePickerModule } from 'tds-ui/date-picker';
import { FurloughKindManagementComponent } from './pages/furlough-kind-management/furlough-kind-management.component';
import { ModalAddEditFurloughKindComponent } from './components/modal-add-edit-furlough-kind/modal-add-edit-furlough-kind.component';
import { TDSRadioModule } from 'tds-ui/radio';
import { ModalAddEditWorkingKindComponent } from './components/modal-add-edit-working-kind/modal-add-edit-working-kind.component';
import { WorkingKindManagementComponent } from './pages/working-kind-management/working-kind-management.component';
import { ModalActiveResourceComponent } from './components/modal-active-resource/modal-active-resource.component';
import { ModalAddEditTimeKeepperComponent } from './components/modal-add-edit-category/modal-add-edit-category.component';
import { ModalAdminDeviceComponent } from './components/modal-admin-device/modal-admin-device.component';
import { ModalGetStaffComponent } from './components/modal-get-staff/modal-get-staff.component';
import { TDSAvatarModule } from 'tds-ui/avatar';
import { CompanyComponent } from './pages/company/company.component';
import { TDSDividerModule } from 'tds-ui/divider';
import { TDSUploadModule } from 'tds-ui/upload';
import { ModalAddEditCompanyComponent } from './components/modal-add-edit-company/modal-add-edit-company.component';
import { ModalAddEditBranchCompanyComponent } from './components/modal-add-edit-branch-company/modal-add-edit-branch-company.component';
import { ResourceTypeManagementComponent } from './pages/resource-type-management/resource-type-management.component';
import { ProductComponent } from './pages/product/product.component';
import { ModalAddEditProductComponent } from './components/modal-add-edit-product/modal-add-edit-product.component';
import { TDSTabsModule } from 'tds-ui/tabs';
import { TDSTreeModule } from 'tds-ui/tree';
import { TDSCollapseModule } from 'tds-ui/collapse';
import { TDSStepsModule } from 'tds-ui/step';
import { TDSNotificationModule } from 'tds-ui/notification';
import { TDSFlexModule } from 'tds-ui/flex';
import { TDSImageModule } from 'tds-ui/image';
import { TDSEmptyModule } from 'tds-ui/empty';
import { HttpClientModule } from '@angular/common/http';
import { CategoryManagementComponent } from './pages/category-management/category-management.component';


@NgModule({
  declarations: [
    TimeAttendanceManagementComponent,
    SettingResourceComponent,
    ModalActiveResourceComponent,
    ModalDeleteAllComponent,
    ShiftComponent,
    HolidaysManagementComponent,
    ModalAddEditShiftComponent,
    ModalAddEditHolidaysComponent,
    FurloughKindManagementComponent,
    ModalAddEditFurloughKindComponent,
    ModalAddEditWorkingKindComponent,
    WorkingKindManagementComponent,
    ModalAddEditTimeKeepperComponent,
    ModalAdminDeviceComponent,
    ModalGetStaffComponent,
    CompanyComponent,
    ModalAddEditCompanyComponent,
    ModalAddEditBranchCompanyComponent,
    ResourceTypeManagementComponent,
    ProductComponent,
    ProductManagementComponent,
    CategoryManagementComponent,
    ModalAddEditProductComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SettingResourceRoutingModule,
    TDSTagModule,
    TDSPageHeaderModule,
    TDSTableModule,
    TDSFilterStatusModule,
    TDSFormFieldModule,
    TDSInputModule,
    TDSButtonModule,
    TDSSwitchModule,
    TDSModalModule,
    TDSSelectModule,
    TDSMessageModule,
    TDSSpinnerModule,
    TDSDropDownModule,
    TDSTimePickerModule,
    TDSInputNumberModule,
    TDSCheckBoxModule,
    TDSDatePickerModule,
    TDSRadioModule,
    TDSAvatarModule,
    TDSDividerModule,
    TDSUploadModule,
    TDSTabsModule,
    TDSTreeModule,
    TDSCollapseModule,
    TDSStepsModule,
    TDSNotificationModule,
    TDSFlexModule,
    TDSImageModule,
    TDSEmptyModule,
    TDSInputNumberModule,
    HttpClientModule
  ],
})
export class SettingResourceModule { }
