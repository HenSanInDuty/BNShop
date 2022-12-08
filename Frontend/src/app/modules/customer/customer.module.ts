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
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { TDSEmptyModule } from 'tds-ui/empty';
import { ModalAddAmountComponent } from './components/modal-add-amount/modal-add-amount.component';
import { TDSInputNumberModule } from 'tds-ui/input-number';
import { TDSImageModule } from 'tds-ui/image';
import { ModalChosenAddressComponent } from './modal-chosen-address/modal-chosen-address.component';
import { ModalAddAddressComponent } from './modal-add-address/modal-add-address.component';
import { TDSAutocompleteModule } from 'tds-ui/auto-complete';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { PipeDatePipe } from 'src/app/pipes/pipe-date.pipe';
import { ProfileComponent } from './pages/profile/profile.component';
import { TDSTimelineModule } from 'tds-ui/timeline';
import { TDSRateModule } from 'tds-ui/rate';
import { OrderRefundComponent } from './pages/order-refund/order-refund.component';
import { TDSCollapseModule } from 'tds-ui/collapse';
import { LiveDatePipe } from 'src/app/pipes/live-date.pipe';
import { TDSStepsModule } from 'tds-ui/step';
import { ModalDeliveryStatusComponent } from './modal-delivery-status/modal-delivery-status.component';
import { TDSBreadCrumbModule } from 'tds-ui/breadcrumb';
import { ModalFeedbackComponent } from './components/modal-feedback/modal-feedback.component';
import { TDSUploadModule } from 'tds-ui/upload';
import { TDSDividerModule } from 'tds-ui/divider';
import { TDSEditorModule } from 'tds-editor';
import { TDSPaginationModule } from 'tds-ui/pagination';


@NgModule({
  declarations: [
    LayoutComponent,
    HomePageComponent,
    SignUpComponent,
    ProductComponent,
    ProductDetailComponent,
    ModalAddAmountComponent,
    ModalChosenAddressComponent,
    ModalAddAddressComponent,
    OrderDetailComponent,
    PipeDatePipe,
    ProfileComponent,
    OrderRefundComponent,
    LiveDatePipe,
    ModalDeliveryStatusComponent,
    ModalFeedbackComponent,

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
    TDSCarouselModule,
    TDSEmptyModule,
    TDSInputNumberModule,
    TDSImageModule,
    TDSAutocompleteModule,
    TDSTimelineModule,
    TDSRateModule,
    TDSCollapseModule,
    TDSStepsModule,
    TDSBreadCrumbModule,
    TDSUploadModule,
    TDSDividerModule,
    TDSEditorModule,
    TDSPaginationModule,
    TDSAutocompleteModule
    
  ]
})
export class CustomerModule { }
