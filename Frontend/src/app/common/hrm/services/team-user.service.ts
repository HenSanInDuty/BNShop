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
import { AppUserDto } from '../models/app-user-dto';
import { TeamUserCreateDto } from '../models/team-user-create-dto';
import { TeamUserDtoPagedResultDto } from '../models/team-user-dto-paged-result-dto';

@Injectable({
  providedIn: 'root',
})
export class TeamUserService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getTeamUserGetMemberByTeamId
   */
  static readonly GetTeamUserGetMemberByTeamIdPath = '/api/v1/team-user/get-member-by-team/{id}';

  /**
   * Link Api: /api/v1/team-user/get-member-by-team/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTeamUserGetMemberByTeamId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamUserGetMemberByTeamId_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<Array<AppUserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TeamUserService.GetTeamUserGetMemberByTeamIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AppUserDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/team-user/get-member-by-team/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTeamUserGetMemberByTeamId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamUserGetMemberByTeamId_Plain(params: {
    id: string;
  }): Observable<Array<AppUserDto>> {

    return this.getTeamUserGetMemberByTeamId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AppUserDto>>) => r.body as Array<AppUserDto>)
    );
  }

  /**
   * Link Api: /api/v1/team-user/get-member-by-team/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTeamUserGetMemberByTeamId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamUserGetMemberByTeamId_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<Array<AppUserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TeamUserService.GetTeamUserGetMemberByTeamIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AppUserDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/team-user/get-member-by-team/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTeamUserGetMemberByTeamId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamUserGetMemberByTeamId_Json(params: {
    id: string;
  }): Observable<Array<AppUserDto>> {

    return this.getTeamUserGetMemberByTeamId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AppUserDto>>) => r.body as Array<AppUserDto>)
    );
  }

  /**
   * Path part for operation getTeamUser
   */
  static readonly GetTeamUserPath = '/api/v1/team-user';

  /**
   * Link Api: /api/v1/team-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTeamUser_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamUser_Plain_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TeamUserDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TeamUserService.GetTeamUserPath, 'get');
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
        return r as THRMStrictHttpResponse<TeamUserDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/team-user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTeamUser_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamUser_Plain(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TeamUserDtoPagedResultDto> {

    return this.getTeamUser_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TeamUserDtoPagedResultDto>) => r.body as TeamUserDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/team-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTeamUser_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamUser_Json_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TeamUserDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TeamUserService.GetTeamUserPath, 'get');
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
        return r as THRMStrictHttpResponse<TeamUserDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/team-user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTeamUser_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeamUser_Json(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TeamUserDtoPagedResultDto> {

    return this.getTeamUser_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TeamUserDtoPagedResultDto>) => r.body as TeamUserDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postTeamUserCreate
   */
  static readonly PostTeamUserCreatePath = '/api/v1/team-user/create';

  /**
   * Link Api: /api/v1/team-user/create
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postTeamUserCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTeamUserCreate_Response(params?: {
    body?: TeamUserCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TeamUserService.PostTeamUserCreatePath, 'post');
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
   * Link Api: /api/v1/team-user/create
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postTeamUserCreate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postTeamUserCreate(params?: {
    body?: TeamUserCreateDto
  }): Observable<void> {

    return this.postTeamUserCreate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteTeamUserDelete
   */
  static readonly DeleteTeamUserDeletePath = '/api/v1/team-user/delete';

  /**
   * Link Api: /api/v1/team-user/delete
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTeamUserDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTeamUserDelete_Response(params?: {
    teamId?: string;
    userId?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TeamUserService.DeleteTeamUserDeletePath, 'delete');
    if (params) {
      rb.query('teamId', params.teamId, {});
      rb.query('userId', params.userId, {});
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
   * Link Api: /api/v1/team-user/delete
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteTeamUserDelete_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTeamUserDelete(params?: {
    teamId?: string;
    userId?: string;
  }): Observable<void> {

    return this.deleteTeamUserDelete_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getApiAppTeamUser
   */
  static readonly GetApiAppTeamUserPath = '/api/app/team-user';

  /**
   * Link Api: /api/app/team-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAppTeamUser_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppTeamUser_Plain_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TeamUserDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TeamUserService.GetApiAppTeamUserPath, 'get');
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
        return r as THRMStrictHttpResponse<TeamUserDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/team-user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAppTeamUser_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppTeamUser_Plain(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TeamUserDtoPagedResultDto> {

    return this.getApiAppTeamUser_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TeamUserDtoPagedResultDto>) => r.body as TeamUserDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/app/team-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAppTeamUser_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppTeamUser_Json_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<TeamUserDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, TeamUserService.GetApiAppTeamUserPath, 'get');
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
        return r as THRMStrictHttpResponse<TeamUserDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/team-user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAppTeamUser_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppTeamUser_Json(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<TeamUserDtoPagedResultDto> {

    return this.getApiAppTeamUser_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<TeamUserDtoPagedResultDto>) => r.body as TeamUserDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postApiAppTeamUser
   */
  static readonly PostApiAppTeamUserPath = '/api/app/team-user';

  /**
   * Link Api: /api/app/team-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppTeamUser()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppTeamUser_Response(params?: {
    body?: TeamUserCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TeamUserService.PostApiAppTeamUserPath, 'post');
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
   * Link Api: /api/app/team-user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppTeamUser_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppTeamUser(params?: {
    body?: TeamUserCreateDto
  }): Observable<void> {

    return this.postApiAppTeamUser_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteApiAppTeamUser
   */
  static readonly DeleteApiAppTeamUserPath = '/api/app/team-user';

  /**
   * Link Api: /api/app/team-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiAppTeamUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAppTeamUser_Response(params?: {
    teamId?: string;
    userId?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TeamUserService.DeleteApiAppTeamUserPath, 'delete');
    if (params) {
      rb.query('teamId', params.teamId, {});
      rb.query('userId', params.userId, {});
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
   * Link Api: /api/app/team-user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteApiAppTeamUser_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiAppTeamUser(params?: {
    teamId?: string;
    userId?: string;
  }): Observable<void> {

    return this.deleteApiAppTeamUser_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppTeamUserCheckLeaderOfUser
   */
  static readonly PostApiAppTeamUserCheckLeaderOfUserPath = '/api/app/team-user/check-leader-of-user';

  /**
   * Link Api: /api/app/team-user/check-leader-of-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppTeamUserCheckLeaderOfUser_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppTeamUserCheckLeaderOfUser_Plain_Response(params?: {
    leaderId?: string;
    userId?: string;
  }): Observable<THRMStrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, TeamUserService.PostApiAppTeamUserCheckLeaderOfUserPath, 'post');
    if (params) {
      rb.query('leaderId', params.leaderId, {});
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: String((r as HttpResponse<TDSSafeAny>).body) === 'true' }) as THRMStrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * Link Api: /api/app/team-user/check-leader-of-user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppTeamUserCheckLeaderOfUser_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppTeamUserCheckLeaderOfUser_Plain(params?: {
    leaderId?: string;
    userId?: string;
  }): Observable<boolean> {

    return this.postApiAppTeamUserCheckLeaderOfUser_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Link Api: /api/app/team-user/check-leader-of-user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppTeamUserCheckLeaderOfUser_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppTeamUserCheckLeaderOfUser_Json_Response(params?: {
    leaderId?: string;
    userId?: string;
  }): Observable<THRMStrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, TeamUserService.PostApiAppTeamUserCheckLeaderOfUserPath, 'post');
    if (params) {
      rb.query('leaderId', params.leaderId, {});
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: String((r as HttpResponse<TDSSafeAny>).body) === 'true' }) as THRMStrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * Link Api: /api/app/team-user/check-leader-of-user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppTeamUserCheckLeaderOfUser_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postApiAppTeamUserCheckLeaderOfUser_Json(params?: {
    leaderId?: string;
    userId?: string;
  }): Observable<boolean> {

    return this.postApiAppTeamUserCheckLeaderOfUser_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * Path part for operation getApiAppTeamUserUserByTeamIdTeamId
   */
  static readonly GetApiAppTeamUserUserByTeamIdTeamIdPath = '/api/app/team-user/user-by-team-id/{teamId}';

  /**
   * Link Api: /api/app/team-user/user-by-team-id/{teamId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAppTeamUserUserByTeamIdTeamId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppTeamUserUserByTeamIdTeamId_Plain_Response(params: {
    teamId: string;
  }): Observable<THRMStrictHttpResponse<Array<AppUserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TeamUserService.GetApiAppTeamUserUserByTeamIdTeamIdPath, 'get');
    if (params) {
      rb.path('teamId', params.teamId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AppUserDto>>;
      })
    );
  }

  /**
   * Link Api: /api/app/team-user/user-by-team-id/{teamId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAppTeamUserUserByTeamIdTeamId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppTeamUserUserByTeamIdTeamId_Plain(params: {
    teamId: string;
  }): Observable<Array<AppUserDto>> {

    return this.getApiAppTeamUserUserByTeamIdTeamId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AppUserDto>>) => r.body as Array<AppUserDto>)
    );
  }

  /**
   * Link Api: /api/app/team-user/user-by-team-id/{teamId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAppTeamUserUserByTeamIdTeamId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppTeamUserUserByTeamIdTeamId_Json_Response(params: {
    teamId: string;
  }): Observable<THRMStrictHttpResponse<Array<AppUserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TeamUserService.GetApiAppTeamUserUserByTeamIdTeamIdPath, 'get');
    if (params) {
      rb.path('teamId', params.teamId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AppUserDto>>;
      })
    );
  }

  /**
   * Link Api: /api/app/team-user/user-by-team-id/{teamId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAppTeamUserUserByTeamIdTeamId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppTeamUserUserByTeamIdTeamId_Json(params: {
    teamId: string;
  }): Observable<Array<AppUserDto>> {

    return this.getApiAppTeamUserUserByTeamIdTeamId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AppUserDto>>) => r.body as Array<AppUserDto>)
    );
  }

}
