import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './component/chat/chat.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { SettingMessageComponent } from './component/setting-message/setting-message.component';
import { AddShortcutComponent } from './component/add-shortcut/add-shortcut.component';
import { ModalBlockComponent } from './component/modal-block/modal-block.component';
import { ModalUnblockComponent } from './component/modal-unblock/modal-unblock.component';
import { RemoveMessageComponent } from './component/remove-message/remove-message.component';
import { ModalCusComponent } from './component/modal-cus/modal-cus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DasboardComponent } from './component/dasboard/dasboard.component';
import { MessageRoutingModule } from './message-routing.module';
import { TDSPageHeaderModule } from 'tds-ui/page-header';
import { TDSBadgeModule } from 'tds-ui/badges';
import { TDSBreadCrumbModule } from 'tds-ui/breadcrumb';
import { TDSButtonModule } from 'tds-ui/button';
import { TDSCollapseModule } from 'tds-ui/collapse';
import { TDSDropDownModule } from 'tds-ui/dropdown';
import { TDSFilterStatusModule } from 'tds-ui/filter-status';
import { TDSFormFieldModule } from 'tds-ui/form-field';
import { TDSMenuModule } from 'tds-ui/menu';
import { TDSModalModule } from 'tds-ui/modal';
import { TDSSelectModule } from 'tds-ui/select';
import { TDSStepsModule } from 'tds-ui/step';
import { TDSSwitchModule } from 'tds-ui/switch';
import { TDSTableModule } from 'tds-ui/table';
import { TDSTabsModule } from 'tds-ui/tabs';
import { TDSTagModule } from 'tds-ui/tag';
import { TDSCheckBoxModule } from 'tds-ui/tds-checkbox';
import { TDSInputModule } from 'tds-ui/tds-input';
import { TDSTimePickerModule } from 'tds-ui/time-picker';
import { TDSHeaderModule } from 'tds-ui/header';
import { TDSAvatarModule } from 'tds-ui/avatar';


@NgModule({
  declarations: [ChatComponent, LayoutAdminComponent, SettingMessageComponent, AddShortcutComponent, ModalBlockComponent, ModalUnblockComponent, RemoveMessageComponent, ModalCusComponent,DasboardComponent, ],
  imports: [
    RouterModule,
    CommonModule,
    MessageRoutingModule,
    TDSPageHeaderModule,
    TDSFormFieldModule,
    TDSSelectModule,
    TDSButtonModule,
    TDSInputModule,
    TDSMenuModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
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
    TDSHeaderModule,
    TDSAvatarModule
    
    


  ],
  exports: [ChatComponent, LayoutAdminComponent],
})
export class MessageModule { }
