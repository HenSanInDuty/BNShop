import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { TDSMessageService } from 'tds-ui/message';
import { TDSHelperObject, TDSHelperString } from 'tds-ui/shared/utility';
import { CoreAuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    public router: Router,
    public auth: CoreAuthService,
    private message: TDSMessageService

  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.auth.getCacheToken().pipe(
      switchMap((data) => {
        if (TDSHelperObject.hasValue(data) &&
          TDSHelperString.hasValueString(data?.access) && data.data.role === 'Admin' || data === null) {
          return of(true);
        } else {
          if (TDSHelperObject.hasValue(data) && TDSHelperString.hasValueString(data?.access) && data.data.role === 'Agency') {
            return of(this.router.parseUrl('/product'))
          }
          else {
            this.message.error("Người dùng không được phép đăng nhập vào hệ thống này")
            return of(this.router.parseUrl('/account/login'));
          }
        }
      }),
      catchError((err) => {
        console.log(err)
        return of(this.router.parseUrl('/login/'));
      })
    )
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.getCacheToken().pipe(
      switchMap((data) => {
        if (TDSHelperObject.hasValue(data) &&
          TDSHelperString.hasValueString(data?.access) && data.data.role === 'Admin') {
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
