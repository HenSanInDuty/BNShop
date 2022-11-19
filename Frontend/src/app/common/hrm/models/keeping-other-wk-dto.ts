/* tslint:disable */
/* eslint-disable */
import { ShiftDto } from './shift-dto';
import { WorkingKindDto } from './working-kind-dto';
export interface KeepingOtherWkDto {
  factor?: number;
  isPaid?: boolean;
  requestId?: null | string;
  shift?: ShiftDto;
  shiftId?: null | string;
  shiftKeepingNumber?: number;
  userId?: null | string;
  workingDate?: string;
  workingKind?: WorkingKindDto;
  workingKindId?: null | string;
}
