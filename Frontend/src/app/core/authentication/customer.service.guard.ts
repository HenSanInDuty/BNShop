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
export class CustomerGuardService implements CanActivate, CanActivateChild {

    constructor(
        public router: Router,
        public auth: CoreAuthService,
        private message:  TDSMessageService
        
    ) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     
        return this.auth.getCacheToken().pipe(
            switchMap((data) => {
                if (TDSHelperObject.hasValue(data) &&
                    TDSHelperString.hasValueString(data?.access) && data.data.role === 'Customer' || data === null) {
                    return of(true);
                } else {
                    if (TDSHelperObject.hasValue(data) && TDSHelperString.hasValueString(data?.access) && data.data.role === 'Agency') {
                        return of(this.router.parseUrl('/dasboard'))
                    }
                    else if (TDSHelperObject.hasValue(data) && TDSHelperString.hasValueString(data?.access) && data.data.role === 'Admin') {
                        return of(this.router.parseUrl('/admin/account'))
                    }
                    else {
                        this.message.error("Người dùng không được phép đăng nhập vào hệ thống này")
                        return of(this.router.parseUrl('/account/login'));
                    }
                }
            }),
            catchError((err) => {
                return of(this.router.parseUrl('/customer/home'));
            })
        )
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.auth.getCacheToken().pipe(
            switchMap((data) => {
                if (TDSHelperObject.hasValue(data) &&
                    TDSHelperString.hasValueString(data?.access) && data.data.role === 'Customer') {
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