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
import { UserData } from '../models/user-data';
import { UserDataListResultDto } from '../models/user-data-list-result-dto';

@Injectable({
  providedIn: 'root',
})
export class UserLookupService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApiIdentityUsersLookupId
   */
  static readonly GetApiIdentityUsersLookupIdPath = '/api/identity/users/lookup/{id}';

  /**
   * Link Api: /api/identity/users/lookup/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersLookupId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupId_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<UserData>> {

    const rb = new RequestBuilder(this.rootUrl, UserLookupService.GetApiIdentityUsersLookupIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<UserData>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/lookup/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersLookupId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupId_Plain(params: {
    id: string;
  }): Observable<UserData> {

    return this.getApiIdentityUsersLookupId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<UserData>) => r.body as UserData)
    );
  }

  /**
   * Link Api: /api/identity/users/lookup/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersLookupId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupId_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<UserData>> {

    const rb = new RequestBuilder(this.rootUrl, UserLookupService.GetApiIdentityUsersLookupIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<UserData>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/lookup/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersLookupId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupId_Json(params: {
    id: string;
  }): Observable<UserData> {

    return this.getApiIdentityUsersLookupId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<UserData>) => r.body as UserData)
    );
  }

  /**
   * Path part for operation getApiIdentityUsersLookupByUsernameUserName
   */
  static readonly GetApiIdentityUsersLookupByUsernameUserNamePath = '/api/identity/users/lookup/by-username/{userName}';

  /**
   * Link Api: /api/identity/users/lookup/by-username/{userName}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersLookupByUsernameUserName_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupByUsernameUserName_Plain_Response(params: {
    userName: string;
  }): Observable<THRMStrictHttpResponse<UserData>> {

    const rb = new RequestBuilder(this.rootUrl, UserLookupService.GetApiIdentityUsersLookupByUsernameUserNamePath, 'get');
    if (params) {
      rb.path('userName', params.userName, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<UserData>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/lookup/by-username/{userName}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersLookupByUsernameUserName_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupByUsernameUserName_Plain(params: {
    userName: string;
  }): Observable<UserData> {

    return this.getApiIdentityUsersLookupByUsernameUserName_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<UserData>) => r.body as UserData)
    );
  }

  /**
   * Link Api: /api/identity/users/lookup/by-username/{userName}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersLookupByUsernameUserName_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupByUsernameUserName_Json_Response(params: {
    userName: string;
  }): Observable<THRMStrictHttpResponse<UserData>> {

    const rb = new RequestBuilder(this.rootUrl, UserLookupService.GetApiIdentityUsersLookupByUsernameUserNamePath, 'get');
    if (params) {
      rb.path('userName', params.userName, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<UserData>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/lookup/by-username/{userName}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersLookupByUsernameUserName_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupByUsernameUserName_Json(params: {
    userName: string;
  }): Observable<UserData> {

    return this.getApiIdentityUsersLookupByUsernameUserName_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<UserData>) => r.body as UserData)
    );
  }

  /**
   * Path part for operation getApiIdentityUsersLookupSearch
   */
  static readonly GetApiIdentityUsersLookupSearchPath = '/api/identity/users/lookup/search';

  /**
   * Link Api: /api/identity/users/lookup/search
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersLookupSearch_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupSearch_Plain_Response(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<UserDataListResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserLookupService.GetApiIdentityUsersLookupSearchPath, 'get');
    if (params) {
      rb.query('Filter', params.Filter, {});
      rb.query('Sorting', params.Sorting, {});
      rb.query('SkipCount', params.SkipCount, {});
      rb.query('MaxResultCount', params.MaxResultCount, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<UserDataListResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/lookup/search
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersLookupSearch_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupSearch_Plain(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<UserDataListResultDto> {

    return this.getApiIdentityUsersLookupSearch_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<UserDataListResultDto>) => r.body as UserDataListResultDto)
    );
  }

  /**
   * Link Api: /api/identity/users/lookup/search
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersLookupSearch_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupSearch_Json_Response(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<UserDataListResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserLookupService.GetApiIdentityUsersLookupSearchPath, 'get');
    if (params) {
      rb.query('Filter', params.Filter, {});
      rb.query('Sorting', params.Sorting, {});
      rb.query('SkipCount', params.SkipCount, {});
      rb.query('MaxResultCount', params.MaxResultCount, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<UserDataListResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/lookup/search
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersLookupSearch_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupSearch_Json(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<UserDataListResultDto> {

    return this.getApiIdentityUsersLookupSearch_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<UserDataListResultDto>) => r.body as UserDataListResultDto)
    );
  }

  /**
   * Path part for operation getApiIdentityUsersLookupCount
   */
  static readonly GetApiIdentityUsersLookupCountPath = '/api/identity/users/lookup/count';

  /**
   * Link Api: /api/identity/users/lookup/count
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersLookupCount_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupCount_Plain_Response(params?: {
    Filter?: string;
  }): Observable<THRMStrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UserLookupService.GetApiIdentityUsersLookupCountPath, 'get');
    if (params) {
      rb.query('Filter', params.Filter, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: parseFloat(String((r as HttpResponse<TDSSafeAny>).body)) }) as THRMStrictHttpResponse<number>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/lookup/count
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersLookupCount_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupCount_Plain(params?: {
    Filter?: string;
  }): Observable<number> {

    return this.getApiIdentityUsersLookupCount_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Link Api: /api/identity/users/lookup/count
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersLookupCount_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupCount_Json_Response(params?: {
    Filter?: string;
  }): Observable<THRMStrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UserLookupService.GetApiIdentityUsersLookupCountPath, 'get');
    if (params) {
      rb.query('Filter', params.Filter, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: parseFloat(String((r as HttpResponse<TDSSafeAny>).body)) }) as THRMStrictHttpResponse<number>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/lookup/count
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersLookupCount_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersLookupCount_Json(params?: {
    Filter?: string;
  }): Observable<number> {

    return this.getApiIdentityUsersLookupCount_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<number>) => r.body as number)
    );
  }

}
