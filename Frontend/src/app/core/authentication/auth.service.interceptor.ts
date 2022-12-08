import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CoreAuthService } from './auth.service';
import { CoreCommonService } from '@core/services/common.service';
import { environment } from 'src/environments/environment';
import { catchError, filter, switchMap, take } from "rxjs/operators";
import { CoreGlobalConfig } from '@core/services/global-config';
import { TDSSafeAny, TDSHelperObject, TDSHelperString } from 'tds-ui/shared/utility';

@Injectable()
export class CoreAuthInterceptorService implements HttpInterceptor {

    constructor(public auth: CoreAuthService,
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<TDSSafeAny> {
        let that = this;
        let lstUrlLogin = [
            environment.apiServer.signInPassword,
        ];
        //add header token
        req = this.addAuthenticationToken(req);
        return next.handle(req).pipe(catchError(err => {
            //Lỗi do đăng nhập chưa xóa dữ liệu trên cache
            if (lstUrlLogin.indexOf(req.url) > -1) {
                that.auth.clearToken("checkLinkIDServer");
                let error = "";
                if (TDSHelperObject.hasValue(err)) {
                    if (TDSHelperObject.hasValue(err.error) &&
                        TDSHelperObject.hasValue(err.error.Message)) {
                        error = err.error.Message;
                    } else {
                        if (TDSHelperObject.hasValue(err.statusText))
                            error = err.statusText;
                        else {
                            error = err;
                        }
                    }
                }
                return throwError(() => err);

            }
            //Lỗi khác lỗi 401
            //xữ lý lỗi trả về
            else if (err.status !== 401) {
                let error = this.getError(err);
                return throwError(() => error);
            }
            //Lỗi 401
            else {
                if (!CoreGlobalConfig.Authen.refreshTokenInProgress) {
                    CoreGlobalConfig.Authen.refreshTokenInProgress = true;
                    CoreGlobalConfig.Authen.refreshTokenSubject.next(null);
                    that.auth.refreshToken(this.auth.getAccessToken()).subscribe((data) => {
                        CoreGlobalConfig.Authen.refreshTokenInProgress = false;
                        CoreGlobalConfig.Authen.refreshTokenSubject.next(data);
                        return next.handle(that.addAuthenticationToken(req));
                    },
                        error => {
                            that.auth.clearToken("AuthInterceptor");
                            that.auth.redirectLogin();
                            return throwError(() => error);
                        });
                }
                return CoreGlobalConfig.Authen.refreshTokenSubject.pipe(
                    filter(token => token !== null),
                    take(1),
                    switchMap((token) => next.handle(that.addAuthenticationToken(req)))
                );
            }
        }));
    }
    //Thực thi add authen token
    addAuthenticationToken(req: HttpRequest<TDSSafeAny>): HttpRequest<TDSSafeAny> {
        let accessToken = this.auth.getAccessToken();
        if (TDSHelperObject.hasValue(this.auth.getAuthenIsLogin())
            && TDSHelperObject.hasValue(accessToken)
            && TDSHelperString.hasValueString(accessToken?.access)
        ) {
            // headers: new HttpHeaders({
            //     'Content-Type': 'application/json',
            //     'Access-Control-Allow-Origin': '*',
            //     'Access-Control-Allow-Credentials': 'true',
            //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            //     'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
            // })
            req = req.clone({
                setHeaders:
                {
                    Authorization: "Bearer " + accessToken.access,
                }
            });

        }
        return req;
    }
    private getError(err: TDSSafeAny) {
        let objErr: TDSSafeAny = null;
        let error = '';
        if (TDSHelperObject.hasValue(err) && TDSHelperObject.hasValue(err.error)) {
            try {
                objErr = JSON.parse(err.error);
            }
            catch (e) {
                objErr = err;
            }
        }
        if (TDSHelperObject.hasValue(objErr)) {
            if (TDSHelperObject.hasValue(objErr.error)) {
                error = objErr.error;
            } else {
                if (TDSHelperObject.hasValue(objErr.statusText))
                    error = objErr.statusText;
                else {
                    error = objErr;
                }
            }
        }
        return error;
    }
}


