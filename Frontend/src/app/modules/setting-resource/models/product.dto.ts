export interface ProductDTO {
 name: string,
 display_image: string,
 category?: string[],
 type: { title: string, content: string }[]
 brand_origin: string,
 brand_origin_brand: string,
 brand_name: string,
 detail?: {},
 quantity: number,
 price: number,
 attachment?: { url: string, type: string }[]
}

export interface editProductDTO {
 display_image: string,
 category?: string[],
 quantity: number,
 price: number,
}
export interface getProductDTO {
 id: number,
 name: string,
 display_image: string,
 is_delete: boolean,
 is_approved: boolean,
 category: [],
 type: [],
 brand: {
  id: string,
  name: string,
  origin: string,
  origin_brand: string
 },
 detail: { title: string, content: string }[],
 quantity: number,
 describe: null,
 last_price: {
  id: number,
  price: number,
  end_datetime: Date,
  product: number
 },
 pre_price: number,
 attachment: { id: string, product: number, type: string, url: string }[]
}