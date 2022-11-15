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
import { KeepingAction } from '../models/keeping-action';
import { KeepingOtherDtoPagedResultDto } from '../models/keeping-other-dto-paged-result-dto';
import { KeepingOtherHistoryRequestDtoPagedResultDto } from '../models/keeping-other-history-request-dto-paged-result-dto';
import { KeepingOtherKind } from '../models/keeping-other-kind';
import { KeepingOtherRequestAction } from '../models/keeping-other-request-action';
import { KeepingOtherRequestDto } from '../models/keeping-other-request-dto';
import { KeepingOtherRequestDtoPagedResultDto } from '../models/keeping-other-request-dto-paged-result-dto';
import { KeepingOtherRequestFurCreateDto } from '../models/keeping-other-request-fur-create-dto';
import { KeepingOtherRequestHrGetListDto } from '../models/keeping-other-request-hr-get-list-dto';
import { KeepingOtherRequestLeaderGetListDto } from '../models/keeping-other-request-leader-get-list-dto';
import { KeepingOtherRequestLogDto } from '../models/keeping-other-request-log-dto';
import { KeepingOtherRequestWkCreateDto } from '../models/keeping-other-request-wk-create-dto';
import { ShiftDto } from '../models/shift-dto';

@Injectable({
  providedIn: 'root',
})
export class KeepingOtherService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation postKeepingOtherWorkingkindRequestCreate
   */
  static readonly PostKeepingOtherWorkingkindRequestCreatePath = '/api/v1/keeping-other/workingkind-request-create';

  /**
   * Link Api: /api/v1/keeping-other/workingkind-request-create
   *
   * gửi yêu cầu xác nhận hình thức làm việc.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postKeepingOtherWorkingkindRequestCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherWorkingkindRequestCreate_Response(params?: {
    body?: KeepingOtherRequestWkCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostKeepingOtherWorkingkindRequestCreatePath, 'post');
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
   * Link Api: /api/v1/keeping-other/workingkind-request-create
   *
   * gửi yêu cầu xác nhận hình thức làm việc.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postKeepingOtherWorkingkindRequestCreate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherWorkingkindRequestCreate(params?: {
    body?: KeepingOtherRequestWkCreateDto
  }): Observable<void> {

    return this.postKeepingOtherWorkingkindRequestCreate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postKeepingOtherFurloughkindRequestCreate
   */
  static readonly PostKeepingOtherFurloughkindRequestCreatePath = '/api/v1/keeping-other/furloughkind-request-create';

  /**
   * Link Api: /api/v1/keeping-other/furloughkind-request-create
   *
   * gửi yêu cầu xác nhận nghỉ phép.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postKeepingOtherFurloughkindRequestCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherFurloughkindRequestCreate_Response(params?: {
    body?: KeepingOtherRequestFurCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostKeepingOtherFurloughkindRequestCreatePath, 'post');
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
   * Link Api: /api/v1/keeping-other/furloughkind-request-create
   *
   * gửi yêu cầu xác nhận nghỉ phép.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postKeepingOtherFurloughkindRequestCreate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherFurloughkindRequestCreate(params?: {
    body?: KeepingOtherRequestFurCreateDto
  }): Observable<void> {

    return this.postKeepingOtherFurloughkindRequestCreate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getKeepingOtherSuggestShift
   */
  static readonly GetKeepingOtherSuggestShiftPath = '/api/v1/keeping-other/suggest-shift';

  /**
   * Link Api: /api/v1/keeping-other/suggest-shift
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherSuggestShift_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherSuggestShift_Plain_Response(params?: {
    from?: string;
    to?: string;
  }): Observable<THRMStrictHttpResponse<Array<ShiftDto>>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherSuggestShiftPath, 'get');
    if (params) {
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
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
   * Link Api: /api/v1/keeping-other/suggest-shift
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherSuggestShift_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherSuggestShift_Plain(params?: {
    from?: string;
    to?: string;
  }): Observable<Array<ShiftDto>> {

    return this.getKeepingOtherSuggestShift_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ShiftDto>>) => r.body as Array<ShiftDto>)
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/suggest-shift
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherSuggestShift_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherSuggestShift_Json_Response(params?: {
    from?: string;
    to?: string;
  }): Observable<THRMStrictHttpResponse<Array<ShiftDto>>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherSuggestShiftPath, 'get');
    if (params) {
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
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
   * Link Api: /api/v1/keeping-other/suggest-shift
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherSuggestShift_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherSuggestShift_Json(params?: {
    from?: string;
    to?: string;
  }): Observable<Array<ShiftDto>> {

    return this.getKeepingOtherSuggestShift_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ShiftDto>>) => r.body as Array<ShiftDto>)
    );
  }

  /**
   * Path part for operation postKeepingOtherRequestCancel
   */
  static readonly PostKeepingOtherRequestCancelPath = '/api/v1/keeping-other/request-cancel';

  /**
   * Link Api: /api/v1/keeping-other/request-cancel
   *
   * hủy yêu cầu xác.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postKeepingOtherRequestCancel()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherRequestCancel_Response(params?: {
    body?: string
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostKeepingOtherRequestCancelPath, 'post');
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
   * Link Api: /api/v1/keeping-other/request-cancel
   *
   * hủy yêu cầu xác.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postKeepingOtherRequestCancel_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherRequestCancel(params?: {
    body?: string
  }): Observable<void> {

    return this.postKeepingOtherRequestCancel_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postKeepingOtherRequestLeaderApprove
   */
  static readonly PostKeepingOtherRequestLeaderApprovePath = '/api/v1/keeping-other/request-leader-approve';

  /**
   * Link Api: /api/v1/keeping-other/request-leader-approve
   *
   * leader đồng ý  từ nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postKeepingOtherRequestLeaderApprove()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherRequestLeaderApprove_Response(params?: {
    body?: string
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostKeepingOtherRequestLeaderApprovePath, 'post');
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
   * Link Api: /api/v1/keeping-other/request-leader-approve
   *
   * leader đồng ý  từ nhân viên.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postKeepingOtherRequestLeaderApprove_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherRequestLeaderApprove(params?: {
    body?: string
  }): Observable<void> {

    return this.postKeepingOtherRequestLeaderApprove_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postKeepingOtherRequestLeaderReject
   */
  static readonly PostKeepingOtherRequestLeaderRejectPath = '/api/v1/keeping-other/request-leader-reject';

  /**
   * Link Api: /api/v1/keeping-other/request-leader-reject
   *
   * leader từ chối từ nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postKeepingOtherRequestLeaderReject()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherRequestLeaderReject_Response(params?: {
    body?: string
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostKeepingOtherRequestLeaderRejectPath, 'post');
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
   * Link Api: /api/v1/keeping-other/request-leader-reject
   *
   * leader từ chối từ nhân viên.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postKeepingOtherRequestLeaderReject_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherRequestLeaderReject(params?: {
    body?: string
  }): Observable<void> {

    return this.postKeepingOtherRequestLeaderReject_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postKeepingOtherRequestHrApprove
   */
  static readonly PostKeepingOtherRequestHrApprovePath = '/api/v1/keeping-other/request-hr-approve';

  /**
   * Link Api: /api/v1/keeping-other/request-hr-approve
   *
   * hr đồng ý yêu cầu từ leader.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postKeepingOtherRequestHrApprove()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherRequestHrApprove_Response(params?: {
    body?: string
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostKeepingOtherRequestHrApprovePath, 'post');
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
   * Link Api: /api/v1/keeping-other/request-hr-approve
   *
   * hr đồng ý yêu cầu từ leader.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postKeepingOtherRequestHrApprove_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherRequestHrApprove(params?: {
    body?: string
  }): Observable<void> {

    return this.postKeepingOtherRequestHrApprove_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postKeepingOtherRequestHrReject
   */
  static readonly PostKeepingOtherRequestHrRejectPath = '/api/v1/keeping-other/request-hr-reject';

  /**
   * Link Api: /api/v1/keeping-other/request-hr-reject
   *
   * hr từ chối.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postKeepingOtherRequestHrReject()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherRequestHrReject_Response(params?: {
    body?: string
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostKeepingOtherRequestHrRejectPath, 'post');
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
   * Link Api: /api/v1/keeping-other/request-hr-reject
   *
   * hr từ chối.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postKeepingOtherRequestHrReject_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherRequestHrReject(params?: {
    body?: string
  }): Observable<void> {

    return this.postKeepingOtherRequestHrReject_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getKeepingOtherRequestLeader
   */
  static readonly GetKeepingOtherRequestLeaderPath = '/api/v1/keeping-other/request-leader';

  /**
   * Link Api: /api/v1/keeping-other/request-leader
   *
   * lây danh sách các yêu cầu của leader.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherRequestLeader_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestLeader_Plain_Response(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<KeepingOtherKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherRequestLeaderPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('Teams', params.Teams, {});
      rb.query('Kinds', params.Kinds, {});
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
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-leader
   *
   * lây danh sách các yêu cầu của leader.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherRequestLeader_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestLeader_Plain(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<KeepingOtherKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.getKeepingOtherRequestLeader_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-leader
   *
   * lây danh sách các yêu cầu của leader.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherRequestLeader_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestLeader_Json_Response(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<KeepingOtherKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherRequestLeaderPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('Teams', params.Teams, {});
      rb.query('Kinds', params.Kinds, {});
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
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-leader
   *
   * lây danh sách các yêu cầu của leader.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherRequestLeader_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestLeader_Json(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<KeepingOtherKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.getKeepingOtherRequestLeader_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getKeepingOtherRequestLeaderHistory
   */
  static readonly GetKeepingOtherRequestLeaderHistoryPath = '/api/v1/keeping-other/request-leader-history';

  /**
   * Link Api: /api/v1/keeping-other/request-leader-history
   *
   * lây danh sách các yêu cầu lịch sử leader.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherRequestLeaderHistory_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestLeaderHistory_Plain_Response(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<KeepingOtherKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherRequestLeaderHistoryPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('Teams', params.Teams, {});
      rb.query('Kinds', params.Kinds, {});
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
        return r as THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-leader-history
   *
   * lây danh sách các yêu cầu lịch sử leader.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherRequestLeaderHistory_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestLeaderHistory_Plain(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<KeepingOtherKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<KeepingOtherHistoryRequestDtoPagedResultDto> {

    return this.getKeepingOtherRequestLeaderHistory_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>) => r.body as KeepingOtherHistoryRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-leader-history
   *
   * lây danh sách các yêu cầu lịch sử leader.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherRequestLeaderHistory_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestLeaderHistory_Json_Response(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<KeepingOtherKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherRequestLeaderHistoryPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('Teams', params.Teams, {});
      rb.query('Kinds', params.Kinds, {});
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
        return r as THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-leader-history
   *
   * lây danh sách các yêu cầu lịch sử leader.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherRequestLeaderHistory_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestLeaderHistory_Json(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<KeepingOtherKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<KeepingOtherHistoryRequestDtoPagedResultDto> {

    return this.getKeepingOtherRequestLeaderHistory_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>) => r.body as KeepingOtherHistoryRequestDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getKeepingOtherRequestHr
   */
  static readonly GetKeepingOtherRequestHrPath = '/api/v1/keeping-other/request-hr';

  /**
   * Link Api: /api/v1/keeping-other/request-hr
   *
   * lây danh sách các yêu cầu của hr.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherRequestHr_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestHr_Plain_Response(params?: {
    Year?: number;
    Month?: number;
    Kinds?: Array<KeepingOtherKind>;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherRequestHrPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('Kinds', params.Kinds, {});
      rb.query('DepartmentIds', params.DepartmentIds, {});
      rb.query('BranchIds', params.BranchIds, {});
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
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-hr
   *
   * lây danh sách các yêu cầu của hr.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherRequestHr_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestHr_Plain(params?: {
    Year?: number;
    Month?: number;
    Kinds?: Array<KeepingOtherKind>;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.getKeepingOtherRequestHr_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-hr
   *
   * lây danh sách các yêu cầu của hr.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherRequestHr_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestHr_Json_Response(params?: {
    Year?: number;
    Month?: number;
    Kinds?: Array<KeepingOtherKind>;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherRequestHrPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('Kinds', params.Kinds, {});
      rb.query('DepartmentIds', params.DepartmentIds, {});
      rb.query('BranchIds', params.BranchIds, {});
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
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-hr
   *
   * lây danh sách các yêu cầu của hr.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherRequestHr_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestHr_Json(params?: {
    Year?: number;
    Month?: number;
    Kinds?: Array<KeepingOtherKind>;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.getKeepingOtherRequestHr_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getKeepingOtherRequestHrHistory
   */
  static readonly GetKeepingOtherRequestHrHistoryPath = '/api/v1/keeping-other/request-hr-history';

  /**
   * Link Api: /api/v1/keeping-other/request-hr-history
   *
   * leader lây danh sách các yêu cầu lịch sử hr.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherRequestHrHistory_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestHrHistory_Plain_Response(params?: {
    Year?: number;
    Month?: number;
    Kinds?: Array<KeepingOtherKind>;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherRequestHrHistoryPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('Kinds', params.Kinds, {});
      rb.query('DepartmentIds', params.DepartmentIds, {});
      rb.query('BranchIds', params.BranchIds, {});
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
        return r as THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-hr-history
   *
   * leader lây danh sách các yêu cầu lịch sử hr.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherRequestHrHistory_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestHrHistory_Plain(params?: {
    Year?: number;
    Month?: number;
    Kinds?: Array<KeepingOtherKind>;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<KeepingOtherHistoryRequestDtoPagedResultDto> {

    return this.getKeepingOtherRequestHrHistory_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>) => r.body as KeepingOtherHistoryRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-hr-history
   *
   * leader lây danh sách các yêu cầu lịch sử hr.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherRequestHrHistory_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestHrHistory_Json_Response(params?: {
    Year?: number;
    Month?: number;
    Kinds?: Array<KeepingOtherKind>;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherRequestHrHistoryPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('Kinds', params.Kinds, {});
      rb.query('DepartmentIds', params.DepartmentIds, {});
      rb.query('BranchIds', params.BranchIds, {});
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
        return r as THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-hr-history
   *
   * leader lây danh sách các yêu cầu lịch sử hr.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherRequestHrHistory_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestHrHistory_Json(params?: {
    Year?: number;
    Month?: number;
    Kinds?: Array<KeepingOtherKind>;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<KeepingOtherHistoryRequestDtoPagedResultDto> {

    return this.getKeepingOtherRequestHrHistory_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>) => r.body as KeepingOtherHistoryRequestDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getKeepingOtherRequestDetail
   */
  static readonly GetKeepingOtherRequestDetailPath = '/api/v1/keeping-other/request-detail';

  /**
   * Link Api: /api/v1/keeping-other/request-detail
   *
   * lây chi tiết một request.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherRequestDetail_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestDetail_Plain_Response(params?: {
    requestid?: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherRequestDetailPath, 'get');
    if (params) {
      rb.query('requestid', params.requestid, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherRequestDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-detail
   *
   * lây chi tiết một request.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherRequestDetail_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestDetail_Plain(params?: {
    requestid?: string;
  }): Observable<KeepingOtherRequestDto> {

    return this.getKeepingOtherRequestDetail_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDto>) => r.body as KeepingOtherRequestDto)
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-detail
   *
   * lây chi tiết một request.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherRequestDetail_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestDetail_Json_Response(params?: {
    requestid?: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherRequestDetailPath, 'get');
    if (params) {
      rb.query('requestid', params.requestid, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherRequestDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-detail
   *
   * lây chi tiết một request.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherRequestDetail_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestDetail_Json(params?: {
    requestid?: string;
  }): Observable<KeepingOtherRequestDto> {

    return this.getKeepingOtherRequestDetail_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDto>) => r.body as KeepingOtherRequestDto)
    );
  }

  /**
   * Path part for operation postKeepingOtherRequestUndo
   */
  static readonly PostKeepingOtherRequestUndoPath = '/api/v1/keeping-other/request-undo';

  /**
   * Link Api: /api/v1/keeping-other/request-undo
   *
   * undo một yêu cầu.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postKeepingOtherRequestUndo()` instead.
   *
   * This method doesn't expect any request body.
   */
  postKeepingOtherRequestUndo_Response(params?: {
    id?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostKeepingOtherRequestUndoPath, 'post');
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
   * Link Api: /api/v1/keeping-other/request-undo
   *
   * undo một yêu cầu.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postKeepingOtherRequestUndo_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postKeepingOtherRequestUndo(params?: {
    id?: string;
  }): Observable<void> {

    return this.postKeepingOtherRequestUndo_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getKeepingOther
   */
  static readonly GetKeepingOtherPath = '/api/v1/keeping-other';

  /**
   * Link Api: /api/v1/keeping-other
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOther_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOther_Plain_Response(params?: {
    FromTime?: string;
    ToTime?: string;
    Month?: number;
    Year?: number;
    Kind?: KeepingOtherKind;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<KeepingOtherDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherPath, 'get');
    if (params) {
      rb.query('FromTime', params.FromTime, {});
      rb.query('ToTime', params.ToTime, {});
      rb.query('Month', params.Month, {});
      rb.query('Year', params.Year, {});
      rb.query('Kind', params.Kind, {});
      rb.query('Sorting', params.Sorting, {});
      rb.query('SkipCount', params.SkipCount, {});
      rb.query('MaxResultCount', params.MaxResultCount, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOther_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOther_Plain(params?: {
    FromTime?: string;
    ToTime?: string;
    Month?: number;
    Year?: number;
    Kind?: KeepingOtherKind;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<KeepingOtherDtoPagedResultDto> {

    return this.getKeepingOther_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherDtoPagedResultDto>) => r.body as KeepingOtherDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/keeping-other
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOther_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOther_Json_Response(params?: {
    FromTime?: string;
    ToTime?: string;
    Month?: number;
    Year?: number;
    Kind?: KeepingOtherKind;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<KeepingOtherDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherPath, 'get');
    if (params) {
      rb.query('FromTime', params.FromTime, {});
      rb.query('ToTime', params.ToTime, {});
      rb.query('Month', params.Month, {});
      rb.query('Year', params.Year, {});
      rb.query('Kind', params.Kind, {});
      rb.query('Sorting', params.Sorting, {});
      rb.query('SkipCount', params.SkipCount, {});
      rb.query('MaxResultCount', params.MaxResultCount, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOther_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOther_Json(params?: {
    FromTime?: string;
    ToTime?: string;
    Month?: number;
    Year?: number;
    Kind?: KeepingOtherKind;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<KeepingOtherDtoPagedResultDto> {

    return this.getKeepingOther_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherDtoPagedResultDto>) => r.body as KeepingOtherDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postKeepingOtherLeaderApproveRejectRequestMany
   */
  static readonly PostKeepingOtherLeaderApproveRejectRequestManyPath = '/api/v1/keeping-other/leader-approve-reject-request-many';

  /**
   * Link Api: /api/v1/keeping-other/leader-approve-reject-request-many
   *
   * leader approve or reject many keeping other request.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postKeepingOtherLeaderApproveRejectRequestMany()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherLeaderApproveRejectRequestMany_Response(params?: {

    /**
     * list request id and acton to do : approve = 0, reject = 1, delete = 2
     */
    body?: KeepingOtherRequestAction
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostKeepingOtherLeaderApproveRejectRequestManyPath, 'post');
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
   * Link Api: /api/v1/keeping-other/leader-approve-reject-request-many
   *
   * leader approve or reject many keeping other request.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postKeepingOtherLeaderApproveRejectRequestMany_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherLeaderApproveRejectRequestMany(params?: {

    /**
     * list request id and acton to do : approve = 0, reject = 1, delete = 2
     */
    body?: KeepingOtherRequestAction
  }): Observable<void> {

    return this.postKeepingOtherLeaderApproveRejectRequestMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postKeepingOtherHrApproveRejectRequestMany
   */
  static readonly PostKeepingOtherHrApproveRejectRequestManyPath = '/api/v1/keeping-other/hr-approve-reject-request-many';

  /**
   * Link Api: /api/v1/keeping-other/hr-approve-reject-request-many
   *
   * hr approve or reject many time keeping request.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postKeepingOtherHrApproveRejectRequestMany()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherHrApproveRejectRequestMany_Response(params?: {

    /**
     * list request id and acton to do : approve = 0, reject = 1, delete = 2
     */
    body?: KeepingOtherRequestAction
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostKeepingOtherHrApproveRejectRequestManyPath, 'post');
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
   * Link Api: /api/v1/keeping-other/hr-approve-reject-request-many
   *
   * hr approve or reject many time keeping request.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postKeepingOtherHrApproveRejectRequestMany_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postKeepingOtherHrApproveRejectRequestMany(params?: {

    /**
     * list request id and acton to do : approve = 0, reject = 1, delete = 2
     */
    body?: KeepingOtherRequestAction
  }): Observable<void> {

    return this.postKeepingOtherHrApproveRejectRequestMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getKeepingOtherRequestHistory
   */
  static readonly GetKeepingOtherRequestHistoryPath = '/api/v1/keeping-other/request-history';

  /**
   * Link Api: /api/v1/keeping-other/request-history
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherRequestHistory_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestHistory_Plain_Response(params?: {
    requestId?: string;
  }): Observable<THRMStrictHttpResponse<Array<KeepingOtherRequestLogDto>>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherRequestHistoryPath, 'get');
    if (params) {
      rb.query('requestId', params.requestId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<KeepingOtherRequestLogDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-history
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherRequestHistory_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestHistory_Plain(params?: {
    requestId?: string;
  }): Observable<Array<KeepingOtherRequestLogDto>> {

    return this.getKeepingOtherRequestHistory_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<KeepingOtherRequestLogDto>>) => r.body as Array<KeepingOtherRequestLogDto>)
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-history
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherRequestHistory_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestHistory_Json_Response(params?: {
    requestId?: string;
  }): Observable<THRMStrictHttpResponse<Array<KeepingOtherRequestLogDto>>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherRequestHistoryPath, 'get');
    if (params) {
      rb.query('requestId', params.requestId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<KeepingOtherRequestLogDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/request-history
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherRequestHistory_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherRequestHistory_Json(params?: {
    requestId?: string;
  }): Observable<Array<KeepingOtherRequestLogDto>> {

    return this.getKeepingOtherRequestHistory_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<KeepingOtherRequestLogDto>>) => r.body as Array<KeepingOtherRequestLogDto>)
    );
  }

  /**
   * Path part for operation getKeepingOtherLeaderGetAllRequest
   */
  static readonly GetKeepingOtherLeaderGetAllRequestPath = '/api/v1/keeping-other/leader-get-all-request';

  /**
   * Link Api: /api/v1/keeping-other/leader-get-all-request
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherLeaderGetAllRequest_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherLeaderGetAllRequest_Plain_Response(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<KeepingOtherKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherLeaderGetAllRequestPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('Teams', params.Teams, {});
      rb.query('Kinds', params.Kinds, {});
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
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/leader-get-all-request
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherLeaderGetAllRequest_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherLeaderGetAllRequest_Plain(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<KeepingOtherKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.getKeepingOtherLeaderGetAllRequest_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/leader-get-all-request
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherLeaderGetAllRequest_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherLeaderGetAllRequest_Json_Response(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<KeepingOtherKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherLeaderGetAllRequestPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('Teams', params.Teams, {});
      rb.query('Kinds', params.Kinds, {});
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
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/leader-get-all-request
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherLeaderGetAllRequest_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherLeaderGetAllRequest_Json(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<KeepingOtherKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.getKeepingOtherLeaderGetAllRequest_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getKeepingOtherHrGetAllRequest
   */
  static readonly GetKeepingOtherHrGetAllRequestPath = '/api/v1/keeping-other/hr-get-all-request';

  /**
   * Link Api: /api/v1/keeping-other/hr-get-all-request
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherHrGetAllRequest_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherHrGetAllRequest_Plain_Response(params?: {
    Year?: number;
    Month?: number;
    Kinds?: Array<KeepingOtherKind>;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherHrGetAllRequestPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('Kinds', params.Kinds, {});
      rb.query('DepartmentIds', params.DepartmentIds, {});
      rb.query('BranchIds', params.BranchIds, {});
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
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/hr-get-all-request
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherHrGetAllRequest_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherHrGetAllRequest_Plain(params?: {
    Year?: number;
    Month?: number;
    Kinds?: Array<KeepingOtherKind>;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.getKeepingOtherHrGetAllRequest_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/hr-get-all-request
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getKeepingOtherHrGetAllRequest_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherHrGetAllRequest_Json_Response(params?: {
    Year?: number;
    Month?: number;
    Kinds?: Array<KeepingOtherKind>;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetKeepingOtherHrGetAllRequestPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('Kinds', params.Kinds, {});
      rb.query('DepartmentIds', params.DepartmentIds, {});
      rb.query('BranchIds', params.BranchIds, {});
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
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/keeping-other/hr-get-all-request
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getKeepingOtherHrGetAllRequest_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getKeepingOtherHrGetAllRequest_Json(params?: {
    Year?: number;
    Month?: number;
    Kinds?: Array<KeepingOtherKind>;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.getKeepingOtherHrGetAllRequest_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherWorkingKindRequestCreate
   */
  static readonly PostApiAppKeepingOtherWorkingKindRequestCreatePath = '/api/app/keeping-other/working-kind-request-create';

  /**
   * Link Api: /api/app/keeping-other/working-kind-request-create
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherWorkingKindRequestCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherWorkingKindRequestCreate_Response(params?: {
    body?: KeepingOtherRequestWkCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherWorkingKindRequestCreatePath, 'post');
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
   * Link Api: /api/app/keeping-other/working-kind-request-create
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherWorkingKindRequestCreate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherWorkingKindRequestCreate(params?: {
    body?: KeepingOtherRequestWkCreateDto
  }): Observable<void> {

    return this.postApiAppKeepingOtherWorkingKindRequestCreate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherFurloughKindRequestCreate
   */
  static readonly PostApiAppKeepingOtherFurloughKindRequestCreatePath = '/api/app/keeping-other/furlough-kind-request-create';

  /**
   * Link Api: /api/app/keeping-other/furlough-kind-request-create
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherFurloughKindRequestCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherFurloughKindRequestCreate_Response(params?: {
    body?: KeepingOtherRequestFurCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherFurloughKindRequestCreatePath, 'post');
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
   * Link Api: /api/app/keeping-other/furlough-kind-request-create
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherFurloughKindRequestCreate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherFurloughKindRequestCreate(params?: {
    body?: KeepingOtherRequestFurCreateDto
  }): Observable<void> {

    return this.postApiAppKeepingOtherFurloughKindRequestCreate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherSuggestShift
   */
  static readonly PostApiAppKeepingOtherSuggestShiftPath = '/api/app/keeping-other/suggest-shift';

  /**
   * Link Api: /api/app/keeping-other/suggest-shift
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherSuggestShift_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherSuggestShift_Plain_Response(params?: {
    from?: string;
    to?: string;
  }): Observable<THRMStrictHttpResponse<Array<ShiftDto>>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherSuggestShiftPath, 'post');
    if (params) {
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
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
   * Link Api: /api/app/keeping-other/suggest-shift
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherSuggestShift_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherSuggestShift_Plain(params?: {
    from?: string;
    to?: string;
  }): Observable<Array<ShiftDto>> {

    return this.postApiAppKeepingOtherSuggestShift_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ShiftDto>>) => r.body as Array<ShiftDto>)
    );
  }

  /**
   * Link Api: /api/app/keeping-other/suggest-shift
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherSuggestShift_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherSuggestShift_Json_Response(params?: {
    from?: string;
    to?: string;
  }): Observable<THRMStrictHttpResponse<Array<ShiftDto>>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherSuggestShiftPath, 'post');
    if (params) {
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
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
   * Link Api: /api/app/keeping-other/suggest-shift
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherSuggestShift_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherSuggestShift_Json(params?: {
    from?: string;
    to?: string;
  }): Observable<Array<ShiftDto>> {

    return this.postApiAppKeepingOtherSuggestShift_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ShiftDto>>) => r.body as Array<ShiftDto>)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherRequestLeaderGetList
   */
  static readonly PostApiAppKeepingOtherRequestLeaderGetListPath = '/api/app/keeping-other/request-leader-get-list';

  /**
   * Link Api: /api/app/keeping-other/request-leader-get-list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestLeaderGetList_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestLeaderGetList_Plain_Response(params?: {
    body?: KeepingOtherRequestLeaderGetListDto
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestLeaderGetListPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-leader-get-list
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestLeaderGetList_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestLeaderGetList_Plain(params?: {
    body?: KeepingOtherRequestLeaderGetListDto
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.postApiAppKeepingOtherRequestLeaderGetList_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-leader-get-list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestLeaderGetList_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestLeaderGetList_Json_Response(params?: {
    body?: KeepingOtherRequestLeaderGetListDto
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestLeaderGetListPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-leader-get-list
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestLeaderGetList_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestLeaderGetList_Json(params?: {
    body?: KeepingOtherRequestLeaderGetListDto
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.postApiAppKeepingOtherRequestLeaderGetList_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherRequestHistoryLeaderGetList
   */
  static readonly PostApiAppKeepingOtherRequestHistoryLeaderGetListPath = '/api/app/keeping-other/request-history-leader-get-list';

  /**
   * Link Api: /api/app/keeping-other/request-history-leader-get-list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestHistoryLeaderGetList_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestHistoryLeaderGetList_Plain_Response(params?: {
    body?: KeepingOtherRequestLeaderGetListDto
  }): Observable<THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestHistoryLeaderGetListPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-history-leader-get-list
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestHistoryLeaderGetList_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestHistoryLeaderGetList_Plain(params?: {
    body?: KeepingOtherRequestLeaderGetListDto
  }): Observable<KeepingOtherHistoryRequestDtoPagedResultDto> {

    return this.postApiAppKeepingOtherRequestHistoryLeaderGetList_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>) => r.body as KeepingOtherHistoryRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-history-leader-get-list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestHistoryLeaderGetList_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestHistoryLeaderGetList_Json_Response(params?: {
    body?: KeepingOtherRequestLeaderGetListDto
  }): Observable<THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestHistoryLeaderGetListPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-history-leader-get-list
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestHistoryLeaderGetList_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestHistoryLeaderGetList_Json(params?: {
    body?: KeepingOtherRequestLeaderGetListDto
  }): Observable<KeepingOtherHistoryRequestDtoPagedResultDto> {

    return this.postApiAppKeepingOtherRequestHistoryLeaderGetList_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>) => r.body as KeepingOtherHistoryRequestDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherRequestHrGetList
   */
  static readonly PostApiAppKeepingOtherRequestHrGetListPath = '/api/app/keeping-other/request-hr-get-list';

  /**
   * Link Api: /api/app/keeping-other/request-hr-get-list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestHrGetList_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestHrGetList_Plain_Response(params?: {
    body?: KeepingOtherRequestHrGetListDto
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestHrGetListPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-hr-get-list
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestHrGetList_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestHrGetList_Plain(params?: {
    body?: KeepingOtherRequestHrGetListDto
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.postApiAppKeepingOtherRequestHrGetList_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-hr-get-list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestHrGetList_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestHrGetList_Json_Response(params?: {
    body?: KeepingOtherRequestHrGetListDto
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestHrGetListPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-hr-get-list
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestHrGetList_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestHrGetList_Json(params?: {
    body?: KeepingOtherRequestHrGetListDto
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.postApiAppKeepingOtherRequestHrGetList_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherRequestHistoryHrGetList
   */
  static readonly PostApiAppKeepingOtherRequestHistoryHrGetListPath = '/api/app/keeping-other/request-history-hr-get-list';

  /**
   * Link Api: /api/app/keeping-other/request-history-hr-get-list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestHistoryHrGetList_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestHistoryHrGetList_Plain_Response(params?: {
    body?: KeepingOtherRequestHrGetListDto
  }): Observable<THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestHistoryHrGetListPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-history-hr-get-list
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestHistoryHrGetList_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestHistoryHrGetList_Plain(params?: {
    body?: KeepingOtherRequestHrGetListDto
  }): Observable<KeepingOtherHistoryRequestDtoPagedResultDto> {

    return this.postApiAppKeepingOtherRequestHistoryHrGetList_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>) => r.body as KeepingOtherHistoryRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-history-hr-get-list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestHistoryHrGetList_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestHistoryHrGetList_Json_Response(params?: {
    body?: KeepingOtherRequestHrGetListDto
  }): Observable<THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestHistoryHrGetListPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-history-hr-get-list
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestHistoryHrGetList_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherRequestHistoryHrGetList_Json(params?: {
    body?: KeepingOtherRequestHrGetListDto
  }): Observable<KeepingOtherHistoryRequestDtoPagedResultDto> {

    return this.postApiAppKeepingOtherRequestHistoryHrGetList_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherHistoryRequestDtoPagedResultDto>) => r.body as KeepingOtherHistoryRequestDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherRequestCancelRequestId
   */
  static readonly PostApiAppKeepingOtherRequestCancelRequestIdPath = '/api/app/keeping-other/request-cancel/{requestId}';

  /**
   * Link Api: /api/app/keeping-other/request-cancel/{requestId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestCancelRequestId()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestCancelRequestId_Response(params: {
    requestId: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestCancelRequestIdPath, 'post');
    if (params) {
      rb.path('requestId', params.requestId, {});
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
   * Link Api: /api/app/keeping-other/request-cancel/{requestId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestCancelRequestId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestCancelRequestId(params: {
    requestId: string;
  }): Observable<void> {

    return this.postApiAppKeepingOtherRequestCancelRequestId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherRequestLeaderApproveRequestId
   */
  static readonly PostApiAppKeepingOtherRequestLeaderApproveRequestIdPath = '/api/app/keeping-other/request-leader-approve/{requestId}';

  /**
   * Link Api: /api/app/keeping-other/request-leader-approve/{requestId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestLeaderApproveRequestId()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestLeaderApproveRequestId_Response(params: {
    requestId: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestLeaderApproveRequestIdPath, 'post');
    if (params) {
      rb.path('requestId', params.requestId, {});
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
   * Link Api: /api/app/keeping-other/request-leader-approve/{requestId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestLeaderApproveRequestId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestLeaderApproveRequestId(params: {
    requestId: string;
  }): Observable<void> {

    return this.postApiAppKeepingOtherRequestLeaderApproveRequestId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherRequestLeaderRejectRequestId
   */
  static readonly PostApiAppKeepingOtherRequestLeaderRejectRequestIdPath = '/api/app/keeping-other/request-leader-reject/{requestId}';

  /**
   * Link Api: /api/app/keeping-other/request-leader-reject/{requestId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestLeaderRejectRequestId()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestLeaderRejectRequestId_Response(params: {
    requestId: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestLeaderRejectRequestIdPath, 'post');
    if (params) {
      rb.path('requestId', params.requestId, {});
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
   * Link Api: /api/app/keeping-other/request-leader-reject/{requestId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestLeaderRejectRequestId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestLeaderRejectRequestId(params: {
    requestId: string;
  }): Observable<void> {

    return this.postApiAppKeepingOtherRequestLeaderRejectRequestId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherRequestHrApproveRequestId
   */
  static readonly PostApiAppKeepingOtherRequestHrApproveRequestIdPath = '/api/app/keeping-other/request-hr-approve/{requestId}';

  /**
   * Link Api: /api/app/keeping-other/request-hr-approve/{requestId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestHrApproveRequestId()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestHrApproveRequestId_Response(params: {
    requestId: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestHrApproveRequestIdPath, 'post');
    if (params) {
      rb.path('requestId', params.requestId, {});
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
   * Link Api: /api/app/keeping-other/request-hr-approve/{requestId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestHrApproveRequestId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestHrApproveRequestId(params: {
    requestId: string;
  }): Observable<void> {

    return this.postApiAppKeepingOtherRequestHrApproveRequestId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherRequestHrRejectRequestId
   */
  static readonly PostApiAppKeepingOtherRequestHrRejectRequestIdPath = '/api/app/keeping-other/request-hr-reject/{requestId}';

  /**
   * Link Api: /api/app/keeping-other/request-hr-reject/{requestId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestHrRejectRequestId()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestHrRejectRequestId_Response(params: {
    requestId: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestHrRejectRequestIdPath, 'post');
    if (params) {
      rb.path('requestId', params.requestId, {});
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
   * Link Api: /api/app/keeping-other/request-hr-reject/{requestId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestHrRejectRequestId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestHrRejectRequestId(params: {
    requestId: string;
  }): Observable<void> {

    return this.postApiAppKeepingOtherRequestHrRejectRequestId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherRequestDetailRequestId
   */
  static readonly PostApiAppKeepingOtherRequestDetailRequestIdPath = '/api/app/keeping-other/request-detail/{requestId}';

  /**
   * Link Api: /api/app/keeping-other/request-detail/{requestId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestDetailRequestId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestDetailRequestId_Plain_Response(params: {
    requestId: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestDetailRequestIdPath, 'post');
    if (params) {
      rb.path('requestId', params.requestId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherRequestDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-detail/{requestId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestDetailRequestId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestDetailRequestId_Plain(params: {
    requestId: string;
  }): Observable<KeepingOtherRequestDto> {

    return this.postApiAppKeepingOtherRequestDetailRequestId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDto>) => r.body as KeepingOtherRequestDto)
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-detail/{requestId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestDetailRequestId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestDetailRequestId_Json_Response(params: {
    requestId: string;
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestDetailRequestIdPath, 'post');
    if (params) {
      rb.path('requestId', params.requestId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherRequestDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-detail/{requestId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestDetailRequestId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestDetailRequestId_Json(params: {
    requestId: string;
  }): Observable<KeepingOtherRequestDto> {

    return this.postApiAppKeepingOtherRequestDetailRequestId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDto>) => r.body as KeepingOtherRequestDto)
    );
  }

  /**
   * Path part for operation getApiAppKeepingOther
   */
  static readonly GetApiAppKeepingOtherPath = '/api/app/keeping-other';

  /**
   * Link Api: /api/app/keeping-other
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAppKeepingOther_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppKeepingOther_Plain_Response(params?: {
    FromTime?: string;
    ToTime?: string;
    Month?: number;
    Year?: number;
    Kind?: KeepingOtherKind;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<KeepingOtherDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetApiAppKeepingOtherPath, 'get');
    if (params) {
      rb.query('FromTime', params.FromTime, {});
      rb.query('ToTime', params.ToTime, {});
      rb.query('Month', params.Month, {});
      rb.query('Year', params.Year, {});
      rb.query('Kind', params.Kind, {});
      rb.query('Sorting', params.Sorting, {});
      rb.query('SkipCount', params.SkipCount, {});
      rb.query('MaxResultCount', params.MaxResultCount, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAppKeepingOther_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppKeepingOther_Plain(params?: {
    FromTime?: string;
    ToTime?: string;
    Month?: number;
    Year?: number;
    Kind?: KeepingOtherKind;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<KeepingOtherDtoPagedResultDto> {

    return this.getApiAppKeepingOther_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherDtoPagedResultDto>) => r.body as KeepingOtherDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/app/keeping-other
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAppKeepingOther_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppKeepingOther_Json_Response(params?: {
    FromTime?: string;
    ToTime?: string;
    Month?: number;
    Year?: number;
    Kind?: KeepingOtherKind;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<KeepingOtherDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.GetApiAppKeepingOtherPath, 'get');
    if (params) {
      rb.query('FromTime', params.FromTime, {});
      rb.query('ToTime', params.ToTime, {});
      rb.query('Month', params.Month, {});
      rb.query('Year', params.Year, {});
      rb.query('Kind', params.Kind, {});
      rb.query('Sorting', params.Sorting, {});
      rb.query('SkipCount', params.SkipCount, {});
      rb.query('MaxResultCount', params.MaxResultCount, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAppKeepingOther_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppKeepingOther_Json(params?: {
    FromTime?: string;
    ToTime?: string;
    Month?: number;
    Year?: number;
    Kind?: KeepingOtherKind;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<KeepingOtherDtoPagedResultDto> {

    return this.getApiAppKeepingOther_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherDtoPagedResultDto>) => r.body as KeepingOtherDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherRequestUndoRequestId
   */
  static readonly PostApiAppKeepingOtherRequestUndoRequestIdPath = '/api/app/keeping-other/request-undo/{requestId}';

  /**
   * Link Api: /api/app/keeping-other/request-undo/{requestId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestUndoRequestId()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestUndoRequestId_Response(params: {
    requestId: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestUndoRequestIdPath, 'post');
    if (params) {
      rb.path('requestId', params.requestId, {});
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
   * Link Api: /api/app/keeping-other/request-undo/{requestId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestUndoRequestId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestUndoRequestId(params: {
    requestId: string;
  }): Observable<void> {

    return this.postApiAppKeepingOtherRequestUndoRequestId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherLeaderWithKeepingOtherRequestManyActionListRequestId
   */
  static readonly PostApiAppKeepingOtherLeaderWithKeepingOtherRequestManyActionListRequestIdPath = '/api/app/keeping-other/leader-with-keeping-other-request-many-action/{listRequestId}';

  /**
   * Link Api: /api/app/keeping-other/leader-with-keeping-other-request-many-action/{listRequestId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherLeaderWithKeepingOtherRequestManyActionListRequestId()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherLeaderWithKeepingOtherRequestManyActionListRequestId_Response(params: {
    keepingAction?: KeepingAction;
    listRequestId: string;
    body?: Array<string>
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherLeaderWithKeepingOtherRequestManyActionListRequestIdPath, 'post');
    if (params) {
      rb.query('keepingAction', params.keepingAction, {});
      rb.path('listRequestId', params.listRequestId, {});
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
   * Link Api: /api/app/keeping-other/leader-with-keeping-other-request-many-action/{listRequestId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherLeaderWithKeepingOtherRequestManyActionListRequestId_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherLeaderWithKeepingOtherRequestManyActionListRequestId(params: {
    keepingAction?: KeepingAction;
    listRequestId: string;
    body?: Array<string>
  }): Observable<void> {

    return this.postApiAppKeepingOtherLeaderWithKeepingOtherRequestManyActionListRequestId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherHrWithKeepingOtherRequestManyActionListRequestId
   */
  static readonly PostApiAppKeepingOtherHrWithKeepingOtherRequestManyActionListRequestIdPath = '/api/app/keeping-other/hr-with-keeping-other-request-many-action/{listRequestId}';

  /**
   * Link Api: /api/app/keeping-other/hr-with-keeping-other-request-many-action/{listRequestId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherHrWithKeepingOtherRequestManyActionListRequestId()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherHrWithKeepingOtherRequestManyActionListRequestId_Response(params: {
    keepingAction?: KeepingAction;
    listRequestId: string;
    body?: Array<string>
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherHrWithKeepingOtherRequestManyActionListRequestIdPath, 'post');
    if (params) {
      rb.query('keepingAction', params.keepingAction, {});
      rb.path('listRequestId', params.listRequestId, {});
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
   * Link Api: /api/app/keeping-other/hr-with-keeping-other-request-many-action/{listRequestId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherHrWithKeepingOtherRequestManyActionListRequestId_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherHrWithKeepingOtherRequestManyActionListRequestId(params: {
    keepingAction?: KeepingAction;
    listRequestId: string;
    body?: Array<string>
  }): Observable<void> {

    return this.postApiAppKeepingOtherHrWithKeepingOtherRequestManyActionListRequestId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherRequestHistoryGetByRequestIdRequestId
   */
  static readonly PostApiAppKeepingOtherRequestHistoryGetByRequestIdRequestIdPath = '/api/app/keeping-other/request-history-get-by-request-id/{requestId}';

  /**
   * Link Api: /api/app/keeping-other/request-history-get-by-request-id/{requestId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestHistoryGetByRequestIdRequestId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestHistoryGetByRequestIdRequestId_Plain_Response(params: {
    requestId: string;
  }): Observable<THRMStrictHttpResponse<Array<KeepingOtherRequestLogDto>>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestHistoryGetByRequestIdRequestIdPath, 'post');
    if (params) {
      rb.path('requestId', params.requestId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<KeepingOtherRequestLogDto>>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-history-get-by-request-id/{requestId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestHistoryGetByRequestIdRequestId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestHistoryGetByRequestIdRequestId_Plain(params: {
    requestId: string;
  }): Observable<Array<KeepingOtherRequestLogDto>> {

    return this.postApiAppKeepingOtherRequestHistoryGetByRequestIdRequestId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<KeepingOtherRequestLogDto>>) => r.body as Array<KeepingOtherRequestLogDto>)
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-history-get-by-request-id/{requestId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherRequestHistoryGetByRequestIdRequestId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestHistoryGetByRequestIdRequestId_Json_Response(params: {
    requestId: string;
  }): Observable<THRMStrictHttpResponse<Array<KeepingOtherRequestLogDto>>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherRequestHistoryGetByRequestIdRequestIdPath, 'post');
    if (params) {
      rb.path('requestId', params.requestId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<KeepingOtherRequestLogDto>>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/request-history-get-by-request-id/{requestId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherRequestHistoryGetByRequestIdRequestId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppKeepingOtherRequestHistoryGetByRequestIdRequestId_Json(params: {
    requestId: string;
  }): Observable<Array<KeepingOtherRequestLogDto>> {

    return this.postApiAppKeepingOtherRequestHistoryGetByRequestIdRequestId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<KeepingOtherRequestLogDto>>) => r.body as Array<KeepingOtherRequestLogDto>)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherLeaderGetAllRequestKeepingOther
   */
  static readonly PostApiAppKeepingOtherLeaderGetAllRequestKeepingOtherPath = '/api/app/keeping-other/leader-get-all-request-keeping-other';

  /**
   * Link Api: /api/app/keeping-other/leader-get-all-request-keeping-other
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherLeaderGetAllRequestKeepingOther_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherLeaderGetAllRequestKeepingOther_Plain_Response(params?: {
    body?: KeepingOtherRequestLeaderGetListDto
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherLeaderGetAllRequestKeepingOtherPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/leader-get-all-request-keeping-other
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherLeaderGetAllRequestKeepingOther_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherLeaderGetAllRequestKeepingOther_Plain(params?: {
    body?: KeepingOtherRequestLeaderGetListDto
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.postApiAppKeepingOtherLeaderGetAllRequestKeepingOther_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/app/keeping-other/leader-get-all-request-keeping-other
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherLeaderGetAllRequestKeepingOther_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherLeaderGetAllRequestKeepingOther_Json_Response(params?: {
    body?: KeepingOtherRequestLeaderGetListDto
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherLeaderGetAllRequestKeepingOtherPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/leader-get-all-request-keeping-other
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherLeaderGetAllRequestKeepingOther_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherLeaderGetAllRequestKeepingOther_Json(params?: {
    body?: KeepingOtherRequestLeaderGetListDto
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.postApiAppKeepingOtherLeaderGetAllRequestKeepingOther_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postApiAppKeepingOtherHrGetAllRequestKeepingOther
   */
  static readonly PostApiAppKeepingOtherHrGetAllRequestKeepingOtherPath = '/api/app/keeping-other/hr-get-all-request-keeping-other';

  /**
   * Link Api: /api/app/keeping-other/hr-get-all-request-keeping-other
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherHrGetAllRequestKeepingOther_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherHrGetAllRequestKeepingOther_Plain_Response(params?: {
    body?: KeepingOtherRequestHrGetListDto
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherHrGetAllRequestKeepingOtherPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/hr-get-all-request-keeping-other
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherHrGetAllRequestKeepingOther_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherHrGetAllRequestKeepingOther_Plain(params?: {
    body?: KeepingOtherRequestHrGetListDto
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.postApiAppKeepingOtherHrGetAllRequestKeepingOther_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/app/keeping-other/hr-get-all-request-keeping-other
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppKeepingOtherHrGetAllRequestKeepingOther_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherHrGetAllRequestKeepingOther_Json_Response(params?: {
    body?: KeepingOtherRequestHrGetListDto
  }): Observable<THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, KeepingOtherService.PostApiAppKeepingOtherHrGetAllRequestKeepingOtherPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/keeping-other/hr-get-all-request-keeping-other
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppKeepingOtherHrGetAllRequestKeepingOther_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppKeepingOtherHrGetAllRequestKeepingOther_Json(params?: {
    body?: KeepingOtherRequestHrGetListDto
  }): Observable<KeepingOtherRequestDtoPagedResultDto> {

    return this.postApiAppKeepingOtherHrGetAllRequestKeepingOther_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<KeepingOtherRequestDtoPagedResultDto>) => r.body as KeepingOtherRequestDtoPagedResultDto)
    );
  }

}
