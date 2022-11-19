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
import { AddShiftToDepartmentDto } from '../models/add-shift-to-department-dto';
import { DepartmentCreateUpdateDto } from '../models/department-create-update-dto';
import { DepartmentDto } from '../models/department-dto';
import { DepartmentDtoPagedResultDto } from '../models/department-dto-paged-result-dto';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getDepartment
   */
  static readonly GetDepartmentPath = '/api/v1/department';

  /**
   * Link Api: /api/v1/department
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDepartment_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDepartment_Plain_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<DepartmentDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentService.GetDepartmentPath, 'get');
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
        return r as THRMStrictHttpResponse<DepartmentDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/department
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDepartment_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDepartment_Plain(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<DepartmentDtoPagedResultDto> {

    return this.getDepartment_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DepartmentDtoPagedResultDto>) => r.body as DepartmentDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/department
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDepartment_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDepartment_Json_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<DepartmentDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentService.GetDepartmentPath, 'get');
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
        return r as THRMStrictHttpResponse<DepartmentDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/department
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDepartment_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDepartment_Json(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<DepartmentDtoPagedResultDto> {

    return this.getDepartment_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DepartmentDtoPagedResultDto>) => r.body as DepartmentDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postDepartment
   */
  static readonly PostDepartmentPath = '/api/v1/department';

  /**
   * Link Api: /api/v1/department
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postDepartment_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDepartment_Plain_Response(params?: {
    body?: DepartmentCreateUpdateDto
  }): Observable<THRMStrictHttpResponse<DepartmentDto>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentService.PostDepartmentPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<DepartmentDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/department
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postDepartment_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDepartment_Plain(params?: {
    body?: DepartmentCreateUpdateDto
  }): Observable<DepartmentDto> {

    return this.postDepartment_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DepartmentDto>) => r.body as DepartmentDto)
    );
  }

  /**
   * Link Api: /api/v1/department
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postDepartment_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDepartment_Json_Response(params?: {
    body?: DepartmentCreateUpdateDto
  }): Observable<THRMStrictHttpResponse<DepartmentDto>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentService.PostDepartmentPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<DepartmentDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/department
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postDepartment_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDepartment_Json(params?: {
    body?: DepartmentCreateUpdateDto
  }): Observable<DepartmentDto> {

    return this.postDepartment_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DepartmentDto>) => r.body as DepartmentDto)
    );
  }

  /**
   * Path part for operation getDepartmentId
   */
  static readonly GetDepartmentIdPath = '/api/v1/department/{id}';

  /**
   * Link Api: /api/v1/department/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDepartmentId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDepartmentId_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<DepartmentDto>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentService.GetDepartmentIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<DepartmentDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/department/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDepartmentId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDepartmentId_Plain(params: {
    id: string;
  }): Observable<DepartmentDto> {

    return this.getDepartmentId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DepartmentDto>) => r.body as DepartmentDto)
    );
  }

  /**
   * Link Api: /api/v1/department/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDepartmentId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDepartmentId_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<DepartmentDto>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentService.GetDepartmentIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<DepartmentDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/department/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDepartmentId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDepartmentId_Json(params: {
    id: string;
  }): Observable<DepartmentDto> {

    return this.getDepartmentId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DepartmentDto>) => r.body as DepartmentDto)
    );
  }

  /**
   * Path part for operation putDepartmentId
   */
  static readonly PutDepartmentIdPath = '/api/v1/department/{id}';

  /**
   * Link Api: /api/v1/department/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putDepartmentId_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putDepartmentId_Plain_Response(params: {
    id: string;
    body?: DepartmentCreateUpdateDto
  }): Observable<THRMStrictHttpResponse<DepartmentDto>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentService.PutDepartmentIdPath, 'put');
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
        return r as THRMStrictHttpResponse<DepartmentDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/department/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putDepartmentId_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putDepartmentId_Plain(params: {
    id: string;
    body?: DepartmentCreateUpdateDto
  }): Observable<DepartmentDto> {

    return this.putDepartmentId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DepartmentDto>) => r.body as DepartmentDto)
    );
  }

  /**
   * Link Api: /api/v1/department/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putDepartmentId_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putDepartmentId_Json_Response(params: {
    id: string;
    body?: DepartmentCreateUpdateDto
  }): Observable<THRMStrictHttpResponse<DepartmentDto>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentService.PutDepartmentIdPath, 'put');
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
        return r as THRMStrictHttpResponse<DepartmentDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/department/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putDepartmentId_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putDepartmentId_Json(params: {
    id: string;
    body?: DepartmentCreateUpdateDto
  }): Observable<DepartmentDto> {

    return this.putDepartmentId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DepartmentDto>) => r.body as DepartmentDto)
    );
  }

  /**
   * Path part for operation deleteDepartmentId
   */
  static readonly DeleteDepartmentIdPath = '/api/v1/department/{id}';

  /**
   * Link Api: /api/v1/department/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDepartmentId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDepartmentId_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentService.DeleteDepartmentIdPath, 'delete');
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
   * Link Api: /api/v1/department/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteDepartmentId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDepartmentId(params: {
    id: string;
  }): Observable<void> {

    return this.deleteDepartmentId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteDepartmentDeleteMany
   */
  static readonly DeleteDepartmentDeleteManyPath = '/api/v1/department/delete-many';

  /**
   * Link Api: /api/v1/department/delete-many
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDepartmentDeleteMany()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDepartmentDeleteMany_Response(params?: {
    listId?: Array<string>;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentService.DeleteDepartmentDeleteManyPath, 'delete');
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
   * Link Api: /api/v1/department/delete-many
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteDepartmentDeleteMany_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDepartmentDeleteMany(params?: {
    listId?: Array<string>;
  }): Observable<void> {

    return this.deleteDepartmentDeleteMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postDepartmentAddShiftsToDepartment
   */
  static readonly PostDepartmentAddShiftsToDepartmentPath = '/api/v1/department/add-shifts-to-department';

  /**
   * Link Api: /api/v1/department/add-shifts-to-department
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postDepartmentAddShiftsToDepartment()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDepartmentAddShiftsToDepartment_Response(params?: {
    body?: AddShiftToDepartmentDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentService.PostDepartmentAddShiftsToDepartmentPath, 'post');
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
   * Link Api: /api/v1/department/add-shifts-to-department
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postDepartmentAddShiftsToDepartment_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDepartmentAddShiftsToDepartment(params?: {
    body?: AddShiftToDepartmentDto
  }): Observable<void> {

    return this.postDepartmentAddShiftsToDepartment_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteDepartmentDeleteShiftsFromDepartment
   */
  static readonly DeleteDepartmentDeleteShiftsFromDepartmentPath = '/api/v1/department/delete-shifts-from-department';

  /**
   * Link Api: /api/v1/department/delete-shifts-from-department
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDepartmentDeleteShiftsFromDepartment()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteDepartmentDeleteShiftsFromDepartment_Response(params?: {
    departmentId?: string;
    body?: Array<string>
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentService.DeleteDepartmentDeleteShiftsFromDepartmentPath, 'delete');
    if (params) {
      rb.query('departmentId', params.departmentId, {});
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
   * Link Api: /api/v1/department/delete-shifts-from-department
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteDepartmentDeleteShiftsFromDepartment_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  deleteDepartmentDeleteShiftsFromDepartment(params?: {
    departmentId?: string;
    body?: Array<string>
  }): Observable<void> {

    return this.deleteDepartmentDeleteShiftsFromDepartment_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putDepartmentChangeDepartmentCode
   */
  static readonly PutDepartmentChangeDepartmentCodePath = '/api/v1/department/change-department-code';

  /**
   * Link Api: /api/v1/department/change-department-code
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putDepartmentChangeDepartmentCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  putDepartmentChangeDepartmentCode_Response(params?: {
    id?: string;
    code?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DepartmentService.PutDepartmentChangeDepartmentCodePath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('code', params.code, {});
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
   * Link Api: /api/v1/department/change-department-code
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putDepartmentChangeDepartmentCode_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  putDepartmentChangeDepartmentCode(params?: {
    id?: string;
    code?: string;
  }): Observable<void> {

    return this.putDepartmentChangeDepartmentCode_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
