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
import { GetPermissionListResultDto } from '../models/get-permission-list-result-dto';
import { UpdatePermissionsDto } from '../models/update-permissions-dto';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApiPermissionManagementPermissions
   */
  static readonly GetApiPermissionManagementPermissionsPath = '/api/permission-management/permissions';

  /**
   * Link Api: /api/permission-management/permissions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiPermissionManagementPermissions_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiPermissionManagementPermissions_Plain_Response(params?: {
    providerName?: string;
    providerKey?: string;
  }): Observable<THRMStrictHttpResponse<GetPermissionListResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, PermissionsService.GetApiPermissionManagementPermissionsPath, 'get');
    if (params) {
      rb.query('providerName', params.providerName, {});
      rb.query('providerKey', params.providerKey, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<GetPermissionListResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/permission-management/permissions
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiPermissionManagementPermissions_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiPermissionManagementPermissions_Plain(params?: {
    providerName?: string;
    providerKey?: string;
  }): Observable<GetPermissionListResultDto> {

    return this.getApiPermissionManagementPermissions_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<GetPermissionListResultDto>) => r.body as GetPermissionListResultDto)
    );
  }

  /**
   * Link Api: /api/permission-management/permissions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiPermissionManagementPermissions_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiPermissionManagementPermissions_Json_Response(params?: {
    providerName?: string;
    providerKey?: string;
  }): Observable<THRMStrictHttpResponse<GetPermissionListResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, PermissionsService.GetApiPermissionManagementPermissionsPath, 'get');
    if (params) {
      rb.query('providerName', params.providerName, {});
      rb.query('providerKey', params.providerKey, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<GetPermissionListResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/permission-management/permissions
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiPermissionManagementPermissions_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiPermissionManagementPermissions_Json(params?: {
    providerName?: string;
    providerKey?: string;
  }): Observable<GetPermissionListResultDto> {

    return this.getApiPermissionManagementPermissions_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<GetPermissionListResultDto>) => r.body as GetPermissionListResultDto)
    );
  }

  /**
   * Path part for operation putApiPermissionManagementPermissions
   */
  static readonly PutApiPermissionManagementPermissionsPath = '/api/permission-management/permissions';

  /**
   * Link Api: /api/permission-management/permissions
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putApiPermissionManagementPermissions()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiPermissionManagementPermissions_Response(params?: {
    providerName?: string;
    providerKey?: string;
    body?: UpdatePermissionsDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PermissionsService.PutApiPermissionManagementPermissionsPath, 'put');
    if (params) {
      rb.query('providerName', params.providerName, {});
      rb.query('providerKey', params.providerKey, {});
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
   * Link Api: /api/permission-management/permissions
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putApiPermissionManagementPermissions_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiPermissionManagementPermissions(params?: {
    providerName?: string;
    providerKey?: string;
    body?: UpdatePermissionsDto
  }): Observable<void> {

    return this.putApiPermissionManagementPermissions_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
