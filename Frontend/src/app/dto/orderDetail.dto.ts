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
export interface getOrderDetailDTO {
 id: number
 date_order: string
 date_receive: any
 status: string
 address: GetAddressDTO
 payment: string
 order: any
}

export interface getOrderDetailAdminDTO {
 id: number
 total: number
 date_order: string
 date_receive: any
 status: string
 address: number
 payment: number
 shipper: any
 customer: number
 agency: number
}


