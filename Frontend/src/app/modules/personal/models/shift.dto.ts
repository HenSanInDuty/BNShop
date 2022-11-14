export interface ParamGetShiftDTO {
  SearchText?: string
  MaxResultCount: number,
  SkipCount?: number,
  Sorting?: string
}

export interface ParamSuggestShiftDTO {
  from: string,
  to: string,
}

