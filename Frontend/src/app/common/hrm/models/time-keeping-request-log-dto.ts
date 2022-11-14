/* tslint:disable */
/* eslint-disable */
import { AppUserDisplayDto } from './app-user-display-dto';
import { KeepingRequestStatus } from './keeping-request-status';
export interface TimeKeepingRequestLogDto {
  creationTime?: string;
  creatorId?: null | string;
  newStatus?: KeepingRequestStatus;
  newStatusMessage?: null | string;
  oldStatus?: KeepingRequestStatus;
  oldStatusMessage?: null | string;
  requestId?: null | string;
  userChange?: AppUserDisplayDto;
}
