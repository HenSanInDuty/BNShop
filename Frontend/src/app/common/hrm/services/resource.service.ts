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
import { ResourceCreateDto } from '../models/resource-create-dto';
import { ResourceDisableActiveDto } from '../models/resource-disable-active-dto';
import { ResourceDto } from '../models/resource-dto';
import { ResourceDtoPagedResultDto } from '../models/resource-dto-paged-result-dto';
import { ResourceEnableActiveDto } from '../models/resource-enable-active-dto';
import { ResourceOverviewScheduleDtoPagedResultDto } from '../models/resource-overview-schedule-dto-paged-result-dto';
import { ResourceReportDtoPagedResultDto } from '../models/resource-report-dto-paged-result-dto';
import { ResourceTicketFilterStatusOverView } from '../models/resource-ticket-filter-status-over-view';
import { ResourceTotalByStatusDto } from '../models/resource-total-by-status-dto';
import { ResourceUpdateDto } from '../models/resource-update-dto';

@Injectable({
  providedIn: 'root',
})
export class ResourceService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getResourceGetTotalByStatus
   */
  static readonly GetResourceGetTotalByStatusPath = '/api/v1/resource/get-total-by-status';

  /**
   * Link Api: /api/v1/resource/get-total-by-status
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceGetTotalByStatus_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceGetTotalByStatus_Plain_Response(params?: {
  }): Observable<THRMStrictHttpResponse<ResourceTotalByStatusDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.GetResourceGetTotalByStatusPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTotalByStatusDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource/get-total-by-status
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceGetTotalByStatus_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceGetTotalByStatus_Plain(params?: {
  }): Observable<ResourceTotalByStatusDto> {

    return this.getResourceGetTotalByStatus_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTotalByStatusDto>) => r.body as ResourceTotalByStatusDto)
    );
  }

  /**
   * Link Api: /api/v1/resource/get-total-by-status
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceGetTotalByStatus_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceGetTotalByStatus_Json_Response(params?: {
  }): Observable<THRMStrictHttpResponse<ResourceTotalByStatusDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.GetResourceGetTotalByStatusPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTotalByStatusDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource/get-total-by-status
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceGetTotalByStatus_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceGetTotalByStatus_Json(params?: {
  }): Observable<ResourceTotalByStatusDto> {

    return this.getResourceGetTotalByStatus_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTotalByStatusDto>) => r.body as ResourceTotalByStatusDto)
    );
  }

  /**
   * Path part for operation getResourceOverviewSchedule
   */
  static readonly GetResourceOverviewSchedulePath = '/api/v1/resource/overview-schedule';

  /**
   * Link Api: /api/v1/resource/overview-schedule
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceOverviewSchedule_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceOverviewSchedule_Plain_Response(params?: {
    FilterStatus?: ResourceTicketFilterStatusOverView;
    FromTime?: string;
    ToTime?: string;
    ResourceTypeId?: string;
    BranchId?: string;
    IsActive?: boolean;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<ResourceOverviewScheduleDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.GetResourceOverviewSchedulePath, 'get');
    if (params) {
      rb.query('FilterStatus', params.FilterStatus, {});
      rb.query('FromTime', params.FromTime, {});
      rb.query('ToTime', params.ToTime, {});
      rb.query('ResourceTypeId', params.ResourceTypeId, {});
      rb.query('BranchId', params.BranchId, {});
      rb.query('IsActive', params.IsActive, {});
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
        return r as THRMStrictHttpResponse<ResourceOverviewScheduleDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource/overview-schedule
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceOverviewSchedule_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceOverviewSchedule_Plain(params?: {
    FilterStatus?: ResourceTicketFilterStatusOverView;
    FromTime?: string;
    ToTime?: string;
    ResourceTypeId?: string;
    BranchId?: string;
    IsActive?: boolean;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<ResourceOverviewScheduleDtoPagedResultDto> {

    return this.getResourceOverviewSchedule_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceOverviewScheduleDtoPagedResultDto>) => r.body as ResourceOverviewScheduleDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/resource/overview-schedule
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceOverviewSchedule_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceOverviewSchedule_Json_Response(params?: {
    FilterStatus?: ResourceTicketFilterStatusOverView;
    FromTime?: string;
    ToTime?: string;
    ResourceTypeId?: string;
    BranchId?: string;
    IsActive?: boolean;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<ResourceOverviewScheduleDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.GetResourceOverviewSchedulePath, 'get');
    if (params) {
      rb.query('FilterStatus', params.FilterStatus, {});
      rb.query('FromTime', params.FromTime, {});
      rb.query('ToTime', params.ToTime, {});
      rb.query('ResourceTypeId', params.ResourceTypeId, {});
      rb.query('BranchId', params.BranchId, {});
      rb.query('IsActive', params.IsActive, {});
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
        return r as THRMStrictHttpResponse<ResourceOverviewScheduleDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource/overview-schedule
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceOverviewSchedule_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceOverviewSchedule_Json(params?: {
    FilterStatus?: ResourceTicketFilterStatusOverView;
    FromTime?: string;
    ToTime?: string;
    ResourceTypeId?: string;
    BranchId?: string;
    IsActive?: boolean;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<ResourceOverviewScheduleDtoPagedResultDto> {

    return this.getResourceOverviewSchedule_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceOverviewScheduleDtoPagedResultDto>) => r.body as ResourceOverviewScheduleDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getResourceReport
   */
  static readonly GetResourceReportPath = '/api/v1/resource/report';

  /**
   * Link Api: /api/v1/resource/report
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceReport_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceReport_Plain_Response(params?: {
    FromTime?: string;
    ToTime?: string;
    ResourceTypeId?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<ResourceReportDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.GetResourceReportPath, 'get');
    if (params) {
      rb.query('FromTime', params.FromTime, {});
      rb.query('ToTime', params.ToTime, {});
      rb.query('ResourceTypeId', params.ResourceTypeId, {});
      rb.query('SkipCount', params.SkipCount, {});
      rb.query('MaxResultCount', params.MaxResultCount, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceReportDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource/report
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceReport_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceReport_Plain(params?: {
    FromTime?: string;
    ToTime?: string;
    ResourceTypeId?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<ResourceReportDtoPagedResultDto> {

    return this.getResourceReport_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceReportDtoPagedResultDto>) => r.body as ResourceReportDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/resource/report
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceReport_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceReport_Json_Response(params?: {
    FromTime?: string;
    ToTime?: string;
    ResourceTypeId?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<ResourceReportDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.GetResourceReportPath, 'get');
    if (params) {
      rb.query('FromTime', params.FromTime, {});
      rb.query('ToTime', params.ToTime, {});
      rb.query('ResourceTypeId', params.ResourceTypeId, {});
      rb.query('SkipCount', params.SkipCount, {});
      rb.query('MaxResultCount', params.MaxResultCount, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceReportDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource/report
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceReport_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceReport_Json(params?: {
    FromTime?: string;
    ToTime?: string;
    ResourceTypeId?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<ResourceReportDtoPagedResultDto> {

    return this.getResourceReport_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceReportDtoPagedResultDto>) => r.body as ResourceReportDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getResource
   */
  static readonly GetResourcePath = '/api/v1/resource';

  /**
   * Link Api: /api/v1/resource
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResource_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResource_Plain_Response(params?: {
    IsActive?: boolean;
    BranchId?: string;
    ResourceTypeId?: string;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<ResourceDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.GetResourcePath, 'get');
    if (params) {
      rb.query('IsActive', params.IsActive, {});
      rb.query('BranchId', params.BranchId, {});
      rb.query('ResourceTypeId', params.ResourceTypeId, {});
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
        return r as THRMStrictHttpResponse<ResourceDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResource_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResource_Plain(params?: {
    IsActive?: boolean;
    BranchId?: string;
    ResourceTypeId?: string;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<ResourceDtoPagedResultDto> {

    return this.getResource_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceDtoPagedResultDto>) => r.body as ResourceDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/resource
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResource_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResource_Json_Response(params?: {
    IsActive?: boolean;
    BranchId?: string;
    ResourceTypeId?: string;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<ResourceDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.GetResourcePath, 'get');
    if (params) {
      rb.query('IsActive', params.IsActive, {});
      rb.query('BranchId', params.BranchId, {});
      rb.query('ResourceTypeId', params.ResourceTypeId, {});
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
        return r as THRMStrictHttpResponse<ResourceDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResource_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResource_Json(params?: {
    IsActive?: boolean;
    BranchId?: string;
    ResourceTypeId?: string;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<ResourceDtoPagedResultDto> {

    return this.getResource_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceDtoPagedResultDto>) => r.body as ResourceDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postResource
   */
  static readonly PostResourcePath = '/api/v1/resource';

  /**
   * Link Api: /api/v1/resource
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResource_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResource_Plain_Response(params?: {
    body?: ResourceCreateDto
  }): Observable<THRMStrictHttpResponse<ResourceDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.PostResourcePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResource_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResource_Plain(params?: {
    body?: ResourceCreateDto
  }): Observable<ResourceDto> {

    return this.postResource_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceDto>) => r.body as ResourceDto)
    );
  }

  /**
   * Link Api: /api/v1/resource
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResource_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResource_Json_Response(params?: {
    body?: ResourceCreateDto
  }): Observable<THRMStrictHttpResponse<ResourceDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.PostResourcePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResource_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResource_Json(params?: {
    body?: ResourceCreateDto
  }): Observable<ResourceDto> {

    return this.postResource_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceDto>) => r.body as ResourceDto)
    );
  }

  /**
   * Path part for operation deleteResource
   */
  static readonly DeleteResourcePath = '/api/v1/resource';

  /**
   * Link Api: /api/v1/resource
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteResource()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteResource_Response(params?: {
    id?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.DeleteResourcePath, 'delete');
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
   * Link Api: /api/v1/resource
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteResource_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteResource(params?: {
    id?: string;
  }): Observable<void> {

    return this.deleteResource_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getResourceId
   */
  static readonly GetResourceIdPath = '/api/v1/resource/{id}';

  /**
   * Link Api: /api/v1/resource/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceId_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<ResourceDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.GetResourceIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceId_Plain(params: {
    id: string;
  }): Observable<ResourceDto> {

    return this.getResourceId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceDto>) => r.body as ResourceDto)
    );
  }

  /**
   * Link Api: /api/v1/resource/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceId_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<ResourceDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.GetResourceIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceId_Json(params: {
    id: string;
  }): Observable<ResourceDto> {

    return this.getResourceId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceDto>) => r.body as ResourceDto)
    );
  }

  /**
   * Path part for operation putResourceId
   */
  static readonly PutResourceIdPath = '/api/v1/resource/{id}';

  /**
   * Link Api: /api/v1/resource/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putResourceId_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceId_Plain_Response(params: {
    id: string;
    body?: ResourceUpdateDto
  }): Observable<THRMStrictHttpResponse<ResourceDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.PutResourceIdPath, 'put');
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
        return r as THRMStrictHttpResponse<ResourceDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putResourceId_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceId_Plain(params: {
    id: string;
    body?: ResourceUpdateDto
  }): Observable<ResourceDto> {

    return this.putResourceId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceDto>) => r.body as ResourceDto)
    );
  }

  /**
   * Link Api: /api/v1/resource/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putResourceId_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceId_Json_Response(params: {
    id: string;
    body?: ResourceUpdateDto
  }): Observable<THRMStrictHttpResponse<ResourceDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.PutResourceIdPath, 'put');
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
        return r as THRMStrictHttpResponse<ResourceDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putResourceId_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceId_Json(params: {
    id: string;
    body?: ResourceUpdateDto
  }): Observable<ResourceDto> {

    return this.putResourceId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceDto>) => r.body as ResourceDto)
    );
  }

  /**
   * Path part for operation putResourceEnableActiveId
   */
  static readonly PutResourceEnableActiveIdPath = '/api/v1/resource/enable-active/{id}';

  /**
   * Link Api: /api/v1/resource/enable-active/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putResourceEnableActiveId()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceEnableActiveId_Response(params: {
    id: string;
    body?: ResourceEnableActiveDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.PutResourceEnableActiveIdPath, 'put');
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
   * Link Api: /api/v1/resource/enable-active/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putResourceEnableActiveId_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceEnableActiveId(params: {
    id: string;
    body?: ResourceEnableActiveDto
  }): Observable<void> {

    return this.putResourceEnableActiveId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putResourceDisableActiveId
   */
  static readonly PutResourceDisableActiveIdPath = '/api/v1/resource/disable-active/{id}';

  /**
   * Link Api: /api/v1/resource/disable-active/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putResourceDisableActiveId()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceDisableActiveId_Response(params: {
    id: string;
    body?: ResourceDisableActiveDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.PutResourceDisableActiveIdPath, 'put');
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
   * Link Api: /api/v1/resource/disable-active/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putResourceDisableActiveId_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceDisableActiveId(params: {
    id: string;
    body?: ResourceDisableActiveDto
  }): Observable<void> {

    return this.putResourceDisableActiveId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteResourceDeleteMany
   */
  static readonly DeleteResourceDeleteManyPath = '/api/v1/resource/delete-many';

  /**
   * Link Api: /api/v1/resource/delete-many
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteResourceDeleteMany()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteResourceDeleteMany_Response(params?: {
    listId?: Array<string>;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceService.DeleteResourceDeleteManyPath, 'delete');
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
   * Link Api: /api/v1/resource/delete-many
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteResourceDeleteMany_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteResourceDeleteMany(params?: {
    listId?: Array<string>;
  }): Observable<void> {

    return this.deleteResourceDeleteMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
