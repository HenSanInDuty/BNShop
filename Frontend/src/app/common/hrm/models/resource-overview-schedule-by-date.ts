/* tslint:disable */
/* eslint-disable */
import { ResourceOverviewScheduleTicketValueDto } from './resource-overview-schedule-ticket-value-dto';
export interface ResourceOverviewScheduleByDate {
  date?: string;
  totalBook?: number;
  values?: null | Array<ResourceOverviewScheduleTicketValueDto>;
}
