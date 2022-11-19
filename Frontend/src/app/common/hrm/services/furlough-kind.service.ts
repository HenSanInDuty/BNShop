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
import { FurloughKindCreateDto } from '../models/furlough-kind-create-dto';
import { FurloughKindDto } from '../models/furlough-kind-dto';
import { FurloughKindDtoPagedResultDto } from '../models/furlough-kind-dto-paged-result-dto';
import { FurloughKindUpdateDto } from '../models/furlough-kind-update-dto';

@Injectable({
  providedIn: 'root',
})
export class FurloughKindService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getFurloughKind
   */
  static readonly GetFurloughKindPath = '/api/v1/furlough-kind';

  /**
   * Link Api: /api/v1/furlough-kind
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFurloughKind_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFurloughKind_Plain_Response(params?: {
    Year?: number;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<FurloughKindDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, FurloughKindService.GetFurloughKindPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
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
        return r as THRMStrictHttpResponse<FurloughKindDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/furlough-kind
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getFurloughKind_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFurloughKind_Plain(params?: {
    Year?: number;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<FurloughKindDtoPagedResultDto> {

    return this.getFurloughKind_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<FurloughKindDtoPagedResultDto>) => r.body as FurloughKindDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/furlough-kind
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFurloughKind_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFurloughKind_Json_Response(params?: {
    Year?: number;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<FurloughKindDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, FurloughKindService.GetFurloughKindPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
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
        return r as THRMStrictHttpResponse<FurloughKindDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/furlough-kind
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getFurloughKind_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFurloughKind_Json(params?: {
    Year?: number;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<FurloughKindDtoPagedResultDto> {

    return this.getFurloughKind_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<FurloughKindDtoPagedResultDto>) => r.body as FurloughKindDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getFurloughKindByYear
   */
  static readonly GetFurloughKindByYearPath = '/api/v1/furlough-kind/by-year';

  /**
   * Link Api: /api/v1/furlough-kind/by-year
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFurloughKindByYear_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFurloughKindByYear_Plain_Response(params?: {
    year?: number;
  }): Observable<THRMStrictHttpResponse<Array<FurloughKindDto>>> {

    const rb = new RequestBuilder(this.rootUrl, FurloughKindService.GetFurloughKindByYearPath, 'get');
    if (params) {
      rb.query('year', params.year, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<FurloughKindDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/furlough-kind/by-year
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getFurloughKindByYear_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFurloughKindByYear_Plain(params?: {
    year?: number;
  }): Observable<Array<FurloughKindDto>> {

    return this.getFurloughKindByYear_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<FurloughKindDto>>) => r.body as Array<FurloughKindDto>)
    );
  }

  /**
   * Link Api: /api/v1/furlough-kind/by-year
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFurloughKindByYear_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFurloughKindByYear_Json_Response(params?: {
    year?: number;
  }): Observable<THRMStrictHttpResponse<Array<FurloughKindDto>>> {

    const rb = new RequestBuilder(this.rootUrl, FurloughKindService.GetFurloughKindByYearPath, 'get');
    if (params) {
      rb.query('year', params.year, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<FurloughKindDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/furlough-kind/by-year
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getFurloughKindByYear_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFurloughKindByYear_Json(params?: {
    year?: number;
  }): Observable<Array<FurloughKindDto>> {

    return this.getFurloughKindByYear_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<FurloughKindDto>>) => r.body as Array<FurloughKindDto>)
    );
  }

  /**
   * Path part for operation postFurloughKindCreate
   */
  static readonly PostFurloughKindCreatePath = '/api/v1/furlough-kind/create';

  /**
   * Link Api: /api/v1/furlough-kind/create
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postFurloughKindCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postFurloughKindCreate_Response(params?: {
    body?: FurloughKindCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FurloughKindService.PostFurloughKindCreatePath, 'post');
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
   * Link Api: /api/v1/furlough-kind/create
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postFurloughKindCreate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postFurloughKindCreate(params?: {
    body?: FurloughKindCreateDto
  }): Observable<void> {

    return this.postFurloughKindCreate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putFurloughKindUpdate
   */
  static readonly PutFurloughKindUpdatePath = '/api/v1/furlough-kind/update';

  /**
   * Link Api: /api/v1/furlough-kind/update
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putFurloughKindUpdate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putFurloughKindUpdate_Response(params?: {
    id?: string;
    body?: FurloughKindUpdateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FurloughKindService.PutFurloughKindUpdatePath, 'put');
    if (params) {
      rb.query('id', params.id, {});
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
   * Link Api: /api/v1/furlough-kind/update
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putFurloughKindUpdate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putFurloughKindUpdate(params?: {
    id?: string;
    body?: FurloughKindUpdateDto
  }): Observable<void> {

    return this.putFurloughKindUpdate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteFurloughKindDelete
   */
  static readonly DeleteFurloughKindDeletePath = '/api/v1/furlough-kind/delete';

  /**
   * Link Api: /api/v1/furlough-kind/delete
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteFurloughKindDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFurloughKindDelete_Response(params?: {
    id?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FurloughKindService.DeleteFurloughKindDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
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
   * Link Api: /api/v1/furlough-kind/delete
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteFurloughKindDelete_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFurloughKindDelete(params?: {
    id?: string;
  }): Observable<void> {

    return this.deleteFurloughKindDelete_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteFurloughKindDeleteMany
   */
  static readonly DeleteFurloughKindDeleteManyPath = '/api/v1/furlough-kind/delete-many';

  /**
   * Link Api: /api/v1/furlough-kind/delete-many
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteFurloughKindDeleteMany()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFurloughKindDeleteMany_Response(params?: {
    listId?: Array<string>;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FurloughKindService.DeleteFurloughKindDeleteManyPath, 'delete');
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
   * Link Api: /api/v1/furlough-kind/delete-many
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteFurloughKindDeleteMany_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFurloughKindDeleteMany(params?: {
    listId?: Array<string>;
  }): Observable<void> {

    return this.deleteFurloughKindDeleteMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
