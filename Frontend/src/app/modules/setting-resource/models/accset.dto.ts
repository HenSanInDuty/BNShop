import { TDSSafeAny } from "tds-ui/shared/utility"

export interface ParamGetListAccsetDTO {
  IsActive?: boolean;
  BranchId?: string;
  ResourceTypeId?: string;
  SearchText?: string;
  MaxResultCount?: number;
  SkipCount?: number;
  Sorting?: string;
}

export interface ParamGetListUserDTO {
  MaxResultCount: number,
  SkipCount?: number,
  Sorting?: string,
  SearchText?:string
}
export interface ParamChangStatus {
  activeNote: string
}

export interface FilterStatusItemDTO {
  name: string;
  value: TDSSafeAny,
  count?: number | 0,
  disabled?: boolean,
}
