export interface BranchDTO {
    id: number,
    name: string,
    description: string,
    address: string,
}

export interface ParamGetListBranchDTO {
    SearchText?: string,
    Sorting?: string,
    SkipCount: number,
    MaxResultCount: number,
}