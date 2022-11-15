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
import { EmailSettingsDto } from '../models/email-settings-dto';
import { SendTestEmailInput } from '../models/send-test-email-input';
import { UpdateEmailSettingsDto } from '../models/update-email-settings-dto';

@Injectable({
  providedIn: 'root',
})
export class EmailSettingsService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApiSettingManagementEmailing
   */
  static readonly GetApiSettingManagementEmailingPath = '/api/setting-management/emailing';

  /**
   * Link Api: /api/setting-management/emailing
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiSettingManagementEmailing_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSettingManagementEmailing_Plain_Response(params?: {
  }): Observable<THRMStrictHttpResponse<EmailSettingsDto>> {

    const rb = new RequestBuilder(this.rootUrl, EmailSettingsService.GetApiSettingManagementEmailingPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<EmailSettingsDto>;
      })
    );
  }

  /**
   * Link Api: /api/setting-management/emailing
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiSettingManagementEmailing_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSettingManagementEmailing_Plain(params?: {
  }): Observable<EmailSettingsDto> {

    return this.getApiSettingManagementEmailing_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<EmailSettingsDto>) => r.body as EmailSettingsDto)
    );
  }

  /**
   * Link Api: /api/setting-management/emailing
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiSettingManagementEmailing_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSettingManagementEmailing_Json_Response(params?: {
  }): Observable<THRMStrictHttpResponse<EmailSettingsDto>> {

    const rb = new RequestBuilder(this.rootUrl, EmailSettingsService.GetApiSettingManagementEmailingPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<EmailSettingsDto>;
      })
    );
  }

  /**
   * Link Api: /api/setting-management/emailing
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiSettingManagementEmailing_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiSettingManagementEmailing_Json(params?: {
  }): Observable<EmailSettingsDto> {

    return this.getApiSettingManagementEmailing_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<EmailSettingsDto>) => r.body as EmailSettingsDto)
    );
  }

  /**
   * Path part for operation postApiSettingManagementEmailing
   */
  static readonly PostApiSettingManagementEmailingPath = '/api/setting-management/emailing';

  /**
   * Link Api: /api/setting-management/emailing
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiSettingManagementEmailing()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiSettingManagementEmailing_Response(params?: {
    body?: UpdateEmailSettingsDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmailSettingsService.PostApiSettingManagementEmailingPath, 'post');
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
   * Link Api: /api/setting-management/emailing
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiSettingManagementEmailing_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiSettingManagementEmailing(params?: {
    body?: UpdateEmailSettingsDto
  }): Observable<void> {

    return this.postApiSettingManagementEmailing_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiSettingManagementEmailingSendTestEmail
   */
  static readonly PostApiSettingManagementEmailingSendTestEmailPath = '/api/setting-management/emailing/send-test-email';

  /**
   * Link Api: /api/setting-management/emailing/send-test-email
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiSettingManagementEmailingSendTestEmail()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiSettingManagementEmailingSendTestEmail_Response(params?: {
    body?: SendTestEmailInput
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmailSettingsService.PostApiSettingManagementEmailingSendTestEmailPath, 'post');
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
   * Link Api: /api/setting-management/emailing/send-test-email
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiSettingManagementEmailingSendTestEmail_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiSettingManagementEmailingSendTestEmail(params?: {
    body?: SendTestEmailInput
  }): Observable<void> {

    return this.postApiSettingManagementEmailingSendTestEmail_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
