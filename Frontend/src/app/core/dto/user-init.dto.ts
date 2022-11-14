import { AppUserProfileDto } from "@commom/hrm/models";
import { TDSSafeAny } from "tds-ui/shared/utility";

export interface CoreUserInitDTO  {
    id: TDSSafeAny;
    name: string;
    email: string;
    avatar: string;
    nationality?: string;
    main_industry: string;
    identify: string;
}
