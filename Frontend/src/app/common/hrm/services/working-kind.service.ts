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
import { WorkingKindCreateDto } from '../models/working-kind-create-dto';
import { WorkingKindDtoPagedResultDto } from '../models/working-kind-dto-paged-result-dto';
import { WorkingKindUpdateDto } from '../models/working-kind-update-dto';

@Injectable({
  providedIn: 'root',
})
export class WorkingKindService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getWorkingKind
   */
  static readonly GetWorkingKindPath = '/api/v1/working-kind';

  /**
   * Link Api: /api/v1/working-kind
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWorkingKind_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWorkingKind_Plain_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<WorkingKindDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, WorkingKindService.GetWorkingKindPath, 'get');
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
        return r as THRMStrictHttpResponse<WorkingKindDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/working-kind
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getWorkingKind_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWorkingKind_Plain(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<WorkingKindDtoPagedResultDto> {

    return this.getWorkingKind_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<WorkingKindDtoPagedResultDto>) => r.body as WorkingKindDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/working-kind
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWorkingKind_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWorkingKind_Json_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<WorkingKindDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, WorkingKindService.GetWorkingKindPath, 'get');
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
        return r as THRMStrictHttpResponse<WorkingKindDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/working-kind
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getWorkingKind_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWorkingKind_Json(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<WorkingKindDtoPagedResultDto> {

    return this.getWorkingKind_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<WorkingKindDtoPagedResultDto>) => r.body as WorkingKindDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postWorkingKindCreate
   */
  static readonly PostWorkingKindCreatePath = '/api/v1/working-kind/create';

  /**
   * Link Api: /api/v1/working-kind/create
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postWorkingKindCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postWorkingKindCreate_Response(params?: {
    body?: WorkingKindCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WorkingKindService.PostWorkingKindCreatePath, 'post');
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
   * Link Api: /api/v1/working-kind/create
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postWorkingKindCreate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postWorkingKindCreate(params?: {
    body?: WorkingKindCreateDto
  }): Observable<void> {

    return this.postWorkingKindCreate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putWorkingKindUpdate
   */
  static readonly PutWorkingKindUpdatePath = '/api/v1/working-kind/update';

  /**
   * Link Api: /api/v1/working-kind/update
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putWorkingKindUpdate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putWorkingKindUpdate_Response(params?: {
    id?: string;
    body?: WorkingKindUpdateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WorkingKindService.PutWorkingKindUpdatePath, 'put');
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
   * Link Api: /api/v1/working-kind/update
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putWorkingKindUpdate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putWorkingKindUpdate(params?: {
    id?: string;
    body?: WorkingKindUpdateDto
  }): Observable<void> {

    return this.putWorkingKindUpdate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteWorkingKindDelete
   */
  static readonly DeleteWorkingKindDeletePath = '/api/v1/working-kind/delete';

  /**
   * Link Api: /api/v1/working-kind/delete
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteWorkingKindDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteWorkingKindDelete_Response(params?: {
    id?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WorkingKindService.DeleteWorkingKindDeletePath, 'delete');
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
   * Link Api: /api/v1/working-kind/delete
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteWorkingKindDelete_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteWorkingKindDelete(params?: {
    id?: string;
  }): Observable<void> {

    return this.deleteWorkingKindDelete_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteWorkingKindDeleteMany
   */
  static readonly DeleteWorkingKindDeleteManyPath = '/api/v1/working-kind/delete-many';

  /**
   * Link Api: /api/v1/working-kind/delete-many
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteWorkingKindDeleteMany()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteWorkingKindDeleteMany_Response(params?: {
    listId?: Array<string>;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, WorkingKindService.DeleteWorkingKindDeleteManyPath, 'delete');
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
   * Link Api: /api/v1/working-kind/delete-many
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteWorkingKindDeleteMany_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteWorkingKindDeleteMany(params?: {
    listId?: Array<string>;
  }): Observable<void> {

    return this.deleteWorkingKindDeleteMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
