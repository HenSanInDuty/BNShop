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
import { UserForAiDto } from '../models/user-for-ai-dto';

@Injectable({
  providedIn: 'root',
})
export class SyncDataAiService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSyncDataAiAllUser
   */
  static readonly GetSyncDataAiAllUserPath = '/api/v1/sync-data-AI/all-user';

  /**
   * Link Api: /api/v1/sync-data-AI/all-user
   *
   * api cung cap du lieu cho AI.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSyncDataAiAllUser_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSyncDataAiAllUser_Plain_Response(params?: {
    apikey?: string;
  }): Observable<THRMStrictHttpResponse<Array<UserForAiDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SyncDataAiService.GetSyncDataAiAllUserPath, 'get');
    if (params) {
      rb.header('apikey', params.apikey, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<UserForAiDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/sync-data-AI/all-user
   *
   * api cung cap du lieu cho AI.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSyncDataAiAllUser_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSyncDataAiAllUser_Plain(params?: {
    apikey?: string;
  }): Observable<Array<UserForAiDto>> {

    return this.getSyncDataAiAllUser_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<UserForAiDto>>) => r.body as Array<UserForAiDto>)
    );
  }

  /**
   * Link Api: /api/v1/sync-data-AI/all-user
   *
   * api cung cap du lieu cho AI.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSyncDataAiAllUser_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSyncDataAiAllUser_Json_Response(params?: {
    apikey?: string;
  }): Observable<THRMStrictHttpResponse<Array<UserForAiDto>>> {

    const rb = new RequestBuilder(this.rootUrl, SyncDataAiService.GetSyncDataAiAllUserPath, 'get');
    if (params) {
      rb.header('apikey', params.apikey, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<UserForAiDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/sync-data-AI/all-user
   *
   * api cung cap du lieu cho AI.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getSyncDataAiAllUser_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSyncDataAiAllUser_Json(params?: {
    apikey?: string;
  }): Observable<Array<UserForAiDto>> {

    return this.getSyncDataAiAllUser_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<UserForAiDto>>) => r.body as Array<UserForAiDto>)
    );
  }

}
