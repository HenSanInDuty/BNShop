/* tslint:disable */
/* eslint-disable */
import { FurloughKindDto } from './furlough-kind-dto';
import { ShiftDto } from './shift-dto';
export interface KeepingOtherFurDto {
  factor?: number;
  furloughKind?: FurloughKindDto;
  furloughKindId?: null | string;
  isPaid?: boolean;
  requestId?: null | string;
  shift?: ShiftDto;
  shiftId?: null | string;
  shiftKeepingNumber?: number;
  userId?: null | string;
  workingDate?: string;
}
