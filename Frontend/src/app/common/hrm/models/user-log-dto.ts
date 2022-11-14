/* tslint:disable */
/* eslint-disable */
import { TrackingValue } from './tracking-value';
export interface UserLogDto {
  branchName?: null | string;
  departmentName?: null | string;
  fullName?: null | string;
  positionName?: null | string;
  startWorkingDate?: null | string;
  trackingValues?: null | Array<TrackingValue>;
  userId?: null | string;
}
