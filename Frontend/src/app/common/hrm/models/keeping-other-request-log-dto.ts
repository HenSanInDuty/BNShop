/* tslint:disable */
/* eslint-disable */
import { AppUserDisplayDto } from './app-user-display-dto';
import { KeepingOtherKind } from './keeping-other-kind';
import { KeepingRequestStatus } from './keeping-request-status';
export interface KeepingOtherRequestLogDto {
  creationTime?: string;
  creatorId?: null | string;
  from?: string;
  kind?: KeepingOtherKind;
  newStatus?: KeepingRequestStatus;
  newStatusMessage?: null | string;
  oldStatus?: KeepingRequestStatus;
  oldStatusMessage?: null | string;
  requestId?: null | string;
  to?: string;
  userChange?: AppUserDisplayDto;
  userId?: null | string;
}
