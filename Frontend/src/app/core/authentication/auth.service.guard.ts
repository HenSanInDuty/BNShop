import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate, CanActivateChild, UrlTree } from '@angular/router';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TDSMessageService } from 'tds-ui/message';
import { TDSHelperObject, TDSHelperString, TDSSafeAny } from 'tds-ui/shared/utility';
import { CoreAuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
})
export class AdminGuardService implements CanActivate, CanActivateChild {

    constructor(
        public router: Router,
        public auth: CoreAuthService,
        private message: TDSMessageService

    ) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.auth.getCacheToken().pipe(
            switchMap((data) => {
                if (TDSHelperObject.hasValue(data) &&
                    TDSHelperString.hasValueString(data?.access)) {
                    if (data.data.role === 'Agency') {
                        return of(true);
                    }
                    else {
                        // this.message.error("Khách hàng không thể vào hệ thống này")
                        return of(this.router.parseUrl('/customer/home'));
                    }
                }
                else {
                    // this.message.error("Người quản trị không đăng nhập vào hệ thống này")
                    return of(this.router.parseUrl('/account/login'));
                }
            }),
            catchError((err) => {
                return of(this.router.parseUrl('/account/login'));
            })
        )
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.auth.getCacheToken().pipe(
            switchMap((data) => {
                if (TDSHelperObject.hasValue(data) &&
                    TDSHelperString.hasValueString(data?.access) && data.data.role === 'Agency') {
                    return of(true);
                } else {
                    return of(this.router.parseUrl('/account/login'));
                }
            }),
            catchError((err) => {
                return of(this.router.parseUrl('/account/login'));
            })
        )
    }



}