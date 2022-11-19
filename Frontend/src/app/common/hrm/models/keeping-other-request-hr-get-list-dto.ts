/* tslint:disable */
/* eslint-disable */
import { KeepingOtherKind } from './keeping-other-kind';
export interface KeepingOtherRequestHrGetListDto {
  branchIds?: null | Array<string>;
  departmentIds?: null | Array<string>;
  kinds?: null | Array<KeepingOtherKind>;
  maxResultCount?: number;
  month?: number;
  searchText?: null | string;
  skipCount?: number;
  sorting?: null | string;
  year?: number;
}
