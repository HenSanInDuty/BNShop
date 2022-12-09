import { AddressDTO, GetAddressDTO } from "./address.dto"
import { OrderDTO } from "./order.dto"

export interface OrderDetailDTO {
 id: number
 order: string[]
 payment: number
 address: number | undefined
}
export interface EditOrderDetailDTO {
 status: string
}
// export interface getOrderDetailDTO {
//  id: number
//  date_order: string
//  date_receive: any
//  status: string
//  address: GetAddressDTO
//  payment: string
//  order: any
// }
export interface getOrderDetailDTO {
 id: number
 order_detail_no: string
 date_order: string
 date_receive: any
 status: string
 address: Address
 payment: string
 customer: Customer
 agency: Agency
 order: Order[]
}

export interface Address {
 id: number
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

export interface Customer {
 user_id: number
 name: string
 phone:string
}

export interface Agency {
 user_id: number
 name: string
}

export interface Order {
 id: number
 product: Product
 amount: number
 buy: number
}

export interface Product {
 id: number
 name: string
 agency: Agency2
 display_image: string
 is_delete: boolean
 is_approved: boolean
 category: string[]
 type: string[]
 brand: Brand
 detail: any[]
 describe: string
 quantity: number
 last_price: LastPrice
 pre_price: PrePrice
 attachment: Attachment[]
}

export interface Agency2 {
 id: number
 name: string
 avatar: string
 email: string
 phone: string
 main_industry: string
}

export interface Brand {
 id: number
 name: string
 origin: string
 origin_brand: string
}

export interface LastPrice {
 id: number
 price: number
 end_datetime: any
 product: number
}

export interface PrePrice {
 id: number
 price: number
 end_datetime: any
 product: number
}

export interface Attachment {
 id: number
 url: string
 type: string
 product: number
}


export interface getOrderDetailAdminDTO {
 id: number
 agency_info: any
 customer_info: CustomerInfo
 shipper_info: any
 address_info: AddressInfo
 total: any
 date_order: string
 date_receive: any
 order_detail_no: any
 status: string
 address: number
 payment: number
 shipper: any
 customer: number
 agency: any
}

export interface AddressInfo {
 detail: string
 province: string
 district: string
 ward: string
}
export interface CustomerInfo {
 name: string
 phone: string
}
export interface shipperDTO {
 order_detail: string[]
}



