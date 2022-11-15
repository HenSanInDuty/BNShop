
export interface ParamGetShiftDTO {
  SearchText?:string
  MaxResultCount: number,
  SkipCount?: number,
  Sorting?: string
}

export interface ParamGetHolidayDTO {
  SearchText?:string
  MaxResultCount: number,
  SkipCount?: number,
  Sorting?: string
}

export interface ParamGetWorkingKindDTO {
  SearchText?:string
  MaxResultCount: number,
  SkipCount?: number,
  Sorting?: string
}

export interface ParamGetFurloughKindDTO {
  Year?:number
  SearchText:string
  MaxResultCount: number,
  SkipCount?: number,
  Sorting?: string
}
