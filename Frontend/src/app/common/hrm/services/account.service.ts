/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { THRMBaseService } from '../thrm-base-service';
import { THRMApiConfiguration } from '../thrm-api-configuration';
import { THRMStrictHttpResponse } from '../thrm-strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { TDSSafeAny} from 'tds-ui/shared/utility';
import { ChangePasswordDto } from '../models/change-password-dto';
import { ResetPasswordEmailDto } from '../models/reset-password-email-dto';
import { ResetPasswordSmsDto } from '../models/reset-password-sms-dto';
import { SendEmailOtpDto } from '../models/send-email-otp-dto';
import { SendSmsOtpDto } from '../models/send-sms-otp-dto';
import { UserChangePassDto } from '../models/user-change-pass-dto';
import { VerifyEmailOtpDto } from '../models/verify-email-otp-dto';
import { VerifySmsOtpDto } from '../models/verify-sms-otp-dto';

@Injectable({
  providedIn: 'root',
})
export class AccountService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation postAccountHrmChangePassword
   */
  static readonly PostAccountHrmChangePasswordPath = '/api/v1/account/hrm-change-password';

  /**
   * Link Api: /api/v1/account/hrm-change-password
   *
   * đổi mật khẩu.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postAccountHrmChangePassword()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountHrmChangePassword_Response(params?: {
    body?: UserChangePassDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.PostAccountHrmChangePasswordPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: undefined }) as THRMStrictHttpResponse<void>;
      })
    );
  }

  /**
   * Link Api: /api/v1/account/hrm-change-password
   *
   * đổi mật khẩu.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postAccountHrmChangePassword_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountHrmChangePassword(params?: {
    body?: UserChangePassDto
  }): Observable<void> {

    return this.postAccountHrmChangePassword_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postAccountResetPasswordSmsSendOtp
   */
  static readonly PostAccountResetPasswordSmsSendOtpPath = '/api/v1/account/reset-password/sms/send-otp';

  /**
   * Link Api: /api/v1/account/reset-password/sms/send-otp
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postAccountResetPasswordSmsSendOtp()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountResetPasswordSmsSendOtp_Response(params?: {
    body?: SendSmsOtpDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.PostAccountResetPasswordSmsSendOtpPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: undefined }) as THRMStrictHttpResponse<void>;
      })
    );
  }

  /**
   * Link Api: /api/v1/account/reset-password/sms/send-otp
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postAccountResetPasswordSmsSendOtp_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountResetPasswordSmsSendOtp(params?: {
    body?: SendSmsOtpDto
  }): Observable<void> {

    return this.postAccountResetPasswordSmsSendOtp_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postAccountResetPasswordSmsVerifyOtp
   */
  static readonly PostAccountResetPasswordSmsVerifyOtpPath = '/api/v1/account/reset-password/sms/verify-otp';

  /**
   * Link Api: /api/v1/account/reset-password/sms/verify-otp
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postAccountResetPasswordSmsVerifyOtp()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountResetPasswordSmsVerifyOtp_Response(params?: {
    body?: VerifySmsOtpDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.PostAccountResetPasswordSmsVerifyOtpPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: undefined }) as THRMStrictHttpResponse<void>;
      })
    );
  }

  /**
   * Link Api: /api/v1/account/reset-password/sms/verify-otp
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postAccountResetPasswordSmsVerifyOtp_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountResetPasswordSmsVerifyOtp(params?: {
    body?: VerifySmsOtpDto
  }): Observable<void> {

    return this.postAccountResetPasswordSmsVerifyOtp_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postAccountResetPasswordSms
   */
  static readonly PostAccountResetPasswordSmsPath = '/api/v1/account/reset-password/sms';

  /**
   * Link Api: /api/v1/account/reset-password/sms
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postAccountResetPasswordSms()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountResetPasswordSms_Response(params?: {
    body?: ResetPasswordSmsDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.PostAccountResetPasswordSmsPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: undefined }) as THRMStrictHttpResponse<void>;
      })
    );
  }

  /**
   * Link Api: /api/v1/account/reset-password/sms
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postAccountResetPasswordSms_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountResetPasswordSms(params?: {
    body?: ResetPasswordSmsDto
  }): Observable<void> {

    return this.postAccountResetPasswordSms_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postAccountResetPasswordEmailSendOtp
   */
  static readonly PostAccountResetPasswordEmailSendOtpPath = '/api/v1/account/reset-password/email/send-otp';

  /**
   * Link Api: /api/v1/account/reset-password/email/send-otp
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postAccountResetPasswordEmailSendOtp()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountResetPasswordEmailSendOtp_Response(params?: {
    body?: SendEmailOtpDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.PostAccountResetPasswordEmailSendOtpPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: undefined }) as THRMStrictHttpResponse<void>;
      })
    );
  }

  /**
   * Link Api: /api/v1/account/reset-password/email/send-otp
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postAccountResetPasswordEmailSendOtp_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountResetPasswordEmailSendOtp(params?: {
    body?: SendEmailOtpDto
  }): Observable<void> {

    return this.postAccountResetPasswordEmailSendOtp_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postAccountResetPasswordEmailVerifyOtp
   */
  static readonly PostAccountResetPasswordEmailVerifyOtpPath = '/api/v1/account/reset-password/email/verify-otp';

  /**
   * Link Api: /api/v1/account/reset-password/email/verify-otp
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postAccountResetPasswordEmailVerifyOtp()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountResetPasswordEmailVerifyOtp_Response(params?: {
    body?: VerifyEmailOtpDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.PostAccountResetPasswordEmailVerifyOtpPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: undefined }) as THRMStrictHttpResponse<void>;
      })
    );
  }

  /**
   * Link Api: /api/v1/account/reset-password/email/verify-otp
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postAccountResetPasswordEmailVerifyOtp_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountResetPasswordEmailVerifyOtp(params?: {
    body?: VerifyEmailOtpDto
  }): Observable<void> {

    return this.postAccountResetPasswordEmailVerifyOtp_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postAccountResetPasswordEmail
   */
  static readonly PostAccountResetPasswordEmailPath = '/api/v1/account/reset-password/email';

  /**
   * Link Api: /api/v1/account/reset-password/email
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postAccountResetPasswordEmail()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountResetPasswordEmail_Response(params?: {
    body?: ResetPasswordEmailDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.PostAccountResetPasswordEmailPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: undefined }) as THRMStrictHttpResponse<void>;
      })
    );
  }

  /**
   * Link Api: /api/v1/account/reset-password/email
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postAccountResetPasswordEmail_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountResetPasswordEmail(params?: {
    body?: ResetPasswordEmailDto
  }): Observable<void> {

    return this.postAccountResetPasswordEmail_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postAccountChangePassword
   */
  static readonly PostAccountChangePasswordPath = '/api/v1/account/change-password';

  /**
   * Link Api: /api/v1/account/change-password
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postAccountChangePassword()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountChangePassword_Response(params?: {
    body?: ChangePasswordDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountService.PostAccountChangePasswordPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: undefined }) as THRMStrictHttpResponse<void>;
      })
    );
  }

  /**
   * Link Api: /api/v1/account/change-password
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postAccountChangePassword_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postAccountChangePassword(params?: {
    body?: ChangePasswordDto
  }): Observable<void> {

    return this.postAccountChangePassword_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
