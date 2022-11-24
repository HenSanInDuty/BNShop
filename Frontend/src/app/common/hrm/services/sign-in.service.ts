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
import { RefreshTokenDto } from '../models/refresh-token-dto';
import { SendSmsOtpDto } from '../models/send-sms-otp-dto';
import { SignInClientDto } from '../models/sign-in-client-dto';
import { SignInPasswordDto } from '../models/sign-in-password-dto';
import { SignInSmsOtpDto } from '../models/sign-in-sms-otp-dto';

@Injectable({
  providedIn: 'root',
})
export class SignInService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation postSignInOtpsmsSend
   */
  static readonly PostSignInOtpsmsSendPath = '/api/v1/sign-in/otpsms/send';

  /**
   * Link Api: /api/v1/sign-in/otpsms/send
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSignInOtpsmsSend()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignInOtpsmsSend_Response(params?: {
    body?: SendSmsOtpDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SignInService.PostSignInOtpsmsSendPath, 'post');
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
   * Link Api: /api/v1/sign-in/otpsms/send
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSignInOtpsmsSend_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignInOtpsmsSend(params?: {
    body?: SendSmsOtpDto
  }): Observable<void> {

    return this.postSignInOtpsmsSend_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postSignInOtpsms
   */
  static readonly PostSignInOtpsmsPath = '/api/v1/sign-in/otpsms';

  /**
   * Link Api: /api/v1/sign-in/otpsms
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSignInOtpsms()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignInOtpsms_Response(params?: {
    tenant?: string;
    body?: SignInSmsOtpDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SignInService.PostSignInOtpsmsPath, 'post');
    if (params) {
      rb.header('tenant', params.tenant, {});
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
   * Link Api: /api/v1/sign-in/otpsms
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSignInOtpsms_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignInOtpsms(params?: {
    tenant?: string;
    body?: SignInSmsOtpDto
  }): Observable<void> {

    return this.postSignInOtpsms_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postSignInClient
   */
  static readonly PostSignInClientPath = '/api/v1/sign-in/client';

  /**
   * Link Api: /api/v1/sign-in/client
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSignInClient()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignInClient_Response(params?: {
    tenant?: string;
    body?: SignInClientDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SignInService.PostSignInClientPath, 'post');
    if (params) {
      rb.header('tenant', params.tenant, {});
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
   * Link Api: /api/v1/sign-in/client
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSignInClient_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignInClient(params?: {
    tenant?: string;
    body?: SignInClientDto
  }): Observable<void> {

    return this.postSignInClient_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postSignInPassword
   */
  static readonly PostSignInPasswordPath = '/api/v1/sign-in/password';

  /**
   * Link Api: /api/v1/sign-in/password
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSignInPassword()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignInPassword_Response(params?: {
    tenant?: string;
    body?: SignInPasswordDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SignInService.PostSignInPasswordPath, 'post');
    if (params) {
      rb.header('tenant', params.tenant, {});
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
   * Link Api: /api/v1/sign-in/password
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSignInPassword_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignInPassword(params?: {
    tenant?: string;
    body?: SignInPasswordDto
  }): Observable<void> {

    return this.postSignInPassword_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postSignInRefreshToken
   */
  static readonly PostSignInRefreshTokenPath = '/api/v1/sign-in/refresh-token';

  /**
   * Link Api: /api/v1/sign-in/refresh-token
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSignInRefreshToken()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignInRefreshToken_Response(params?: {
    tenant?: string;
    body?: RefreshTokenDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SignInService.PostSignInRefreshTokenPath, 'post');
    if (params) {
      rb.header('tenant', params.tenant, {});
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
   * Link Api: /api/v1/sign-in/refresh-token
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSignInRefreshToken_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSignInRefreshToken(params?: {
    tenant?: string;
    body?: RefreshTokenDto
  }): Observable<void> {

    return this.postSignInRefreshToken_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
