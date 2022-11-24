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
import { ApplicationApiDescriptionModel } from '../models/application-api-description-model';

@Injectable({
  providedIn: 'root',
})
export class AbpApiDefinitionService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getApiAbpApiDefinition
   */
  static readonly GetApiAbpApiDefinitionPath = '/api/abp/api-definition';

  /**
   * Link Api: /api/abp/api-definition
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAbpApiDefinition_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpApiDefinition_Plain_Response(params?: {
    IncludeTypes?: boolean;
  }): Observable<THRMStrictHttpResponse<ApplicationApiDescriptionModel>> {

    const rb = new RequestBuilder(this.rootUrl, AbpApiDefinitionService.GetApiAbpApiDefinitionPath, 'get');
    if (params) {
      rb.query('IncludeTypes', params.IncludeTypes, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ApplicationApiDescriptionModel>;
      })
    );
  }

  /**
   * Link Api: /api/abp/api-definition
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAbpApiDefinition_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpApiDefinition_Plain(params?: {
    IncludeTypes?: boolean;
  }): Observable<ApplicationApiDescriptionModel> {

    return this.getApiAbpApiDefinition_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ApplicationApiDescriptionModel>) => r.body as ApplicationApiDescriptionModel)
    );
  }

  /**
   * Link Api: /api/abp/api-definition
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiAbpApiDefinition_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpApiDefinition_Json_Response(params?: {
    IncludeTypes?: boolean;
  }): Observable<THRMStrictHttpResponse<ApplicationApiDescriptionModel>> {

    const rb = new RequestBuilder(this.rootUrl, AbpApiDefinitionService.GetApiAbpApiDefinitionPath, 'get');
    if (params) {
      rb.query('IncludeTypes', params.IncludeTypes, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<ApplicationApiDescriptionModel>;
      })
    );
  }

  /**
   * Link Api: /api/abp/api-definition
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiAbpApiDefinition_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiAbpApiDefinition_Json(params?: {
    IncludeTypes?: boolean;
  }): Observable<ApplicationApiDescriptionModel> {

    return this.getApiAbpApiDefinition_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<ApplicationApiDescriptionModel>) => r.body as ApplicationApiDescriptionModel)
    );
  }

}
