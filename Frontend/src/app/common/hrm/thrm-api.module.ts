/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { THRMApiConfiguration, THRMApiConfigurationParams } from './thrm-api-configuration';

import { AbpApiDefinitionService } from './services/abp-api-definition.service';
import { AbpApplicationConfigurationService } from './services/abp-application-configuration.service';
import { AbpTenantService } from './services/abp-tenant.service';
import { AccountService } from './services/account.service';
import { AttachmentRService } from './services/attachment-r.service';
import { BioDeviceService } from './services/bio-device.service';
import { BranchService } from './services/branch.service';
import { CompanyService } from './services/company.service';
import { DepartmentService } from './services/department.service';
import { DepartmentShiftService } from './services/department-shift.service';
import { DeviceService } from './services/device.service';
import { EmailSettingsService } from './services/email-settings.service';
import { FeaturesService } from './services/features.service';
import { FurloughKindService } from './services/furlough-kind.service';
import { HolidayService } from './services/holiday.service';
import { IoCheckingService } from './services/io-checking.service';
import { KeepingOtherService } from './services/keeping-other.service';
import { MenuService } from './services/menu.service';
import { NotificationService } from './services/notification.service';
import { PermissionsService } from './services/permissions.service';
import { PositionService } from './services/position.service';
import { ProfileService } from './services/profile.service';
import { ResourceService } from './services/resource.service';
import { ResourceTicketService } from './services/resource-ticket.service';
import { ResourceTypeService } from './services/resource-type.service';
import { RoleService } from './services/role.service';
import { ShiftService } from './services/shift.service';
import { SignInService } from './services/sign-in.service';
import { SignUpService } from './services/sign-up.service';
import { SocialAccountService } from './services/social-account.service';
import { SyncDataAiService } from './services/sync-data-ai.service';
import { TeamService } from './services/team.service';
import { TeamUserService } from './services/team-user.service';
import { TenantService } from './services/tenant.service';
import { TimeKeepingService } from './services/time-keeping.service';
import { UserService } from './services/user.service';
import { UserLogService } from './services/user-log.service';
import { UserLookupService } from './services/user-lookup.service';
import { WorkingKindService } from './services/working-kind.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AbpApiDefinitionService,
    AbpApplicationConfigurationService,
    AbpTenantService,
    AccountService,
    AttachmentRService,
    BioDeviceService,
    BranchService,
    CompanyService,
    DepartmentService,
    DepartmentShiftService,
    DeviceService,
    EmailSettingsService,
    FeaturesService,
    FurloughKindService,
    HolidayService,
    IoCheckingService,
    KeepingOtherService,
    MenuService,
    NotificationService,
    PermissionsService,
    PositionService,
    ProfileService,
    ResourceService,
    ResourceTicketService,
    ResourceTypeService,
    RoleService,
    ShiftService,
    SignInService,
    SignUpService,
    SocialAccountService,
    SyncDataAiService,
    TeamService,
    TeamUserService,
    TenantService,
    TimeKeepingService,
    UserService,
    UserLogService,
    UserLookupService,
    WorkingKindService,
    THRMApiConfiguration
  ],
})
export class THRMApiModule {
  static forRoot(params: THRMApiConfigurationParams): ModuleWithProviders<THRMApiModule> {
    return {
      ngModule: THRMApiModule,
      providers: [
        {
          provide: THRMApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: THRMApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('THRMApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
