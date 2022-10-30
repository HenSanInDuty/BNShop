import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate, CanActivateChild } from '@angular/router';
import { TAuthService } from './auth.service';
import { TCoreFunction } from './core.function';


@Injectable({
    providedIn: 'root'
})
export class TAuthGuardService implements CanActivate, CanActivateChild {
   
    constructor(
        public router: Router,
        public auth: TAuthService,

    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return TCoreFunction.canActivate(route,state,this.router,this.auth);
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return TCoreFunction.canActivateChild(route,state,this.router,this.auth);
    }

   

}