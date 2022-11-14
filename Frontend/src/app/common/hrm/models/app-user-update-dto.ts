/* tslint:disable */
/* eslint-disable */
import { SexType } from './sex-type';
export interface AppUserUpdateDto {
  citizenIdentification?: null | string;
  companyEmail?: null | string;
  dateOfBirth?: null | string;
  email?: null | string;
  fullName: string;
  grantDate?: null | string;
  grantLocation?: null | string;
  homeTown?: null | string;
  name?: null | string;
  residentAdress?: null | string;
  sex: SexType;
  startTime?: null | string;
  surname?: null | string;
  taxTodeIndividual?: null | string;
  temporaryAdress?: null | string;
  vocative?: null | string;
}
