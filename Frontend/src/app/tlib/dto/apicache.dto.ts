import { TGlobalConfig } from "../services";
import { TSafeAny } from "./any.dto";

export class TAPICacheDTO {
    Data!: TSafeAny;
    Expire!: number;

    public build(pData: TSafeAny, isPer: boolean = false): boolean {
        if(TGlobalConfig.cache.timerApi > 0 && TGlobalConfig.cache.timerPermission > 0) {
            this.Data = pData;
            if (!isPer)
                this.Expire = (new Date()).getTime() + TGlobalConfig.cache.timerApi * 1000;
            else {
                this.Expire = (new Date()).getTime() + TGlobalConfig.cache.timerPermission * 1000;
            }
            return true;
        }
        return false;
    }
    public checkExpire(): boolean {
        return this.Expire < (new Date()).getTime();
    }
    
}