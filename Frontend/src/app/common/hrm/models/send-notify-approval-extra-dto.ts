/* tslint:disable */
/* eslint-disable */
import { KeepingRequestStatus } from './keeping-request-status';
export interface SendNotifyApprovalExtraDto {
  approvalTime: string;
  fromTime?: null | string;
  fullName: string;
  image?: null | string;
  statusName: KeepingRequestStatus;
  timeZone?: null | Array<string>;
  toTime?: null | string;
  userId?: null | string;
  workingDate?: null | string;
}
