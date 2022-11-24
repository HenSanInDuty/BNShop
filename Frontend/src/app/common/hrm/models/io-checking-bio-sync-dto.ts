/* tslint:disable */
/* eslint-disable */
import { IoChekingRecord } from './io-cheking-record';
export interface IoCheckingBioSyncDto {
  deviceName: string;
  latestUpdate?: string;
  records?: null | Array<IoChekingRecord>;
}
