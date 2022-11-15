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
import { AttachmentRDto } from '../models/attachment-r-dto';
import { IoType } from '../models/io-type';
import { ResourceDto } from '../models/resource-dto';
import { ResourceTicketCheckBusyTimeAndSuggestDto } from '../models/resource-ticket-check-busy-time-and-suggest-dto';
import { ResourceTicketCreateDto } from '../models/resource-ticket-create-dto';
import { ResourceTicketDto } from '../models/resource-ticket-dto';
import { ResourceTicketDtoPagedResultDto } from '../models/resource-ticket-dto-paged-result-dto';
import { ResourceTicketFromToTimeDto } from '../models/resource-ticket-from-to-time-dto';
import { ResourceTicketParamCheckBusyTimeAndSuggestDto } from '../models/resource-ticket-param-check-busy-time-and-suggest-dto';
import { ResourceTicketParamSuggestResourceByTime } from '../models/resource-ticket-param-suggest-resource-by-time';
import { ResourceTicketParamSuggestTimeByDateAndResourceId } from '../models/resource-ticket-param-suggest-time-by-date-and-resource-id';
import { ResourceTicketStatus } from '../models/resource-ticket-status';
import { ResourceTicketSuggestTimeDto } from '../models/resource-ticket-suggest-time-dto';
import { ResourceTicketUpdateDto } from '../models/resource-ticket-update-dto';
import { ResourceTicketUpdateResourceId } from '../models/resource-ticket-update-resource-id';
import { UserResourceTicketDtoPagedResultDto } from '../models/user-resource-ticket-dto-paged-result-dto';

