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
import { DeviceCreateDto } from '../models/device-create-dto';
import { DeviceDtoPagedResultDto } from '../models/device-dto-paged-result-dto';
import { DeviceIdCheckResultDto } from '../models/device-id-check-result-dto';
import { DeviceResetApiKeyDto } from '../models/device-reset-api-key-dto';

@Injectable({
  providedIn: 'root',
})
export class DeviceService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getDevice
   */
  static readonly GetDevicePath = '/api/v1/device';

  /**
   * Link Api: /api/v1/device
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDevice_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevice_Plain_Response(params?: {
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<DeviceDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.GetDevicePath, 'get');
    if (params) {
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
        return r as THRMStrictHttpResponse<DeviceDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/device
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDevice_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevice_Plain(params?: {
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<DeviceDtoPagedResultDto> {

    return this.getDevice_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DeviceDtoPagedResultDto>) => r.body as DeviceDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/device
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDevice_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevice_Json_Response(params?: {
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<DeviceDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.GetDevicePath, 'get');
    if (params) {
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
        return r as THRMStrictHttpResponse<DeviceDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/device
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDevice_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDevice_Json(params?: {
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<DeviceDtoPagedResultDto> {

    return this.getDevice_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DeviceDtoPagedResultDto>) => r.body as DeviceDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postDevice
   */
  static readonly PostDevicePath = '/api/v1/device';

  /**
   * Link Api: /api/v1/device
   *
   * Insert Mot thiet bi cham cong.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postDevice()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDevice_Response(params?: {

    /**
     * <h1>Body Model</h1>
     * <p>
     *   <strong>deviceId</strong>: id cua thiet bi (deviceName) (string)</p>
     * <p>
     *   <strong>description</strong>: Mo ta thiet bi (string)</p>
     * <p>
     *   <strong>deviceType</strong>: Camera=0,Fingerprint=1 (int)</p>
     * <p>
     *   <strong>branchId</strong>: thiet bi duoc dat tai branch(string)</p>
     * <p>
     *   <strong>apiKey</strong>: key cua thiet bi cham cong (string)</p>
     */
    body?: DeviceCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.PostDevicePath, 'post');
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
   * Link Api: /api/v1/device
   *
   * Insert Mot thiet bi cham cong.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postDevice_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDevice(params?: {

    /**
     * <h1>Body Model</h1>
     * <p>
     *   <strong>deviceId</strong>: id cua thiet bi (deviceName) (string)</p>
     * <p>
     *   <strong>description</strong>: Mo ta thiet bi (string)</p>
     * <p>
     *   <strong>deviceType</strong>: Camera=0,Fingerprint=1 (int)</p>
     * <p>
     *   <strong>branchId</strong>: thiet bi duoc dat tai branch(string)</p>
     * <p>
     *   <strong>apiKey</strong>: key cua thiet bi cham cong (string)</p>
     */
    body?: DeviceCreateDto
  }): Observable<void> {

    return this.postDevice_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getDeviceCheckDeviceid
   */
  static readonly GetDeviceCheckDeviceidPath = '/api/v1/device/check-deviceid';

  /**
   * Link Api: /api/v1/device/check-deviceid
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDeviceCheckDeviceid_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeviceCheckDeviceid_Plain_Response(params?: {
    deviceId?: string;
  }): Observable<THRMStrictHttpResponse<DeviceIdCheckResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.GetDeviceCheckDeviceidPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<DeviceIdCheckResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/device/check-deviceid
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDeviceCheckDeviceid_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeviceCheckDeviceid_Plain(params?: {
    deviceId?: string;
  }): Observable<DeviceIdCheckResultDto> {

    return this.getDeviceCheckDeviceid_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DeviceIdCheckResultDto>) => r.body as DeviceIdCheckResultDto)
    );
  }

  /**
   * Link Api: /api/v1/device/check-deviceid
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDeviceCheckDeviceid_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeviceCheckDeviceid_Json_Response(params?: {
    deviceId?: string;
  }): Observable<THRMStrictHttpResponse<DeviceIdCheckResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.GetDeviceCheckDeviceidPath, 'get');
    if (params) {
      rb.query('deviceId', params.deviceId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<DeviceIdCheckResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/device/check-deviceid
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDeviceCheckDeviceid_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDeviceCheckDeviceid_Json(params?: {
    deviceId?: string;
  }): Observable<DeviceIdCheckResultDto> {

    return this.getDeviceCheckDeviceid_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<DeviceIdCheckResultDto>) => r.body as DeviceIdCheckResultDto)
    );
  }

  /**
   * Path part for operation postDeviceResetApikey
   */
  static readonly PostDeviceResetApikeyPath = '/api/v1/device/reset-apikey';

  /**
   * Link Api: /api/v1/device/reset-apikey
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postDeviceResetApikey()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDeviceResetApikey_Response(params?: {
    body?: DeviceResetApiKeyDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DeviceService.PostDeviceResetApikeyPath, 'post');
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
   * Link Api: /api/v1/device/reset-apikey
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postDeviceResetApikey_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postDeviceResetApikey(params?: {
    body?: DeviceResetApiKeyDto
  }): Observable<void> {

    return this.postDeviceResetApikey_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
