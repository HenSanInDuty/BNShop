import { HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from "rxjs";
import { TAPIDTO, TSafeAny, TTokenDTO } from '../dto';
import { UserInitDTO } from '../dto/user-init.dto';
import { TAuthService } from './auth.service';

export class TCoreFunction {
    ///Function liên quan tới token
    public static signInPassword: (phoneNumber: string, password: string) => Observable<TSafeAny>;
    public static signInVerifyOtpsms: (phoneNumber: string, otpsms: string) => Observable<TSafeAny>; 
    public static refreshToken: (token: TTokenDTO |  null) => Observable<TSafeAny>;
    public static clearToken: (logString: string) => void;
    public static setCacheToken: (token: TTokenDTO) => Observable<TSafeAny>;
    public static getCacheToken: () => Observable<TSafeAny>;
    public static changePassword: (params: TSafeAny) => Observable<TSafeAny>;
    public static setPassword: (params: TSafeAny) => Observable<TSafeAny>;
    public static addAuthenticationToken: (req: HttpRequest<TSafeAny>)=> HttpRequest<TSafeAny>;
    //Fuction lấy thông tin user
    public static getUserInit :()  => Observable<UserInitDTO | undefined>;

    ///Function liên quan tới Services
    public static getHeader: (isAuthorize: boolean) => HttpHeaders;
    public static redirectLogin: (urlLogin: string) => void; 

    ///Function liên quan tới phân quyền auth-guard
    public static canActivate:(activedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot,router: Router,auth: TAuthService) => Promise<boolean> ;
    public static  canActivateChild:(activedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot,router: Router,auth: TAuthService)=>Promise<boolean> ;

     ///Function liên quan tới intercept
     public static  intercept:(req: HttpRequest<TSafeAny>, next: HttpHandler,auth: TAuthService)=> Observable<HttpEvent<TSafeAny>> ;
}
