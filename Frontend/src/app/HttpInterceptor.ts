import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreService } from './services/store.service';
@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private  StoreService: StoreService) {}
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem('accessToken') != null){
        const token = localStorage.getItem('accessToken')
        const shopid = localStorage.getItem('shopid')
        const headers = new HttpHeaders()
            // .set('accessToken', token)
            .set('Authorization','Bearer ' + token)
            .set('shopid',' ' + shopid)
        const AucountRequest = httpRequest.clone({ headers: headers })
        return next.handle(AucountRequest)
    }else{
        return next.handle(httpRequest)
    }
  }
}
 