@Injectable({
  providedIn: 'root',
})
export class ResourceTicketService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation postResourceTicket
   */
  static readonly PostResourceTicketPath = '/api/v1/resource-ticket';

  /**
   * Link Api: /api/v1/resource-ticket
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResourceTicket_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicket_Plain_Response(params?: {
    body?: ResourceTicketCreateDto
  }): Observable<THRMStrictHttpResponse<ResourceTicketDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PostResourceTicketPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTicketDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResourceTicket_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicket_Plain(params?: {
    body?: ResourceTicketCreateDto
  }): Observable<ResourceTicketDto> {

    return this.postResourceTicket_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTicketDto>) => r.body as ResourceTicketDto)
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResourceTicket_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicket_Json_Response(params?: {
    body?: ResourceTicketCreateDto
  }): Observable<THRMStrictHttpResponse<ResourceTicketDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PostResourceTicketPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTicketDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResourceTicket_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicket_Json(params?: {
    body?: ResourceTicketCreateDto
  }): Observable<ResourceTicketDto> {

    return this.postResourceTicket_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTicketDto>) => r.body as ResourceTicketDto)
    );
  }

  /**
   * Path part for operation deleteResourceTicket
   */
  static readonly DeleteResourceTicketPath = '/api/v1/resource-ticket';

  /**
   * Link Api: /api/v1/resource-ticket
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteResourceTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteResourceTicket_Response(params?: {
    id?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.DeleteResourceTicketPath, 'delete');
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
   * Link Api: /api/v1/resource-ticket
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteResourceTicket_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteResourceTicket(params?: {
    id?: string;
  }): Observable<void> {

    return this.deleteResourceTicket_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getResourceTicketAll
   */
  static readonly GetResourceTicketAllPath = '/api/v1/resource-ticket/all';

  /**
   * Link Api: /api/v1/resource-ticket/all
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceTicketAll_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketAll_Plain_Response(params: {
    From: string;
    To: string;
    ResourceIds: Array<string>;
  }): Observable<THRMStrictHttpResponse<Array<ResourceTicketDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.GetResourceTicketAllPath, 'get');
    if (params) {
      rb.query('From', params.From, {});
      rb.query('To', params.To, {});
      rb.query('ResourceIds', params.ResourceIds, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<ResourceTicketDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/all
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceTicketAll_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketAll_Plain(params: {
    From: string;
    To: string;
    ResourceIds: Array<string>;
  }): Observable<Array<ResourceTicketDto>> {

    return this.getResourceTicketAll_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ResourceTicketDto>>) => r.body as Array<ResourceTicketDto>)
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/all
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceTicketAll_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketAll_Json_Response(params: {
    From: string;
    To: string;
    ResourceIds: Array<string>;
  }): Observable<THRMStrictHttpResponse<Array<ResourceTicketDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.GetResourceTicketAllPath, 'get');
    if (params) {
      rb.query('From', params.From, {});
      rb.query('To', params.To, {});
      rb.query('ResourceIds', params.ResourceIds, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<ResourceTicketDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/all
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceTicketAll_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketAll_Json(params: {
    From: string;
    To: string;
    ResourceIds: Array<string>;
  }): Observable<Array<ResourceTicketDto>> {

    return this.getResourceTicketAll_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ResourceTicketDto>>) => r.body as Array<ResourceTicketDto>)
    );
  }

  /**
   * Path part for operation getResourceTicketId
   */
  static readonly GetResourceTicketIdPath = '/api/v1/resource-ticket/{id}';

  /**
   * Link Api: /api/v1/resource-ticket/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceTicketId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketId_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<ResourceTicketDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.GetResourceTicketIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTicketDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceTicketId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketId_Plain(params: {
    id: string;
  }): Observable<ResourceTicketDto> {

    return this.getResourceTicketId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTicketDto>) => r.body as ResourceTicketDto)
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceTicketId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketId_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<ResourceTicketDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.GetResourceTicketIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTicketDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceTicketId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketId_Json(params: {
    id: string;
  }): Observable<ResourceTicketDto> {

    return this.getResourceTicketId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTicketDto>) => r.body as ResourceTicketDto)
    );
  }

  /**
   * Path part for operation putResourceTicketId
   */
  static readonly PutResourceTicketIdPath = '/api/v1/resource-ticket/{id}';

  /**
   * Link Api: /api/v1/resource-ticket/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putResourceTicketId()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceTicketId_Response(params: {
    id: string;
    body?: ResourceTicketUpdateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PutResourceTicketIdPath, 'put');
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
   * Link Api: /api/v1/resource-ticket/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putResourceTicketId_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceTicketId(params: {
    id: string;
    body?: ResourceTicketUpdateDto
  }): Observable<void> {

    return this.putResourceTicketId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putResourceTicketChangeResource
   */
  static readonly PutResourceTicketChangeResourcePath = '/api/v1/resource-ticket/change-resource';

  /**
   * Link Api: /api/v1/resource-ticket/change-resource
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putResourceTicketChangeResource()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceTicketChangeResource_Response(params?: {
    id?: string;
    body?: ResourceTicketUpdateResourceId
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PutResourceTicketChangeResourcePath, 'put');
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
   * Link Api: /api/v1/resource-ticket/change-resource
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putResourceTicketChangeResource_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceTicketChangeResource(params?: {
    id?: string;
    body?: ResourceTicketUpdateResourceId
  }): Observable<void> {

    return this.putResourceTicketChangeResource_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putResourceTicketCheckInOut
   */
  static readonly PutResourceTicketCheckInOutPath = '/api/v1/resource-ticket/check-in-out';

  /**
   * Link Api: /api/v1/resource-ticket/check-in-out
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putResourceTicketCheckInOut()` instead.
   *
   * This method doesn't expect any request body.
   */
  putResourceTicketCheckInOut_Response(params?: {
    id?: string;
    inOutType?: IoType;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PutResourceTicketCheckInOutPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('inOutType', params.inOutType, {});
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
   * Link Api: /api/v1/resource-ticket/check-in-out
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putResourceTicketCheckInOut_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  putResourceTicketCheckInOut(params?: {
    id?: string;
    inOutType?: IoType;
  }): Observable<void> {

    return this.putResourceTicketCheckInOut_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putResourceTicketCancelTicket
   */
  static readonly PutResourceTicketCancelTicketPath = '/api/v1/resource-ticket/cancel-ticket';

  /**
   * Link Api: /api/v1/resource-ticket/cancel-ticket
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putResourceTicketCancelTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  putResourceTicketCancelTicket_Response(params?: {
    id?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PutResourceTicketCancelTicketPath, 'put');
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
   * Link Api: /api/v1/resource-ticket/cancel-ticket
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putResourceTicketCancelTicket_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  putResourceTicketCancelTicket(params?: {
    id?: string;
  }): Observable<void> {

    return this.putResourceTicketCancelTicket_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getResourceTicketGetByUser
   */
  static readonly GetResourceTicketGetByUserPath = '/api/v1/resource-ticket/get-by-user';

  /**
   * Link Api: /api/v1/resource-ticket/get-by-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceTicketGetByUser_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketGetByUser_Plain_Response(params?: {
    from?: string;
    to?: string;
    maxResultCount?: number;
    skipCount?: number;
    ticketStatus?: ResourceTicketStatus;
  }): Observable<THRMStrictHttpResponse<UserResourceTicketDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.GetResourceTicketGetByUserPath, 'get');
    if (params) {
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
      rb.query('maxResultCount', params.maxResultCount, {});
      rb.query('skipCount', params.skipCount, {});
      rb.query('ticketStatus', params.ticketStatus, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<UserResourceTicketDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/get-by-user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceTicketGetByUser_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketGetByUser_Plain(params?: {
    from?: string;
    to?: string;
    maxResultCount?: number;
    skipCount?: number;
    ticketStatus?: ResourceTicketStatus;
  }): Observable<UserResourceTicketDtoPagedResultDto> {

    return this.getResourceTicketGetByUser_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<UserResourceTicketDtoPagedResultDto>) => r.body as UserResourceTicketDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/get-by-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceTicketGetByUser_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketGetByUser_Json_Response(params?: {
    from?: string;
    to?: string;
    maxResultCount?: number;
    skipCount?: number;
    ticketStatus?: ResourceTicketStatus;
  }): Observable<THRMStrictHttpResponse<UserResourceTicketDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.GetResourceTicketGetByUserPath, 'get');
    if (params) {
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
      rb.query('maxResultCount', params.maxResultCount, {});
      rb.query('skipCount', params.skipCount, {});
      rb.query('ticketStatus', params.ticketStatus, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<UserResourceTicketDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/get-by-user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceTicketGetByUser_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketGetByUser_Json(params?: {
    from?: string;
    to?: string;
    maxResultCount?: number;
    skipCount?: number;
    ticketStatus?: ResourceTicketStatus;
  }): Observable<UserResourceTicketDtoPagedResultDto> {

    return this.getResourceTicketGetByUser_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<UserResourceTicketDtoPagedResultDto>) => r.body as UserResourceTicketDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getResourceTicketGetForUserParticipant
   */
  static readonly GetResourceTicketGetForUserParticipantPath = '/api/v1/resource-ticket/get-for-user-participant';

  /**
   * Link Api: /api/v1/resource-ticket/get-for-user-participant
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceTicketGetForUserParticipant_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketGetForUserParticipant_Plain_Response(params?: {
    from?: string;
    to?: string;
    maxResultCount?: number;
    skipCount?: number;
    ticketStatus?: ResourceTicketStatus;
  }): Observable<THRMStrictHttpResponse<ResourceTicketDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.GetResourceTicketGetForUserParticipantPath, 'get');
    if (params) {
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
      rb.query('maxResultCount', params.maxResultCount, {});
      rb.query('skipCount', params.skipCount, {});
      rb.query('ticketStatus', params.ticketStatus, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTicketDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/get-for-user-participant
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceTicketGetForUserParticipant_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketGetForUserParticipant_Plain(params?: {
    from?: string;
    to?: string;
    maxResultCount?: number;
    skipCount?: number;
    ticketStatus?: ResourceTicketStatus;
  }): Observable<ResourceTicketDtoPagedResultDto> {

    return this.getResourceTicketGetForUserParticipant_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTicketDtoPagedResultDto>) => r.body as ResourceTicketDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/get-for-user-participant
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceTicketGetForUserParticipant_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketGetForUserParticipant_Json_Response(params?: {
    from?: string;
    to?: string;
    maxResultCount?: number;
    skipCount?: number;
    ticketStatus?: ResourceTicketStatus;
  }): Observable<THRMStrictHttpResponse<ResourceTicketDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.GetResourceTicketGetForUserParticipantPath, 'get');
    if (params) {
      rb.query('from', params.from, {});
      rb.query('to', params.to, {});
      rb.query('maxResultCount', params.maxResultCount, {});
      rb.query('skipCount', params.skipCount, {});
      rb.query('ticketStatus', params.ticketStatus, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTicketDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/get-for-user-participant
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceTicketGetForUserParticipant_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketGetForUserParticipant_Json(params?: {
    from?: string;
    to?: string;
    maxResultCount?: number;
    skipCount?: number;
    ticketStatus?: ResourceTicketStatus;
  }): Observable<ResourceTicketDtoPagedResultDto> {

    return this.getResourceTicketGetForUserParticipant_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTicketDtoPagedResultDto>) => r.body as ResourceTicketDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postResourceTicketCheckBusyTimeAndGetFreetime
   */
  static readonly PostResourceTicketCheckBusyTimeAndGetFreetimePath = '/api/v1/resource-ticket/check-busy-time-and-get-freetime';

  /**
   * Link Api: /api/v1/resource-ticket/check-busy-time-and-get-freetime
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResourceTicketCheckBusyTimeAndGetFreetime_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketCheckBusyTimeAndGetFreetime_Plain_Response(params?: {
    body?: ResourceTicketParamCheckBusyTimeAndSuggestDto
  }): Observable<THRMStrictHttpResponse<ResourceTicketCheckBusyTimeAndSuggestDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PostResourceTicketCheckBusyTimeAndGetFreetimePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTicketCheckBusyTimeAndSuggestDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/check-busy-time-and-get-freetime
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResourceTicketCheckBusyTimeAndGetFreetime_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketCheckBusyTimeAndGetFreetime_Plain(params?: {
    body?: ResourceTicketParamCheckBusyTimeAndSuggestDto
  }): Observable<ResourceTicketCheckBusyTimeAndSuggestDto> {

    return this.postResourceTicketCheckBusyTimeAndGetFreetime_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTicketCheckBusyTimeAndSuggestDto>) => r.body as ResourceTicketCheckBusyTimeAndSuggestDto)
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/check-busy-time-and-get-freetime
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResourceTicketCheckBusyTimeAndGetFreetime_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketCheckBusyTimeAndGetFreetime_Json_Response(params?: {
    body?: ResourceTicketParamCheckBusyTimeAndSuggestDto
  }): Observable<THRMStrictHttpResponse<ResourceTicketCheckBusyTimeAndSuggestDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PostResourceTicketCheckBusyTimeAndGetFreetimePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTicketCheckBusyTimeAndSuggestDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/check-busy-time-and-get-freetime
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResourceTicketCheckBusyTimeAndGetFreetime_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketCheckBusyTimeAndGetFreetime_Json(params?: {
    body?: ResourceTicketParamCheckBusyTimeAndSuggestDto
  }): Observable<ResourceTicketCheckBusyTimeAndSuggestDto> {

    return this.postResourceTicketCheckBusyTimeAndGetFreetime_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTicketCheckBusyTimeAndSuggestDto>) => r.body as ResourceTicketCheckBusyTimeAndSuggestDto)
    );
  }

  /**
   * Path part for operation postResourceTicketSuggestResourceByTime
   */
  static readonly PostResourceTicketSuggestResourceByTimePath = '/api/v1/resource-ticket/suggest-resource-by-time';

  /**
   * Link Api: /api/v1/resource-ticket/suggest-resource-by-time
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResourceTicketSuggestResourceByTime_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketSuggestResourceByTime_Plain_Response(params?: {
    body?: ResourceTicketParamSuggestResourceByTime
  }): Observable<THRMStrictHttpResponse<Array<ResourceDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PostResourceTicketSuggestResourceByTimePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<ResourceDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/suggest-resource-by-time
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResourceTicketSuggestResourceByTime_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketSuggestResourceByTime_Plain(params?: {
    body?: ResourceTicketParamSuggestResourceByTime
  }): Observable<Array<ResourceDto>> {

    return this.postResourceTicketSuggestResourceByTime_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ResourceDto>>) => r.body as Array<ResourceDto>)
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/suggest-resource-by-time
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResourceTicketSuggestResourceByTime_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketSuggestResourceByTime_Json_Response(params?: {
    body?: ResourceTicketParamSuggestResourceByTime
  }): Observable<THRMStrictHttpResponse<Array<ResourceDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PostResourceTicketSuggestResourceByTimePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<ResourceDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/suggest-resource-by-time
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResourceTicketSuggestResourceByTime_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketSuggestResourceByTime_Json(params?: {
    body?: ResourceTicketParamSuggestResourceByTime
  }): Observable<Array<ResourceDto>> {

    return this.postResourceTicketSuggestResourceByTime_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ResourceDto>>) => r.body as Array<ResourceDto>)
    );
  }

  /**
   * Path part for operation postResourceTicketSuggestTimeByDateAndResourceId
   */
  static readonly PostResourceTicketSuggestTimeByDateAndResourceIdPath = '/api/v1/resource-ticket/suggest-time-by-date-and-resourceId';

  /**
   * Link Api: /api/v1/resource-ticket/suggest-time-by-date-and-resourceId
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResourceTicketSuggestTimeByDateAndResourceId_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketSuggestTimeByDateAndResourceId_Plain_Response(params?: {
    body?: ResourceTicketParamSuggestTimeByDateAndResourceId
  }): Observable<THRMStrictHttpResponse<ResourceTicketSuggestTimeDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PostResourceTicketSuggestTimeByDateAndResourceIdPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTicketSuggestTimeDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/suggest-time-by-date-and-resourceId
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResourceTicketSuggestTimeByDateAndResourceId_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketSuggestTimeByDateAndResourceId_Plain(params?: {
    body?: ResourceTicketParamSuggestTimeByDateAndResourceId
  }): Observable<ResourceTicketSuggestTimeDto> {

    return this.postResourceTicketSuggestTimeByDateAndResourceId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTicketSuggestTimeDto>) => r.body as ResourceTicketSuggestTimeDto)
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/suggest-time-by-date-and-resourceId
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResourceTicketSuggestTimeByDateAndResourceId_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketSuggestTimeByDateAndResourceId_Json_Response(params?: {
    body?: ResourceTicketParamSuggestTimeByDateAndResourceId
  }): Observable<THRMStrictHttpResponse<ResourceTicketSuggestTimeDto>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PostResourceTicketSuggestTimeByDateAndResourceIdPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ResourceTicketSuggestTimeDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/suggest-time-by-date-and-resourceId
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResourceTicketSuggestTimeByDateAndResourceId_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketSuggestTimeByDateAndResourceId_Json(params?: {
    body?: ResourceTicketParamSuggestTimeByDateAndResourceId
  }): Observable<ResourceTicketSuggestTimeDto> {

    return this.postResourceTicketSuggestTimeByDateAndResourceId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ResourceTicketSuggestTimeDto>) => r.body as ResourceTicketSuggestTimeDto)
    );
  }

  /**
   * Path part for operation putResourceTicketUpdateMember
   */
  static readonly PutResourceTicketUpdateMemberPath = '/api/v1/resource-ticket/update-member';

  /**
   * Link Api: /api/v1/resource-ticket/update-member
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putResourceTicketUpdateMember()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceTicketUpdateMember_Response(params?: {
    resourceTicketId?: string;
    body?: Array<string>
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PutResourceTicketUpdateMemberPath, 'put');
    if (params) {
      rb.query('resourceTicketId', params.resourceTicketId, {});
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
   * Link Api: /api/v1/resource-ticket/update-member
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putResourceTicketUpdateMember_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putResourceTicketUpdateMember(params?: {
    resourceTicketId?: string;
    body?: Array<string>
  }): Observable<void> {

    return this.putResourceTicketUpdateMember_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putResourceTicketUserLeaveParticipant
   */
  static readonly PutResourceTicketUserLeaveParticipantPath = '/api/v1/resource-ticket/user-leave-participant';

  /**
   * Link Api: /api/v1/resource-ticket/user-leave-participant
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putResourceTicketUserLeaveParticipant()` instead.
   *
   * This method doesn't expect any request body.
   */
  putResourceTicketUserLeaveParticipant_Response(params?: {
    resourceTicketId?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PutResourceTicketUserLeaveParticipantPath, 'put');
    if (params) {
      rb.query('resourceTicketId', params.resourceTicketId, {});
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
   * Link Api: /api/v1/resource-ticket/user-leave-participant
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putResourceTicketUserLeaveParticipant_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  putResourceTicketUserLeaveParticipant(params?: {
    resourceTicketId?: string;
  }): Observable<void> {

    return this.putResourceTicketUserLeaveParticipant_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postResourceTicketRelatedToCurrentUserWithRangeTime
   */
  static readonly PostResourceTicketRelatedToCurrentUserWithRangeTimePath = '/api/v1/resource-ticket/related-to-current-user-with-range-time';

  /**
   * Link Api: /api/v1/resource-ticket/related-to-current-user-with-range-time
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResourceTicketRelatedToCurrentUserWithRangeTime_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketRelatedToCurrentUserWithRangeTime_Plain_Response(params?: {
    body?: ResourceTicketFromToTimeDto
  }): Observable<THRMStrictHttpResponse<Array<ResourceTicketDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PostResourceTicketRelatedToCurrentUserWithRangeTimePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<ResourceTicketDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/related-to-current-user-with-range-time
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResourceTicketRelatedToCurrentUserWithRangeTime_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketRelatedToCurrentUserWithRangeTime_Plain(params?: {
    body?: ResourceTicketFromToTimeDto
  }): Observable<Array<ResourceTicketDto>> {

    return this.postResourceTicketRelatedToCurrentUserWithRangeTime_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ResourceTicketDto>>) => r.body as Array<ResourceTicketDto>)
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/related-to-current-user-with-range-time
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResourceTicketRelatedToCurrentUserWithRangeTime_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketRelatedToCurrentUserWithRangeTime_Json_Response(params?: {
    body?: ResourceTicketFromToTimeDto
  }): Observable<THRMStrictHttpResponse<Array<ResourceTicketDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PostResourceTicketRelatedToCurrentUserWithRangeTimePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<ResourceTicketDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/related-to-current-user-with-range-time
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResourceTicketRelatedToCurrentUserWithRangeTime_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postResourceTicketRelatedToCurrentUserWithRangeTime_Json(params?: {
    body?: ResourceTicketFromToTimeDto
  }): Observable<Array<ResourceTicketDto>> {

    return this.postResourceTicketRelatedToCurrentUserWithRangeTime_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<ResourceTicketDto>>) => r.body as Array<ResourceTicketDto>)
    );
  }

  /**
   * Path part for operation getResourceTicketTicketIdAttachments
   */
  static readonly GetResourceTicketTicketIdAttachmentsPath = '/api/v1/resource-ticket/{ticketId}/attachments';

  /**
   * Link Api: /api/v1/resource-ticket/{ticketId}/attachments
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceTicketTicketIdAttachments_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketTicketIdAttachments_Plain_Response(params: {
    ticketId: string;
  }): Observable<THRMStrictHttpResponse<Array<AttachmentRDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.GetResourceTicketTicketIdAttachmentsPath, 'get');
    if (params) {
      rb.path('ticketId', params.ticketId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AttachmentRDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/{ticketId}/attachments
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceTicketTicketIdAttachments_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketTicketIdAttachments_Plain(params: {
    ticketId: string;
  }): Observable<Array<AttachmentRDto>> {

    return this.getResourceTicketTicketIdAttachments_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AttachmentRDto>>) => r.body as Array<AttachmentRDto>)
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/{ticketId}/attachments
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getResourceTicketTicketIdAttachments_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketTicketIdAttachments_Json_Response(params: {
    ticketId: string;
  }): Observable<THRMStrictHttpResponse<Array<AttachmentRDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.GetResourceTicketTicketIdAttachmentsPath, 'get');
    if (params) {
      rb.path('ticketId', params.ticketId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AttachmentRDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/{ticketId}/attachments
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getResourceTicketTicketIdAttachments_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getResourceTicketTicketIdAttachments_Json(params: {
    ticketId: string;
  }): Observable<Array<AttachmentRDto>> {

    return this.getResourceTicketTicketIdAttachments_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AttachmentRDto>>) => r.body as Array<AttachmentRDto>)
    );
  }

  /**
   * Path part for operation putResourceTicketAddDocumentTicketId
   */
  static readonly PutResourceTicketAddDocumentTicketIdPath = '/api/v1/resource-ticket/add-document/{ticketId}';

  /**
   * Link Api: /api/v1/resource-ticket/add-document/{ticketId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putResourceTicketAddDocumentTicketId()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  putResourceTicketAddDocumentTicketId_Response(params: {
    ticketId: string;
    body?: {
'RemoveIds'?: Array<string>;
'Files'?: Array<Blob>;
}
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PutResourceTicketAddDocumentTicketIdPath, 'put');
    if (params) {
      rb.path('ticketId', params.ticketId, {});
      rb.body(params.body, 'multipart/form-data');
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
   * Link Api: /api/v1/resource-ticket/add-document/{ticketId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putResourceTicketAddDocumentTicketId_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  putResourceTicketAddDocumentTicketId(params: {
    ticketId: string;
    body?: {
'RemoveIds'?: Array<string>;
'Files'?: Array<Blob>;
}
  }): Observable<void> {

    return this.putResourceTicketAddDocumentTicketId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postResourceTicketAddDocumentTicketId
   */
  static readonly PostResourceTicketAddDocumentTicketIdPath = '/api/v1/resource-ticket/add-document/{ticketId}';

  /**
   * Link Api: /api/v1/resource-ticket/add-document/{ticketId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResourceTicketAddDocumentTicketId_Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postResourceTicketAddDocumentTicketId_Plain_Response(params: {
    ticketId: string;
    body?: {
'Documents'?: Array<Blob>;
}
  }): Observable<THRMStrictHttpResponse<Array<AttachmentRDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PostResourceTicketAddDocumentTicketIdPath, 'post');
    if (params) {
      rb.path('ticketId', params.ticketId, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AttachmentRDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/add-document/{ticketId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResourceTicketAddDocumentTicketId_Plain_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postResourceTicketAddDocumentTicketId_Plain(params: {
    ticketId: string;
    body?: {
'Documents'?: Array<Blob>;
}
  }): Observable<Array<AttachmentRDto>> {

    return this.postResourceTicketAddDocumentTicketId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AttachmentRDto>>) => r.body as Array<AttachmentRDto>)
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/add-document/{ticketId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postResourceTicketAddDocumentTicketId_Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postResourceTicketAddDocumentTicketId_Json_Response(params: {
    ticketId: string;
    body?: {
'Documents'?: Array<Blob>;
}
  }): Observable<THRMStrictHttpResponse<Array<AttachmentRDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ResourceTicketService.PostResourceTicketAddDocumentTicketIdPath, 'post');
    if (params) {
      rb.path('ticketId', params.ticketId, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AttachmentRDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/resource-ticket/add-document/{ticketId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postResourceTicketAddDocumentTicketId_Json_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postResourceTicketAddDocumentTicketId_Json(params: {
    ticketId: string;
    body?: {
'Documents'?: Array<Blob>;
}
  }): Observable<Array<AttachmentRDto>> {

    return this.postResourceTicketAddDocumentTicketId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AttachmentRDto>>) => r.body as Array<AttachmentRDto>)
    );
  }

}
