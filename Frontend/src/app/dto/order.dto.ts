import { getProductDTO, ProductDTO } from "./product.dto"

export interface OrderDTO {
 qty: number
 product: number
 customer: number
}

export interface EditOrderDTO {
 qty: number
}

export type getOrderDTO = Root2[]

export interface Root2 {
 id: number
 qty: number
 amount: number
 product: number
 order_detail: any
 customer: number
}
export interface getListOrderDTO {
 id: number
 qty: number
 amount: number
 product: getProductDTO
 order_detail: any
 customer: number
}
export interface getListOrderAgencyDTO {
 idAgency: any
 order: getListOrderDTO []
}

