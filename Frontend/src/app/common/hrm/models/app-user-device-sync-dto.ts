/* tslint:disable */
/* eslint-disable */
import { BranchDto } from './branch-dto';
import { DepartmentDto } from './department-dto';
import { PositionDto } from './position-dto';
import { SexType } from './sex-type';
export interface AppUserDeviceSyncDto {
  address?: null | string;
  branch?: BranchDto;
  branchId?: null | string;
  code?: null | string;
  dateOfBirth?: null | string;
  department?: DepartmentDto;
  departmentId?: null | string;
  email?: null | string;
  fullName?: null | string;
  id?: null | string;
  images?: null | Array<string>;
  isActive?: boolean;
  name?: null | string;
  phoneNumber?: null | string;
  position?: PositionDto;
  positionId?: null | string;
  sex?: SexType;
  sexName?: null | string;
  surname?: null | string;
  vocative?: null | string;
}
