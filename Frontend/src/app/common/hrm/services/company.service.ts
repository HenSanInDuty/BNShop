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
import { CompanyCreateDto } from '../models/company-create-dto';
import { CompanyDto } from '../models/company-dto';
import { CompanyUpdateDto } from '../models/company-update-dto';

@Injectable({
  providedIn: 'root',
})
export class CompanyService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getCompanies
   */
  static readonly GetCompaniesPath = '/api/v1/companies';

  /**
   * Link Api: /api/v1/companies
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCompanies_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompanies_Plain_Response(params?: {
  }): Observable<THRMStrictHttpResponse<CompanyDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.GetCompaniesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<CompanyDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/companies
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCompanies_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompanies_Plain(params?: {
  }): Observable<CompanyDto> {

    return this.getCompanies_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<CompanyDto>) => r.body as CompanyDto)
    );
  }

  /**
   * Link Api: /api/v1/companies
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCompanies_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompanies_Json_Response(params?: {
  }): Observable<THRMStrictHttpResponse<CompanyDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.GetCompaniesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<CompanyDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/companies
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCompanies_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCompanies_Json(params?: {
  }): Observable<CompanyDto> {

    return this.getCompanies_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<CompanyDto>) => r.body as CompanyDto)
    );
  }

  /**
   * Path part for operation putCompanies
   */
  static readonly PutCompaniesPath = '/api/v1/companies';

  /**
   * Link Api: /api/v1/companies
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putCompanies_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putCompanies_Plain_Response(params?: {
    id?: string;
    body?: CompanyUpdateDto
  }): Observable<THRMStrictHttpResponse<CompanyDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.PutCompaniesPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<CompanyDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/companies
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putCompanies_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putCompanies_Plain(params?: {
    id?: string;
    body?: CompanyUpdateDto
  }): Observable<CompanyDto> {

    return this.putCompanies_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<CompanyDto>) => r.body as CompanyDto)
    );
  }

  /**
   * Link Api: /api/v1/companies
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putCompanies_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putCompanies_Json_Response(params?: {
    id?: string;
    body?: CompanyUpdateDto
  }): Observable<THRMStrictHttpResponse<CompanyDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.PutCompaniesPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<CompanyDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/companies
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putCompanies_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putCompanies_Json(params?: {
    id?: string;
    body?: CompanyUpdateDto
  }): Observable<CompanyDto> {

    return this.putCompanies_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<CompanyDto>) => r.body as CompanyDto)
    );
  }

  /**
   * Path part for operation postCompanies
   */
  static readonly PostCompaniesPath = '/api/v1/companies';

  /**
   * Link Api: /api/v1/companies
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCompanies_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postCompanies_Plain_Response(params?: {
    body?: CompanyCreateDto
  }): Observable<THRMStrictHttpResponse<CompanyDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.PostCompaniesPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<CompanyDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/companies
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postCompanies_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postCompanies_Plain(params?: {
    body?: CompanyCreateDto
  }): Observable<CompanyDto> {

    return this.postCompanies_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<CompanyDto>) => r.body as CompanyDto)
    );
  }

  /**
   * Link Api: /api/v1/companies
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCompanies_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postCompanies_Json_Response(params?: {
    body?: CompanyCreateDto
  }): Observable<THRMStrictHttpResponse<CompanyDto>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.PostCompaniesPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<CompanyDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/companies
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postCompanies_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postCompanies_Json(params?: {
    body?: CompanyCreateDto
  }): Observable<CompanyDto> {

    return this.postCompanies_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<CompanyDto>) => r.body as CompanyDto)
    );
  }

  /**
   * Path part for operation putCompaniesUpdateAvatar
   */
  static readonly PutCompaniesUpdateAvatarPath = '/api/v1/companies/update-avatar';

  /**
   * Link Api: /api/v1/companies/update-avatar
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putCompaniesUpdateAvatar_Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  putCompaniesUpdateAvatar_Plain_Response(params?: {
    id?: string;
    body?: {
'File': Blob;
}
  }): Observable<THRMStrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.PutCompaniesUpdateAvatarPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<string>;
      })
    );
  }

  /**
   * Link Api: /api/v1/companies/update-avatar
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putCompaniesUpdateAvatar_Plain_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  putCompaniesUpdateAvatar_Plain(params?: {
    id?: string;
    body?: {
'File': Blob;
}
  }): Observable<string> {

    return this.putCompaniesUpdateAvatar_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Link Api: /api/v1/companies/update-avatar
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putCompaniesUpdateAvatar_Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  putCompaniesUpdateAvatar_Json_Response(params?: {
    id?: string;
    body?: {
'File': Blob;
}
  }): Observable<THRMStrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CompanyService.PutCompaniesUpdateAvatarPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<string>;
      })
    );
  }

  /**
   * Link Api: /api/v1/companies/update-avatar
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putCompaniesUpdateAvatar_Json_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  putCompaniesUpdateAvatar_Json(params?: {
    id?: string;
    body?: {
'File': Blob;
}
  }): Observable<string> {

    return this.putCompaniesUpdateAvatar_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<string>) => r.body as string)
    );
  }

}
