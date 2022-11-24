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
import { AccountSignUpDto } from '../models/account-sign-up-dto';
import { SendSmsOtpDto } from '../models/send-sms-otp-dto';
import { VerifySmsOtpDto } from '../models/verify-sms-otp-dto';

@Injectable({
  providedIn: 'root',
})
export class SignUpService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation postSignUpOtpsmsSend
   */
  static readonly PostSignUpOtpsmsSendPath = '/api/v1/sign-up/otpsms-send';

  /**
   * Link Api: /api/v1/sign-up/otpsms-send
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSignUpOtpsmsSend()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignUpOtpsmsSend_Response(params?: {
    body?: SendSmsOtpDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SignUpService.PostSignUpOtpsmsSendPath, 'post');
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
   * Link Api: /api/v1/sign-up/otpsms-send
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSignUpOtpsmsSend_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignUpOtpsmsSend(params?: {
    body?: SendSmsOtpDto
  }): Observable<void> {

    return this.postSignUpOtpsmsSend_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postSignUpOtpsmsVerify
   */
  static readonly PostSignUpOtpsmsVerifyPath = '/api/v1/sign-up/otpsms-verify';

  /**
   * Link Api: /api/v1/sign-up/otpsms-verify
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSignUpOtpsmsVerify()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignUpOtpsmsVerify_Response(params?: {
    body?: VerifySmsOtpDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SignUpService.PostSignUpOtpsmsVerifyPath, 'post');
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
   * Link Api: /api/v1/sign-up/otpsms-verify
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSignUpOtpsmsVerify_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignUpOtpsmsVerify(params?: {
    body?: VerifySmsOtpDto
  }): Observable<void> {

    return this.postSignUpOtpsmsVerify_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postSignUp
   */
  static readonly PostSignUpPath = '/api/v1/sign-up';

  /**
   * Link Api: /api/v1/sign-up
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSignUp()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignUp_Response(params?: {
    body?: AccountSignUpDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SignUpService.PostSignUpPath, 'post');
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
   * Link Api: /api/v1/sign-up
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSignUp_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignUp(params?: {
    body?: AccountSignUpDto
  }): Observable<void> {

    return this.postSignUp_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
