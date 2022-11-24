/* tslint:disable */
/* eslint-disable */
import { AppUserDisplayDto } from './app-user-display-dto';
import { KeepingOtherKind } from './keeping-other-kind';
import { KeepingOtherRequestLogDto } from './keeping-other-request-log-dto';
import { KeepingRequestStatus } from './keeping-request-status';
import { ShiftDto } from './shift-dto';
export interface KeepingOtherRequestDto {
  description?: null | string;
  from?: string;
  id?: null | string;
  includingSat?: boolean;
  includingSun?: boolean;
  kind?: KeepingOtherKind;
  kindId?: null | string;
  kindObject?: null | any;
  logs?: null | Array<KeepingOtherRequestLogDto>;
  shift?: ShiftDto;
  shiftId?: null | string;
  status?: KeepingRequestStatus;
  statusMessage?: null | string;
  to?: string;
  undoValidLogId?: null | string;
  user?: AppUserDisplayDto;
  userId?: null | string;
}
