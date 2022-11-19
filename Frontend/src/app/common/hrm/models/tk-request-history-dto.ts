/* tslint:disable */
/* eslint-disable */
import { AppUserDisplayDto } from './app-user-display-dto';
import { KeepingRequestStatus } from './keeping-request-status';
import { ShiftDto } from './shift-dto';
export interface TkRequestHistoryDto {
  creationTime?: string;
  currentStatus?: KeepingRequestStatus;
  currentStatusMessage?: null | string;
  description?: null | string;
  id?: null | string;
  logId?: null | string;
  shift?: ShiftDto;
  shiftId?: null | string;
  status?: KeepingRequestStatus;
  statusMessage?: null | string;
  user?: AppUserDisplayDto;
  userId?: null | string;
  workingDate?: string;
}
