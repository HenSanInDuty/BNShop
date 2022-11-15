import { ResourceTicketStatus } from "@commom/hrm/models";

export interface PersonalResourceTicketDTO {
  from: string;
  to: string;
  maxResultCount?: number;
  skipCount: number;
  ticketStatus?: ResourceTicketStatus;
}
