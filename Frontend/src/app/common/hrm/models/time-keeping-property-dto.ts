/* tslint:disable */
/* eslint-disable */
import { TimeKeepingKind } from './time-keeping-kind';
export interface TimeKeepingPropertyDto {
  kind?: TimeKeepingKind;
  messageKind?: null | string;
  userId?: null | string;
  value?: number;
  workingDate?: string;
}
