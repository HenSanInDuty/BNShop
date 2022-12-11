export interface ParamRatingDTO {
 title: string
 content: string
 star: number
 product: number
 customer: number
}
export interface RatingDTO {
  id: number
  image: any[]
  customer_info: CustomerInfo
  product_info: ProductInfo
  title: string
  content: string
  star: number
  date_created: string
  is_approved: boolean
  product: number
  customer: number
  reply: Reply[]
}

export interface CustomerInfo {
  name: string
  phone: string
  avatar: string
}

export interface ProductInfo {
  name: string
  product_no: string
  display_image: string
  category: string[]
  agency: Agency
}

export interface Agency {
  name: string
  avatar: string
  phone: string
}

export interface Reply {
  content: string
  user: User
  date_created: string
}

export interface User {
  name: string
  time_joined: string
}


