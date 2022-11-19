export interface GetAddressDTO {
 id:number
 province: string
 district: string
 ward: string
 detail: string
 type: string
 is_approved: boolean
 is_default: boolean
 is_delete: boolean
 user: number
}

export interface AddressDTO {
 province: string
 district: string
 ward: string
 detail: string
 type: string
 user: number
}
export interface provinceDTO {
 name: string
 code: number
 division_type: string
 codename: string
 phone_code: number
 districts: DistrictDTO[]
}

export interface DistrictDTO {
 name: string
 code: number
 division_type: string
 codename: string
 province_code: number
 wards: WardDTO[]
}

export interface WardDTO {
 name: string
 code: number
 division_type: string
 codename: string
 district_code: number
}