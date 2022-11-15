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
import { PositionCreateDto } from '../models/position-create-dto';
import { PositionDto } from '../models/position-dto';
import { PositionDtoPagedResultDto } from '../models/position-dto-paged-result-dto';
import { PositionUpdateDto } from '../models/position-update-dto';

@Injectable({
  providedIn: 'root',
})
export class PositionService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getPositionId
   */
  static readonly GetPositionIdPath = '/api/v1/position/{id}';

  /**
   * Link Api: /api/v1/position/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPositionId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPositionId_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<PositionDto>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.GetPositionIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<PositionDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/position/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPositionId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPositionId_Plain(params: {
    id: string;
  }): Observable<PositionDto> {

    return this.getPositionId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<PositionDto>) => r.body as PositionDto)
    );
  }

  /**
   * Link Api: /api/v1/position/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPositionId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPositionId_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<PositionDto>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.GetPositionIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<PositionDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/position/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPositionId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPositionId_Json(params: {
    id: string;
  }): Observable<PositionDto> {

    return this.getPositionId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<PositionDto>) => r.body as PositionDto)
    );
  }

  /**
   * Path part for operation putPositionId
   */
  static readonly PutPositionIdPath = '/api/v1/position/{id}';

  /**
   * Link Api: /api/v1/position/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putPositionId()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putPositionId_Response(params: {
    id: string;
    body?: PositionUpdateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.PutPositionIdPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
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
   * Link Api: /api/v1/position/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putPositionId_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putPositionId(params: {
    id: string;
    body?: PositionUpdateDto
  }): Observable<void> {

    return this.putPositionId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deletePositionId
   */
  static readonly DeletePositionIdPath = '/api/v1/position/{id}';

  /**
   * Link Api: /api/v1/position/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePositionId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePositionId_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.DeletePositionIdPath, 'delete');
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
   * Link Api: /api/v1/position/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deletePositionId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePositionId(params: {
    id: string;
  }): Observable<void> {

    return this.deletePositionId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getPosition
   */
  static readonly GetPositionPath = '/api/v1/position';

  /**
   * Link Api: /api/v1/position
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPosition_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosition_Plain_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<PositionDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.GetPositionPath, 'get');
    if (params) {
      rb.query('SearchText', params.SearchText, {});
      rb.query('MaxResultCount', params.MaxResultCount, {});
      rb.query('SkipCount', params.SkipCount, {});
      rb.query('Sorting', params.Sorting, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<PositionDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/position
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPosition_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosition_Plain(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<PositionDtoPagedResultDto> {

    return this.getPosition_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<PositionDtoPagedResultDto>) => r.body as PositionDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/position
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPosition_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosition_Json_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<PositionDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.GetPositionPath, 'get');
    if (params) {
      rb.query('SearchText', params.SearchText, {});
      rb.query('MaxResultCount', params.MaxResultCount, {});
      rb.query('SkipCount', params.SkipCount, {});
      rb.query('Sorting', params.Sorting, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<PositionDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/position
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getPosition_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPosition_Json(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<PositionDtoPagedResultDto> {

    return this.getPosition_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<PositionDtoPagedResultDto>) => r.body as PositionDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postPosition
   */
  static readonly PostPositionPath = '/api/v1/position';

  /**
   * Link Api: /api/v1/position
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postPosition()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postPosition_Response(params?: {
    body?: PositionCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.PostPositionPath, 'post');
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
   * Link Api: /api/v1/position
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postPosition_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postPosition(params?: {
    body?: PositionCreateDto
  }): Observable<void> {

    return this.postPosition_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deletePositionDeleteMany
   */
  static readonly DeletePositionDeleteManyPath = '/api/v1/position/delete-many';

  /**
   * Link Api: /api/v1/position/delete-many
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePositionDeleteMany()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePositionDeleteMany_Response(params?: {
    listId?: Array<string>;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PositionService.DeletePositionDeleteManyPath, 'delete');
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
   * Link Api: /api/v1/position/delete-many
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deletePositionDeleteMany_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePositionDeleteMany(params?: {
    listId?: Array<string>;
  }): Observable<void> {

    return this.deletePositionDeleteMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
