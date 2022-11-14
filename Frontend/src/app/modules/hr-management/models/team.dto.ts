import { AppUserDto } from "@commom/hrm/models"

export interface ParamsGetListTeamDTO {
    SearchText?: string,
    Sorting?: string,
    SkipCount?: number,
    MaxResultCount: number,
}
export interface ResultDataDTO {
    data: AppUserDto[],
    ids: Set<string>
}