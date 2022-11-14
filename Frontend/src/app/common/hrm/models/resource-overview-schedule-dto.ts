/* tslint:disable */
/* eslint-disable */
import { ResourceOverviewScheduleByDate } from './resource-overview-schedule-by-date';
export interface ResourceOverviewScheduleDto {
  isMultiParticipant?: null | boolean;
  resourceId?: null | string;
  resourceName?: null | string;
  resourceTicketByDates?: null | Array<ResourceOverviewScheduleByDate>;
}
