/* tslint:disable */
/* eslint-disable */
export interface MenuModel {
  disabled?: boolean;
  groupTitle?: null | string;
  hidden?: boolean;
  icon?: null | string;
  isOpen?: boolean;
  isSelected?: boolean;
  link?: null | string;
  listChild?: null | Array<MenuModel>;
  name?: null | string;
  roles?: null | Array<string>;
}
