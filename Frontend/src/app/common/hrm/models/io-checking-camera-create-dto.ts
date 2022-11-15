/* tslint:disable */
/* eslint-disable */
import { IoCheckingType } from './io-checking-type';
export interface IoCheckingCameraCreateDto {
  checkTime: string;
  code: string;
  deviceName: string;
  image?: null | string;
  ioCheckingType?: IoCheckingType;
  source: string;
  workingDate: string;
}
