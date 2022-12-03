
export interface paramGetProductDTO {
 page?: number
 type?: string
 brand?: string
 category?: string
 agency?: number
}

export interface ProductDTO {
 id?: number
 name: string
 display_image: string
 category?: string[]
 type: string[]
 brand_origin: string
 brand_origin_brand: string
 brand_name: string
 detail?: Detail
 quantity: number
 price: number
 attachment?: AttachmentDTO
}
export interface getProductDTO {
 id: number
 name: string
 agency: Agency
 display_image: string
 is_delete: boolean
 is_approved: boolean
 category: string[]
 type: string[]
 brand: Brand
 detail: any[]
 quantity: number
 describe: any
 last_price: LastPrice
 pre_price: any
 attachment: AttachmentDTO[]
}

export interface Agency {
 id: number
 name: string
 avatar: string
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

export interface AttachmentDTO {
 id: number
 url: string
 type: string
 product: number
}
export interface editProductDTO {
 display_image?: string
 price?: number
 price_end_datetime?: string
 quantity?: number
 quantity_note?: string
 category?: string[]
 attachment?: AttachmentDTO
 describe?: string
}

export interface Detail { }
