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
import { AttachmentRDto } from '../models/attachment-r-dto';

@Injectable({
  providedIn: 'root',
})
export class AttachmentRService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation deleteAttachmentRId
   */
  static readonly DeleteAttachmentRIdPath = '/api/v1/attachmentR/{id}';

  /**
   * Link Api: /api/v1/attachmentR/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAttachmentRId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAttachmentRId_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<AttachmentRDto>> {

    const rb = new RequestBuilder(this.rootUrl, AttachmentRService.DeleteAttachmentRIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AttachmentRDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/attachmentR/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteAttachmentRId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAttachmentRId_Plain(params: {
    id: string;
  }): Observable<AttachmentRDto> {

    return this.deleteAttachmentRId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AttachmentRDto>) => r.body as AttachmentRDto)
    );
  }

  /**
   * Link Api: /api/v1/attachmentR/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteAttachmentRId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAttachmentRId_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<AttachmentRDto>> {

    const rb = new RequestBuilder(this.rootUrl, AttachmentRService.DeleteAttachmentRIdPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AttachmentRDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/attachmentR/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteAttachmentRId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteAttachmentRId_Json(params: {
    id: string;
  }): Observable<AttachmentRDto> {

    return this.deleteAttachmentRId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AttachmentRDto>) => r.body as AttachmentRDto)
    );
  }

  /**
   * Path part for operation postAttachmentRDownLoadId
   */
  static readonly PostAttachmentRDownLoadIdPath = '/api/v1/attachmentR/down-load/{id}';

  /**
   * Link Api: /api/v1/attachmentR/down-load/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postAttachmentRDownLoadId()` instead.
   *
   * This method doesn't expect any request body.
   */
  postAttachmentRDownLoadId_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AttachmentRService.PostAttachmentRDownLoadIdPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
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
   * Link Api: /api/v1/attachmentR/down-load/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postAttachmentRDownLoadId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postAttachmentRDownLoadId(params: {
    id: string;
  }): Observable<void> {

    return this.postAttachmentRDownLoadId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

}
