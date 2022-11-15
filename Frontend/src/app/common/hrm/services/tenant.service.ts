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
import { TenantCreateDto } from '../models/tenant-create-dto';
import { TenantDto } from '../models/tenant-dto';
import { TenantDtoPagedResultDto } from '../models/tenant-dto-paged-result-dto';
import { TenantUpdateDto } from '../models/tenant-update-dto';

@Injectable({
  providedIn: 'root',
})
export class TenantService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApiMultiTenancyTenantsId
   */
  static readonly GetApiMultiTenancyTenantsIdPath = '/api/multi-tenancy/tenants/{id}';

  /**
   * Link Api: /api/multi-tenancy/tenants/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiMultiTenancyTenantsId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMultiTenancyTenantsId_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<TenantDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.GetApiMultiTenancyTenantsIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<TenantDto>;
      })
    );
  }

  /**
   * Link Api: /api/multi-tenancy/tenants/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiMultiTenancyTenantsId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMultiTenancyTenantsId_Plain(params: {
    id: string;
  }): Observable<TenantDto> {

    return this.getApiMultiTenancyTenantsId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TenantDto>) => r.body as TenantDto)
    );
  }

  /**
   * Link Api: /api/multi-tenancy/tenants/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiMultiTenancyTenantsId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMultiTenancyTenantsId_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<TenantDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.GetApiMultiTenancyTenantsIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<TenantDto>;
      })
    );
  }

  /**
   * Link Api: /api/multi-tenancy/tenants/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiMultiTenancyTenantsId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMultiTenancyTenantsId_Json(params: {
    id: string;
  }): Observable<TenantDto> {

    return this.getApiMultiTenancyTenantsId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TenantDto>) => r.body as TenantDto)
    );
  }

  /**
   * Path part for operation putApiMultiTenancyTenantsId
   */
  static readonly PutApiMultiTenancyTenantsIdPath = '/api/multi-tenancy/tenants/{id}';

  /**
   * Link Api: /api/multi-tenancy/tenants/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putApiMultiTenancyTenantsId_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiMultiTenancyTenantsId_Plain_Response(params: {
    id: string;
    body?: TenantUpdateDto
  }): Observable<THRMStrictHttpResponse<TenantDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.PutApiMultiTenancyTenantsIdPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<TenantDto>;
      })
    );
  }

  /**
   * Link Api: /api/multi-tenancy/tenants/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putApiMultiTenancyTenantsId_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiMultiTenancyTenantsId_Plain(params: {
    id: string;
    body?: TenantUpdateDto
  }): Observable<TenantDto> {

    return this.putApiMultiTenancyTenantsId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TenantDto>) => r.body as TenantDto)
    );
  }

  /**
   * Link Api: /api/multi-tenancy/tenants/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putApiMultiTenancyTenantsId_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiMultiTenancyTenantsId_Json_Response(params: {
    id: string;
    body?: TenantUpdateDto
  }): Observable<THRMStrictHttpResponse<TenantDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.PutApiMultiTenancyTenantsIdPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<TenantDto>;
      })
    );
  }

  /**
   * Link Api: /api/multi-tenancy/tenants/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putApiMultiTenancyTenantsId_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiMultiTenancyTenantsId_Json(params: {
    id: string;
    body?: TenantUpdateDto
  }): Observable<TenantDto> {

    return this.putApiMultiTenancyTenantsId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TenantDto>) => r.body as TenantDto)
    );
  }

  /**
   * Path part for operation deleteApiMultiTenancyTenantsId
   */
  static readonly DeleteApiMultiTenancyTenantsIdPath = '/api/multi-tenancy/tenants/{id}';

  /**
   * Link Api: /api/multi-tenancy/tenants/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiMultiTenancyTenantsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiMultiTenancyTenantsId_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.DeleteApiMultiTenancyTenantsIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * Link Api: /api/multi-tenancy/tenants/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteApiMultiTenancyTenantsId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiMultiTenancyTenantsId(params: {
    id: string;
  }): Observable<void> {

    return this.deleteApiMultiTenancyTenantsId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getApiMultiTenancyTenants
   */
  static readonly GetApiMultiTenancyTenantsPath = '/api/multi-tenancy/tenants';

  /**
   * Link Api: /api/multi-tenancy/tenants
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiMultiTenancyTenants_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMultiTenancyTenants_Plain_Response(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<TenantDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.GetApiMultiTenancyTenantsPath, 'get');
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
        return r as THRMStrictHttpResponse<TenantDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/multi-tenancy/tenants
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiMultiTenancyTenants_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMultiTenancyTenants_Plain(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<TenantDtoPagedResultDto> {

    return this.getApiMultiTenancyTenants_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TenantDtoPagedResultDto>) => r.body as TenantDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/multi-tenancy/tenants
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiMultiTenancyTenants_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMultiTenancyTenants_Json_Response(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<TenantDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.GetApiMultiTenancyTenantsPath, 'get');
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
        return r as THRMStrictHttpResponse<TenantDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/multi-tenancy/tenants
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiMultiTenancyTenants_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMultiTenancyTenants_Json(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<TenantDtoPagedResultDto> {

    return this.getApiMultiTenancyTenants_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TenantDtoPagedResultDto>) => r.body as TenantDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postApiMultiTenancyTenants
   */
  static readonly PostApiMultiTenancyTenantsPath = '/api/multi-tenancy/tenants';

  /**
   * Link Api: /api/multi-tenancy/tenants
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiMultiTenancyTenants_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiMultiTenancyTenants_Plain_Response(params?: {
    body?: TenantCreateDto
  }): Observable<THRMStrictHttpResponse<TenantDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.PostApiMultiTenancyTenantsPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<TenantDto>;
      })
    );
  }

  /**
   * Link Api: /api/multi-tenancy/tenants
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiMultiTenancyTenants_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiMultiTenancyTenants_Plain(params?: {
    body?: TenantCreateDto
  }): Observable<TenantDto> {

    return this.postApiMultiTenancyTenants_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TenantDto>) => r.body as TenantDto)
    );
  }

  /**
   * Link Api: /api/multi-tenancy/tenants
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiMultiTenancyTenants_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiMultiTenancyTenants_Json_Response(params?: {
    body?: TenantCreateDto
  }): Observable<THRMStrictHttpResponse<TenantDto>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.PostApiMultiTenancyTenantsPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<TenantDto>;
      })
    );
  }

  /**
   * Link Api: /api/multi-tenancy/tenants
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiMultiTenancyTenants_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiMultiTenancyTenants_Json(params?: {
    body?: TenantCreateDto
  }): Observable<TenantDto> {

    return this.postApiMultiTenancyTenants_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TenantDto>) => r.body as TenantDto)
    );
  }

  /**
   * Path part for operation getApiMultiTenancyTenantsIdDefaultConnectionString
   */
  static readonly GetApiMultiTenancyTenantsIdDefaultConnectionStringPath = '/api/multi-tenancy/tenants/{id}/default-connection-string';

  /**
   * Link Api: /api/multi-tenancy/tenants/{id}/default-connection-string
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiMultiTenancyTenantsIdDefaultConnectionString_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMultiTenancyTenantsIdDefaultConnectionString_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.GetApiMultiTenancyTenantsIdDefaultConnectionStringPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<string>;
      })
    );
  }

  /**
   * Link Api: /api/multi-tenancy/tenants/{id}/default-connection-string
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiMultiTenancyTenantsIdDefaultConnectionString_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMultiTenancyTenantsIdDefaultConnectionString_Plain(params: {
    id: string;
  }): Observable<string> {

    return this.getApiMultiTenancyTenantsIdDefaultConnectionString_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Link Api: /api/multi-tenancy/tenants/{id}/default-connection-string
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiMultiTenancyTenantsIdDefaultConnectionString_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMultiTenancyTenantsIdDefaultConnectionString_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.GetApiMultiTenancyTenantsIdDefaultConnectionStringPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<string>;
      })
    );
  }

  /**
   * Link Api: /api/multi-tenancy/tenants/{id}/default-connection-string
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiMultiTenancyTenantsIdDefaultConnectionString_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiMultiTenancyTenantsIdDefaultConnectionString_Json(params: {
    id: string;
  }): Observable<string> {

    return this.getApiMultiTenancyTenantsIdDefaultConnectionString_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation putApiMultiTenancyTenantsIdDefaultConnectionString
   */
  static readonly PutApiMultiTenancyTenantsIdDefaultConnectionStringPath = '/api/multi-tenancy/tenants/{id}/default-connection-string';

  /**
   * Link Api: /api/multi-tenancy/tenants/{id}/default-connection-string
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putApiMultiTenancyTenantsIdDefaultConnectionString()` instead.
   *
   * This method doesn't expect any request body.
   */
  putApiMultiTenancyTenantsIdDefaultConnectionString_Response(params: {
    id: string;
    defaultConnectionString?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.PutApiMultiTenancyTenantsIdDefaultConnectionStringPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('defaultConnectionString', params.defaultConnectionString, {});
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
   * Link Api: /api/multi-tenancy/tenants/{id}/default-connection-string
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putApiMultiTenancyTenantsIdDefaultConnectionString_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  putApiMultiTenancyTenantsIdDefaultConnectionString(params: {
    id: string;
    defaultConnectionString?: string;
  }): Observable<void> {

    return this.putApiMultiTenancyTenantsIdDefaultConnectionString_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteApiMultiTenancyTenantsIdDefaultConnectionString
   */
  static readonly DeleteApiMultiTenancyTenantsIdDefaultConnectionStringPath = '/api/multi-tenancy/tenants/{id}/default-connection-string';

  /**
   * Link Api: /api/multi-tenancy/tenants/{id}/default-connection-string
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiMultiTenancyTenantsIdDefaultConnectionString()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiMultiTenancyTenantsIdDefaultConnectionString_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TenantService.DeleteApiMultiTenancyTenantsIdDefaultConnectionStringPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * Link Api: /api/multi-tenancy/tenants/{id}/default-connection-string
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteApiMultiTenancyTenantsIdDefaultConnectionString_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiMultiTenancyTenantsIdDefaultConnectionString(params: {
    id: string;
  }): Observable<void> {

    return this.deleteApiMultiTenancyTenantsIdDefaultConnectionString_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
