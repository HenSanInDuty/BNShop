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
import { UserLogDto } from '../models/user-log-dto';

@Injectable({
  providedIn: 'root',
})
export class UserLogService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApiAppUserLogUserTrackingValuesUserId
   */
  static readonly GetApiAppUserLogUserTrackingValuesUserIdPath = '/api/app/user-log/user-tracking-values/{userId}';

  /**
   * Link Api: /api/app/user-log/user-tracking-values/{userId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAppUserLogUserTrackingValuesUserId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppUserLogUserTrackingValuesUserId_Plain_Response(params: {
    userId: string;
  }): Observable<THRMStrictHttpResponse<UserLogDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserLogService.GetApiAppUserLogUserTrackingValuesUserIdPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<UserLogDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/user-log/user-tracking-values/{userId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAppUserLogUserTrackingValuesUserId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppUserLogUserTrackingValuesUserId_Plain(params: {
    userId: string;
  }): Observable<UserLogDto> {

    return this.getApiAppUserLogUserTrackingValuesUserId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<UserLogDto>) => r.body as UserLogDto)
    );
  }

  /**
   * Link Api: /api/app/user-log/user-tracking-values/{userId}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAppUserLogUserTrackingValuesUserId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppUserLogUserTrackingValuesUserId_Json_Response(params: {
    userId: string;
  }): Observable<THRMStrictHttpResponse<UserLogDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserLogService.GetApiAppUserLogUserTrackingValuesUserIdPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<UserLogDto>;
      })
    );
  }

  /**
   * Link Api: /api/app/user-log/user-tracking-values/{userId}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAppUserLogUserTrackingValuesUserId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAppUserLogUserTrackingValuesUserId_Json(params: {
    userId: string;
  }): Observable<UserLogDto> {

    return this.getApiAppUserLogUserTrackingValuesUserId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<UserLogDto>) => r.body as UserLogDto)
    );
  }

}
