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
import { BranchCreateDto } from '../models/branch-create-dto';
import { BranchDto } from '../models/branch-dto';
import { BranchDtoPagedResultDto } from '../models/branch-dto-paged-result-dto';
import { BranchUpdateDto } from '../models/branch-update-dto';

@Injectable({
  providedIn: 'root',
})
export class BranchService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getBranch
   */
  static readonly GetBranchPath = '/api/v1/branch';

  /**
   * Link Api: /api/v1/branch
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBranch_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBranch_Plain_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<BranchDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, BranchService.GetBranchPath, 'get');
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
        return r as THRMStrictHttpResponse<BranchDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/branch
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBranch_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBranch_Plain(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<BranchDtoPagedResultDto> {

    return this.getBranch_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<BranchDtoPagedResultDto>) => r.body as BranchDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/branch
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBranch_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBranch_Json_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<BranchDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, BranchService.GetBranchPath, 'get');
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
        return r as THRMStrictHttpResponse<BranchDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/branch
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBranch_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBranch_Json(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<BranchDtoPagedResultDto> {

    return this.getBranch_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<BranchDtoPagedResultDto>) => r.body as BranchDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postBranch
   */
  static readonly PostBranchPath = '/api/v1/branch';

  /**
   * Link Api: /api/v1/branch
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postBranch_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postBranch_Plain_Response(params?: {
    body?: BranchCreateDto
  }): Observable<THRMStrictHttpResponse<BranchDto>> {

    const rb = new RequestBuilder(this.rootUrl, BranchService.PostBranchPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<BranchDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/branch
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postBranch_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postBranch_Plain(params?: {
    body?: BranchCreateDto
  }): Observable<BranchDto> {

    return this.postBranch_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<BranchDto>) => r.body as BranchDto)
    );
  }

  /**
   * Link Api: /api/v1/branch
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postBranch_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postBranch_Json_Response(params?: {
    body?: BranchCreateDto
  }): Observable<THRMStrictHttpResponse<BranchDto>> {

    const rb = new RequestBuilder(this.rootUrl, BranchService.PostBranchPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<BranchDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/branch
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postBranch_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postBranch_Json(params?: {
    body?: BranchCreateDto
  }): Observable<BranchDto> {

    return this.postBranch_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<BranchDto>) => r.body as BranchDto)
    );
  }

  /**
   * Path part for operation getBranchId
   */
  static readonly GetBranchIdPath = '/api/v1/branch/{id}';

  /**
   * Link Api: /api/v1/branch/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBranchId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBranchId_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<BranchDto>> {

    const rb = new RequestBuilder(this.rootUrl, BranchService.GetBranchIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<BranchDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/branch/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBranchId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBranchId_Plain(params: {
    id: string;
  }): Observable<BranchDto> {

    return this.getBranchId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<BranchDto>) => r.body as BranchDto)
    );
  }

  /**
   * Link Api: /api/v1/branch/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBranchId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBranchId_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<BranchDto>> {

    const rb = new RequestBuilder(this.rootUrl, BranchService.GetBranchIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<BranchDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/branch/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBranchId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBranchId_Json(params: {
    id: string;
  }): Observable<BranchDto> {

    return this.getBranchId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<BranchDto>) => r.body as BranchDto)
    );
  }

  /**
   * Path part for operation putBranchId
   */
  static readonly PutBranchIdPath = '/api/v1/branch/{id}';

  /**
   * Link Api: /api/v1/branch/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putBranchId_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putBranchId_Plain_Response(params: {
    id: string;
    body?: BranchUpdateDto
  }): Observable<THRMStrictHttpResponse<BranchDto>> {

    const rb = new RequestBuilder(this.rootUrl, BranchService.PutBranchIdPath, 'put');
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
        return r as THRMStrictHttpResponse<BranchDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/branch/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putBranchId_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putBranchId_Plain(params: {
    id: string;
    body?: BranchUpdateDto
  }): Observable<BranchDto> {

    return this.putBranchId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<BranchDto>) => r.body as BranchDto)
    );
  }

  /**
   * Link Api: /api/v1/branch/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putBranchId_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putBranchId_Json_Response(params: {
    id: string;
    body?: BranchUpdateDto
  }): Observable<THRMStrictHttpResponse<BranchDto>> {

    const rb = new RequestBuilder(this.rootUrl, BranchService.PutBranchIdPath, 'put');
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
        return r as THRMStrictHttpResponse<BranchDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/branch/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putBranchId_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putBranchId_Json(params: {
    id: string;
    body?: BranchUpdateDto
  }): Observable<BranchDto> {

    return this.putBranchId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<BranchDto>) => r.body as BranchDto)
    );
  }

  /**
   * Path part for operation deleteBranchId
   */
  static readonly DeleteBranchIdPath = '/api/v1/branch/{id}';

  /**
   * Link Api: /api/v1/branch/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBranchId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBranchId_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BranchService.DeleteBranchIdPath, 'delete');
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
   * Link Api: /api/v1/branch/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteBranchId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBranchId(params: {
    id: string;
  }): Observable<void> {

    return this.deleteBranchId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteBranchDeleteMany
   */
  static readonly DeleteBranchDeleteManyPath = '/api/v1/branch/delete-many';

  /**
   * Link Api: /api/v1/branch/delete-many
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBranchDeleteMany()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBranchDeleteMany_Response(params?: {
    listId?: Array<string>;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BranchService.DeleteBranchDeleteManyPath, 'delete');
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
   * Link Api: /api/v1/branch/delete-many
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteBranchDeleteMany_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBranchDeleteMany(params?: {
    listId?: Array<string>;
  }): Observable<void> {

    return this.deleteBranchDeleteMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
