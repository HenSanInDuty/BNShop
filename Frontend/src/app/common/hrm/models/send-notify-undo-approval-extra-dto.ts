/* tslint:disable */
/* eslint-disable */
import { KeepingRequestStatus } from './keeping-request-status';
export interface SendNotifyUndoApprovalExtraDto {
  currentStatus: KeepingRequestStatus;
  fromTime?: null | string;
  fullName: string;
  image?: null | string;
  timeZone?: null | Array<string>;
  toTime?: null | string;
  undoTime: string;
  userId?: null | string;
  workingDate?: null | string;
}
