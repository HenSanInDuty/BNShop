/* tslint:disable */
/* eslint-disable */
import { ShiftDto } from './shift-dto';
import { TimeKeepingKind } from './time-keeping-kind';
import { TimeKeepingPropertyDto } from './time-keeping-property-dto';
export interface TimeKeepingDto {
  actualKeepingNumber?: number;
  caculateKeepingNumber?: number;
  changTime?: boolean;
  inTime?: null | string;
  inTimeOffset?: string;
  kind?: TimeKeepingKind;
  outTime?: null | string;
  outTimeOffset?: null | string;
  shift?: ShiftDto;
  shiftId?: null | string;
  shiftKeepingNumber?: number;
  timeKeepingProperties?: null | Array<TimeKeepingPropertyDto>;
  userId?: null | string;
  workingDate?: string;
}
