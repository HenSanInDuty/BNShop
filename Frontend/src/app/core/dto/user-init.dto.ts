import { AppUserProfileDto } from "@commom/hrm/models";
import { TDSSafeAny } from "tds-ui/shared/utility";

export interface CoreUserInitDTO extends CoreCustomerInitDTO{
    id: TDSSafeAny;
    name: string;
    email: string;
    avatar: string;
    nationality?: string;
    main_industry: string;
    identify: string;
}
export interface CoreCustomerInitDTO  {
    id: TDSSafeAny;
    name: string;
    email: string;
    avatar: string;
    nationality?: string;
    nickname: string,
    birthday: string
}
