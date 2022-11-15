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
import { DepartmentShiftCreate } from '../models/department-shift-create';
import { DepartmentShiftDtoPagedResultDto } from '../models/department-shift-dto-paged-result-dto';

@Injectable({
  providedIn: 'root',
})
export class DepartmentShiftService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getDepartmentShift
   */
  static readonly GetDepartmentShiftPath = '/api/v1/department-shift';

  /**
   * Link Api: /api/v1/department-shift
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDepartmentShift_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDepartmentShift_Plain_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<DepartmentShiftDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentShiftService.GetDepartmentShiftPath, 'get');
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
        return r as THRMStrictHttpResponse<DepartmentShiftDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/department-shift
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDepartmentShift_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDepartmentShift_Plain(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<DepartmentShiftDtoPagedResultDto> {

    return this.getDepartmentShift_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DepartmentShiftDtoPagedResultDto>) => r.body as DepartmentShiftDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/department-shift
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDepartmentShift_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDepartmentShift_Json_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<DepartmentShiftDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentShiftService.GetDepartmentShiftPath, 'get');
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
        return r as THRMStrictHttpResponse<DepartmentShiftDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/department-shift
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDepartmentShift_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDepartmentShift_Json(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<DepartmentShiftDtoPagedResultDto> {

    return this.getDepartmentShift_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DepartmentShiftDtoPagedResultDto>) => r.body as DepartmentShiftDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postDepartmentShiftCreate
   */
  static readonly PostDepartmentShiftCreatePath = '/api/v1/department-shift/create';

  /**
   * Link Api: /api/v1/department-shift/create
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postDepartmentShiftCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDepartmentShiftCreate_Response(params?: {
    body?: DepartmentShiftCreate
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentShiftService.PostDepartmentShiftCreatePath, 'post');
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
   * Link Api: /api/v1/department-shift/create
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postDepartmentShiftCreate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDepartmentShiftCreate(params?: {
    body?: DepartmentShiftCreate
  }): Observable<void> {

    return this.postDepartmentShiftCreate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteDepartmentShiftDelete
   */
  static readonly DeleteDepartmentShiftDeletePath = '/api/v1/department-shift/delete';

  /**
   * Link Api: /api/v1/department-shift/delete
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDepartmentShiftDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDepartmentShiftDelete_Response(params?: {
    departmentId?: string;
    shiftId?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentShiftService.DeleteDepartmentShiftDeletePath, 'delete');
    if (params) {
      rb.query('departmentId', params.departmentId, {});
      rb.query('shiftId', params.shiftId, {});
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
   * Link Api: /api/v1/department-shift/delete
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteDepartmentShiftDelete_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDepartmentShiftDelete(params?: {
    departmentId?: string;
    shiftId?: string;
  }): Observable<void> {

    return this.deleteDepartmentShiftDelete_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getApiAppDepartmentShift
   */
  static readonly GetApiAppDepartmentShiftPath = '/api/app/department-shift';

  /**
   * Link Api: /api/app/department-shift
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAppDepartmentShift_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppDepartmentShift_Plain_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<DepartmentShiftDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentShiftService.GetApiAppDepartmentShiftPath, 'get');
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
        return r as THRMStrictHttpResponse<DepartmentShiftDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/department-shift
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAppDepartmentShift_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppDepartmentShift_Plain(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<DepartmentShiftDtoPagedResultDto> {

    return this.getApiAppDepartmentShift_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DepartmentShiftDtoPagedResultDto>) => r.body as DepartmentShiftDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/app/department-shift
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAppDepartmentShift_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppDepartmentShift_Json_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<DepartmentShiftDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentShiftService.GetApiAppDepartmentShiftPath, 'get');
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
        return r as THRMStrictHttpResponse<DepartmentShiftDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/department-shift
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAppDepartmentShift_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppDepartmentShift_Json(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<DepartmentShiftDtoPagedResultDto> {

    return this.getApiAppDepartmentShift_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DepartmentShiftDtoPagedResultDto>) => r.body as DepartmentShiftDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postApiAppDepartmentShift
   */
  static readonly PostApiAppDepartmentShiftPath = '/api/app/department-shift';

  /**
   * Link Api: /api/app/department-shift
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppDepartmentShift()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppDepartmentShift_Response(params?: {
    body?: DepartmentShiftCreate
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentShiftService.PostApiAppDepartmentShiftPath, 'post');
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
   * Link Api: /api/app/department-shift
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppDepartmentShift_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppDepartmentShift(params?: {
    body?: DepartmentShiftCreate
  }): Observable<void> {

    return this.postApiAppDepartmentShift_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteApiAppDepartmentShift
   */
  static readonly DeleteApiAppDepartmentShiftPath = '/api/app/department-shift';

  /**
   * Link Api: /api/app/department-shift
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAppDepartmentShift()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAppDepartmentShift_Response(params?: {
    departmentId?: string;
    shiftId?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentShiftService.DeleteApiAppDepartmentShiftPath, 'delete');
    if (params) {
      rb.query('departmentId', params.departmentId, {});
      rb.query('shiftId', params.shiftId, {});
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
   * Link Api: /api/app/department-shift
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteApiAppDepartmentShift_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAppDepartmentShift(params?: {
    departmentId?: string;
    shiftId?: string;
  }): Observable<void> {

    return this.deleteApiAppDepartmentShift_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
