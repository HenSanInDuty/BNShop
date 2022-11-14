/* tslint:disable */
/* eslint-disable */
import { SexType } from './sex-type';
export interface AppUserCreateDto {
  branch: string;
  citizenIdentification?: null | string;
  companyEmail?: null | string;
  dateOfBirth?: null | string;
  department: string;
  email?: null | string;
  fullName: string;
  grantDate?: null | string;
  grantLocation?: null | string;
  homeTown?: null | string;
  name?: null | string;
  phoneNumber: string;
  position: string;
  residentAdress?: null | string;
  sex: SexType;
  startTime?: null | string;
  surname?: null | string;
  taxTodeIndividual?: null | string;
  temporaryAdress?: null | string;
  vocative?: null | string;
}
