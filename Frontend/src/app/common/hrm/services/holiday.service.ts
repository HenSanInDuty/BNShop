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
import { HolidayCreateDto } from '../models/holiday-create-dto';
import { HolidayDtoPagedResultDto } from '../models/holiday-dto-paged-result-dto';
import { HolidayUpdateDto } from '../models/holiday-update-dto';

@Injectable({
  providedIn: 'root',
})
export class HolidayService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getHoliday
   */
  static readonly GetHolidayPath = '/api/v1/holiday';

  /**
   * Link Api: /api/v1/holiday
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getHoliday_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHoliday_Plain_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<HolidayDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.GetHolidayPath, 'get');
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
        return r as THRMStrictHttpResponse<HolidayDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/holiday
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getHoliday_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHoliday_Plain(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<HolidayDtoPagedResultDto> {

    return this.getHoliday_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<HolidayDtoPagedResultDto>) => r.body as HolidayDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/holiday
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getHoliday_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHoliday_Json_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<HolidayDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.GetHolidayPath, 'get');
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
        return r as THRMStrictHttpResponse<HolidayDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/holiday
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getHoliday_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getHoliday_Json(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<HolidayDtoPagedResultDto> {

    return this.getHoliday_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<HolidayDtoPagedResultDto>) => r.body as HolidayDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postHoliday
   */
  static readonly PostHolidayPath = '/api/v1/holiday';

  /**
   * Link Api: /api/v1/holiday
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postHoliday()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postHoliday_Response(params?: {
    body?: HolidayCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.PostHolidayPath, 'post');
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
   * Link Api: /api/v1/holiday
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postHoliday_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postHoliday(params?: {
    body?: HolidayCreateDto
  }): Observable<void> {

    return this.postHoliday_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putHolidayUpdate
   */
  static readonly PutHolidayUpdatePath = '/api/v1/holiday/update';

  /**
   * Link Api: /api/v1/holiday/update
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putHolidayUpdate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putHolidayUpdate_Response(params?: {
    id?: string;
    body?: HolidayUpdateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.PutHolidayUpdatePath, 'put');
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
   * Link Api: /api/v1/holiday/update
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putHolidayUpdate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putHolidayUpdate(params?: {
    id?: string;
    body?: HolidayUpdateDto
  }): Observable<void> {

    return this.putHolidayUpdate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteHolidayId
   */
  static readonly DeleteHolidayIdPath = '/api/v1/holiday/{id}';

  /**
   * Link Api: /api/v1/holiday/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteHolidayId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteHolidayId_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.DeleteHolidayIdPath, 'delete');
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
   * Link Api: /api/v1/holiday/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteHolidayId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteHolidayId(params: {
    id: string;
  }): Observable<void> {

    return this.deleteHolidayId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteHolidayDeleteMany
   */
  static readonly DeleteHolidayDeleteManyPath = '/api/v1/holiday/delete-many';

  /**
   * Link Api: /api/v1/holiday/delete-many
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteHolidayDeleteMany()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteHolidayDeleteMany_Response(params?: {
    listId?: Array<string>;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, HolidayService.DeleteHolidayDeleteManyPath, 'delete');
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
   * Link Api: /api/v1/holiday/delete-many
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteHolidayDeleteMany_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteHolidayDeleteMany(params?: {
    listId?: Array<string>;
  }): Observable<void> {

    return this.deleteHolidayDeleteMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
