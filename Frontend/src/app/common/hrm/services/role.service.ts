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
import { IdentityRoleCreateDto } from '../models/identity-role-create-dto';
import { IdentityRoleDto } from '../models/identity-role-dto';
import { IdentityRoleDtoListResultDto } from '../models/identity-role-dto-list-result-dto';
import { IdentityRoleDtoPagedResultDto } from '../models/identity-role-dto-paged-result-dto';
import { IdentityRoleUpdateDto } from '../models/identity-role-update-dto';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApiIdentityRolesAll
   */
  static readonly GetApiIdentityRolesAllPath = '/api/identity/roles/all';

  /**
   * Link Api: /api/identity/roles/all
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityRolesAll_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityRolesAll_Plain_Response(params?: {
  }): Observable<THRMStrictHttpResponse<IdentityRoleDtoListResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.GetApiIdentityRolesAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityRoleDtoListResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/roles/all
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityRolesAll_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityRolesAll_Plain(params?: {
  }): Observable<IdentityRoleDtoListResultDto> {

    return this.getApiIdentityRolesAll_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityRoleDtoListResultDto>) => r.body as IdentityRoleDtoListResultDto)
    );
  }

  /**
   * Link Api: /api/identity/roles/all
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityRolesAll_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityRolesAll_Json_Response(params?: {
  }): Observable<THRMStrictHttpResponse<IdentityRoleDtoListResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.GetApiIdentityRolesAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityRoleDtoListResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/roles/all
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityRolesAll_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityRolesAll_Json(params?: {
  }): Observable<IdentityRoleDtoListResultDto> {

    return this.getApiIdentityRolesAll_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityRoleDtoListResultDto>) => r.body as IdentityRoleDtoListResultDto)
    );
  }

  /**
   * Path part for operation getApiIdentityRoles
   */
  static readonly GetApiIdentityRolesPath = '/api/identity/roles';

  /**
   * Link Api: /api/identity/roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityRoles_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityRoles_Plain_Response(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<IdentityRoleDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.GetApiIdentityRolesPath, 'get');
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
        return r as THRMStrictHttpResponse<IdentityRoleDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/roles
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityRoles_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityRoles_Plain(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<IdentityRoleDtoPagedResultDto> {

    return this.getApiIdentityRoles_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityRoleDtoPagedResultDto>) => r.body as IdentityRoleDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/identity/roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityRoles_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityRoles_Json_Response(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<IdentityRoleDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.GetApiIdentityRolesPath, 'get');
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
        return r as THRMStrictHttpResponse<IdentityRoleDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/roles
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityRoles_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityRoles_Json(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<IdentityRoleDtoPagedResultDto> {

    return this.getApiIdentityRoles_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityRoleDtoPagedResultDto>) => r.body as IdentityRoleDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postApiIdentityRoles
   */
  static readonly PostApiIdentityRolesPath = '/api/identity/roles';

  /**
   * Link Api: /api/identity/roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiIdentityRoles_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiIdentityRoles_Plain_Response(params?: {
    body?: IdentityRoleCreateDto
  }): Observable<THRMStrictHttpResponse<IdentityRoleDto>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.PostApiIdentityRolesPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityRoleDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/roles
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiIdentityRoles_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiIdentityRoles_Plain(params?: {
    body?: IdentityRoleCreateDto
  }): Observable<IdentityRoleDto> {

    return this.postApiIdentityRoles_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityRoleDto>) => r.body as IdentityRoleDto)
    );
  }

  /**
   * Link Api: /api/identity/roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiIdentityRoles_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiIdentityRoles_Json_Response(params?: {
    body?: IdentityRoleCreateDto
  }): Observable<THRMStrictHttpResponse<IdentityRoleDto>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.PostApiIdentityRolesPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityRoleDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/roles
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiIdentityRoles_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiIdentityRoles_Json(params?: {
    body?: IdentityRoleCreateDto
  }): Observable<IdentityRoleDto> {

    return this.postApiIdentityRoles_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityRoleDto>) => r.body as IdentityRoleDto)
    );
  }

  /**
   * Path part for operation getApiIdentityRolesId
   */
  static readonly GetApiIdentityRolesIdPath = '/api/identity/roles/{id}';

  /**
   * Link Api: /api/identity/roles/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityRolesId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityRolesId_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<IdentityRoleDto>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.GetApiIdentityRolesIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityRoleDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/roles/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityRolesId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityRolesId_Plain(params: {
    id: string;
  }): Observable<IdentityRoleDto> {

    return this.getApiIdentityRolesId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityRoleDto>) => r.body as IdentityRoleDto)
    );
  }

  /**
   * Link Api: /api/identity/roles/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityRolesId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityRolesId_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<IdentityRoleDto>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.GetApiIdentityRolesIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityRoleDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/roles/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityRolesId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityRolesId_Json(params: {
    id: string;
  }): Observable<IdentityRoleDto> {

    return this.getApiIdentityRolesId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityRoleDto>) => r.body as IdentityRoleDto)
    );
  }

  /**
   * Path part for operation putApiIdentityRolesId
   */
  static readonly PutApiIdentityRolesIdPath = '/api/identity/roles/{id}';

  /**
   * Link Api: /api/identity/roles/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putApiIdentityRolesId_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiIdentityRolesId_Plain_Response(params: {
    id: string;
    body?: IdentityRoleUpdateDto
  }): Observable<THRMStrictHttpResponse<IdentityRoleDto>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.PutApiIdentityRolesIdPath, 'put');
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
        return r as THRMStrictHttpResponse<IdentityRoleDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/roles/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putApiIdentityRolesId_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiIdentityRolesId_Plain(params: {
    id: string;
    body?: IdentityRoleUpdateDto
  }): Observable<IdentityRoleDto> {

    return this.putApiIdentityRolesId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityRoleDto>) => r.body as IdentityRoleDto)
    );
  }

  /**
   * Link Api: /api/identity/roles/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putApiIdentityRolesId_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiIdentityRolesId_Json_Response(params: {
    id: string;
    body?: IdentityRoleUpdateDto
  }): Observable<THRMStrictHttpResponse<IdentityRoleDto>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.PutApiIdentityRolesIdPath, 'put');
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
        return r as THRMStrictHttpResponse<IdentityRoleDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/roles/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putApiIdentityRolesId_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiIdentityRolesId_Json(params: {
    id: string;
    body?: IdentityRoleUpdateDto
  }): Observable<IdentityRoleDto> {

    return this.putApiIdentityRolesId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityRoleDto>) => r.body as IdentityRoleDto)
    );
  }

  /**
   * Path part for operation deleteApiIdentityRolesId
   */
  static readonly DeleteApiIdentityRolesIdPath = '/api/identity/roles/{id}';

  /**
   * Link Api: /api/identity/roles/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiIdentityRolesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiIdentityRolesId_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RoleService.DeleteApiIdentityRolesIdPath, 'delete');
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
   * Link Api: /api/identity/roles/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteApiIdentityRolesId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiIdentityRolesId(params: {
    id: string;
  }): Observable<void> {

    return this.deleteApiIdentityRolesId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
