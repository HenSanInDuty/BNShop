/* tslint:disable */
/* eslint-disable */
import { ProviderInfoDto } from './provider-info-dto';
export interface PermissionGrantInfoDto {
  allowedProviders?: null | Array<string>;
  displayName?: null | string;
  grantedProviders?: null | Array<ProviderInfoDto>;
  isGranted?: boolean;
  name?: null | string;
  parentName?: null | string;
}
