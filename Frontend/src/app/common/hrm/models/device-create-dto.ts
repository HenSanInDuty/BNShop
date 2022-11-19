/* tslint:disable */
/* eslint-disable */
import { DeviceType } from './device-type';
export interface DeviceCreateDto {
  apiKey: string;
  branchId?: null | string;
  description?: null | string;
  deviceId: string;
  deviceType: DeviceType;
}
