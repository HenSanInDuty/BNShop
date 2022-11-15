
export interface AdminOfBioDeviceDTO {
  id: string,
  userName: string,
  email: string,
  phoneNumber: string,
  fullName: string,
  avatar: string,
  isValidImageCheckingAmount?: boolean
}

export interface ParamGetBioDeviceDTO {
  SearchText?:string
  MaxResultCount: number,
  SkipCount?: number,
  Sorting?: string
}
