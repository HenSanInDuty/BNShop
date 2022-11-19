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
import { ApplicationConfigurationDto } from '../models/application-configuration-dto';

@Injectable({
  providedIn: 'root',
})
export class AbpApplicationConfigurationService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApiAbpApplicationConfiguration
   */
  static readonly GetApiAbpApplicationConfigurationPath = '/api/abp/application-configuration';

  /**
   * Link Api: /api/abp/application-configuration
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAbpApplicationConfiguration_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpApplicationConfiguration_Plain_Response(params?: {
  }): Observable<THRMStrictHttpResponse<ApplicationConfigurationDto>> {

    const rb = new RequestBuilder(this.rootUrl, AbpApplicationConfigurationService.GetApiAbpApplicationConfigurationPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ApplicationConfigurationDto>;
      })
    );
  }

  /**
   * Link Api: /api/abp/application-configuration
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAbpApplicationConfiguration_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpApplicationConfiguration_Plain(params?: {
  }): Observable<ApplicationConfigurationDto> {

    return this.getApiAbpApplicationConfiguration_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ApplicationConfigurationDto>) => r.body as ApplicationConfigurationDto)
    );
  }

  /**
   * Link Api: /api/abp/application-configuration
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAbpApplicationConfiguration_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpApplicationConfiguration_Json_Response(params?: {
  }): Observable<THRMStrictHttpResponse<ApplicationConfigurationDto>> {

    const rb = new RequestBuilder(this.rootUrl, AbpApplicationConfigurationService.GetApiAbpApplicationConfigurationPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ApplicationConfigurationDto>;
      })
    );
  }

  /**
   * Link Api: /api/abp/application-configuration
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAbpApplicationConfiguration_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpApplicationConfiguration_Json(params?: {
  }): Observable<ApplicationConfigurationDto> {

    return this.getApiAbpApplicationConfiguration_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ApplicationConfigurationDto>) => r.body as ApplicationConfigurationDto)
    );
  }

}
