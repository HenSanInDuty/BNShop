/* tslint:disable */
/* eslint-disable */
import { PermissionGrantInfoDto } from './permission-grant-info-dto';
export interface PermissionGroupDto {
  displayName?: null | string;
  name?: null | string;
  permissions?: null | Array<PermissionGrantInfoDto>;
}
