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
import { SocialAccountAuthenDto } from '../models/social-account-authen-dto';
import { SocialAccountSignInDto } from '../models/social-account-sign-in-dto';

@Injectable({
  providedIn: 'root',
})
export class SocialAccountService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation postSocialAccountAuthentication
   */
  static readonly PostSocialAccountAuthenticationPath = '/api/v1/social-account/authentication';

  /**
   * Link Api: /api/v1/social-account/authentication
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSocialAccountAuthentication_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSocialAccountAuthentication_Plain_Response(params?: {
    tenant?: string;
    body?: SocialAccountAuthenDto
  }): Observable<THRMStrictHttpResponse<SocialAccountSignInDto>> {

    const rb = new RequestBuilder(this.rootUrl, SocialAccountService.PostSocialAccountAuthenticationPath, 'post');
    if (params) {
      rb.header('tenant', params.tenant, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<SocialAccountSignInDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/social-account/authentication
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSocialAccountAuthentication_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSocialAccountAuthentication_Plain(params?: {
    tenant?: string;
    body?: SocialAccountAuthenDto
  }): Observable<SocialAccountSignInDto> {

    return this.postSocialAccountAuthentication_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<SocialAccountSignInDto>) => r.body as SocialAccountSignInDto)
    );
  }

  /**
   * Link Api: /api/v1/social-account/authentication
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postSocialAccountAuthentication_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSocialAccountAuthentication_Json_Response(params?: {
    tenant?: string;
    body?: SocialAccountAuthenDto
  }): Observable<THRMStrictHttpResponse<SocialAccountSignInDto>> {

    const rb = new RequestBuilder(this.rootUrl, SocialAccountService.PostSocialAccountAuthenticationPath, 'post');
    if (params) {
      rb.header('tenant', params.tenant, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<SocialAccountSignInDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/social-account/authentication
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postSocialAccountAuthentication_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postSocialAccountAuthentication_Json(params?: {
    tenant?: string;
    body?: SocialAccountAuthenDto
  }): Observable<SocialAccountSignInDto> {

    return this.postSocialAccountAuthentication_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<SocialAccountSignInDto>) => r.body as SocialAccountSignInDto)
    );
  }

}
