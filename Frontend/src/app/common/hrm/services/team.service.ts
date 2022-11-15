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
import { TeamCreateDto } from '../models/team-create-dto';
import { TeamDto } from '../models/team-dto';
import { TeamDtoPagedResultDto } from '../models/team-dto-paged-result-dto';
import { TeamUpdateDto } from '../models/team-update-dto';

@Injectable({
  providedIn: 'root',
})
export class TeamService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getTeam
   */
  static readonly GetTeamPath = '/api/v1/team';

  /**
   * Link Api: /api/v1/team
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTeam_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeam_Plain_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TeamDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TeamService.GetTeamPath, 'get');
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
        return r as THRMStrictHttpResponse<TeamDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/team
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTeam_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeam_Plain(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TeamDtoPagedResultDto> {

    return this.getTeam_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TeamDtoPagedResultDto>) => r.body as TeamDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/team
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTeam_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeam_Json_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TeamDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TeamService.GetTeamPath, 'get');
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
        return r as THRMStrictHttpResponse<TeamDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/team
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTeam_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeam_Json(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TeamDtoPagedResultDto> {

    return this.getTeam_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TeamDtoPagedResultDto>) => r.body as TeamDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postTeamCreate
   */
  static readonly PostTeamCreatePath = '/api/v1/team/create';

  /**
   * Link Api: /api/v1/team/create
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTeamCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTeamCreate_Response(params?: {
    body?: TeamCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TeamService.PostTeamCreatePath, 'post');
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
   * Link Api: /api/v1/team/create
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTeamCreate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTeamCreate(params?: {
    body?: TeamCreateDto
  }): Observable<void> {

    return this.postTeamCreate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putTeamUpdate
   */
  static readonly PutTeamUpdatePath = '/api/v1/team/update';

  /**
   * Link Api: /api/v1/team/update
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putTeamUpdate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putTeamUpdate_Response(params?: {
    id?: string;
    body?: TeamUpdateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TeamService.PutTeamUpdatePath, 'put');
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
   * Link Api: /api/v1/team/update
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putTeamUpdate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putTeamUpdate(params?: {
    id?: string;
    body?: TeamUpdateDto
  }): Observable<void> {

    return this.putTeamUpdate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteTeamDelete
   */
  static readonly DeleteTeamDeletePath = '/api/v1/team/delete';

  /**
   * Link Api: /api/v1/team/delete
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTeamDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTeamDelete_Response(params?: {
    id?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TeamService.DeleteTeamDeletePath, 'delete');
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
   * Link Api: /api/v1/team/delete
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteTeamDelete_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTeamDelete(params?: {
    id?: string;
  }): Observable<void> {

    return this.deleteTeamDelete_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteTeamDeleteMany
   */
  static readonly DeleteTeamDeleteManyPath = '/api/v1/team/delete-many';

  /**
   * Link Api: /api/v1/team/delete-many
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTeamDeleteMany()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTeamDeleteMany_Response(params?: {
    listId?: Array<string>;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TeamService.DeleteTeamDeleteManyPath, 'delete');
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
   * Link Api: /api/v1/team/delete-many
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteTeamDeleteMany_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTeamDeleteMany(params?: {
    listId?: Array<string>;
  }): Observable<void> {

    return this.deleteTeamDeleteMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getTeamLeader
   */
  static readonly GetTeamLeaderPath = '/api/v1/team/leader';

  /**
   * Link Api: /api/v1/team/leader
   *
   * lấy danh sách các team do chính user đó quản lý.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTeamLeader_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamLeader_Plain_Response(params?: {
  }): Observable<THRMStrictHttpResponse<Array<TeamDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TeamService.GetTeamLeaderPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<TeamDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/team/leader
   *
   * lấy danh sách các team do chính user đó quản lý.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTeamLeader_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamLeader_Plain(params?: {
  }): Observable<Array<TeamDto>> {

    return this.getTeamLeader_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<TeamDto>>) => r.body as Array<TeamDto>)
    );
  }

  /**
   * Link Api: /api/v1/team/leader
   *
   * lấy danh sách các team do chính user đó quản lý.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTeamLeader_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamLeader_Json_Response(params?: {
  }): Observable<THRMStrictHttpResponse<Array<TeamDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TeamService.GetTeamLeaderPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<TeamDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/team/leader
   *
   * lấy danh sách các team do chính user đó quản lý.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTeamLeader_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamLeader_Json(params?: {
  }): Observable<Array<TeamDto>> {

    return this.getTeamLeader_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<TeamDto>>) => r.body as Array<TeamDto>)
    );
  }

  /**
   * Path part for operation getTeamGetDetail
   */
  static readonly GetTeamGetDetailPath = '/api/v1/team/get-detail';

  /**
   * Link Api: /api/v1/team/get-detail
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTeamGetDetail_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamGetDetail_Plain_Response(params?: {
    id?: string;
  }): Observable<THRMStrictHttpResponse<TeamDto>> {

    const rb = new RequestBuilder(this.rootUrl, TeamService.GetTeamGetDetailPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<TeamDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/team/get-detail
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTeamGetDetail_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamGetDetail_Plain(params?: {
    id?: string;
  }): Observable<TeamDto> {

    return this.getTeamGetDetail_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TeamDto>) => r.body as TeamDto)
    );
  }

  /**
   * Link Api: /api/v1/team/get-detail
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTeamGetDetail_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamGetDetail_Json_Response(params?: {
    id?: string;
  }): Observable<THRMStrictHttpResponse<TeamDto>> {

    const rb = new RequestBuilder(this.rootUrl, TeamService.GetTeamGetDetailPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<TeamDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/team/get-detail
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTeamGetDetail_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamGetDetail_Json(params?: {
    id?: string;
  }): Observable<TeamDto> {

    return this.getTeamGetDetail_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TeamDto>) => r.body as TeamDto)
    );
  }

}
