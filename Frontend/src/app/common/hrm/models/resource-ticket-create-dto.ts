/* tslint:disable */
/* eslint-disable */
import { ParticipantCreateDto } from './participant-create-dto';
export interface ResourceTicketCreateDto {
  description?: null | string;
  endTime: string;
  participants?: null | Array<ParticipantCreateDto>;
  resourceId: string;
  startTime: string;
  title: string;
}
