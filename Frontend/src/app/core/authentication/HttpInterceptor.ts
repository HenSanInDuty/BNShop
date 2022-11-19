import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TDSSafeAny } from 'tds-ui/shared/utility';
@Injectable()
export class InterceptorCore implements HttpInterceptor {
  constructor() { }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('accessToken') != null) {
      const token: TDSSafeAny = localStorage.getItem('access')
      // const shopid = localStorage.getItem('shopid')
      const headers = new HttpHeaders()
        .set('access', token)
        .set('Authorization', 'Bearer ' + token)
      // .set('shopid',' ' + shopid)
      const AucountRequest = httpRequest.clone({ headers: headers })
      return next.handle(AucountRequest)
    } else {
      return next.handle(httpRequest)
    }
  }
}
