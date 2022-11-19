/* tslint:disable */
/* eslint-disable */
import { AttachmentRDto } from './attachment-r-dto';
import { SexType } from './sex-type';
export interface AppUserDto {
  attachments?: null | Array<AttachmentRDto>;
  avatar?: null | string;
  branchId?: null | string;
  branchName?: null | string;
  citizenIdentification?: null | string;
  code?: null | string;
  companyEmail?: null | string;
  dateOfBirth?: null | string;
  departmentId?: null | string;
  departmentName?: null | string;
  email?: null | string;
  fullName?: null | string;
  grantDate?: null | string;
  grantLocation?: null | string;
  homeTown?: null | string;
  id?: null | string;
  isActive?: boolean;
  language?: null | string;
  name?: null | string;
  phoneNumber?: null | string;
  positionId?: null | string;
  positionName?: null | string;
  residentAdress?: null | string;
  sex?: SexType;
  sexName?: null | string;
  startTime?: null | string;
  surname?: null | string;
  taxTodeIndividual?: null | string;
  temporaryAdress?: null | string;
  userName?: null | string;
  vocative?: null | string;
}
