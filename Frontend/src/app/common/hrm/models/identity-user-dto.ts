/* tslint:disable */
/* eslint-disable */
export interface IdentityUserDto {
  concurrencyStamp?: null | string;
  creationTime?: string;
  creatorId?: null | string;
  deleterId?: null | string;
  deletionTime?: null | string;
  email?: null | string;
  emailConfirmed?: boolean;
  extraProperties?: null | {
[key: string]: any;
};
  id?: null | string;
  isActive?: boolean;
  isDeleted?: boolean;
  lastModificationTime?: null | string;
  lastModifierId?: null | string;
  lockoutEnabled?: boolean;
  lockoutEnd?: null | string;
  name?: null | string;
  phoneNumber?: null | string;
  phoneNumberConfirmed?: boolean;
  surname?: null | string;
  tenantId?: null | string;
  userName?: null | string;
}
