/* tslint:disable */
/* eslint-disable */
export interface IdentityUserUpdateDto {
  concurrencyStamp?: null | string;
  email: string;
  extraProperties?: null | {
[key: string]: any;
};
  isActive?: boolean;
  lockoutEnabled?: boolean;
  name?: null | string;
  password?: null | string;
  phoneNumber?: null | string;
  roleNames?: null | Array<string>;
  surname?: null | string;
  userName: string;
}
