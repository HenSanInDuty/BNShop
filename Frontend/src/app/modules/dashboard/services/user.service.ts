import { Injectable } from '@angular/core';
import { CoreApiMethodType } from '@core/enum';
import { CoreCommonService } from '@core/services';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { UsePersonalDTO, changPasswordUser } from '../models/user.dto';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: CoreCommonService) { }

  changePassword(params?: changPasswordUser): Observable<TDSSafeAny> {
    let api = {
      url: environment.apiTHRM + `user-profile/change-password`,
      method: CoreApiMethodType.post
    }
    return this.apiService.create<TDSSafeAny>(api, params);
  }

}
