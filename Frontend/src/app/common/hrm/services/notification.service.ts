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
import { KeepingKind } from '../models/keeping-kind';
import { SendNotifyApprovalExtraDto } from '../models/send-notify-approval-extra-dto';
import { SendNotifyCheckInDto } from '../models/send-notify-check-in-dto';
import { SendNotifyCheckOutDto } from '../models/send-notify-check-out-dto';
import { SendNotifyRequestFurloughDto } from '../models/send-notify-request-furlough-dto';
import { SendNotifyRequestTimeKeepingDto } from '../models/send-notify-request-time-keeping-dto';
import { SendNotifyRequestWorkingKindDto } from '../models/send-notify-request-working-kind-dto';
import { SendNotifyUndoApprovalExtraDto } from '../models/send-notify-undo-approval-extra-dto';

@Injectable({
  providedIn: 'root',
})
export class NotificationService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation postApiAppNotificationSendNotifyCheckInToHost
   */
  static readonly PostApiAppNotificationSendNotifyCheckInToHostPath = '/api/app/notification/send-notify-check-in-to-host';

  /**
   * Link Api: /api/app/notification/send-notify-check-in-to-host
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppNotificationSendNotifyCheckInToHost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppNotificationSendNotifyCheckInToHost_Response(params?: {
    body?: SendNotifyCheckInDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.PostApiAppNotificationSendNotifyCheckInToHostPath, 'post');
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
   * Link Api: /api/app/notification/send-notify-check-in-to-host
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppNotificationSendNotifyCheckInToHost_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppNotificationSendNotifyCheckInToHost(params?: {
    body?: SendNotifyCheckInDto
  }): Observable<void> {

    return this.postApiAppNotificationSendNotifyCheckInToHost_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppNotificationSendNotifyCheckOutToHost
   */
  static readonly PostApiAppNotificationSendNotifyCheckOutToHostPath = '/api/app/notification/send-notify-check-out-to-host';

  /**
   * Link Api: /api/app/notification/send-notify-check-out-to-host
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppNotificationSendNotifyCheckOutToHost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppNotificationSendNotifyCheckOutToHost_Response(params?: {
    body?: SendNotifyCheckOutDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.PostApiAppNotificationSendNotifyCheckOutToHostPath, 'post');
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
   * Link Api: /api/app/notification/send-notify-check-out-to-host
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppNotificationSendNotifyCheckOutToHost_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppNotificationSendNotifyCheckOutToHost(params?: {
    body?: SendNotifyCheckOutDto
  }): Observable<void> {

    return this.postApiAppNotificationSendNotifyCheckOutToHost_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppNotificationSendNotifyTimeKeepingToHost
   */
  static readonly PostApiAppNotificationSendNotifyTimeKeepingToHostPath = '/api/app/notification/send-notify-time-keeping-to-host';

  /**
   * Link Api: /api/app/notification/send-notify-time-keeping-to-host
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppNotificationSendNotifyTimeKeepingToHost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppNotificationSendNotifyTimeKeepingToHost_Response(params?: {
    body?: SendNotifyRequestTimeKeepingDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.PostApiAppNotificationSendNotifyTimeKeepingToHostPath, 'post');
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
   * Link Api: /api/app/notification/send-notify-time-keeping-to-host
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppNotificationSendNotifyTimeKeepingToHost_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppNotificationSendNotifyTimeKeepingToHost(params?: {
    body?: SendNotifyRequestTimeKeepingDto
  }): Observable<void> {

    return this.postApiAppNotificationSendNotifyTimeKeepingToHost_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppNotificationSendNotifyFurloughToHost
   */
  static readonly PostApiAppNotificationSendNotifyFurloughToHostPath = '/api/app/notification/send-notify-furlough-to-host';

  /**
   * Link Api: /api/app/notification/send-notify-furlough-to-host
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppNotificationSendNotifyFurloughToHost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppNotificationSendNotifyFurloughToHost_Response(params?: {
    body?: SendNotifyRequestFurloughDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.PostApiAppNotificationSendNotifyFurloughToHostPath, 'post');
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
   * Link Api: /api/app/notification/send-notify-furlough-to-host
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppNotificationSendNotifyFurloughToHost_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppNotificationSendNotifyFurloughToHost(params?: {
    body?: SendNotifyRequestFurloughDto
  }): Observable<void> {

    return this.postApiAppNotificationSendNotifyFurloughToHost_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppNotificationSendNotifyWorkingKindToHost
   */
  static readonly PostApiAppNotificationSendNotifyWorkingKindToHostPath = '/api/app/notification/send-notify-working-kind-to-host';

  /**
   * Link Api: /api/app/notification/send-notify-working-kind-to-host
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppNotificationSendNotifyWorkingKindToHost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppNotificationSendNotifyWorkingKindToHost_Response(params?: {
    body?: SendNotifyRequestWorkingKindDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.PostApiAppNotificationSendNotifyWorkingKindToHostPath, 'post');
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
   * Link Api: /api/app/notification/send-notify-working-kind-to-host
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppNotificationSendNotifyWorkingKindToHost_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppNotificationSendNotifyWorkingKindToHost(params?: {
    body?: SendNotifyRequestWorkingKindDto
  }): Observable<void> {

    return this.postApiAppNotificationSendNotifyWorkingKindToHost_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppNotificationSendNotifyApprovalToHost
   */
  static readonly PostApiAppNotificationSendNotifyApprovalToHostPath = '/api/app/notification/send-notify-approval-to-host';

  /**
   * Link Api: /api/app/notification/send-notify-approval-to-host
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppNotificationSendNotifyApprovalToHost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppNotificationSendNotifyApprovalToHost_Response(params?: {
    keepingKind?: KeepingKind;
    body?: SendNotifyApprovalExtraDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.PostApiAppNotificationSendNotifyApprovalToHostPath, 'post');
    if (params) {
      rb.query('keepingKind', params.keepingKind, {});
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
   * Link Api: /api/app/notification/send-notify-approval-to-host
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppNotificationSendNotifyApprovalToHost_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppNotificationSendNotifyApprovalToHost(params?: {
    keepingKind?: KeepingKind;
    body?: SendNotifyApprovalExtraDto
  }): Observable<void> {

    return this.postApiAppNotificationSendNotifyApprovalToHost_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation postApiAppNotificationSendNotifyUndoApprovalToHost
   */
  static readonly PostApiAppNotificationSendNotifyUndoApprovalToHostPath = '/api/app/notification/send-notify-undo-approval-to-host';

  /**
   * Link Api: /api/app/notification/send-notify-undo-approval-to-host
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiAppNotificationSendNotifyUndoApprovalToHost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppNotificationSendNotifyUndoApprovalToHost_Response(params?: {
    keepingKind?: KeepingKind;
    body?: SendNotifyUndoApprovalExtraDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, NotificationService.PostApiAppNotificationSendNotifyUndoApprovalToHostPath, 'post');
    if (params) {
      rb.query('keepingKind', params.keepingKind, {});
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
   * Link Api: /api/app/notification/send-notify-undo-approval-to-host
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiAppNotificationSendNotifyUndoApprovalToHost_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiAppNotificationSendNotifyUndoApprovalToHost(params?: {
    keepingKind?: KeepingKind;
    body?: SendNotifyUndoApprovalExtraDto
  }): Observable<void> {

    return this.postApiAppNotificationSendNotifyUndoApprovalToHost_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
