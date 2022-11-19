import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, EMPTY, Observable, of, pipe, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TDSSafeAny, TDSHelperObject, TDSHelperString } from 'tds-ui/shared/utility';
import { CoreCustomerInitDTO, CoreTokenDTO, CoreUserInitDTO } from '@core/dto';
import { CoreApiMethodType } from '@core/enum';
import { CoreCacheService } from '@core/utility';
import { CoreCommonService } from '@core/services';
import { SignInService } from '@commom/hrm/services';


@Injectable({
    providedIn: 'root'
})
export class CoreAuthService {
    private readonly __keyBearerToken = 'TSourceBearerToken';
    private _accessToken!: CoreTokenDTO;
    private readonly authenObs = new BehaviorSubject<boolean>(false);
    private _isLogin: boolean = false;
    private readonly _userProfileObs = new BehaviorSubject<CoreUserInitDTO | undefined>(undefined);
    private readonly _customerProfileObs = new BehaviorSubject<CoreCustomerInitDTO | undefined>(undefined);
    private readonly _roleObs = new BehaviorSubject<Array<string> | null>([]);

    constructor(
        private router: Router,
        private apiService: CoreCommonService,
        private cacheService: CoreCacheService,
        private signService: SignInService,
        private http: HttpClient,

    ) {
    }
    getRoleUser = () => {
        if (!TDSHelperObject.hasValue(this._accessToken) || !this._isLogin) {
            this._roleObs.next(null);
            return EMPTY;
        }
        const { role } = this.parseJwt(this._accessToken.access);
        let arrRole = [];
        if (TDSHelperObject.hasValue(role)) {
            if (TDSHelperString.isString(role)) {
                arrRole.push(role)
            } else {
                arrRole = role;
            }
        }
        this._roleObs.next(arrRole);
        return of(arrRole);

    };
    // //Khởi tạo lấy userinit
    // getUserInit(id: string) {
    //     return this.apiService.connect(
    //         CoreApiMethodType.get,
    //         environment.apiTHRM + environment.apiServer.userInit + '/' + id,
    //         null,
    //         this.apiService.getHeaderJSon(true),
    //         false
    //     );
    // };
    /**
     * Lấy thông tin user từ server
     * @returns Observable<CoreUserInitDTO | undefined>
     */
    getUserProfile() {
        return this.http.get<CoreUserInitDTO | undefined>(
            environment.apiBNShop + environment.apiServer.userProfile,
            // this.apiService.getHeaderJSon(true),
            // false
        ).pipe(
            tap((res: TDSSafeAny) => {
                this._userProfileObs.next(res);
            })
        );
    };
    getCustomerProfile() {
        return this.http.get<CoreCustomerInitDTO | undefined>(
            environment.apiBNShop + environment.apiServer.userProfile,
            // this.apiService.getHeaderJSon(true),
            // false
        ).pipe(
            tap((res: TDSSafeAny) => {
                this._customerProfileObs.next(res);
            })
        );
    };
    //Thực thi việc gọi về Server để refresh token
    refreshToken(token: CoreTokenDTO | null): Observable<TDSSafeAny> {
        console.log("vô")
        let that = this;
        const formURL = new HttpParams({
            fromObject: {
                "refresh": token?.refresh ? token?.refresh : ''
            }
        });
        return that.http.post<any>(environment.apiBNShop + environment.apiServer.refreshToken, formURL)
            .pipe(
                tap((data: TDSSafeAny) => {
                    that.setCacheToken(data);
                })
            )
        // return that.signService.postSignInRefreshToken({
        //     body: {
        //         "refreshToken": token?.refresh ? token?.refresh : ''
        //     }
        // }).pipe(
        //     map((r: TDSSafeAny) => {
        //         if (TDSHelperObject.hasValue(r))
        //             return JSON.parse(r)
        //         return r;
        //     }),
        //     tap((data: TDSSafeAny) => {
        //         this.setCacheToken(data);
        //         this.setAccessToken(data);
        //     })
        // )
    }
    //Thực thi get token vào cache theo function đã được định nghĩa trong authen.service.xxxx.ts
    getCacheToken(): Observable<TDSSafeAny> {
        return this.cacheService.getItem(this.__keyBearerToken)
            .pipe(map((ops: TDSSafeAny) => {
                let token: CoreTokenDTO | null = null;
                if (TDSHelperObject.hasValue(ops)) {
                    token = JSON.parse(ops.value).value;
                }
                this.setAccessToken(token);
                this.updateIsLogin((TDSHelperObject.hasValue(token) &&
                    TDSHelperString.hasValueString(token?.access)));
                return token
            }));
    }
    //Thực thi get token vào cache theo function đã được định nghĩa trong authen.service.xxxx.ts
    getCacheTokenCustomer(): Observable<TDSSafeAny> {
        return this.cacheService.getItem(this.__keyBearerToken)
            .pipe(map((ops: TDSSafeAny) => {
                let token: CoreTokenDTO | null = null;
                if (TDSHelperObject.hasValue(ops)) {
                    token = JSON.parse(ops.value).value;
                    this.setAccessToken(token);
                    this.updateIsLogin((TDSHelperObject.hasValue(token) &&
                        TDSHelperString.hasValueString(token?.access)));
                    return token
                }
                return false
            }));
    }
    //Thực thi set token vào cache theo function đã được định nghĩa trong authen.service.xxxx.ts
    setCacheToken(token: CoreTokenDTO): void {
        this.cacheService.setItem(this.__keyBearerToken, token);
    }
    //Thực thi xóa cache token và toàn bộ dữ liệu
    clearToken(logString: string = "auth clearToken"): void {
        this.updateIsLogin(false);
        this.setAccessToken(null);
        this.authenObs.next(false);
        this._userProfileObs.next(undefined);
        this._roleObs.next([]);
        this.cacheService.clear().subscribe();
    }
    //đăng xuất
    logout(urlLogin: string): void {
        let that = this;
        that.clearToken();
        that.redirectLogin(urlLogin);
    }
    redirectLogin(urlLogin: string = environment.urlLogin) {
        setTimeout(() => {
            this.router.navigateByUrl(urlLogin);
        }, 500);
    };
    getAuthenIsLogin() {
        return this.authenObs.asObservable();
    }
    getObsRole() {
        return this._roleObs.asObservable();
    }
    getAccessToken() {
        return this._accessToken;
    }
    isLogin() {
        return this._isLogin;
    }
    /**
     * Lấy thông tin user từ cache
     * @returns Observable<CoreUserInitDTO | undefined>
     */
    getObsUserProfile() {
        return this._userProfileObs.asObservable();
    }
    getObsCustomerProfile() {
        return this._customerProfileObs.asObservable();
    }

    afterRequestToken = () =>
        pipe(
            tap<CoreTokenDTO>((token: CoreTokenDTO) => {
                console.log(token)
                this.apiService.resetData();
                this.setCacheToken(token);
                this.setAccessToken(token);
                this.updateIsLogin((TDSHelperObject.hasValue(token) &&
                    TDSHelperString.hasValueString(token.access)));
            }),
            catchError((err) => {
                this.clearToken();
                return throwError(() => err)
            })
        );
    parseJwt(token: string) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };
    private updateIsLogin(isLogin: boolean) {
        this._isLogin = isLogin;
        this.authenObs.next(isLogin);
    }
    private setAccessToken(token: TDSSafeAny) {
        this._accessToken = token;
    }

}
