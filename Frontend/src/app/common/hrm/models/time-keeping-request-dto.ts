/* tslint:disable */
/* eslint-disable */
import { AppUserDisplayDto } from './app-user-display-dto';
import { KeepingRequestStatus } from './keeping-request-status';
import { ShiftDto } from './shift-dto';
import { TimeKeepingRequestLogDto } from './time-keeping-request-log-dto';
export interface TimeKeepingRequestDto {
  creationTime?: string;
  description?: null | string;
  id?: null | string;
  inTime?: null | string;
  logs?: null | Array<TimeKeepingRequestLogDto>;
  outTime?: null | string;
  shift?: ShiftDto;
  shiftId?: null | string;
  status?: KeepingRequestStatus;
  statusMessage?: null | string;
  undoValidLogId?: null | string;
  user?: AppUserDisplayDto;
  userId?: null | string;
  workingDate?: string;
}
