/* tslint:disable */
/* eslint-disable */
import { AttachmentRDto } from './attachment-r-dto';
import { KeepingDto } from './keeping-dto';
export interface AppUserKeepingDto {
  annualLeaveDay?: number;
  attachments?: null | Array<AttachmentRDto>;
  avatar?: null | string;
  code?: null | string;
  dateOfBirth?: null | string;
  email?: null | string;
  fullName?: null | string;
  id?: null | string;
  keepingDtos?: null | Array<KeepingDto>;
  name?: null | string;
  phoneNumber?: null | string;
  positionId?: null | string;
  positionName?: null | string;
  startTime?: string;
  surname?: null | string;
  userName?: null | string;
}
