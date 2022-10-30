import { BehaviorSubject } from 'rxjs';
import { TSafeAny, TTokenDTO } from '../dto';

export class TGlobalConfig {
       
    static Authen:{
        isLogin: boolean;
        token:TTokenDTO | null;
        refreshTokenInProgress:boolean;
        refreshTokenSubject: BehaviorSubject<TSafeAny>;
    }    
    static cache: {
        timerPermission: number;
        timerApi: number;
        companyid?: string;
        dataPermission?: string;
    }
}