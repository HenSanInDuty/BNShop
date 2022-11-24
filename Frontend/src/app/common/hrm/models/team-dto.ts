/* tslint:disable */
/* eslint-disable */
import { AppUserDisplayDto } from './app-user-display-dto';
export interface TeamDto {
  countMember?: number;
  description?: null | string;
  id?: null | string;
  leaderId?: null | string;
  leaderName?: null | string;
  members?: null | Array<AppUserDisplayDto>;
  name?: null | string;
}
