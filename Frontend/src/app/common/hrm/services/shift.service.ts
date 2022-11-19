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
import { ShiftCreateDto } from '../models/shift-create-dto';
import { ShiftDto } from '../models/shift-dto';
import { ShiftDtoPagedResultDto } from '../models/shift-dto-paged-result-dto';
import { ShiftUpdateDto } from '../models/shift-update-dto';

@Injectable({
  providedIn: 'root',
})
export class ShiftService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getShift
   */
  static readonly GetShiftPath = '/api/v1/shift';

  /**
   * Link Api: /api/v1/shift
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getShift_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShift_Plain_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<ShiftDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, ShiftService.GetShiftPath, 'get');
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
        return r as THRMStrictHttpResponse<ShiftDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/shift
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getShift_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShift_Plain(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<ShiftDtoPagedResultDto> {

    return this.getShift_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ShiftDtoPagedResultDto>) => r.body as ShiftDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/shift
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getShift_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShift_Json_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<ShiftDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, ShiftService.GetShiftPath, 'get');
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
        return r as THRMStrictHttpResponse<ShiftDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/shift
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getShift_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShift_Json(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<ShiftDtoPagedResultDto> {

    return this.getShift_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ShiftDtoPagedResultDto>) => r.body as ShiftDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postShiftCreate
   */
  static readonly PostShiftCreatePath = '/api/v1/shift/create';

  /**
   * Link Api: /api/v1/shift/create
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postShiftCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postShiftCreate_Response(params?: {
    body?: ShiftCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ShiftService.PostShiftCreatePath, 'post');
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
   * Link Api: /api/v1/shift/create
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postShiftCreate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postShiftCreate(params?: {
    body?: ShiftCreateDto
  }): Observable<void> {

    return this.postShiftCreate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putShiftUpdate
   */
  static readonly PutShiftUpdatePath = '/api/v1/shift/update';

  /**
   * Link Api: /api/v1/shift/update
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putShiftUpdate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putShiftUpdate_Response(params?: {
    id?: string;
    body?: ShiftUpdateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ShiftService.PutShiftUpdatePath, 'put');
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
   * Link Api: /api/v1/shift/update
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putShiftUpdate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putShiftUpdate(params?: {
    id?: string;
    body?: ShiftUpdateDto
  }): Observable<void> {

    return this.putShiftUpdate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteShiftDelete
   */
  static readonly DeleteShiftDeletePath = '/api/v1/shift/delete';

  /**
   * Link Api: /api/v1/shift/delete
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteShiftDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteShiftDelete_Response(params?: {
    id?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ShiftService.DeleteShiftDeletePath, 'delete');
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
   * Link Api: /api/v1/shift/delete
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteShiftDelete_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteShiftDelete(params?: {
    id?: string;
  }): Observable<void> {

    return this.deleteShiftDelete_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteShiftDeleteMany
   */
  static readonly DeleteShiftDeleteManyPath = '/api/v1/shift/delete-many';

  /**
   * Link Api: /api/v1/shift/delete-many
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteShiftDeleteMany()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteShiftDeleteMany_Response(params?: {
    listId?: Array<string>;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ShiftService.DeleteShiftDeleteManyPath, 'delete');
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
   * Link Api: /api/v1/shift/delete-many
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteShiftDeleteMany_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteShiftDeleteMany(params?: {
    listId?: Array<string>;
  }): Observable<void> {

    return this.deleteShiftDeleteMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getShiftByDept
   */
  static readonly GetShiftByDeptPath = '/api/v1/shift/by-dept';

  /**
   * Link Api: /api/v1/shift/by-dept
   *
   * lấy danh sách các ca làm việc của phòng ban.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getShiftByDept_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShiftByDept_Plain_Response(params?: {
    deptId?: string;
  }): Observable<THRMStrictHttpResponse<Array<ShiftDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShiftService.GetShiftByDeptPath, 'get');
    if (params) {
      rb.query('deptId', params.deptId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<ShiftDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/shift/by-dept
   *
   * lấy danh sách các ca làm việc của phòng ban.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getShiftByDept_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShiftByDept_Plain(params?: {
    deptId?: string;
  }): Observable<Array<ShiftDto>> {

    return this.getShiftByDept_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ShiftDto>>) => r.body as Array<ShiftDto>)
    );
  }

  /**
   * Link Api: /api/v1/shift/by-dept
   *
   * lấy danh sách các ca làm việc của phòng ban.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getShiftByDept_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShiftByDept_Json_Response(params?: {
    deptId?: string;
  }): Observable<THRMStrictHttpResponse<Array<ShiftDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ShiftService.GetShiftByDeptPath, 'get');
    if (params) {
      rb.query('deptId', params.deptId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<ShiftDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/shift/by-dept
   *
   * lấy danh sách các ca làm việc của phòng ban.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getShiftByDept_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getShiftByDept_Json(params?: {
    deptId?: string;
  }): Observable<Array<ShiftDto>> {

    return this.getShiftByDept_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ShiftDto>>) => r.body as Array<ShiftDto>)
    );
  }

}
