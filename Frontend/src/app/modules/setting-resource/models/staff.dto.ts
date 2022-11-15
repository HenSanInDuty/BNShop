

export interface ParamGetListStaffDTO {
  BranchId?: string,
  DepartmentId?: string,
  SearchText?: string,
  IgnoreUsers?: Array<string>
  Sorting?: string,
  SkipCount?: number,
  MaxResultCount: number,
}
