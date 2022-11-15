/* tslint:disable */
/* eslint-disable */
import { ParticipantDto } from './participant-dto';
export interface ResourceTicketUpdateDto {
  description?: null | string;
  endTime: string;
  participants?: null | Array<ParticipantDto>;
  resourceId: string;
  startTime: string;
  title: string;
}
