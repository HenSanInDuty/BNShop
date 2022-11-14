/* tslint:disable */
/* eslint-disable */
import { ResourceTicketRangeTimeDto } from './resource-ticket-range-time-dto';
export interface ResourceTicketSuggestTimeDto {
  isBusy?: null | boolean;
  rangeTimeFrees?: null | Array<ResourceTicketRangeTimeDto>;
  rangeTimeSuggests?: null | Array<ResourceTicketRangeTimeDto>;
}
