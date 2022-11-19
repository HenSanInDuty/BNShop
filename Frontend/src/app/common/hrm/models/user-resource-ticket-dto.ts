/* tslint:disable */
/* eslint-disable */
import { MemberDto } from './member-dto';
import { ResourceTicketStatus } from './resource-ticket-status';
export interface UserResourceTicketDto {
  branchId?: null | string;
  branchName?: null | string;
  checkIn?: null | string;
  checkOut?: null | string;
  currentResourceTicketStatus?: ResourceTicketStatus;
  description?: null | string;
  endTime?: string;
  id?: null | string;
  isMember?: boolean;
  members?: null | Array<MemberDto>;
  ownerName?: null | string;
  resourceId?: null | string;
  resourceName?: null | string;
  resourceTicketStatusName?: null | string;
  resourceTypeId?: null | string;
  startTime?: string;
  title?: null | string;
  userId?: null | string;
}
