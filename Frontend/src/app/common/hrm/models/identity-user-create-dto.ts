/* tslint:disable */
/* eslint-disable */
export interface IdentityUserCreateDto {
  email: string;
  extraProperties?: null | {
[key: string]: any;
};
  isActive?: boolean;
  lockoutEnabled?: boolean;
  name?: null | string;
  password: string;
  phoneNumber?: null | string;
  roleNames?: null | Array<string>;
  surname?: null | string;
  userName: string;
}
