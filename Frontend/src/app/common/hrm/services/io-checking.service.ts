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
import { IoCheckingBioSyncDto } from '../models/io-checking-bio-sync-dto';
import { IoCheckingCameraCreateDto } from '../models/io-checking-camera-create-dto';

@Injectable({
  providedIn: 'root',
})
export class IoCheckingService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation postIoCheckingCameraDevice
   */
  static readonly PostIoCheckingCameraDevicePath = '/api/v1/io-checking/camera-device';

  /**
   * Link Api: /api/v1/io-checking/camera-device
   *
   * đồng bộ chấm công từ thiết bị camera.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postIoCheckingCameraDevice()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postIoCheckingCameraDevice_Response(params?: {
    apikey?: string;

    /**
     * <h1>Body Model</h1>
     * <p>
     *   <strong>Code</strong>: Ma nhan vien (string)</p>
     * <p>
     *   <strong>Checktime</strong>: Thoi gian cham cong (datetime)</p>
     * <p>
     *   <strong>DeviceName</strong>: Ma thiet bi (string)</p>
     * <p>
     *   <strong>IOCheckingType</strong>: Loai check unknown: 0,In: 1,Out:2. Neu la unknow thi khong can gui len (int)</p>
     * <p>
     *   <strong>Source</strong>: Loai cham cong (string)</p>
     * <p>
     *   <strong>WorkingDate</strong>: Cham cong cho ngay (date)</p>
     * <p>
     *   <strong>Image</strong>: Base64 string. Neu chua co khong can gui len (string)</p>
     */
    body?: Array<IoCheckingCameraCreateDto>
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, IoCheckingService.PostIoCheckingCameraDevicePath, 'post');
    if (params) {
      rb.header('apikey', params.apikey, {});
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
   * Link Api: /api/v1/io-checking/camera-device
   *
   * đồng bộ chấm công từ thiết bị camera.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postIoCheckingCameraDevice_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postIoCheckingCameraDevice(params?: {
    apikey?: string;

    /**
     * <h1>Body Model</h1>
     * <p>
     *   <strong>Code</strong>: Ma nhan vien (string)</p>
     * <p>
     *   <strong>Checktime</strong>: Thoi gian cham cong (datetime)</p>
     * <p>
     *   <strong>DeviceName</strong>: Ma thiet bi (string)</p>
     * <p>
     *   <strong>IOCheckingType</strong>: Loai check unknown: 0,In: 1,Out:2. Neu la unknow thi khong can gui len (int)</p>
     * <p>
     *   <strong>Source</strong>: Loai cham cong (string)</p>
     * <p>
     *   <strong>WorkingDate</strong>: Cham cong cho ngay (date)</p>
     * <p>
     *   <strong>Image</strong>: Base64 string. Neu chua co khong can gui len (string)</p>
     */
    body?: Array<IoCheckingCameraCreateDto>
  }): Observable<void> {

    return this.postIoCheckingCameraDevice_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postIoCheckingBioDeviceSync
   */
  static readonly PostIoCheckingBioDeviceSyncPath = '/api/v1/io-checking/bio-device-sync';

  /**
   * Link Api: /api/v1/io-checking/bio-device-sync
   *
   * đồng bộ máy chấm công trắc sinh học.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postIoCheckingBioDeviceSync()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postIoCheckingBioDeviceSync_Response(params?: {
    body?: IoCheckingBioSyncDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, IoCheckingService.PostIoCheckingBioDeviceSyncPath, 'post');
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
   * Link Api: /api/v1/io-checking/bio-device-sync
   *
   * đồng bộ máy chấm công trắc sinh học.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postIoCheckingBioDeviceSync_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postIoCheckingBioDeviceSync(params?: {
    body?: IoCheckingBioSyncDto
  }): Observable<void> {

    return this.postIoCheckingBioDeviceSync_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
