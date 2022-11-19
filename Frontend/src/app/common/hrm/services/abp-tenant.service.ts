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
import { FindTenantResultDto } from '../models/find-tenant-result-dto';

@Injectable({
  providedIn: 'root',
})
export class AbpTenantService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApiAbpMultiTenancyTenantsByNameName
   */
  static readonly GetApiAbpMultiTenancyTenantsByNameNamePath = '/api/abp/multi-tenancy/tenants/by-name/{name}';

  /**
   * Link Api: /api/abp/multi-tenancy/tenants/by-name/{name}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAbpMultiTenancyTenantsByNameName_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpMultiTenancyTenantsByNameName_Plain_Response(params: {
    name: string;
  }): Observable<THRMStrictHttpResponse<FindTenantResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, AbpTenantService.GetApiAbpMultiTenancyTenantsByNameNamePath, 'get');
    if (params) {
      rb.path('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<FindTenantResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/abp/multi-tenancy/tenants/by-name/{name}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAbpMultiTenancyTenantsByNameName_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpMultiTenancyTenantsByNameName_Plain(params: {
    name: string;
  }): Observable<FindTenantResultDto> {

    return this.getApiAbpMultiTenancyTenantsByNameName_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<FindTenantResultDto>) => r.body as FindTenantResultDto)
    );
  }

  /**
   * Link Api: /api/abp/multi-tenancy/tenants/by-name/{name}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAbpMultiTenancyTenantsByNameName_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpMultiTenancyTenantsByNameName_Json_Response(params: {
    name: string;
  }): Observable<THRMStrictHttpResponse<FindTenantResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, AbpTenantService.GetApiAbpMultiTenancyTenantsByNameNamePath, 'get');
    if (params) {
      rb.path('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<FindTenantResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/abp/multi-tenancy/tenants/by-name/{name}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAbpMultiTenancyTenantsByNameName_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpMultiTenancyTenantsByNameName_Json(params: {
    name: string;
  }): Observable<FindTenantResultDto> {

    return this.getApiAbpMultiTenancyTenantsByNameName_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<FindTenantResultDto>) => r.body as FindTenantResultDto)
    );
  }

  /**
   * Path part for operation getApiAbpMultiTenancyTenantsByIdId
   */
  static readonly GetApiAbpMultiTenancyTenantsByIdIdPath = '/api/abp/multi-tenancy/tenants/by-id/{id}';

  /**
   * Link Api: /api/abp/multi-tenancy/tenants/by-id/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAbpMultiTenancyTenantsByIdId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpMultiTenancyTenantsByIdId_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<FindTenantResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, AbpTenantService.GetApiAbpMultiTenancyTenantsByIdIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<FindTenantResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/abp/multi-tenancy/tenants/by-id/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAbpMultiTenancyTenantsByIdId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpMultiTenancyTenantsByIdId_Plain(params: {
    id: string;
  }): Observable<FindTenantResultDto> {

    return this.getApiAbpMultiTenancyTenantsByIdId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<FindTenantResultDto>) => r.body as FindTenantResultDto)
    );
  }

  /**
   * Link Api: /api/abp/multi-tenancy/tenants/by-id/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAbpMultiTenancyTenantsByIdId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpMultiTenancyTenantsByIdId_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<FindTenantResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, AbpTenantService.GetApiAbpMultiTenancyTenantsByIdIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<FindTenantResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/abp/multi-tenancy/tenants/by-id/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAbpMultiTenancyTenantsByIdId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpMultiTenancyTenantsByIdId_Json(params: {
    id: string;
  }): Observable<FindTenantResultDto> {

    return this.getApiAbpMultiTenancyTenantsByIdId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<FindTenantResultDto>) => r.body as FindTenantResultDto)
    );
  }

}
