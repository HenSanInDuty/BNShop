


export interface CompanyDTO {
  id: string,
  name: string,
  shortName: string,
  representative: string,
  address: string,
  establishDay: Date,
  phoneNumber: string,
  email: string,
  taxCode: string,
  fax: string,
  websiteUrl: string,
  avatarUrl: string
}

export interface CompanyCreateDTO {
  name: string,
  shortName: string,
  representative: string,
  address: string,
  establishDay: Date,
  phoneNumber: string,
  email: string,
  taxCode: string,
  fax: string,
  websiteUrl: string
}
