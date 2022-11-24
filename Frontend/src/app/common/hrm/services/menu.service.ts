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
import { MenuModel } from '../models/menu-model';

@Injectable({
  providedIn: 'root',
})
export class MenuService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getMenu
   */
  static readonly GetMenuPath = '/api/v1/menu';

  /**
   * Link Api: /api/v1/menu
   *
   * lấy danh sách menu cho app.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMenu_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMenu_Plain_Response(params?: {
  }): Observable<THRMStrictHttpResponse<Array<MenuModel>>> {

    const rb = new RequestBuilder(this.rootUrl, MenuService.GetMenuPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<MenuModel>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/menu
   *
   * lấy danh sách menu cho app.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getMenu_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMenu_Plain(params?: {
  }): Observable<Array<MenuModel>> {

    return this.getMenu_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<MenuModel>>) => r.body as Array<MenuModel>)
    );
  }

  /**
   * Link Api: /api/v1/menu
   *
   * lấy danh sách menu cho app.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMenu_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMenu_Json_Response(params?: {
  }): Observable<THRMStrictHttpResponse<Array<MenuModel>>> {

    const rb = new RequestBuilder(this.rootUrl, MenuService.GetMenuPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<MenuModel>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/menu
   *
   * lấy danh sách menu cho app.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getMenu_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMenu_Json(params?: {
  }): Observable<Array<MenuModel>> {

    return this.getMenu_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<MenuModel>>) => r.body as Array<MenuModel>)
    );
  }

}
