export interface DepartmentDTO {
    id: string,
    name: string,
    description: string,
    managerId: string,
    managerName: string,
    mainShiftId: string,
    mainShiftName: string,
    departmentCode: string
}

export interface ParamsGetListDepartmentDTO {
    SearchText?: string,
    Sorting?: string,
    SkipCount?: number,
    MaxResultCount: number,
}











