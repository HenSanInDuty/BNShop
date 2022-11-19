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
import { ShiftDto } from '../models/shift-dto';
import { TkRequestHistoryDtoPagedResultDto } from '../models/tk-request-history-dto-paged-result-dto';
import { TimeKeepingCaculateDto } from '../models/time-keeping-caculate-dto';
import { TimeKeepingDto } from '../models/time-keeping-dto';
import { TimeKeepingRequestAction } from '../models/time-keeping-request-action';
import { TimeKeepingRequestCreateDto } from '../models/time-keeping-request-create-dto';
import { TimeKeepingRequestDto } from '../models/time-keeping-request-dto';
import { TimeKeepingRequestDtoPagedResultDto } from '../models/time-keeping-request-dto-paged-result-dto';
import { TimeKeepingRequestKind } from '../models/time-keeping-request-kind';
import { TimeKeepingRequestLogDto } from '../models/time-keeping-request-log-dto';

@Injectable({
  providedIn: 'root',
})
export class TimeKeepingService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getTimeKeepingSuggestShift
   */
  static readonly GetTimeKeepingSuggestShiftPath = '/api/v1/time-keeping/suggest-shift';

  /**
   * Link Api: /api/v1/time-keeping/suggest-shift
   *
   * gợi ý danh sách ca làm việc tương ứng với dòng chấm công bị quên chấm.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingSuggestShift_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingSuggestShift_Plain_Response(params?: {
    WorkingDate?: string;
    UserId?: string;
  }): Observable<THRMStrictHttpResponse<Array<ShiftDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingSuggestShiftPath, 'get');
    if (params) {
      rb.query('WorkingDate', params.WorkingDate, {});
      rb.query('UserId', params.UserId, {});
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
   * Link Api: /api/v1/time-keeping/suggest-shift
   *
   * gợi ý danh sách ca làm việc tương ứng với dòng chấm công bị quên chấm.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingSuggestShift_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingSuggestShift_Plain(params?: {
    WorkingDate?: string;
    UserId?: string;
  }): Observable<Array<ShiftDto>> {

    return this.getTimeKeepingSuggestShift_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ShiftDto>>) => r.body as Array<ShiftDto>)
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/suggest-shift
   *
   * gợi ý danh sách ca làm việc tương ứng với dòng chấm công bị quên chấm.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingSuggestShift_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingSuggestShift_Json_Response(params?: {
    WorkingDate?: string;
    UserId?: string;
  }): Observable<THRMStrictHttpResponse<Array<ShiftDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingSuggestShiftPath, 'get');
    if (params) {
      rb.query('WorkingDate', params.WorkingDate, {});
      rb.query('UserId', params.UserId, {});
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
   * Link Api: /api/v1/time-keeping/suggest-shift
   *
   * gợi ý danh sách ca làm việc tương ứng với dòng chấm công bị quên chấm.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingSuggestShift_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingSuggestShift_Json(params?: {
    WorkingDate?: string;
    UserId?: string;
  }): Observable<Array<ShiftDto>> {

    return this.getTimeKeepingSuggestShift_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ShiftDto>>) => r.body as Array<ShiftDto>)
    );
  }

  /**
   * Path part for operation postTimeKeepingCaculate
   */
  static readonly PostTimeKeepingCaculatePath = '/api/v1/time-keeping/caculate';

  /**
   * Link Api: /api/v1/time-keeping/caculate
   *
   * chạy tính toán ngày công.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTimeKeepingCaculate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingCaculate_Response(params?: {
    body?: TimeKeepingCaculateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.PostTimeKeepingCaculatePath, 'post');
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
   * Link Api: /api/v1/time-keeping/caculate
   *
   * chạy tính toán ngày công.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTimeKeepingCaculate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingCaculate(params?: {
    body?: TimeKeepingCaculateDto
  }): Observable<void> {

    return this.postTimeKeepingCaculate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postTimeKeepingRequestCreate
   */
  static readonly PostTimeKeepingRequestCreatePath = '/api/v1/time-keeping/request-create';

  /**
   * Link Api: /api/v1/time-keeping/request-create
   *
   * gửi yêu cầu xác nhận ngày công.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTimeKeepingRequestCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingRequestCreate_Response(params?: {
    body?: TimeKeepingRequestCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.PostTimeKeepingRequestCreatePath, 'post');
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
   * Link Api: /api/v1/time-keeping/request-create
   *
   * gửi yêu cầu xác nhận ngày công.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTimeKeepingRequestCreate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingRequestCreate(params?: {
    body?: TimeKeepingRequestCreateDto
  }): Observable<void> {

    return this.postTimeKeepingRequestCreate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postTimeKeepingRequestCancel
   */
  static readonly PostTimeKeepingRequestCancelPath = '/api/v1/time-keeping/request-cancel';

  /**
   * Link Api: /api/v1/time-keeping/request-cancel
   *
   * hủy yêu cầu xác nhận ngày công.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTimeKeepingRequestCancel()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingRequestCancel_Response(params?: {
    body?: string
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.PostTimeKeepingRequestCancelPath, 'post');
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
   * Link Api: /api/v1/time-keeping/request-cancel
   *
   * hủy yêu cầu xác nhận ngày công.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTimeKeepingRequestCancel_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingRequestCancel(params?: {
    body?: string
  }): Observable<void> {

    return this.postTimeKeepingRequestCancel_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postTimeKeepingRequestLeaderApprove
   */
  static readonly PostTimeKeepingRequestLeaderApprovePath = '/api/v1/time-keeping/request-leader-approve';

  /**
   * Link Api: /api/v1/time-keeping/request-leader-approve
   *
   * leader đồng ý xác nhận ngày công từ nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTimeKeepingRequestLeaderApprove()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingRequestLeaderApprove_Response(params?: {
    body?: string
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.PostTimeKeepingRequestLeaderApprovePath, 'post');
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
   * Link Api: /api/v1/time-keeping/request-leader-approve
   *
   * leader đồng ý xác nhận ngày công từ nhân viên.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTimeKeepingRequestLeaderApprove_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingRequestLeaderApprove(params?: {
    body?: string
  }): Observable<void> {

    return this.postTimeKeepingRequestLeaderApprove_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postTimeKeepingRequestLeaderReject
   */
  static readonly PostTimeKeepingRequestLeaderRejectPath = '/api/v1/time-keeping/request-leader-reject';

  /**
   * Link Api: /api/v1/time-keeping/request-leader-reject
   *
   * leader từ chối yêu cầu xác nhận ngày công từ nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTimeKeepingRequestLeaderReject()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingRequestLeaderReject_Response(params?: {
    body?: string
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.PostTimeKeepingRequestLeaderRejectPath, 'post');
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
   * Link Api: /api/v1/time-keeping/request-leader-reject
   *
   * leader từ chối yêu cầu xác nhận ngày công từ nhân viên.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTimeKeepingRequestLeaderReject_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingRequestLeaderReject(params?: {
    body?: string
  }): Observable<void> {

    return this.postTimeKeepingRequestLeaderReject_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postTimeKeepingRequestHrApprove
   */
  static readonly PostTimeKeepingRequestHrApprovePath = '/api/v1/time-keeping/request-hr-approve';

  /**
   * Link Api: /api/v1/time-keeping/request-hr-approve
   *
   * hr đồng ý yêu cầu xác nhận ngày công từ leader.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTimeKeepingRequestHrApprove()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingRequestHrApprove_Response(params?: {
    body?: string
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.PostTimeKeepingRequestHrApprovePath, 'post');
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
   * Link Api: /api/v1/time-keeping/request-hr-approve
   *
   * hr đồng ý yêu cầu xác nhận ngày công từ leader.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTimeKeepingRequestHrApprove_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingRequestHrApprove(params?: {
    body?: string
  }): Observable<void> {

    return this.postTimeKeepingRequestHrApprove_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postTimeKeepingRequestHrReject
   */
  static readonly PostTimeKeepingRequestHrRejectPath = '/api/v1/time-keeping/request-hr-reject';

  /**
   * Link Api: /api/v1/time-keeping/request-hr-reject
   *
   * hr từ chối yêu cầu xác nhận ngày công.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTimeKeepingRequestHrReject()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingRequestHrReject_Response(params?: {
    body?: string
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.PostTimeKeepingRequestHrRejectPath, 'post');
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
   * Link Api: /api/v1/time-keeping/request-hr-reject
   *
   * hr từ chối yêu cầu xác nhận ngày công.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTimeKeepingRequestHrReject_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingRequestHrReject(params?: {
    body?: string
  }): Observable<void> {

    return this.postTimeKeepingRequestHrReject_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getTimeKeepingRequestHr
   */
  static readonly GetTimeKeepingRequestHrPath = '/api/v1/time-keeping/request-hr';

  /**
   * Link Api: /api/v1/time-keeping/request-hr
   *
   * hr lây danh sách các yêu cầu quên chấm công (danh sách chưa approve).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingRequestHr_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestHr_Plain_Response(params?: {
    Year?: number;
    Month?: number;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingRequestHrPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('DepartmentIds', params.DepartmentIds, {});
      rb.query('BranchIds', params.BranchIds, {});
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
        return r as THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-hr
   *
   * hr lây danh sách các yêu cầu quên chấm công (danh sách chưa approve).
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingRequestHr_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestHr_Plain(params?: {
    Year?: number;
    Month?: number;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TimeKeepingRequestDtoPagedResultDto> {

    return this.getTimeKeepingRequestHr_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>) => r.body as TimeKeepingRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-hr
   *
   * hr lây danh sách các yêu cầu quên chấm công (danh sách chưa approve).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingRequestHr_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestHr_Json_Response(params?: {
    Year?: number;
    Month?: number;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingRequestHrPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('DepartmentIds', params.DepartmentIds, {});
      rb.query('BranchIds', params.BranchIds, {});
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
        return r as THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-hr
   *
   * hr lây danh sách các yêu cầu quên chấm công (danh sách chưa approve).
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingRequestHr_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestHr_Json(params?: {
    Year?: number;
    Month?: number;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TimeKeepingRequestDtoPagedResultDto> {

    return this.getTimeKeepingRequestHr_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>) => r.body as TimeKeepingRequestDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getTimeKeepingRequestHrHistory
   */
  static readonly GetTimeKeepingRequestHrHistoryPath = '/api/v1/time-keeping/request-hr-history';

  /**
   * Link Api: /api/v1/time-keeping/request-hr-history
   *
   * lấy danh sách các yêu cầu  lịch sử đã thực hiện bởi  hr.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingRequestHrHistory_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestHrHistory_Plain_Response(params?: {
    Year?: number;
    Month?: number;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TkRequestHistoryDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingRequestHrHistoryPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('DepartmentIds', params.DepartmentIds, {});
      rb.query('BranchIds', params.BranchIds, {});
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
        return r as THRMStrictHttpResponse<TkRequestHistoryDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-hr-history
   *
   * lấy danh sách các yêu cầu  lịch sử đã thực hiện bởi  hr.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingRequestHrHistory_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestHrHistory_Plain(params?: {
    Year?: number;
    Month?: number;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TkRequestHistoryDtoPagedResultDto> {

    return this.getTimeKeepingRequestHrHistory_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TkRequestHistoryDtoPagedResultDto>) => r.body as TkRequestHistoryDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-hr-history
   *
   * lấy danh sách các yêu cầu  lịch sử đã thực hiện bởi  hr.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingRequestHrHistory_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestHrHistory_Json_Response(params?: {
    Year?: number;
    Month?: number;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TkRequestHistoryDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingRequestHrHistoryPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('DepartmentIds', params.DepartmentIds, {});
      rb.query('BranchIds', params.BranchIds, {});
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
        return r as THRMStrictHttpResponse<TkRequestHistoryDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-hr-history
   *
   * lấy danh sách các yêu cầu  lịch sử đã thực hiện bởi  hr.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingRequestHrHistory_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestHrHistory_Json(params?: {
    Year?: number;
    Month?: number;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TkRequestHistoryDtoPagedResultDto> {

    return this.getTimeKeepingRequestHrHistory_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TkRequestHistoryDtoPagedResultDto>) => r.body as TkRequestHistoryDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getTimeKeepingRequestLeader
   */
  static readonly GetTimeKeepingRequestLeaderPath = '/api/v1/time-keeping/request-leader';

  /**
   * Link Api: /api/v1/time-keeping/request-leader
   *
   * leader lây danh sách các yêu cầu quên chấm công (danh sách chưa approve).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingRequestLeader_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestLeader_Plain_Response(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingRequestLeaderPath, 'get');
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
        return r as THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-leader
   *
   * leader lây danh sách các yêu cầu quên chấm công (danh sách chưa approve).
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingRequestLeader_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestLeader_Plain(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TimeKeepingRequestDtoPagedResultDto> {

    return this.getTimeKeepingRequestLeader_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>) => r.body as TimeKeepingRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-leader
   *
   * leader lây danh sách các yêu cầu quên chấm công (danh sách chưa approve).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingRequestLeader_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestLeader_Json_Response(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingRequestLeaderPath, 'get');
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
        return r as THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-leader
   *
   * leader lây danh sách các yêu cầu quên chấm công (danh sách chưa approve).
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingRequestLeader_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestLeader_Json(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TimeKeepingRequestDtoPagedResultDto> {

    return this.getTimeKeepingRequestLeader_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>) => r.body as TimeKeepingRequestDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getTimeKeepingRequestLeaderHistory
   */
  static readonly GetTimeKeepingRequestLeaderHistoryPath = '/api/v1/time-keeping/request-leader-history';

  /**
   * Link Api: /api/v1/time-keeping/request-leader-history
   *
   * lấy danh sách các yêu cầu  lịch sử đã thực hiện bởi   leader.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingRequestLeaderHistory_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestLeaderHistory_Plain_Response(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TkRequestHistoryDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingRequestLeaderHistoryPath, 'get');
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
        return r as THRMStrictHttpResponse<TkRequestHistoryDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-leader-history
   *
   * lấy danh sách các yêu cầu  lịch sử đã thực hiện bởi   leader.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingRequestLeaderHistory_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestLeaderHistory_Plain(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TkRequestHistoryDtoPagedResultDto> {

    return this.getTimeKeepingRequestLeaderHistory_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TkRequestHistoryDtoPagedResultDto>) => r.body as TkRequestHistoryDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-leader-history
   *
   * lấy danh sách các yêu cầu  lịch sử đã thực hiện bởi   leader.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingRequestLeaderHistory_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestLeaderHistory_Json_Response(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TkRequestHistoryDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingRequestLeaderHistoryPath, 'get');
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
        return r as THRMStrictHttpResponse<TkRequestHistoryDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-leader-history
   *
   * lấy danh sách các yêu cầu  lịch sử đã thực hiện bởi   leader.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingRequestLeaderHistory_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestLeaderHistory_Json(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TkRequestHistoryDtoPagedResultDto> {

    return this.getTimeKeepingRequestLeaderHistory_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TkRequestHistoryDtoPagedResultDto>) => r.body as TkRequestHistoryDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getTimeKeepingRequestUserByWorkingdate
   */
  static readonly GetTimeKeepingRequestUserByWorkingdatePath = '/api/v1/time-keeping/request-user-by-workingdate';

  /**
   * Link Api: /api/v1/time-keeping/request-user-by-workingdate
   *
   * lấy danh sách các yêu cầu xác nhận ngày công của một ngày làm việc cụ thể.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingRequestUserByWorkingdate_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestUserByWorkingdate_Plain_Response(params?: {
    workingDate?: string;
  }): Observable<THRMStrictHttpResponse<Array<TimeKeepingRequestDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingRequestUserByWorkingdatePath, 'get');
    if (params) {
      rb.query('workingDate', params.workingDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<TimeKeepingRequestDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-user-by-workingdate
   *
   * lấy danh sách các yêu cầu xác nhận ngày công của một ngày làm việc cụ thể.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingRequestUserByWorkingdate_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestUserByWorkingdate_Plain(params?: {
    workingDate?: string;
  }): Observable<Array<TimeKeepingRequestDto>> {

    return this.getTimeKeepingRequestUserByWorkingdate_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<TimeKeepingRequestDto>>) => r.body as Array<TimeKeepingRequestDto>)
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-user-by-workingdate
   *
   * lấy danh sách các yêu cầu xác nhận ngày công của một ngày làm việc cụ thể.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingRequestUserByWorkingdate_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestUserByWorkingdate_Json_Response(params?: {
    workingDate?: string;
  }): Observable<THRMStrictHttpResponse<Array<TimeKeepingRequestDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingRequestUserByWorkingdatePath, 'get');
    if (params) {
      rb.query('workingDate', params.workingDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<TimeKeepingRequestDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-user-by-workingdate
   *
   * lấy danh sách các yêu cầu xác nhận ngày công của một ngày làm việc cụ thể.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingRequestUserByWorkingdate_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestUserByWorkingdate_Json(params?: {
    workingDate?: string;
  }): Observable<Array<TimeKeepingRequestDto>> {

    return this.getTimeKeepingRequestUserByWorkingdate_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<TimeKeepingRequestDto>>) => r.body as Array<TimeKeepingRequestDto>)
    );
  }

  /**
   * Path part for operation postTimeKeepingRequestUndo
   */
  static readonly PostTimeKeepingRequestUndoPath = '/api/v1/time-keeping/request-undo';

  /**
   * Link Api: /api/v1/time-keeping/request-undo
   *
   * undo một yêu cầu.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTimeKeepingRequestUndo()` instead.
   *
   * This method doesn't expect any request body.
   */
  postTimeKeepingRequestUndo_Response(params?: {
    id?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.PostTimeKeepingRequestUndoPath, 'post');
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
   * Link Api: /api/v1/time-keeping/request-undo
   *
   * undo một yêu cầu.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTimeKeepingRequestUndo_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postTimeKeepingRequestUndo(params?: {
    id?: string;
  }): Observable<void> {

    return this.postTimeKeepingRequestUndo_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getTimeKeepingGetOfCurrentUserByDate
   */
  static readonly GetTimeKeepingGetOfCurrentUserByDatePath = '/api/v1/time-keeping/get-of-current-user-by-date';

  /**
   * Link Api: /api/v1/time-keeping/get-of-current-user-by-date
   *
   * lay thoi gian in/out cua user theo ngay.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingGetOfCurrentUserByDate_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingGetOfCurrentUserByDate_Plain_Response(params?: {
    date?: string;
  }): Observable<THRMStrictHttpResponse<TimeKeepingDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingGetOfCurrentUserByDatePath, 'get');
    if (params) {
      rb.query('date', params.date, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<TimeKeepingDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/get-of-current-user-by-date
   *
   * lay thoi gian in/out cua user theo ngay.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingGetOfCurrentUserByDate_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingGetOfCurrentUserByDate_Plain(params?: {
    date?: string;
  }): Observable<TimeKeepingDto> {

    return this.getTimeKeepingGetOfCurrentUserByDate_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TimeKeepingDto>) => r.body as TimeKeepingDto)
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/get-of-current-user-by-date
   *
   * lay thoi gian in/out cua user theo ngay.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingGetOfCurrentUserByDate_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingGetOfCurrentUserByDate_Json_Response(params?: {
    date?: string;
  }): Observable<THRMStrictHttpResponse<TimeKeepingDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingGetOfCurrentUserByDatePath, 'get');
    if (params) {
      rb.query('date', params.date, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<TimeKeepingDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/get-of-current-user-by-date
   *
   * lay thoi gian in/out cua user theo ngay.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingGetOfCurrentUserByDate_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingGetOfCurrentUserByDate_Json(params?: {
    date?: string;
  }): Observable<TimeKeepingDto> {

    return this.getTimeKeepingGetOfCurrentUserByDate_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TimeKeepingDto>) => r.body as TimeKeepingDto)
    );
  }

  /**
   * Path part for operation postTimeKeepingLeaderApproveRejectRequestMany
   */
  static readonly PostTimeKeepingLeaderApproveRejectRequestManyPath = '/api/v1/time-keeping/leader-approve-reject-request-many';

  /**
   * Link Api: /api/v1/time-keeping/leader-approve-reject-request-many
   *
   * leader approve or reject many time keeping request.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTimeKeepingLeaderApproveRejectRequestMany()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingLeaderApproveRejectRequestMany_Response(params?: {

    /**
     * list request id and acton to do : approve = 0, reject = 1, delete = 2
     */
    body?: TimeKeepingRequestAction
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.PostTimeKeepingLeaderApproveRejectRequestManyPath, 'post');
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
   * Link Api: /api/v1/time-keeping/leader-approve-reject-request-many
   *
   * leader approve or reject many time keeping request.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTimeKeepingLeaderApproveRejectRequestMany_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingLeaderApproveRejectRequestMany(params?: {

    /**
     * list request id and acton to do : approve = 0, reject = 1, delete = 2
     */
    body?: TimeKeepingRequestAction
  }): Observable<void> {

    return this.postTimeKeepingLeaderApproveRejectRequestMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postTimeKeepingHrApproveRejectRequestMany
   */
  static readonly PostTimeKeepingHrApproveRejectRequestManyPath = '/api/v1/time-keeping/hr-approve-reject-request-many';

  /**
   * Link Api: /api/v1/time-keeping/hr-approve-reject-request-many
   *
   * hr approve or reject many time keeping request.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTimeKeepingHrApproveRejectRequestMany()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingHrApproveRejectRequestMany_Response(params?: {

    /**
     * list request id and acton to do : approve = 0, reject = 1, delete = 2
     */
    body?: TimeKeepingRequestAction
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.PostTimeKeepingHrApproveRejectRequestManyPath, 'post');
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
   * Link Api: /api/v1/time-keeping/hr-approve-reject-request-many
   *
   * hr approve or reject many time keeping request.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTimeKeepingHrApproveRejectRequestMany_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTimeKeepingHrApproveRejectRequestMany(params?: {

    /**
     * list request id and acton to do : approve = 0, reject = 1, delete = 2
     */
    body?: TimeKeepingRequestAction
  }): Observable<void> {

    return this.postTimeKeepingHrApproveRejectRequestMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getTimeKeepingRequestHistory
   */
  static readonly GetTimeKeepingRequestHistoryPath = '/api/v1/time-keeping/request-history';

  /**
   * Link Api: /api/v1/time-keeping/request-history
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingRequestHistory_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestHistory_Plain_Response(params?: {
    requestId?: string;
  }): Observable<THRMStrictHttpResponse<Array<TimeKeepingRequestLogDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingRequestHistoryPath, 'get');
    if (params) {
      rb.query('requestId', params.requestId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<TimeKeepingRequestLogDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-history
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingRequestHistory_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestHistory_Plain(params?: {
    requestId?: string;
  }): Observable<Array<TimeKeepingRequestLogDto>> {

    return this.getTimeKeepingRequestHistory_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<TimeKeepingRequestLogDto>>) => r.body as Array<TimeKeepingRequestLogDto>)
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-history
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingRequestHistory_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestHistory_Json_Response(params?: {
    requestId?: string;
  }): Observable<THRMStrictHttpResponse<Array<TimeKeepingRequestLogDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingRequestHistoryPath, 'get');
    if (params) {
      rb.query('requestId', params.requestId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<TimeKeepingRequestLogDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/request-history
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingRequestHistory_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingRequestHistory_Json(params?: {
    requestId?: string;
  }): Observable<Array<TimeKeepingRequestLogDto>> {

    return this.getTimeKeepingRequestHistory_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<TimeKeepingRequestLogDto>>) => r.body as Array<TimeKeepingRequestLogDto>)
    );
  }

  /**
   * Path part for operation getTimeKeepingLeaderGetAllRequest
   */
  static readonly GetTimeKeepingLeaderGetAllRequestPath = '/api/v1/time-keeping/leader-get-all-request';

  /**
   * Link Api: /api/v1/time-keeping/leader-get-all-request
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingLeaderGetAllRequest_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingLeaderGetAllRequest_Plain_Response(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingLeaderGetAllRequestPath, 'get');
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
        return r as THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/leader-get-all-request
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingLeaderGetAllRequest_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingLeaderGetAllRequest_Plain(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TimeKeepingRequestDtoPagedResultDto> {

    return this.getTimeKeepingLeaderGetAllRequest_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>) => r.body as TimeKeepingRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/leader-get-all-request
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingLeaderGetAllRequest_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingLeaderGetAllRequest_Json_Response(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingLeaderGetAllRequestPath, 'get');
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
        return r as THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/leader-get-all-request
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingLeaderGetAllRequest_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingLeaderGetAllRequest_Json(params?: {
    Year?: number;
    Month?: number;
    Teams?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TimeKeepingRequestDtoPagedResultDto> {

    return this.getTimeKeepingLeaderGetAllRequest_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>) => r.body as TimeKeepingRequestDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getTimeKeepingHrGetAllRequest
   */
  static readonly GetTimeKeepingHrGetAllRequestPath = '/api/v1/time-keeping/hr-get-all-request';

  /**
   * Link Api: /api/v1/time-keeping/hr-get-all-request
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingHrGetAllRequest_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingHrGetAllRequest_Plain_Response(params?: {
    Year?: number;
    Month?: number;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingHrGetAllRequestPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('DepartmentIds', params.DepartmentIds, {});
      rb.query('BranchIds', params.BranchIds, {});
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
        return r as THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/hr-get-all-request
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingHrGetAllRequest_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingHrGetAllRequest_Plain(params?: {
    Year?: number;
    Month?: number;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TimeKeepingRequestDtoPagedResultDto> {

    return this.getTimeKeepingHrGetAllRequest_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>) => r.body as TimeKeepingRequestDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/hr-get-all-request
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTimeKeepingHrGetAllRequest_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingHrGetAllRequest_Json_Response(params?: {
    Year?: number;
    Month?: number;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TimeKeepingService.GetTimeKeepingHrGetAllRequestPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('DepartmentIds', params.DepartmentIds, {});
      rb.query('BranchIds', params.BranchIds, {});
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
        return r as THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/time-keeping/hr-get-all-request
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTimeKeepingHrGetAllRequest_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTimeKeepingHrGetAllRequest_Json(params?: {
    Year?: number;
    Month?: number;
    DepartmentIds?: Array<string>;
    BranchIds?: Array<string>;
    Kinds?: Array<TimeKeepingRequestKind>;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TimeKeepingRequestDtoPagedResultDto> {

    return this.getTimeKeepingHrGetAllRequest_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TimeKeepingRequestDtoPagedResultDto>) => r.body as TimeKeepingRequestDtoPagedResultDto)
    );
  }

}
