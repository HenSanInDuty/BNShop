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
import { ResourceTypeCreateDto } from '../models/resource-type-create-dto';
import { ResourceTypeDto } from '../models/resource-type-dto';
import { ResourceTypeUpdateDto } from '../models/resource-type-update-dto';

@Injectable({
  providedIn: 'root',
})
export class ResourceTypeService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getResourceType
   */
  static readonly GetResourceTypePath = '/api/v1/resource-type';

  /**
   * Link Api: /api/v1/resource-type
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceType_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceType_Plain_Response(params?: {
    searchText?: string;
    sorting?: string;
  }): Observable<THRMStrictHttpResponse<Array<ResourceTypeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTypeService.GetResourceTypePath, 'get');
    if (params) {
      rb.query('searchText', params.searchText, {});
      rb.query('sorting', params.sorting, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<ResourceTypeDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-type
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceType_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceType_Plain(params?: {
    searchText?: string;
    sorting?: string;
  }): Observable<Array<ResourceTypeDto>> {

    return this.getResourceType_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ResourceTypeDto>>) => r.body as Array<ResourceTypeDto>)
    );
  }

  /**
   * Link Api: /api/v1/resource-type
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceType_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceType_Json_Response(params?: {
    searchText?: string;
    sorting?: string;
  }): Observable<THRMStrictHttpResponse<Array<ResourceTypeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTypeService.GetResourceTypePath, 'get');
    if (params) {
      rb.query('searchText', params.searchText, {});
      rb.query('sorting', params.sorting, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<ResourceTypeDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-type
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceType_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceType_Json(params?: {
    searchText?: string;
    sorting?: string;
  }): Observable<Array<ResourceTypeDto>> {

    return this.getResourceType_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ResourceTypeDto>>) => r.body as Array<ResourceTypeDto>)
    );
  }

  /**
   * Path part for operation postResourceType
   */
  static readonly PostResourceTypePath = '/api/v1/resource-type';

  /**
   * Link Api: /api/v1/resource-type
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResourceType_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceType_Plain_Response(params?: {
    body?: ResourceTypeCreateDto
  }): Observable<THRMStrictHttpResponse<ResourceTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTypeService.PostResourceTypePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTypeDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-type
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResourceType_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceType_Plain(params?: {
    body?: ResourceTypeCreateDto
  }): Observable<ResourceTypeDto> {

    return this.postResourceType_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTypeDto>) => r.body as ResourceTypeDto)
    );
  }

  /**
   * Link Api: /api/v1/resource-type
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResourceType_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceType_Json_Response(params?: {
    body?: ResourceTypeCreateDto
  }): Observable<THRMStrictHttpResponse<ResourceTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTypeService.PostResourceTypePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTypeDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-type
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResourceType_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceType_Json(params?: {
    body?: ResourceTypeCreateDto
  }): Observable<ResourceTypeDto> {

    return this.postResourceType_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTypeDto>) => r.body as ResourceTypeDto)
    );
  }

  /**
   * Path part for operation getResourceTypeId
   */
  static readonly GetResourceTypeIdPath = '/api/v1/resource-type/{id}';

  /**
   * Link Api: /api/v1/resource-type/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceTypeId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTypeId_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<ResourceTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTypeService.GetResourceTypeIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTypeDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-type/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceTypeId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTypeId_Plain(params: {
    id: string;
  }): Observable<ResourceTypeDto> {

    return this.getResourceTypeId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTypeDto>) => r.body as ResourceTypeDto)
    );
  }

  /**
   * Link Api: /api/v1/resource-type/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceTypeId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTypeId_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<ResourceTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTypeService.GetResourceTypeIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTypeDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-type/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceTypeId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTypeId_Json(params: {
    id: string;
  }): Observable<ResourceTypeDto> {

    return this.getResourceTypeId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTypeDto>) => r.body as ResourceTypeDto)
    );
  }

  /**
   * Path part for operation putResourceTypeId
   */
  static readonly PutResourceTypeIdPath = '/api/v1/resource-type/{id}';

  /**
   * Link Api: /api/v1/resource-type/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putResourceTypeId_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceTypeId_Plain_Response(params: {
    id: string;
    body?: ResourceTypeUpdateDto
  }): Observable<THRMStrictHttpResponse<ResourceTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTypeService.PutResourceTypeIdPath, 'put');
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
        return r as THRMStrictHttpResponse<ResourceTypeDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-type/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putResourceTypeId_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceTypeId_Plain(params: {
    id: string;
    body?: ResourceTypeUpdateDto
  }): Observable<ResourceTypeDto> {

    return this.putResourceTypeId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTypeDto>) => r.body as ResourceTypeDto)
    );
  }

  /**
   * Link Api: /api/v1/resource-type/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putResourceTypeId_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceTypeId_Json_Response(params: {
    id: string;
    body?: ResourceTypeUpdateDto
  }): Observable<THRMStrictHttpResponse<ResourceTypeDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTypeService.PutResourceTypeIdPath, 'put');
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
        return r as THRMStrictHttpResponse<ResourceTypeDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-type/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putResourceTypeId_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceTypeId_Json(params: {
    id: string;
    body?: ResourceTypeUpdateDto
  }): Observable<ResourceTypeDto> {

    return this.putResourceTypeId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTypeDto>) => r.body as ResourceTypeDto)
    );
  }

  /**
   * Path part for operation deleteResourceTypeId
   */
  static readonly DeleteResourceTypeIdPath = '/api/v1/resource-type/{id}';

  /**
   * Link Api: /api/v1/resource-type/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteResourceTypeId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteResourceTypeId_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTypeService.DeleteResourceTypeIdPath, 'delete');
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
   * Link Api: /api/v1/resource-type/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteResourceTypeId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteResourceTypeId(params: {
    id: string;
  }): Observable<void> {

    return this.deleteResourceTypeId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteResourceTypeDeleteMany
   */
  static readonly DeleteResourceTypeDeleteManyPath = '/api/v1/resource-type/delete-many';

  /**
   * Link Api: /api/v1/resource-type/delete-many
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteResourceTypeDeleteMany()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteResourceTypeDeleteMany_Response(params?: {
    listId?: Array<string>;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTypeService.DeleteResourceTypeDeleteManyPath, 'delete');
    if (params) {
      rb.query('listId', params.listId, {});
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
   * Link Api: /api/v1/resource-type/delete-many
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteResourceTypeDeleteMany_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteResourceTypeDeleteMany(params?: {
    listId?: Array<string>;
  }): Observable<void> {

    return this.deleteResourceTypeDeleteMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
