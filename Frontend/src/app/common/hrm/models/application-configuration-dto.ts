/* tslint:disable */
/* eslint-disable */
import { ApplicationAuthConfigurationDto } from './application-auth-configuration-dto';
import { ApplicationFeatureConfigurationDto } from './application-feature-configuration-dto';
import { ApplicationLocalizationConfigurationDto } from './application-localization-configuration-dto';
import { ApplicationSettingConfigurationDto } from './application-setting-configuration-dto';
import { ClockDto } from './clock-dto';
import { CurrentTenantDto } from './current-tenant-dto';
import { CurrentUserDto } from './current-user-dto';
import { MultiTenancyInfoDto } from './multi-tenancy-info-dto';
import { ObjectExtensionsDto } from './object-extensions-dto';
import { TimingDto } from './timing-dto';
export interface ApplicationConfigurationDto {
  auth?: ApplicationAuthConfigurationDto;
  clock?: ClockDto;
  currentTenant?: CurrentTenantDto;
  currentUser?: CurrentUserDto;
  features?: ApplicationFeatureConfigurationDto;
  localization?: ApplicationLocalizationConfigurationDto;
  multiTenancy?: MultiTenancyInfoDto;
  objectExtensions?: ObjectExtensionsDto;
  setting?: ApplicationSettingConfigurationDto;
  timing?: TimingDto;
}
