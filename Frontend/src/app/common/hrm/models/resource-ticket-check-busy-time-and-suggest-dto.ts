/* tslint:disable */
/* eslint-disable */
import { ResourceTicketCheckBusyTimeDto } from './resource-ticket-check-busy-time-dto';
import { ResourceTicketSuggestTimeDto } from './resource-ticket-suggest-time-dto';
export interface ResourceTicketCheckBusyTimeAndSuggestDto {
  suggestTime?: ResourceTicketSuggestTimeDto;
  userAndIsBusy?: null | Array<ResourceTicketCheckBusyTimeDto>;
}
