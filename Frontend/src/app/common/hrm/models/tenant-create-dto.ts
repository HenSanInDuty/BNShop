/* tslint:disable */
/* eslint-disable */
export interface TenantCreateDto {
  adminEmailAddress: string;
  adminPassword: string;
  extraProperties?: null | {
[key: string]: any;
};
  name: string;
}
