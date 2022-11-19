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
import { AppUserDisplayDto } from '../models/app-user-display-dto';
import { BioDeviceAdminCreateDto } from '../models/bio-device-admin-create-dto';
import { BioDeviceAnonymouseDtoPagedResultDto } from '../models/bio-device-anonymouse-dto-paged-result-dto';
import { BioDeviceCreateDto } from '../models/bio-device-create-dto';
import { BioDeviceDto } from '../models/bio-device-dto';
import { BioDeviceDtoPagedResultDto } from '../models/bio-device-dto-paged-result-dto';
import { BioDeviceUpdateDto } from '../models/bio-device-update-dto';
import { BioDeviceUserCreateDto } from '../models/bio-device-user-create-dto';
import { BioDeviceUserDtoPagedResultDto } from '../models/bio-device-user-dto-paged-result-dto';
import { BioDeviceUserUpdateDto } from '../models/bio-device-user-update-dto';

@Injectable({
  providedIn: 'root',
})
export class BioDeviceService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getBioDevice
   */
  static readonly GetBioDevicePath = '/api/v1/bio-device';

  /**
   * Link Api: /api/v1/bio-device
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBioDevice_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDevice_Plain_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<BioDeviceDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.GetBioDevicePath, 'get');
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
        return r as THRMStrictHttpResponse<BioDeviceDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/bio-device
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBioDevice_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDevice_Plain(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<BioDeviceDtoPagedResultDto> {

    return this.getBioDevice_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<BioDeviceDtoPagedResultDto>) => r.body as BioDeviceDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/bio-device
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBioDevice_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDevice_Json_Response(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<BioDeviceDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.GetBioDevicePath, 'get');
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
        return r as THRMStrictHttpResponse<BioDeviceDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/bio-device
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBioDevice_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDevice_Json(params?: {
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<BioDeviceDtoPagedResultDto> {

    return this.getBioDevice_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<BioDeviceDtoPagedResultDto>) => r.body as BioDeviceDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getBioDeviceByClientid
   */
  static readonly GetBioDeviceByClientidPath = '/api/v1/bio-device/by-clientid';

  /**
   * Link Api: /api/v1/bio-device/by-clientid
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBioDeviceByClientid_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceByClientid_Plain_Response(params?: {
  }): Observable<THRMStrictHttpResponse<Array<BioDeviceDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.GetBioDeviceByClientidPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<BioDeviceDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/bio-device/by-clientid
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBioDeviceByClientid_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceByClientid_Plain(params?: {
  }): Observable<Array<BioDeviceDto>> {

    return this.getBioDeviceByClientid_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<BioDeviceDto>>) => r.body as Array<BioDeviceDto>)
    );
  }

  /**
   * Link Api: /api/v1/bio-device/by-clientid
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBioDeviceByClientid_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceByClientid_Json_Response(params?: {
  }): Observable<THRMStrictHttpResponse<Array<BioDeviceDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.GetBioDeviceByClientidPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<BioDeviceDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/bio-device/by-clientid
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBioDeviceByClientid_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceByClientid_Json(params?: {
  }): Observable<Array<BioDeviceDto>> {

    return this.getBioDeviceByClientid_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<BioDeviceDto>>) => r.body as Array<BioDeviceDto>)
    );
  }

  /**
   * Path part for operation postBioDeviceCreate
   */
  static readonly PostBioDeviceCreatePath = '/api/v1/bio-device/create';

  /**
   * Link Api: /api/v1/bio-device/create
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postBioDeviceCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postBioDeviceCreate_Response(params?: {
    body?: BioDeviceCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.PostBioDeviceCreatePath, 'post');
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
   * Link Api: /api/v1/bio-device/create
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postBioDeviceCreate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postBioDeviceCreate(params?: {
    body?: BioDeviceCreateDto
  }): Observable<void> {

    return this.postBioDeviceCreate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putBioDeviceUpdateSerialNo
   */
  static readonly PutBioDeviceUpdateSerialNoPath = '/api/v1/bio-device/update/{serialNo}';

  /**
   * Link Api: /api/v1/bio-device/update/{serialNo}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putBioDeviceUpdateSerialNo()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putBioDeviceUpdateSerialNo_Response(params: {
    serialNo: string;
    body?: BioDeviceUpdateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.PutBioDeviceUpdateSerialNoPath, 'put');
    if (params) {
      rb.path('serialNo', params.serialNo, {});
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
   * Link Api: /api/v1/bio-device/update/{serialNo}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putBioDeviceUpdateSerialNo_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putBioDeviceUpdateSerialNo(params: {
    serialNo: string;
    body?: BioDeviceUpdateDto
  }): Observable<void> {

    return this.putBioDeviceUpdateSerialNo_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteBioDeviceDeleteSerialNo
   */
  static readonly DeleteBioDeviceDeleteSerialNoPath = '/api/v1/bio-device/delete/{serialNo}';

  /**
   * Link Api: /api/v1/bio-device/delete/{serialNo}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBioDeviceDeleteSerialNo()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBioDeviceDeleteSerialNo_Response(params: {
    serialNo: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.DeleteBioDeviceDeleteSerialNoPath, 'delete');
    if (params) {
      rb.path('serialNo', params.serialNo, {});
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
   * Link Api: /api/v1/bio-device/delete/{serialNo}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteBioDeviceDeleteSerialNo_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBioDeviceDeleteSerialNo(params: {
    serialNo: string;
  }): Observable<void> {

    return this.deleteBioDeviceDeleteSerialNo_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteBioDeviceDeleteMany
   */
  static readonly DeleteBioDeviceDeleteManyPath = '/api/v1/bio-device/delete-many';

  /**
   * Link Api: /api/v1/bio-device/delete-many
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBioDeviceDeleteMany()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBioDeviceDeleteMany_Response(params?: {
    serialNos?: Array<string>;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.DeleteBioDeviceDeleteManyPath, 'delete');
    if (params) {
      rb.query('serialNos', params.serialNos, {});
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
   * Link Api: /api/v1/bio-device/delete-many
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteBioDeviceDeleteMany_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBioDeviceDeleteMany(params?: {
    serialNos?: Array<string>;
  }): Observable<void> {

    return this.deleteBioDeviceDeleteMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getBioDeviceByUser
   */
  static readonly GetBioDeviceByUserPath = '/api/v1/bio-device/by-user';

  /**
   * Link Api: /api/v1/bio-device/by-user
   *
   * lấy danh sách máy chấm công theo từng user(admin sẽ lấy all,user bình thường sẽ lấy danh sách các máy chấm công mà user đó là admin).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBioDeviceByUser_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceByUser_Plain_Response(params?: {
  }): Observable<THRMStrictHttpResponse<Array<BioDeviceDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.GetBioDeviceByUserPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<BioDeviceDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/bio-device/by-user
   *
   * lấy danh sách máy chấm công theo từng user(admin sẽ lấy all,user bình thường sẽ lấy danh sách các máy chấm công mà user đó là admin).
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBioDeviceByUser_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceByUser_Plain(params?: {
  }): Observable<Array<BioDeviceDto>> {

    return this.getBioDeviceByUser_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<BioDeviceDto>>) => r.body as Array<BioDeviceDto>)
    );
  }

  /**
   * Link Api: /api/v1/bio-device/by-user
   *
   * lấy danh sách máy chấm công theo từng user(admin sẽ lấy all,user bình thường sẽ lấy danh sách các máy chấm công mà user đó là admin).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBioDeviceByUser_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceByUser_Json_Response(params?: {
  }): Observable<THRMStrictHttpResponse<Array<BioDeviceDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.GetBioDeviceByUserPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<BioDeviceDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/bio-device/by-user
   *
   * lấy danh sách máy chấm công theo từng user(admin sẽ lấy all,user bình thường sẽ lấy danh sách các máy chấm công mà user đó là admin).
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBioDeviceByUser_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceByUser_Json(params?: {
  }): Observable<Array<BioDeviceDto>> {

    return this.getBioDeviceByUser_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<BioDeviceDto>>) => r.body as Array<BioDeviceDto>)
    );
  }

  /**
   * Path part for operation postBioDeviceAdminCreate
   */
  static readonly PostBioDeviceAdminCreatePath = '/api/v1/bio-device/admin-create';

  /**
   * Link Api: /api/v1/bio-device/admin-create
   *
   * thêm người quản lí cho máy chấm công.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postBioDeviceAdminCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postBioDeviceAdminCreate_Response(params?: {
    body?: BioDeviceAdminCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.PostBioDeviceAdminCreatePath, 'post');
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
   * Link Api: /api/v1/bio-device/admin-create
   *
   * thêm người quản lí cho máy chấm công.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postBioDeviceAdminCreate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postBioDeviceAdminCreate(params?: {
    body?: BioDeviceAdminCreateDto
  }): Observable<void> {

    return this.postBioDeviceAdminCreate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteBioDeviceDeviceSerialNoAdminDeleteUserId
   */
  static readonly DeleteBioDeviceDeviceSerialNoAdminDeleteUserIdPath = '/api/v1/bio-device/{deviceSerialNo}/admin-delete/{userId}';

  /**
   * Link Api: /api/v1/bio-device/{deviceSerialNo}/admin-delete/{userId}
   *
   * xóa người quản lý máy chấm công.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBioDeviceDeviceSerialNoAdminDeleteUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBioDeviceDeviceSerialNoAdminDeleteUserId_Response(params: {
    deviceSerialNo: string;
    userId: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.DeleteBioDeviceDeviceSerialNoAdminDeleteUserIdPath, 'delete');
    if (params) {
      rb.path('deviceSerialNo', params.deviceSerialNo, {});
      rb.path('userId', params.userId, {});
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
   * Link Api: /api/v1/bio-device/{deviceSerialNo}/admin-delete/{userId}
   *
   * xóa người quản lý máy chấm công.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteBioDeviceDeviceSerialNoAdminDeleteUserId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBioDeviceDeviceSerialNoAdminDeleteUserId(params: {
    deviceSerialNo: string;
    userId: string;
  }): Observable<void> {

    return this.deleteBioDeviceDeviceSerialNoAdminDeleteUserId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getBioDeviceUser
   */
  static readonly GetBioDeviceUserPath = '/api/v1/bio-device/user';

  /**
   * Link Api: /api/v1/bio-device/user
   *
   * danh sách user(có mã code chấm công) tương ứng với mã máy chấm công(ở filter).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBioDeviceUser_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceUser_Plain_Response(params?: {
    DeviceSerialNo?: string;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<BioDeviceUserDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.GetBioDeviceUserPath, 'get');
    if (params) {
      rb.query('DeviceSerialNo', params.DeviceSerialNo, {});
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
        return r as THRMStrictHttpResponse<BioDeviceUserDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/bio-device/user
   *
   * danh sách user(có mã code chấm công) tương ứng với mã máy chấm công(ở filter).
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBioDeviceUser_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceUser_Plain(params?: {
    DeviceSerialNo?: string;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<BioDeviceUserDtoPagedResultDto> {

    return this.getBioDeviceUser_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<BioDeviceUserDtoPagedResultDto>) => r.body as BioDeviceUserDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/bio-device/user
   *
   * danh sách user(có mã code chấm công) tương ứng với mã máy chấm công(ở filter).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBioDeviceUser_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceUser_Json_Response(params?: {
    DeviceSerialNo?: string;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<BioDeviceUserDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.GetBioDeviceUserPath, 'get');
    if (params) {
      rb.query('DeviceSerialNo', params.DeviceSerialNo, {});
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
        return r as THRMStrictHttpResponse<BioDeviceUserDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/bio-device/user
   *
   * danh sách user(có mã code chấm công) tương ứng với mã máy chấm công(ở filter).
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBioDeviceUser_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceUser_Json(params?: {
    DeviceSerialNo?: string;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<BioDeviceUserDtoPagedResultDto> {

    return this.getBioDeviceUser_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<BioDeviceUserDtoPagedResultDto>) => r.body as BioDeviceUserDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postBioDeviceUserCreate
   */
  static readonly PostBioDeviceUserCreatePath = '/api/v1/bio-device/user-create';

  /**
   * Link Api: /api/v1/bio-device/user-create
   *
   * thêm code chấm công cho user tương ứng với máy chấm công.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postBioDeviceUserCreate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postBioDeviceUserCreate_Response(params?: {
    body?: BioDeviceUserCreateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.PostBioDeviceUserCreatePath, 'post');
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
   * Link Api: /api/v1/bio-device/user-create
   *
   * thêm code chấm công cho user tương ứng với máy chấm công.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postBioDeviceUserCreate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postBioDeviceUserCreate(params?: {
    body?: BioDeviceUserCreateDto
  }): Observable<void> {

    return this.postBioDeviceUserCreate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putBioDeviceUserUpdate
   */
  static readonly PutBioDeviceUserUpdatePath = '/api/v1/bio-device/user-update';

  /**
   * Link Api: /api/v1/bio-device/user-update
   *
   * thay đổi code chấm công của user đối với 1 máy chấm công.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putBioDeviceUserUpdate()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putBioDeviceUserUpdate_Response(params?: {
    body?: BioDeviceUserUpdateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.PutBioDeviceUserUpdatePath, 'put');
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
   * Link Api: /api/v1/bio-device/user-update
   *
   * thay đổi code chấm công của user đối với 1 máy chấm công.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putBioDeviceUserUpdate_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putBioDeviceUserUpdate(params?: {
    body?: BioDeviceUserUpdateDto
  }): Observable<void> {

    return this.putBioDeviceUserUpdate_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteBioDeviceDeviceSerialNoUserDeleteUserId
   */
  static readonly DeleteBioDeviceDeviceSerialNoUserDeleteUserIdPath = '/api/v1/bio-device/{deviceSerialNo}/user-delete/{userId}';

  /**
   * Link Api: /api/v1/bio-device/{deviceSerialNo}/user-delete/{userId}
   *
   * xóa code chấm công của user tương ứng với máy chấm công.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBioDeviceDeviceSerialNoUserDeleteUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBioDeviceDeviceSerialNoUserDeleteUserId_Response(params: {
    deviceSerialNo: string;
    userId: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.DeleteBioDeviceDeviceSerialNoUserDeleteUserIdPath, 'delete');
    if (params) {
      rb.path('deviceSerialNo', params.deviceSerialNo, {});
      rb.path('userId', params.userId, {});
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
   * Link Api: /api/v1/bio-device/{deviceSerialNo}/user-delete/{userId}
   *
   * xóa code chấm công của user tương ứng với máy chấm công.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteBioDeviceDeviceSerialNoUserDeleteUserId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBioDeviceDeviceSerialNoUserDeleteUserId(params: {
    deviceSerialNo: string;
    userId: string;
  }): Observable<void> {

    return this.deleteBioDeviceDeviceSerialNoUserDeleteUserId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getBioDeviceSerialNoAdmins
   */
  static readonly GetBioDeviceSerialNoAdminsPath = '/api/v1/bio-device/{serialNo}/admins';

  /**
   * Link Api: /api/v1/bio-device/{serialNo}/admins
   *
   * lấy danh sách admin của bio-device.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBioDeviceSerialNoAdmins_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceSerialNoAdmins_Plain_Response(params: {
    serialNo: string;
  }): Observable<THRMStrictHttpResponse<Array<AppUserDisplayDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.GetBioDeviceSerialNoAdminsPath, 'get');
    if (params) {
      rb.path('serialNo', params.serialNo, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AppUserDisplayDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/bio-device/{serialNo}/admins
   *
   * lấy danh sách admin của bio-device.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBioDeviceSerialNoAdmins_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceSerialNoAdmins_Plain(params: {
    serialNo: string;
  }): Observable<Array<AppUserDisplayDto>> {

    return this.getBioDeviceSerialNoAdmins_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AppUserDisplayDto>>) => r.body as Array<AppUserDisplayDto>)
    );
  }

  /**
   * Link Api: /api/v1/bio-device/{serialNo}/admins
   *
   * lấy danh sách admin của bio-device.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBioDeviceSerialNoAdmins_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceSerialNoAdmins_Json_Response(params: {
    serialNo: string;
  }): Observable<THRMStrictHttpResponse<Array<AppUserDisplayDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.GetBioDeviceSerialNoAdminsPath, 'get');
    if (params) {
      rb.path('serialNo', params.serialNo, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AppUserDisplayDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/bio-device/{serialNo}/admins
   *
   * lấy danh sách admin của bio-device.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBioDeviceSerialNoAdmins_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceSerialNoAdmins_Json(params: {
    serialNo: string;
  }): Observable<Array<AppUserDisplayDto>> {

    return this.getBioDeviceSerialNoAdmins_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AppUserDisplayDto>>) => r.body as Array<AppUserDisplayDto>)
    );
  }

  /**
   * Path part for operation getBioDeviceAnonymous
   */
  static readonly GetBioDeviceAnonymousPath = '/api/v1/bio-device/anonymous';

  /**
   * Link Api: /api/v1/bio-device/anonymous
   *
   * lấy danh sách user chưa xác định.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBioDeviceAnonymous_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceAnonymous_Plain_Response(params?: {
    DeviceSerialNo?: string;
    Month?: number;
    Year?: number;
    SearchText?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<BioDeviceAnonymouseDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.GetBioDeviceAnonymousPath, 'get');
    if (params) {
      rb.query('DeviceSerialNo', params.DeviceSerialNo, {});
      rb.query('Month', params.Month, {});
      rb.query('Year', params.Year, {});
      rb.query('SearchText', params.SearchText, {});
      rb.query('Sorting', params.Sorting, {});
      rb.query('SkipCount', params.SkipCount, {});
      rb.query('MaxResultCount', params.MaxResultCount, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<BioDeviceAnonymouseDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/bio-device/anonymous
   *
   * lấy danh sách user chưa xác định.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBioDeviceAnonymous_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceAnonymous_Plain(params?: {
    DeviceSerialNo?: string;
    Month?: number;
    Year?: number;
    SearchText?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<BioDeviceAnonymouseDtoPagedResultDto> {

    return this.getBioDeviceAnonymous_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<BioDeviceAnonymouseDtoPagedResultDto>) => r.body as BioDeviceAnonymouseDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/bio-device/anonymous
   *
   * lấy danh sách user chưa xác định.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBioDeviceAnonymous_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceAnonymous_Json_Response(params?: {
    DeviceSerialNo?: string;
    Month?: number;
    Year?: number;
    SearchText?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<BioDeviceAnonymouseDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.GetBioDeviceAnonymousPath, 'get');
    if (params) {
      rb.query('DeviceSerialNo', params.DeviceSerialNo, {});
      rb.query('Month', params.Month, {});
      rb.query('Year', params.Year, {});
      rb.query('SearchText', params.SearchText, {});
      rb.query('Sorting', params.Sorting, {});
      rb.query('SkipCount', params.SkipCount, {});
      rb.query('MaxResultCount', params.MaxResultCount, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<BioDeviceAnonymouseDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/bio-device/anonymous
   *
   * lấy danh sách user chưa xác định.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBioDeviceAnonymous_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBioDeviceAnonymous_Json(params?: {
    DeviceSerialNo?: string;
    Month?: number;
    Year?: number;
    SearchText?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<BioDeviceAnonymouseDtoPagedResultDto> {

    return this.getBioDeviceAnonymous_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<BioDeviceAnonymouseDtoPagedResultDto>) => r.body as BioDeviceAnonymouseDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation deleteBioDeviceSerialNoAnonymousUserCode
   */
  static readonly DeleteBioDeviceSerialNoAnonymousUserCodePath = '/api/v1/bio-device/{serialNo}/anonymous/{userCode}';

  /**
   * Link Api: /api/v1/bio-device/{serialNo}/anonymous/{userCode}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteBioDeviceSerialNoAnonymousUserCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBioDeviceSerialNoAnonymousUserCode_Response(params: {
    serialNo: string;
    userCode: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BioDeviceService.DeleteBioDeviceSerialNoAnonymousUserCodePath, 'delete');
    if (params) {
      rb.path('serialNo', params.serialNo, {});
      rb.path('userCode', params.userCode, {});
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
   * Link Api: /api/v1/bio-device/{serialNo}/anonymous/{userCode}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteBioDeviceSerialNoAnonymousUserCode_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteBioDeviceSerialNoAnonymousUserCode(params: {
    serialNo: string;
    userCode: string;
  }): Observable<void> {

    return this.deleteBioDeviceSerialNoAnonymousUserCode_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
