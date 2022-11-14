import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate, CanActivateChild, UrlTree } from '@angular/router';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TDSHelperObject, TDSHelperString, TDSSafeAny } from 'tds-ui/shared/utility';
import { CoreAuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
})
export class CustomerGuardService implements CanActivate, CanActivateChild {

    constructor(
        public router: Router,
        public auth: CoreAuthService,
        
    ) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     
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