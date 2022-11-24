/* tslint:disable */
/* eslint-disable */
import { IanaTimeZone } from './iana-time-zone';
import { WindowsTimeZone } from './windows-time-zone';
export interface TimeZone {
  iana?: IanaTimeZone;
  windows?: WindowsTimeZone;
}
