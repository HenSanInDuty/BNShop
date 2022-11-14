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
import { ProfileDto } from '../models/profile-dto';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApiIdentityMyProfile
   */
  static readonly GetApiIdentityMyProfilePath = '/api/identity/my-profile';

  /**
   * Link Api: /api/identity/my-profile
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityMyProfile_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityMyProfile_Plain_Response(params?: {
  }): Observable<THRMStrictHttpResponse<ProfileDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.GetApiIdentityMyProfilePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ProfileDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/my-profile
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityMyProfile_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityMyProfile_Plain(params?: {
  }): Observable<ProfileDto> {

    return this.getApiIdentityMyProfile_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ProfileDto>) => r.body as ProfileDto)
    );
  }

  /**
   * Link Api: /api/identity/my-profile
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityMyProfile_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityMyProfile_Json_Response(params?: {
  }): Observable<THRMStrictHttpResponse<ProfileDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.GetApiIdentityMyProfilePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ProfileDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/my-profile
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityMyProfile_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityMyProfile_Json(params?: {
  }): Observable<ProfileDto> {

    return this.getApiIdentityMyProfile_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ProfileDto>) => r.body as ProfileDto)
    );
  }

}
