/* tslint:disable */
/* eslint-disable */
import { KeepingOtherKind } from './keeping-other-kind';
import { ShiftDto } from './shift-dto';
export interface KeepingOtherDto {
  factor?: number;
  fullName?: null | string;
  isPaid?: boolean;
  kind?: KeepingOtherKind;
  kindById?: null | any;
  kindId?: null | string;
  requestId?: null | string;
  shift?: ShiftDto;
  shiftId?: null | string;
  shiftKeepingNumber?: number;
  userId?: null | string;
  workingDate?: string;
}
