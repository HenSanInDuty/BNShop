import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TAuthService } from './auth.service';
import { TCommonService } from './common.service';
import { TCoreFunction } from './core.function';


@Injectable()
export class TAuthInterceptorService implements HttpInterceptor {

   

    constructor(public auth: TAuthService,
        public libcommon: TCommonService
    ) { 
    }  

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        let that = this;
        return TCoreFunction.intercept(req,next,that.auth);       
    }
}