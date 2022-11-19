import { trigger, transition, query, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CoreAuthService } from '@core/authentication';
import { routeFadeMotion } from '@shared/animation/routeFade';
import { takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSHelperObject, TDSHelperString } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-account',
  templateUrl: './account.component.html',
  animations: [
    routeFadeMotion
  ],
 providers:[
  TDSDestroyService
 ]
})
export class AccountComponent implements OnInit {
  returnUrl='';

  constructor( private router: Router,
    private authen: CoreAuthService,
    private route: ActivatedRoute,
    private destroy$:TDSDestroyService
    ) { }

  ngOnInit(): void {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'];
    const ignoreUrl =[
      'account/login',
      'account/login-sms',
      'account/forgot-password'
    ]    
    if (TDSHelperString.hasValueString(returnUrl) && ignoreUrl.indexOf(returnUrl) < 0) {
      this.returnUrl = returnUrl;
    } else {
      this.returnUrl = '/property-management/rent-schedule';
    }
    this.authen.getCacheToken()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      {
        next: data => {
          if (TDSHelperObject.hasValue(data) &&
            TDSHelperString.hasValueString(data.accessToken)) {
            this.router.navigate([this.returnUrl]);
            
          }
        },
        error: error => {
          
        }
      }
    )
  }
  getOutletState(o: RouterOutlet) {
    return o.isActivated ? o.activatedRoute : '';
  }
}
