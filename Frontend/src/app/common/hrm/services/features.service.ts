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
import { GetFeatureListResultDto } from '../models/get-feature-list-result-dto';
import { UpdateFeaturesDto } from '../models/update-features-dto';

@Injectable({
  providedIn: 'root',
})
export class FeaturesService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApiFeatureManagementFeatures
   */
  static readonly GetApiFeatureManagementFeaturesPath = '/api/feature-management/features';

  /**
   * Link Api: /api/feature-management/features
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiFeatureManagementFeatures_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiFeatureManagementFeatures_Plain_Response(params?: {
    providerName?: string;
    providerKey?: string;
  }): Observable<THRMStrictHttpResponse<GetFeatureListResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, FeaturesService.GetApiFeatureManagementFeaturesPath, 'get');
    if (params) {
      rb.query('providerName', params.providerName, {});
      rb.query('providerKey', params.providerKey, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<GetFeatureListResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/feature-management/features
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiFeatureManagementFeatures_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiFeatureManagementFeatures_Plain(params?: {
    providerName?: string;
    providerKey?: string;
  }): Observable<GetFeatureListResultDto> {

    return this.getApiFeatureManagementFeatures_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<GetFeatureListResultDto>) => r.body as GetFeatureListResultDto)
    );
  }

  /**
   * Link Api: /api/feature-management/features
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiFeatureManagementFeatures_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiFeatureManagementFeatures_Json_Response(params?: {
    providerName?: string;
    providerKey?: string;
  }): Observable<THRMStrictHttpResponse<GetFeatureListResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, FeaturesService.GetApiFeatureManagementFeaturesPath, 'get');
    if (params) {
      rb.query('providerName', params.providerName, {});
      rb.query('providerKey', params.providerKey, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<GetFeatureListResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/feature-management/features
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiFeatureManagementFeatures_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiFeatureManagementFeatures_Json(params?: {
    providerName?: string;
    providerKey?: string;
  }): Observable<GetFeatureListResultDto> {

    return this.getApiFeatureManagementFeatures_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<GetFeatureListResultDto>) => r.body as GetFeatureListResultDto)
    );
  }

  /**
   * Path part for operation putApiFeatureManagementFeatures
   */
  static readonly PutApiFeatureManagementFeaturesPath = '/api/feature-management/features';

  /**
   * Link Api: /api/feature-management/features
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putApiFeatureManagementFeatures()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiFeatureManagementFeatures_Response(params?: {
    providerName?: string;
    providerKey?: string;
    body?: UpdateFeaturesDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FeaturesService.PutApiFeatureManagementFeaturesPath, 'put');
    if (params) {
      rb.query('providerName', params.providerName, {});
      rb.query('providerKey', params.providerKey, {});
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
   * Link Api: /api/feature-management/features
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putApiFeatureManagementFeatures_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiFeatureManagementFeatures(params?: {
    providerName?: string;
    providerKey?: string;
    body?: UpdateFeaturesDto
  }): Observable<void> {

    return this.putApiFeatureManagementFeatures_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
