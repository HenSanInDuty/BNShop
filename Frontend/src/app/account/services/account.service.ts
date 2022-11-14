import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreAuthService } from '@core/authentication';
import { CoreTokenDTO, CoreUserInitDTO } from '@core/dto';
import { CoreResetPasswordOtpDTO } from '@core/dto/resetPassword-token.dto';
import { CoreVerifyOtpDTO } from '@core/dto/verifyOtp.dto';
import { CoreApiMethodType } from '@core/enum';
import { CoreCommonService } from '@core/services';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private apiService: CoreCommonService,
    private authenService: CoreAuthService,
    private http: HttpClient,

  ) { }
  //Thực thi việc đăng nhập và lấy token
  signInPassword(username: string, password: string): Observable<TDSSafeAny>{
    const data = {
      phone: username,
      password: password,
    };
    return this.http.post<any>(environment.apiBNShop + `account/sign-in/`, data).pipe(
      this.authenService.afterRequestToken()
    );

  }

  //Thực thi việc đăng nhập và lấy token{}
  ChangePassword(body: { old_password: string, new_password1: string, new_password2: string}): Observable<TDSSafeAny>{
    const data = {
      old_password: body.old_password,
      new_password1: body.new_password1,
      new_password2: body.new_password2,
    };
    return this.http.patch<any>(environment.apiBNShop + `account/profile/change-password/`, data)

  }
  signInSendOtp(params: { phoneNumber: string }) {
    let api = {
      url: environment.apiTHRM + `/api/v1/sign-in/otpsms/send`,
      method: CoreApiMethodType.post,
    }
    return this.apiService.create(
      api,
      params);
  }
  //signinWithOtp
  signInVerifyOtpsms(params: CoreVerifyOtpDTO) {
    let api = {
      url: environment.apiTHRM + `/api/v1/sign-in/otpsms`,
      method: CoreApiMethodType.post,
    };
    return this.apiService.create<CoreTokenDTO>(
      api,
      params
    ).pipe(
      this.authenService.afterRequestToken()
    );

  };
  //verify send otp reset password
  resetPasswordSendOtp(params: { phoneNumber: string }) {
    let api = {
      url: environment.apiTHRM + `/api/v1/account/reset-password/sms/send-otp`,
      method: CoreApiMethodType.post,
    }
    return this.apiService.create(
      api,
      params);
  };
  //verify otp reset password
  resetPasswordVerifyOtpsms(params: CoreVerifyOtpDTO) {
    let api = {
      url: environment.apiTHRM + `/api/v1/account/reset-password/sms/verify-otp`,
      method: CoreApiMethodType.post,
    }
    return this.apiService.create(
      api,
      params);
  };
  //verify otp reset password
  resetPasswordsms(params: CoreResetPasswordOtpDTO) {
    let api = {
      url: environment.apiTHRM + `/api/v1/account/reset-password/sms`,
      method: CoreApiMethodType.post,
    }
    return this.apiService.create(
      api,
      params);
  };
}
