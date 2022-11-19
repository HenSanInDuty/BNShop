/* tslint:disable */
/* eslint-disable */
import { KeepingOtherKind } from './keeping-other-kind';
export interface KeepingOtherRequestLeaderGetListDto {
  kinds?: null | Array<KeepingOtherKind>;
  maxResultCount?: number;
  month?: number;
  searchText?: null | string;
  skipCount?: number;
  sorting?: null | string;
  teams?: null | Array<string>;
  year?: number;
}
