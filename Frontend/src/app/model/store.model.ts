export interface storeDTO {
    id: string
    code: string
    name: string
    avatarUrl: string
    coverImageUrl: string
    address: string
    provinceCode: string
    districtCode: string
    wardCode: string
    fullAddress: string
    phone: string
    email: string
    shopManager: string
    ownerId: string
    isActive: boolean
    flag: number
    ratingForService: number
    ratingForProduct: number
    likeCount: number
    followCount: number
    companyId: string
    facebookUrl: string
    shopeeUrl: string
    shopDescription: string 
}
export interface listStoreDTO {
    items: storeDTO[],
    totalCount: number
}
