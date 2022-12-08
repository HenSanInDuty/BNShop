export interface AgencyDTO {
 phone: string
 password1: string
 password2: string
 name: string
 email?: string
 avatar?: string
 nationality?: string
 gender?: string
 time_visited?: number
 main_industry: string
 identify: string
}
export interface getAgencyDTO {
 id: number
 name: string
 email: string
 avatar: string
 nationality: string
 is_active: boolean
 main_industry: string
 identify: string
 role: string
}
export interface CustomerDTO {
 phone: string
 password1: string
 password2: string
 name: string
 email?: string
 avatar?: string
 nationality?: string
 gender?: string
 time_visited?: number
 nickname?: string
 birthday?: string
}

export interface getCustomerDTO {
 id: number
 name: string
 email: string
 avatar: string
 nationality: string
 is_active: boolean
 nickname: string
 birthday: string
 role: string
}
export interface getProductDTOAdmin {
 page?: number
 type: string
 agency: number
}
