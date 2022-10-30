import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TSafeAny, TTokenDTO, UserInitDTO } from '../dto';
import { THelperObject } from '../utility';
import { TCommonService } from './common.service';
import { TCoreFunction } from './core.function';
import { TGlobalConfig } from './global-config';


@Injectable({
    providedIn: 'root'
})
export class TAuthService {
    constructor(
        private apiService: TCommonService
    ) {
    }
    //Thực thi việc đăng nhập và lấy token
    signInPassword(phoneNumber: string, password: string): Observable<TSafeAny> {
        let that = this;
        return new Observable(obs => {
            if (THelperObject.hasValue(TCoreFunction.signInPassword)) {
                TCoreFunction.signInPassword(phoneNumber, password).subscribe((res: TSafeAny) => {
                    if (THelperObject.hasValue(res)) {
                        that.signInSuccess(res).subscribe(
                            s => {
                                obs.next(true);
                                obs.complete();
                            },
                            f => {
                                obs.error(f);
                                obs.complete();
                            }
                        )
                    }
                }, f => {
                    obs.error(f);
                    obs.complete();
                });
            }
            else {
                throw "signInPassword no implement";
            }
        });
    }
    //Thực thi việc đăng nhập và lấy token thông qua Otpsms
    signInVerifyOtpsms(phoneNumber: string, otpsms: string): Observable<TSafeAny> {
        let that = this;
        return new Observable(obs => {
            if (THelperObject.hasValue(TCoreFunction.signInVerifyOtpsms)) {
                TCoreFunction.signInVerifyOtpsms(phoneNumber, otpsms).subscribe((res: TSafeAny) => {
                    if (THelperObject.hasValue(res)) {
                        that.signInSuccess(res).subscribe(
                            s => {
                                obs.next(true);
                                obs.complete();
                            },
                            f => {
                                obs.error(f);
                                obs.complete();
                            }
                        )
                    }
                }, f => {
                    obs.error(f);
                    obs.complete();
                });
            }
            else {
                throw "signInVerifyOtpsms no implement";
            }
        });
    }
    //Thực thi việc lấy thông tin userInit
    getUserInit(): Observable<UserInitDTO | undefined> {
        let that = this;
        return new Observable(obs => {
            if (THelperObject.hasValue(TCoreFunction.getUserInit)) {
                TCoreFunction.getUserInit().subscribe((res: UserInitDTO | undefined ) => {
                    if (THelperObject.hasValue(res)) {                        
                        obs.next(res);
                        obs.complete();
                    }else{                        
                        obs.next(undefined);
                        obs.complete();
                    }
                }, f => {                   
                    obs.error(f);
                    obs.complete();
                });
            }
            else {
                throw "getUserInit no implement";
            }
        });
    }
    //Thực thi việc gọi về Server để refresh token
    refreshToken(token: TTokenDTO |  null): Observable<TSafeAny> {
        let that = this;
        return new Observable(observer => {
            if (THelperObject.hasValue(TCoreFunction.refreshToken)) {
                TCoreFunction.refreshToken(token).subscribe(data => {
                    if (THelperObject.hasValue(data)) {
                        that.setCacheToken(data).subscribe(() => {
                            observer.next(data);
                            observer.complete();
                        }, err => {
                            that.clearToken("auth refreshTokenOnServer")
                            observer.next(null);
                            observer.complete();
                        }
                        );
                    } else {
                        that.clearToken("auth refreshTokenOnServer")
                        observer.next(null);
                        observer.complete();
                    }
                }, error => {
                    observer.error(error);
                    observer.complete()
                });
            } else {
                throw "refreshToken no implement";
            }
        });
    }
    //Thực thi get token vào cache theo function đã được định nghĩa trong authen.service.xxxx.ts
    getCacheToken(): Observable<TSafeAny> {
        if (THelperObject.hasValue(TCoreFunction.getCacheToken)) {
            return TCoreFunction.getCacheToken();
        } else {
            throw "getCacheToken no implement";
        }
    }
    //Thực thi set token vào cache theo function đã được định nghĩa trong authen.service.xxxx.ts
    setCacheToken(token: TTokenDTO): Observable<TSafeAny> {
        // DTOConfig.Authen.token = new TTokenDTO(token);
        if (THelperObject.hasValue(TCoreFunction.setCacheToken)) {
            return TCoreFunction.setCacheToken(token);
        } else {
            throw "setCacheToken no implement";
        }
    }
    //Thực thi xóa cache token và toàn bộ dữ liệu
    clearToken(logString: string = "auth clearToken"): void {
        if (THelperObject.hasValue(TCoreFunction.clearToken)) {
            return TCoreFunction.clearToken(logString);
        } else {
            throw "clearToken no implement";
        }
    }
    //Thực thi thiết lập mật khẩu người dùng
    setPassword(params: TSafeAny): Observable<TSafeAny> {
        if (THelperObject.hasValue(TCoreFunction.setPassword)) {
            return TCoreFunction.setPassword(params);
        } else {
            throw "setPassword no implement";
        }
    }
    //Thực thi thay đổi mật khẩu người dùng
    changePassword(params: TSafeAny): Observable<TSafeAny> {
        if (THelperObject.hasValue(TCoreFunction.changePassword)) {
            return TCoreFunction.changePassword(params);
        } else {
            throw "changePassword no implement";
        }
    }
    //Thực thi add authen token
    addAuthenticationToken(req: HttpRequest<TSafeAny>): HttpRequest<TSafeAny> {
        if (THelperObject.hasValue(TCoreFunction.addAuthenticationToken)) {
            return TCoreFunction.addAuthenticationToken(req);
        } else {
            throw "addAuthenticationToken no implement";
        }
    }
    //đăng xuất
    logout(urlLogin:string): void {
        let that = this;
        that.clearToken();
        if (THelperObject.hasValue(TCoreFunction.redirectLogin)) {
            TCoreFunction.redirectLogin(urlLogin);
        } else {
            throw "redirectLogin no implement";
        }
    }
    private signInSuccess(token: TTokenDTO) {
        let that = this;
        return new Observable(obs => {
            that.setCacheToken(token).subscribe(s => {
                TGlobalConfig.Authen.isLogin = true;
                that.apiService.resetData();
                obs.next(true);
                obs.complete();
            }, f => {
                obs.error(f);
                obs.complete();
            }
            )
        });
    }
}