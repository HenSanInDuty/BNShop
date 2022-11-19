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
import { AccountUserFindByPhoneNumberResultDto } from '../models/account-user-find-by-phone-number-result-dto';
import { AppUserCheckByCodeDto } from '../models/app-user-check-by-code-dto';
import { AppUserCheckByEmailDto } from '../models/app-user-check-by-email-dto';
import { AppUserCheckByPhoneNumberDto } from '../models/app-user-check-by-phone-number-dto';
import { AppUserCheckByUserNameDto } from '../models/app-user-check-by-user-name-dto';
import { AppUserCheckValidResultDto } from '../models/app-user-check-valid-result-dto';
import { AppUserCreateDto } from '../models/app-user-create-dto';
import { AppUserDeviceSyncDto } from '../models/app-user-device-sync-dto';
import { AppUserDto } from '../models/app-user-dto';
import { AppUserDtoPagedResultDto } from '../models/app-user-dto-paged-result-dto';
import { AppUserKeepingDto } from '../models/app-user-keeping-dto';
import { AppUserKeepingDtoPagedResultDto } from '../models/app-user-keeping-dto-paged-result-dto';
import { AppUserListAndCountByBirthDayDto } from '../models/app-user-list-and-count-by-birth-day-dto';
import { AppUserProfileDto } from '../models/app-user-profile-dto';
import { AppUserReportKeepingPersonnalDto } from '../models/app-user-report-keeping-personnal-dto';
import { AppUserResultWhenCreateDto } from '../models/app-user-result-when-create-dto';
import { AppUserStatisticalPersonnelByPositionAndMonthDto } from '../models/app-user-statistical-personnel-by-position-and-month-dto';
import { AppUserStatisticalVolatilityPersonnelByMonthDto } from '../models/app-user-statistical-volatility-personnel-by-month-dto';
import { AppUserUpdateBranchDto } from '../models/app-user-update-branch-dto';
import { AppUserUpdateDepartmentDto } from '../models/app-user-update-department-dto';
import { AppUserUpdateDto } from '../models/app-user-update-dto';
import { AppUserUpdateIsActiveDto } from '../models/app-user-update-is-active-dto';
import { AppUserUpdatePositionDto } from '../models/app-user-update-position-dto';
import { AttachmentRDto } from '../models/attachment-r-dto';
import { CheckFaceValidWithUrlResponseDto } from '../models/check-face-valid-with-url-response-dto';
import { CommonResponseAiDto } from '../models/common-response-ai-dto';
import { DeviceSyncDto } from '../models/device-sync-dto';
import { IdentityRoleDtoListResultDto } from '../models/identity-role-dto-list-result-dto';
import { IdentityUserCreateDto } from '../models/identity-user-create-dto';
import { IdentityUserDto } from '../models/identity-user-dto';
import { IdentityUserDtoPagedResultDto } from '../models/identity-user-dto-paged-result-dto';
import { IdentityUserUpdateDto } from '../models/identity-user-update-dto';
import { IdentityUserUpdateRolesDto } from '../models/identity-user-update-roles-dto';
import { UserLogDto } from '../models/user-log-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService extends THRMBaseService {
  constructor(
    config: THRMApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getUser
   */
  static readonly GetUserPath = '/api/v1/user';

  /**
   * Link Api: /api/v1/user
   *
   * lấy danh sách user theo filter và có thể bỏ qua những user với id truyền vào.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUser_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser_Plain_Response(params?: {
    BranchId?: string;
    DepartmentId?: string;
    SearchText?: string;
    IgnoreUsers?: Array<string>;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<AppUserDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserPath, 'get');
    if (params) {
      rb.query('BranchId', params.BranchId, {});
      rb.query('DepartmentId', params.DepartmentId, {});
      rb.query('SearchText', params.SearchText, {});
      rb.query('IgnoreUsers', params.IgnoreUsers, {});
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
        return r as THRMStrictHttpResponse<AppUserDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user
   *
   * lấy danh sách user theo filter và có thể bỏ qua những user với id truyền vào.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUser_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser_Plain(params?: {
    BranchId?: string;
    DepartmentId?: string;
    SearchText?: string;
    IgnoreUsers?: Array<string>;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<AppUserDtoPagedResultDto> {

    return this.getUser_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserDtoPagedResultDto>) => r.body as AppUserDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/user
   *
   * lấy danh sách user theo filter và có thể bỏ qua những user với id truyền vào.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUser_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser_Json_Response(params?: {
    BranchId?: string;
    DepartmentId?: string;
    SearchText?: string;
    IgnoreUsers?: Array<string>;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<AppUserDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserPath, 'get');
    if (params) {
      rb.query('BranchId', params.BranchId, {});
      rb.query('DepartmentId', params.DepartmentId, {});
      rb.query('SearchText', params.SearchText, {});
      rb.query('IgnoreUsers', params.IgnoreUsers, {});
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
        return r as THRMStrictHttpResponse<AppUserDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user
   *
   * lấy danh sách user theo filter và có thể bỏ qua những user với id truyền vào.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUser_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser_Json(params?: {
    BranchId?: string;
    DepartmentId?: string;
    SearchText?: string;
    IgnoreUsers?: Array<string>;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<AppUserDtoPagedResultDto> {

    return this.getUser_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserDtoPagedResultDto>) => r.body as AppUserDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postUserUploadAvatarPersonal
   */
  static readonly PostUserUploadAvatarPersonalPath = '/api/v1/user/upload-avatar-personal';

  /**
   * Link Api: /api/v1/user/upload-avatar-personal
   *
   * uplaod avatar cá nhân của user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserUploadAvatarPersonal_Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserUploadAvatarPersonal_Plain_Response(params?: {
    body?: {
'File'?: Blob;
}
  }): Observable<THRMStrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserUploadAvatarPersonalPath, 'post');
    if (params) {
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
   * Link Api: /api/v1/user/upload-avatar-personal
   *
   * uplaod avatar cá nhân của user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserUploadAvatarPersonal_Plain_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserUploadAvatarPersonal_Plain(params?: {
    body?: {
'File'?: Blob;
}
  }): Observable<string> {

    return this.postUserUploadAvatarPersonal_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Link Api: /api/v1/user/upload-avatar-personal
   *
   * uplaod avatar cá nhân của user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserUploadAvatarPersonal_Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserUploadAvatarPersonal_Json_Response(params?: {
    body?: {
'File'?: Blob;
}
  }): Observable<THRMStrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserUploadAvatarPersonalPath, 'post');
    if (params) {
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
   * Link Api: /api/v1/user/upload-avatar-personal
   *
   * uplaod avatar cá nhân của user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserUploadAvatarPersonal_Json_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserUploadAvatarPersonal_Json(params?: {
    body?: {
'File'?: Blob;
}
  }): Observable<string> {

    return this.postUserUploadAvatarPersonal_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation postUserUploadAvatarSystemUserId
   */
  static readonly PostUserUploadAvatarSystemUserIdPath = '/api/v1/user/upload-avatar-system/{userId}';

  /**
   * Link Api: /api/v1/user/upload-avatar-system/{userId}
   *
   * upload avatar trên hệ thống của user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserUploadAvatarSystemUserId_Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserUploadAvatarSystemUserId_Plain_Response(params: {
    userId: string;
    body?: {
'File'?: Blob;
}
  }): Observable<THRMStrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserUploadAvatarSystemUserIdPath, 'post');
    if (params) {
      rb.path('userId', params.userId, {});
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
   * Link Api: /api/v1/user/upload-avatar-system/{userId}
   *
   * upload avatar trên hệ thống của user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserUploadAvatarSystemUserId_Plain_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserUploadAvatarSystemUserId_Plain(params: {
    userId: string;
    body?: {
'File'?: Blob;
}
  }): Observable<string> {

    return this.postUserUploadAvatarSystemUserId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Link Api: /api/v1/user/upload-avatar-system/{userId}
   *
   * upload avatar trên hệ thống của user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserUploadAvatarSystemUserId_Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserUploadAvatarSystemUserId_Json_Response(params: {
    userId: string;
    body?: {
'File'?: Blob;
}
  }): Observable<THRMStrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserUploadAvatarSystemUserIdPath, 'post');
    if (params) {
      rb.path('userId', params.userId, {});
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
   * Link Api: /api/v1/user/upload-avatar-system/{userId}
   *
   * upload avatar trên hệ thống của user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserUploadAvatarSystemUserId_Json_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserUploadAvatarSystemUserId_Json(params: {
    userId: string;
    body?: {
'File'?: Blob;
}
  }): Observable<string> {

    return this.postUserUploadAvatarSystemUserId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation getUserGetListWithNoCurrentUser
   */
  static readonly GetUserGetListWithNoCurrentUserPath = '/api/v1/user/get-list-with-no-current-user';

  /**
   * Link Api: /api/v1/user/get-list-with-no-current-user
   *
   * lấy danh sách user trừ user đang đăng nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserGetListWithNoCurrentUser_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserGetListWithNoCurrentUser_Plain_Response(params?: {
    BranchId?: string;
    DepartmentId?: string;
    SearchText?: string;
    IgnoreUsers?: Array<string>;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<AppUserDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserGetListWithNoCurrentUserPath, 'get');
    if (params) {
      rb.query('BranchId', params.BranchId, {});
      rb.query('DepartmentId', params.DepartmentId, {});
      rb.query('SearchText', params.SearchText, {});
      rb.query('IgnoreUsers', params.IgnoreUsers, {});
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
        return r as THRMStrictHttpResponse<AppUserDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/get-list-with-no-current-user
   *
   * lấy danh sách user trừ user đang đăng nhập.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserGetListWithNoCurrentUser_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserGetListWithNoCurrentUser_Plain(params?: {
    BranchId?: string;
    DepartmentId?: string;
    SearchText?: string;
    IgnoreUsers?: Array<string>;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<AppUserDtoPagedResultDto> {

    return this.getUserGetListWithNoCurrentUser_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserDtoPagedResultDto>) => r.body as AppUserDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/user/get-list-with-no-current-user
   *
   * lấy danh sách user trừ user đang đăng nhập.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserGetListWithNoCurrentUser_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserGetListWithNoCurrentUser_Json_Response(params?: {
    BranchId?: string;
    DepartmentId?: string;
    SearchText?: string;
    IgnoreUsers?: Array<string>;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<AppUserDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserGetListWithNoCurrentUserPath, 'get');
    if (params) {
      rb.query('BranchId', params.BranchId, {});
      rb.query('DepartmentId', params.DepartmentId, {});
      rb.query('SearchText', params.SearchText, {});
      rb.query('IgnoreUsers', params.IgnoreUsers, {});
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
        return r as THRMStrictHttpResponse<AppUserDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/get-list-with-no-current-user
   *
   * lấy danh sách user trừ user đang đăng nhập.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserGetListWithNoCurrentUser_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserGetListWithNoCurrentUser_Json(params?: {
    BranchId?: string;
    DepartmentId?: string;
    SearchText?: string;
    IgnoreUsers?: Array<string>;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<AppUserDtoPagedResultDto> {

    return this.getUserGetListWithNoCurrentUser_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserDtoPagedResultDto>) => r.body as AppUserDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postUserCreate
   */
  static readonly PostUserCreatePath = '/api/v1/user/create';

  /**
   * Link Api: /api/v1/user/create
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserCreate_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCreate_Plain_Response(params?: {
    body?: AppUserCreateDto
  }): Observable<THRMStrictHttpResponse<AppUserResultWhenCreateDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserResultWhenCreateDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/create
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserCreate_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCreate_Plain(params?: {
    body?: AppUserCreateDto
  }): Observable<AppUserResultWhenCreateDto> {

    return this.postUserCreate_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserResultWhenCreateDto>) => r.body as AppUserResultWhenCreateDto)
    );
  }

  /**
   * Link Api: /api/v1/user/create
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserCreate_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCreate_Json_Response(params?: {
    body?: AppUserCreateDto
  }): Observable<THRMStrictHttpResponse<AppUserResultWhenCreateDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserCreatePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserResultWhenCreateDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/create
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserCreate_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCreate_Json(params?: {
    body?: AppUserCreateDto
  }): Observable<AppUserResultWhenCreateDto> {

    return this.postUserCreate_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserResultWhenCreateDto>) => r.body as AppUserResultWhenCreateDto)
    );
  }

  /**
   * Path part for operation putUserUpdateId
   */
  static readonly PutUserUpdateIdPath = '/api/v1/user/update/{id}';

  /**
   * Link Api: /api/v1/user/update/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putUserUpdateId()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putUserUpdateId_Response(params: {
    id: string;
    body?: AppUserUpdateDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PutUserUpdateIdPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
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
   * Link Api: /api/v1/user/update/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putUserUpdateId_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putUserUpdateId(params: {
    id: string;
    body?: AppUserUpdateDto
  }): Observable<void> {

    return this.putUserUpdateId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getUserProfile
   */
  static readonly GetUserProfilePath = '/api/v1/user/profile';

  /**
   * Link Api: /api/v1/user/profile
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserProfile_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserProfile_Plain_Response(params?: {
  }): Observable<THRMStrictHttpResponse<AppUserProfileDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserProfilePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserProfileDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/profile
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserProfile_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserProfile_Plain(params?: {
  }): Observable<AppUserProfileDto> {

    return this.getUserProfile_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserProfileDto>) => r.body as AppUserProfileDto)
    );
  }

  /**
   * Link Api: /api/v1/user/profile
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserProfile_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserProfile_Json_Response(params?: {
  }): Observable<THRMStrictHttpResponse<AppUserProfileDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserProfilePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserProfileDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/profile
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserProfile_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserProfile_Json(params?: {
  }): Observable<AppUserProfileDto> {

    return this.getUserProfile_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserProfileDto>) => r.body as AppUserProfileDto)
    );
  }

  /**
   * Path part for operation getUserRoles
   */
  static readonly GetUserRolesPath = '/api/v1/user/roles';

  /**
   * Link Api: /api/v1/user/roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserRoles_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserRoles_Plain_Response(params?: {
  }): Observable<THRMStrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserRolesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/roles
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserRoles_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserRoles_Plain(params?: {
  }): Observable<Array<string>> {

    return this.getUserRoles_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Link Api: /api/v1/user/roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserRoles_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserRoles_Json_Response(params?: {
  }): Observable<THRMStrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserRolesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/roles
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserRoles_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserRoles_Json(params?: {
  }): Observable<Array<string>> {

    return this.getUserRoles_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Path part for operation getUserFindAccountUserByPhone
   */
  static readonly GetUserFindAccountUserByPhonePath = '/api/v1/user/find-account-user-by-phone';

  /**
   * Link Api: /api/v1/user/find-account-user-by-phone
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserFindAccountUserByPhone_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserFindAccountUserByPhone_Plain_Response(params?: {
    phone?: string;
  }): Observable<THRMStrictHttpResponse<AccountUserFindByPhoneNumberResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserFindAccountUserByPhonePath, 'get');
    if (params) {
      rb.query('phone', params.phone, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AccountUserFindByPhoneNumberResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/find-account-user-by-phone
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserFindAccountUserByPhone_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserFindAccountUserByPhone_Plain(params?: {
    phone?: string;
  }): Observable<AccountUserFindByPhoneNumberResultDto> {

    return this.getUserFindAccountUserByPhone_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AccountUserFindByPhoneNumberResultDto>) => r.body as AccountUserFindByPhoneNumberResultDto)
    );
  }

  /**
   * Link Api: /api/v1/user/find-account-user-by-phone
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserFindAccountUserByPhone_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserFindAccountUserByPhone_Json_Response(params?: {
    phone?: string;
  }): Observable<THRMStrictHttpResponse<AccountUserFindByPhoneNumberResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserFindAccountUserByPhonePath, 'get');
    if (params) {
      rb.query('phone', params.phone, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AccountUserFindByPhoneNumberResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/find-account-user-by-phone
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserFindAccountUserByPhone_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserFindAccountUserByPhone_Json(params?: {
    phone?: string;
  }): Observable<AccountUserFindByPhoneNumberResultDto> {

    return this.getUserFindAccountUserByPhone_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AccountUserFindByPhoneNumberResultDto>) => r.body as AccountUserFindByPhoneNumberResultDto)
    );
  }

  /**
   * Path part for operation postUserDeviceSync
   */
  static readonly PostUserDeviceSyncPath = '/api/v1/user/device-sync';

  /**
   * Link Api: /api/v1/user/device-sync
   *
   * api dong bo user giua app va may cham cong.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserDeviceSync_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserDeviceSync_Plain_Response(params?: {

    /**
     * api gui len header
     */
    apikey?: string;

    /**
     * <h1>Body Model</h1>
     * <p>
     *   <strong>deviceName</strong>: id cua thiet bi (deviceName) (string)</p>
     */
    body?: DeviceSyncDto
  }): Observable<THRMStrictHttpResponse<Array<AppUserDeviceSyncDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserDeviceSyncPath, 'post');
    if (params) {
      rb.header('apikey', params.apikey, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AppUserDeviceSyncDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/device-sync
   *
   * api dong bo user giua app va may cham cong.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserDeviceSync_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserDeviceSync_Plain(params?: {

    /**
     * api gui len header
     */
    apikey?: string;

    /**
     * <h1>Body Model</h1>
     * <p>
     *   <strong>deviceName</strong>: id cua thiet bi (deviceName) (string)</p>
     */
    body?: DeviceSyncDto
  }): Observable<Array<AppUserDeviceSyncDto>> {

    return this.postUserDeviceSync_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AppUserDeviceSyncDto>>) => r.body as Array<AppUserDeviceSyncDto>)
    );
  }

  /**
   * Link Api: /api/v1/user/device-sync
   *
   * api dong bo user giua app va may cham cong.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserDeviceSync_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserDeviceSync_Json_Response(params?: {

    /**
     * api gui len header
     */
    apikey?: string;

    /**
     * <h1>Body Model</h1>
     * <p>
     *   <strong>deviceName</strong>: id cua thiet bi (deviceName) (string)</p>
     */
    body?: DeviceSyncDto
  }): Observable<THRMStrictHttpResponse<Array<AppUserDeviceSyncDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserDeviceSyncPath, 'post');
    if (params) {
      rb.header('apikey', params.apikey, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AppUserDeviceSyncDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/device-sync
   *
   * api dong bo user giua app va may cham cong.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserDeviceSync_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserDeviceSync_Json(params?: {

    /**
     * api gui len header
     */
    apikey?: string;

    /**
     * <h1>Body Model</h1>
     * <p>
     *   <strong>deviceName</strong>: id cua thiet bi (deviceName) (string)</p>
     */
    body?: DeviceSyncDto
  }): Observable<Array<AppUserDeviceSyncDto>> {

    return this.postUserDeviceSync_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AppUserDeviceSyncDto>>) => r.body as Array<AppUserDeviceSyncDto>)
    );
  }

  /**
   * Path part for operation postUserCheckAvailableEmail
   */
  static readonly PostUserCheckAvailableEmailPath = '/api/v1/user/check-available-email';

  /**
   * Link Api: /api/v1/user/check-available-email
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserCheckAvailableEmail_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailableEmail_Plain_Response(params?: {
    body?: AppUserCheckByEmailDto
  }): Observable<THRMStrictHttpResponse<AppUserCheckValidResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserCheckAvailableEmailPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserCheckValidResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/check-available-email
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserCheckAvailableEmail_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailableEmail_Plain(params?: {
    body?: AppUserCheckByEmailDto
  }): Observable<AppUserCheckValidResultDto> {

    return this.postUserCheckAvailableEmail_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserCheckValidResultDto>) => r.body as AppUserCheckValidResultDto)
    );
  }

  /**
   * Link Api: /api/v1/user/check-available-email
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserCheckAvailableEmail_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailableEmail_Json_Response(params?: {
    body?: AppUserCheckByEmailDto
  }): Observable<THRMStrictHttpResponse<AppUserCheckValidResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserCheckAvailableEmailPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserCheckValidResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/check-available-email
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserCheckAvailableEmail_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailableEmail_Json(params?: {
    body?: AppUserCheckByEmailDto
  }): Observable<AppUserCheckValidResultDto> {

    return this.postUserCheckAvailableEmail_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserCheckValidResultDto>) => r.body as AppUserCheckValidResultDto)
    );
  }

  /**
   * Path part for operation postUserCheckAvailableUserName
   */
  static readonly PostUserCheckAvailableUserNamePath = '/api/v1/user/check-available-user-name';

  /**
   * Link Api: /api/v1/user/check-available-user-name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserCheckAvailableUserName_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailableUserName_Plain_Response(params?: {
    body?: AppUserCheckByUserNameDto
  }): Observable<THRMStrictHttpResponse<AppUserCheckValidResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserCheckAvailableUserNamePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserCheckValidResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/check-available-user-name
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserCheckAvailableUserName_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailableUserName_Plain(params?: {
    body?: AppUserCheckByUserNameDto
  }): Observable<AppUserCheckValidResultDto> {

    return this.postUserCheckAvailableUserName_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserCheckValidResultDto>) => r.body as AppUserCheckValidResultDto)
    );
  }

  /**
   * Link Api: /api/v1/user/check-available-user-name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserCheckAvailableUserName_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailableUserName_Json_Response(params?: {
    body?: AppUserCheckByUserNameDto
  }): Observable<THRMStrictHttpResponse<AppUserCheckValidResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserCheckAvailableUserNamePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserCheckValidResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/check-available-user-name
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserCheckAvailableUserName_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailableUserName_Json(params?: {
    body?: AppUserCheckByUserNameDto
  }): Observable<AppUserCheckValidResultDto> {

    return this.postUserCheckAvailableUserName_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserCheckValidResultDto>) => r.body as AppUserCheckValidResultDto)
    );
  }

  /**
   * Path part for operation postUserCheckAvailableCode
   */
  static readonly PostUserCheckAvailableCodePath = '/api/v1/user/check-available-code';

  /**
   * Link Api: /api/v1/user/check-available-code
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserCheckAvailableCode_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailableCode_Plain_Response(params?: {
    body?: AppUserCheckByCodeDto
  }): Observable<THRMStrictHttpResponse<AppUserCheckValidResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserCheckAvailableCodePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserCheckValidResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/check-available-code
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserCheckAvailableCode_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailableCode_Plain(params?: {
    body?: AppUserCheckByCodeDto
  }): Observable<AppUserCheckValidResultDto> {

    return this.postUserCheckAvailableCode_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserCheckValidResultDto>) => r.body as AppUserCheckValidResultDto)
    );
  }

  /**
   * Link Api: /api/v1/user/check-available-code
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserCheckAvailableCode_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailableCode_Json_Response(params?: {
    body?: AppUserCheckByCodeDto
  }): Observable<THRMStrictHttpResponse<AppUserCheckValidResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserCheckAvailableCodePath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserCheckValidResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/check-available-code
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserCheckAvailableCode_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailableCode_Json(params?: {
    body?: AppUserCheckByCodeDto
  }): Observable<AppUserCheckValidResultDto> {

    return this.postUserCheckAvailableCode_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserCheckValidResultDto>) => r.body as AppUserCheckValidResultDto)
    );
  }

  /**
   * Path part for operation postUserCheckAvailablePhoneNumber
   */
  static readonly PostUserCheckAvailablePhoneNumberPath = '/api/v1/user/check-available-phone-number';

  /**
   * Link Api: /api/v1/user/check-available-phone-number
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserCheckAvailablePhoneNumber_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailablePhoneNumber_Plain_Response(params?: {
    body?: AppUserCheckByPhoneNumberDto
  }): Observable<THRMStrictHttpResponse<AppUserCheckValidResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserCheckAvailablePhoneNumberPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserCheckValidResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/check-available-phone-number
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserCheckAvailablePhoneNumber_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailablePhoneNumber_Plain(params?: {
    body?: AppUserCheckByPhoneNumberDto
  }): Observable<AppUserCheckValidResultDto> {

    return this.postUserCheckAvailablePhoneNumber_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserCheckValidResultDto>) => r.body as AppUserCheckValidResultDto)
    );
  }

  /**
   * Link Api: /api/v1/user/check-available-phone-number
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserCheckAvailablePhoneNumber_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailablePhoneNumber_Json_Response(params?: {
    body?: AppUserCheckByPhoneNumberDto
  }): Observable<THRMStrictHttpResponse<AppUserCheckValidResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserCheckAvailablePhoneNumberPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserCheckValidResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/check-available-phone-number
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserCheckAvailablePhoneNumber_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postUserCheckAvailablePhoneNumber_Json(params?: {
    body?: AppUserCheckByPhoneNumberDto
  }): Observable<AppUserCheckValidResultDto> {

    return this.postUserCheckAvailablePhoneNumber_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserCheckValidResultDto>) => r.body as AppUserCheckValidResultDto)
    );
  }

  /**
   * Path part for operation getUserDetailId
   */
  static readonly GetUserDetailIdPath = '/api/v1/user/detail/{id}';

  /**
   * Link Api: /api/v1/user/detail/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserDetailId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserDetailId_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<AppUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserDetailIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/detail/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserDetailId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserDetailId_Plain(params: {
    id: string;
  }): Observable<AppUserDto> {

    return this.getUserDetailId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserDto>) => r.body as AppUserDto)
    );
  }

  /**
   * Link Api: /api/v1/user/detail/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserDetailId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserDetailId_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<AppUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserDetailIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/detail/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserDetailId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserDetailId_Json(params: {
    id: string;
  }): Observable<AppUserDto> {

    return this.getUserDetailId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserDto>) => r.body as AppUserDto)
    );
  }

  /**
   * Path part for operation deleteUserId
   */
  static readonly DeleteUserIdPath = '/api/v1/user/{id}';

  /**
   * Link Api: /api/v1/user/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserId_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.DeleteUserIdPath, 'delete');
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
   * Link Api: /api/v1/user/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteUserId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserId(params: {
    id: string;
  }): Observable<void> {

    return this.deleteUserId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteUserDeleteMany
   */
  static readonly DeleteUserDeleteManyPath = '/api/v1/user/delete-many';

  /**
   * Link Api: /api/v1/user/delete-many
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserDeleteMany()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserDeleteMany_Response(params?: {
    listId?: Array<string>;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.DeleteUserDeleteManyPath, 'delete');
    if (params) {
      rb.query('listId', params.listId, {});
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
   * Link Api: /api/v1/user/delete-many
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteUserDeleteMany_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserDeleteMany(params?: {
    listId?: Array<string>;
  }): Observable<void> {

    return this.deleteUserDeleteMany_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getUserKeeping
   */
  static readonly GetUserKeepingPath = '/api/v1/user/keeping';

  /**
   * Link Api: /api/v1/user/keeping
   *
   * lấy danh sách các bảng chấm công cho nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserKeeping_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserKeeping_Plain_Response(params?: {
    Year?: number;
    Month?: number;
    BranchId?: string;
    DepartmentId?: string;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<AppUserKeepingDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserKeepingPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('BranchId', params.BranchId, {});
      rb.query('DepartmentId', params.DepartmentId, {});
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
        return r as THRMStrictHttpResponse<AppUserKeepingDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/keeping
   *
   * lấy danh sách các bảng chấm công cho nhân viên.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserKeeping_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserKeeping_Plain(params?: {
    Year?: number;
    Month?: number;
    BranchId?: string;
    DepartmentId?: string;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<AppUserKeepingDtoPagedResultDto> {

    return this.getUserKeeping_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserKeepingDtoPagedResultDto>) => r.body as AppUserKeepingDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/v1/user/keeping
   *
   * lấy danh sách các bảng chấm công cho nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserKeeping_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserKeeping_Json_Response(params?: {
    Year?: number;
    Month?: number;
    BranchId?: string;
    DepartmentId?: string;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<AppUserKeepingDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserKeepingPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('BranchId', params.BranchId, {});
      rb.query('DepartmentId', params.DepartmentId, {});
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
        return r as THRMStrictHttpResponse<AppUserKeepingDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/keeping
   *
   * lấy danh sách các bảng chấm công cho nhân viên.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserKeeping_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserKeeping_Json(params?: {
    Year?: number;
    Month?: number;
    BranchId?: string;
    DepartmentId?: string;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<AppUserKeepingDtoPagedResultDto> {

    return this.getUserKeeping_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserKeepingDtoPagedResultDto>) => r.body as AppUserKeepingDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation getUserKeepingExport
   */
  static readonly GetUserKeepingExportPath = '/api/v1/user/keeping-export';

  /**
   * Link Api: /api/v1/user/keeping-export
   *
   * export bảng chấm công cho nhân viên.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserKeepingExport()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserKeepingExport_Response(params?: {
    Year?: number;
    Month?: number;
    BranchId?: string;
    DepartmentId?: string;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserKeepingExportPath, 'get');
    if (params) {
      rb.query('Year', params.Year, {});
      rb.query('Month', params.Month, {});
      rb.query('BranchId', params.BranchId, {});
      rb.query('DepartmentId', params.DepartmentId, {});
      rb.query('SearchText', params.SearchText, {});
      rb.query('MaxResultCount', params.MaxResultCount, {});
      rb.query('SkipCount', params.SkipCount, {});
      rb.query('Sorting', params.Sorting, {});
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
   * Link Api: /api/v1/user/keeping-export
   *
   * export bảng chấm công cho nhân viên.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserKeepingExport_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserKeepingExport(params?: {
    Year?: number;
    Month?: number;
    BranchId?: string;
    DepartmentId?: string;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<void> {

    return this.getUserKeepingExport_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getUserKeepingByUser
   */
  static readonly GetUserKeepingByUserPath = '/api/v1/user/keeping-by-user';

  /**
   * Link Api: /api/v1/user/keeping-by-user
   *
   * lên danh sách bảng chấm công cá nhân.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserKeepingByUser_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserKeepingByUser_Plain_Response(params?: {
    year?: number;
    month?: number;
  }): Observable<THRMStrictHttpResponse<AppUserKeepingDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserKeepingByUserPath, 'get');
    if (params) {
      rb.query('year', params.year, {});
      rb.query('month', params.month, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserKeepingDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/keeping-by-user
   *
   * lên danh sách bảng chấm công cá nhân.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserKeepingByUser_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserKeepingByUser_Plain(params?: {
    year?: number;
    month?: number;
  }): Observable<AppUserKeepingDto> {

    return this.getUserKeepingByUser_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserKeepingDto>) => r.body as AppUserKeepingDto)
    );
  }

  /**
   * Link Api: /api/v1/user/keeping-by-user
   *
   * lên danh sách bảng chấm công cá nhân.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserKeepingByUser_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserKeepingByUser_Json_Response(params?: {
    year?: number;
    month?: number;
  }): Observable<THRMStrictHttpResponse<AppUserKeepingDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserKeepingByUserPath, 'get');
    if (params) {
      rb.query('year', params.year, {});
      rb.query('month', params.month, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserKeepingDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/keeping-by-user
   *
   * lên danh sách bảng chấm công cá nhân.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserKeepingByUser_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserKeepingByUser_Json(params?: {
    year?: number;
    month?: number;
  }): Observable<AppUserKeepingDto> {

    return this.getUserKeepingByUser_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserKeepingDto>) => r.body as AppUserKeepingDto)
    );
  }

  /**
   * Path part for operation getUserKeepingByUserExport
   */
  static readonly GetUserKeepingByUserExportPath = '/api/v1/user/keeping-by-user-export';

  /**
   * Link Api: /api/v1/user/keeping-by-user-export
   *
   * export ra file bảng công cá nhân.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserKeepingByUserExport()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserKeepingByUserExport_Response(params?: {
    year?: number;
    month?: number;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserKeepingByUserExportPath, 'get');
    if (params) {
      rb.query('year', params.year, {});
      rb.query('month', params.month, {});
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
   * Link Api: /api/v1/user/keeping-by-user-export
   *
   * export ra file bảng công cá nhân.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserKeepingByUserExport_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserKeepingByUserExport(params?: {
    year?: number;
    month?: number;
  }): Observable<void> {

    return this.getUserKeepingByUserExport_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putUserUserIdUpdatePosition
   */
  static readonly PutUserUserIdUpdatePositionPath = '/api/v1/user/{userId}/update-position';

  /**
   * Link Api: /api/v1/user/{userId}/update-position
   *
   * update position cho user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putUserUserIdUpdatePosition()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putUserUserIdUpdatePosition_Response(params: {
    userId: string;
    body?: AppUserUpdatePositionDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PutUserUserIdUpdatePositionPath, 'put');
    if (params) {
      rb.path('userId', params.userId, {});
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
   * Link Api: /api/v1/user/{userId}/update-position
   *
   * update position cho user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putUserUserIdUpdatePosition_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putUserUserIdUpdatePosition(params: {
    userId: string;
    body?: AppUserUpdatePositionDto
  }): Observable<void> {

    return this.putUserUserIdUpdatePosition_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putUserUserIdUpdateDepartment
   */
  static readonly PutUserUserIdUpdateDepartmentPath = '/api/v1/user/{userId}/update-department';

  /**
   * Link Api: /api/v1/user/{userId}/update-department
   *
   * update department cho user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putUserUserIdUpdateDepartment()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putUserUserIdUpdateDepartment_Response(params: {
    userId: string;
    body?: AppUserUpdateDepartmentDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PutUserUserIdUpdateDepartmentPath, 'put');
    if (params) {
      rb.path('userId', params.userId, {});
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
   * Link Api: /api/v1/user/{userId}/update-department
   *
   * update department cho user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putUserUserIdUpdateDepartment_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putUserUserIdUpdateDepartment(params: {
    userId: string;
    body?: AppUserUpdateDepartmentDto
  }): Observable<void> {

    return this.putUserUserIdUpdateDepartment_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation putUserUserIdUpdateBranch
   */
  static readonly PutUserUserIdUpdateBranchPath = '/api/v1/user/{userId}/update-branch';

  /**
   * Link Api: /api/v1/user/{userId}/update-branch
   *
   * update branch cho user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putUserUserIdUpdateBranch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putUserUserIdUpdateBranch_Response(params: {
    userId: string;
    body?: AppUserUpdateBranchDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PutUserUserIdUpdateBranchPath, 'put');
    if (params) {
      rb.path('userId', params.userId, {});
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
   * Link Api: /api/v1/user/{userId}/update-branch
   *
   * update branch cho user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putUserUserIdUpdateBranch_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putUserUserIdUpdateBranch(params: {
    userId: string;
    body?: AppUserUpdateBranchDto
  }): Observable<void> {

    return this.putUserUserIdUpdateBranch_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getUserReportKeepingPersonal
   */
  static readonly GetUserReportKeepingPersonalPath = '/api/v1/user/report-keeping-personal';

  /**
   * Link Api: /api/v1/user/report-keeping-personal
   *
   * báo cáo công cá nhân user gồm: vi phạm, tổng hình thức làm việc, tổng nghỉ phép.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserReportKeepingPersonal_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserReportKeepingPersonal_Plain_Response(params?: {
    year?: number;
    month?: number;
  }): Observable<THRMStrictHttpResponse<AppUserReportKeepingPersonnalDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserReportKeepingPersonalPath, 'get');
    if (params) {
      rb.query('year', params.year, {});
      rb.query('month', params.month, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserReportKeepingPersonnalDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/report-keeping-personal
   *
   * báo cáo công cá nhân user gồm: vi phạm, tổng hình thức làm việc, tổng nghỉ phép.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserReportKeepingPersonal_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserReportKeepingPersonal_Plain(params?: {
    year?: number;
    month?: number;
  }): Observable<AppUserReportKeepingPersonnalDto> {

    return this.getUserReportKeepingPersonal_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserReportKeepingPersonnalDto>) => r.body as AppUserReportKeepingPersonnalDto)
    );
  }

  /**
   * Link Api: /api/v1/user/report-keeping-personal
   *
   * báo cáo công cá nhân user gồm: vi phạm, tổng hình thức làm việc, tổng nghỉ phép.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserReportKeepingPersonal_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserReportKeepingPersonal_Json_Response(params?: {
    year?: number;
    month?: number;
  }): Observable<THRMStrictHttpResponse<AppUserReportKeepingPersonnalDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserReportKeepingPersonalPath, 'get');
    if (params) {
      rb.query('year', params.year, {});
      rb.query('month', params.month, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserReportKeepingPersonnalDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/report-keeping-personal
   *
   * báo cáo công cá nhân user gồm: vi phạm, tổng hình thức làm việc, tổng nghỉ phép.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserReportKeepingPersonal_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserReportKeepingPersonal_Json(params?: {
    year?: number;
    month?: number;
  }): Observable<AppUserReportKeepingPersonnalDto> {

    return this.getUserReportKeepingPersonal_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserReportKeepingPersonnalDto>) => r.body as AppUserReportKeepingPersonnalDto)
    );
  }

  /**
   * Path part for operation putUserUserIdUpdateIsActive
   */
  static readonly PutUserUserIdUpdateIsActivePath = '/api/v1/user/{userId}/update-is-active';

  /**
   * Link Api: /api/v1/user/{userId}/update-is-active
   *
   * update isActive.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putUserUserIdUpdateIsActive()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putUserUserIdUpdateIsActive_Response(params: {
    userId: string;
    body?: AppUserUpdateIsActiveDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PutUserUserIdUpdateIsActivePath, 'put');
    if (params) {
      rb.path('userId', params.userId, {});
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
   * Link Api: /api/v1/user/{userId}/update-is-active
   *
   * update isActive.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putUserUserIdUpdateIsActive_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putUserUserIdUpdateIsActive(params: {
    userId: string;
    body?: AppUserUpdateIsActiveDto
  }): Observable<void> {

    return this.putUserUserIdUpdateIsActive_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getUserTotalCount
   */
  static readonly GetUserTotalCountPath = '/api/v1/user/total-count';

  /**
   * Link Api: /api/v1/user/total-count
   *
   * lấy tổng số user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserTotalCount_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserTotalCount_Plain_Response(params?: {
  }): Observable<THRMStrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserTotalCountPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: parseFloat(String((r as HttpResponse<TDSSafeAny>).body)) }) as THRMStrictHttpResponse<number>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/total-count
   *
   * lấy tổng số user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserTotalCount_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserTotalCount_Plain(params?: {
  }): Observable<number> {

    return this.getUserTotalCount_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Link Api: /api/v1/user/total-count
   *
   * lấy tổng số user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserTotalCount_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserTotalCount_Json_Response(params?: {
  }): Observable<THRMStrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserTotalCountPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: parseFloat(String((r as HttpResponse<TDSSafeAny>).body)) }) as THRMStrictHttpResponse<number>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/total-count
   *
   * lấy tổng số user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserTotalCount_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserTotalCount_Json(params?: {
  }): Observable<number> {

    return this.getUserTotalCount_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getUserTotalNewbie
   */
  static readonly GetUserTotalNewbiePath = '/api/v1/user/total-newbie';

  /**
   * Link Api: /api/v1/user/total-newbie
   *
   * lấy tổng nhân viên mới trong tháng, năm.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserTotalNewbie_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserTotalNewbie_Plain_Response(params?: {
    month?: number;
    year?: number;
  }): Observable<THRMStrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserTotalNewbiePath, 'get');
    if (params) {
      rb.query('month', params.month, {});
      rb.query('year', params.year, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: parseFloat(String((r as HttpResponse<TDSSafeAny>).body)) }) as THRMStrictHttpResponse<number>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/total-newbie
   *
   * lấy tổng nhân viên mới trong tháng, năm.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserTotalNewbie_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserTotalNewbie_Plain(params?: {
    month?: number;
    year?: number;
  }): Observable<number> {

    return this.getUserTotalNewbie_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Link Api: /api/v1/user/total-newbie
   *
   * lấy tổng nhân viên mới trong tháng, năm.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserTotalNewbie_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserTotalNewbie_Json_Response(params?: {
    month?: number;
    year?: number;
  }): Observable<THRMStrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserTotalNewbiePath, 'get');
    if (params) {
      rb.query('month', params.month, {});
      rb.query('year', params.year, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: parseFloat(String((r as HttpResponse<TDSSafeAny>).body)) }) as THRMStrictHttpResponse<number>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/total-newbie
   *
   * lấy tổng nhân viên mới trong tháng, năm.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserTotalNewbie_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserTotalNewbie_Json(params?: {
    month?: number;
    year?: number;
  }): Observable<number> {

    return this.getUserTotalNewbie_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getUserTotalQuitJob
   */
  static readonly GetUserTotalQuitJobPath = '/api/v1/user/total-quit-job';

  /**
   * Link Api: /api/v1/user/total-quit-job
   *
   * lấy tổng số nhân viên nghỉ việc.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserTotalQuitJob_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserTotalQuitJob_Plain_Response(params?: {
    month?: number;
    year?: number;
  }): Observable<THRMStrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserTotalQuitJobPath, 'get');
    if (params) {
      rb.query('month', params.month, {});
      rb.query('year', params.year, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: parseFloat(String((r as HttpResponse<TDSSafeAny>).body)) }) as THRMStrictHttpResponse<number>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/total-quit-job
   *
   * lấy tổng số nhân viên nghỉ việc.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserTotalQuitJob_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserTotalQuitJob_Plain(params?: {
    month?: number;
    year?: number;
  }): Observable<number> {

    return this.getUserTotalQuitJob_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Link Api: /api/v1/user/total-quit-job
   *
   * lấy tổng số nhân viên nghỉ việc.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserTotalQuitJob_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserTotalQuitJob_Json_Response(params?: {
    month?: number;
    year?: number;
  }): Observable<THRMStrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserTotalQuitJobPath, 'get');
    if (params) {
      rb.query('month', params.month, {});
      rb.query('year', params.year, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return (r as HttpResponse<TDSSafeAny>).clone({ body: parseFloat(String((r as HttpResponse<TDSSafeAny>).body)) }) as THRMStrictHttpResponse<number>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/total-quit-job
   *
   * lấy tổng số nhân viên nghỉ việc.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserTotalQuitJob_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserTotalQuitJob_Json(params?: {
    month?: number;
    year?: number;
  }): Observable<number> {

    return this.getUserTotalQuitJob_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getUserListAndTotalBirthdayInMonth
   */
  static readonly GetUserListAndTotalBirthdayInMonthPath = '/api/v1/user/list-and-total-birthday-in-month';

  /**
   * Link Api: /api/v1/user/list-and-total-birthday-in-month
   *
   * lấy danh sách và tổng nhân viên có sinh nhật trong tháng, năm.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserListAndTotalBirthdayInMonth_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserListAndTotalBirthdayInMonth_Plain_Response(params?: {
    month?: number;
  }): Observable<THRMStrictHttpResponse<AppUserListAndCountByBirthDayDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserListAndTotalBirthdayInMonthPath, 'get');
    if (params) {
      rb.query('month', params.month, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserListAndCountByBirthDayDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/list-and-total-birthday-in-month
   *
   * lấy danh sách và tổng nhân viên có sinh nhật trong tháng, năm.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserListAndTotalBirthdayInMonth_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserListAndTotalBirthdayInMonth_Plain(params?: {
    month?: number;
  }): Observable<AppUserListAndCountByBirthDayDto> {

    return this.getUserListAndTotalBirthdayInMonth_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserListAndCountByBirthDayDto>) => r.body as AppUserListAndCountByBirthDayDto)
    );
  }

  /**
   * Link Api: /api/v1/user/list-and-total-birthday-in-month
   *
   * lấy danh sách và tổng nhân viên có sinh nhật trong tháng, năm.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserListAndTotalBirthdayInMonth_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserListAndTotalBirthdayInMonth_Json_Response(params?: {
    month?: number;
  }): Observable<THRMStrictHttpResponse<AppUserListAndCountByBirthDayDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserListAndTotalBirthdayInMonthPath, 'get');
    if (params) {
      rb.query('month', params.month, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserListAndCountByBirthDayDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/list-and-total-birthday-in-month
   *
   * lấy danh sách và tổng nhân viên có sinh nhật trong tháng, năm.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserListAndTotalBirthdayInMonth_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserListAndTotalBirthdayInMonth_Json(params?: {
    month?: number;
  }): Observable<AppUserListAndCountByBirthDayDto> {

    return this.getUserListAndTotalBirthdayInMonth_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserListAndCountByBirthDayDto>) => r.body as AppUserListAndCountByBirthDayDto)
    );
  }

  /**
   * Path part for operation getUserListAndTotalBirthdayInDay
   */
  static readonly GetUserListAndTotalBirthdayInDayPath = '/api/v1/user/list-and-total-birthday-in-day';

  /**
   * Link Api: /api/v1/user/list-and-total-birthday-in-day
   *
   * lấy danh sách nhân viên có sinh nhật trong tháng, ngày.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserListAndTotalBirthdayInDay_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserListAndTotalBirthdayInDay_Plain_Response(params?: {
    month?: number;
    day?: number;
  }): Observable<THRMStrictHttpResponse<AppUserListAndCountByBirthDayDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserListAndTotalBirthdayInDayPath, 'get');
    if (params) {
      rb.query('month', params.month, {});
      rb.query('day', params.day, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserListAndCountByBirthDayDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/list-and-total-birthday-in-day
   *
   * lấy danh sách nhân viên có sinh nhật trong tháng, ngày.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserListAndTotalBirthdayInDay_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserListAndTotalBirthdayInDay_Plain(params?: {
    month?: number;
    day?: number;
  }): Observable<AppUserListAndCountByBirthDayDto> {

    return this.getUserListAndTotalBirthdayInDay_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserListAndCountByBirthDayDto>) => r.body as AppUserListAndCountByBirthDayDto)
    );
  }

  /**
   * Link Api: /api/v1/user/list-and-total-birthday-in-day
   *
   * lấy danh sách nhân viên có sinh nhật trong tháng, ngày.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserListAndTotalBirthdayInDay_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserListAndTotalBirthdayInDay_Json_Response(params?: {
    month?: number;
    day?: number;
  }): Observable<THRMStrictHttpResponse<AppUserListAndCountByBirthDayDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserListAndTotalBirthdayInDayPath, 'get');
    if (params) {
      rb.query('month', params.month, {});
      rb.query('day', params.day, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserListAndCountByBirthDayDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/list-and-total-birthday-in-day
   *
   * lấy danh sách nhân viên có sinh nhật trong tháng, ngày.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserListAndTotalBirthdayInDay_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserListAndTotalBirthdayInDay_Json(params?: {
    month?: number;
    day?: number;
  }): Observable<AppUserListAndCountByBirthDayDto> {

    return this.getUserListAndTotalBirthdayInDay_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserListAndCountByBirthDayDto>) => r.body as AppUserListAndCountByBirthDayDto)
    );
  }

  /**
   * Path part for operation getUserUserChangingHistory
   */
  static readonly GetUserUserChangingHistoryPath = '/api/v1/user/user-changing-history';

  /**
   * Link Api: /api/v1/user/user-changing-history
   *
   * lấy lịch sử thay đổi của user như thay đổi chức vị, phòng ban, ...( thuộc tính kind).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserUserChangingHistory_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserUserChangingHistory_Plain_Response(params?: {

    /**
     * id user cần lấy thông tin
     */
    userId?: string;
  }): Observable<THRMStrictHttpResponse<UserLogDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserUserChangingHistoryPath, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<UserLogDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/user-changing-history
   *
   * lấy lịch sử thay đổi của user như thay đổi chức vị, phòng ban, ...( thuộc tính kind).
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserUserChangingHistory_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserUserChangingHistory_Plain(params?: {

    /**
     * id user cần lấy thông tin
     */
    userId?: string;
  }): Observable<UserLogDto> {

    return this.getUserUserChangingHistory_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<UserLogDto>) => r.body as UserLogDto)
    );
  }

  /**
   * Link Api: /api/v1/user/user-changing-history
   *
   * lấy lịch sử thay đổi của user như thay đổi chức vị, phòng ban, ...( thuộc tính kind).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserUserChangingHistory_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserUserChangingHistory_Json_Response(params?: {

    /**
     * id user cần lấy thông tin
     */
    userId?: string;
  }): Observable<THRMStrictHttpResponse<UserLogDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserUserChangingHistoryPath, 'get');
    if (params) {
      rb.query('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<UserLogDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/user-changing-history
   *
   * lấy lịch sử thay đổi của user như thay đổi chức vị, phòng ban, ...( thuộc tính kind).
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserUserChangingHistory_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserUserChangingHistory_Json(params?: {

    /**
     * id user cần lấy thông tin
     */
    userId?: string;
  }): Observable<UserLogDto> {

    return this.getUserUserChangingHistory_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<UserLogDto>) => r.body as UserLogDto)
    );
  }

  /**
   * Path part for operation getUserStatisticalVolatilityPersonnel
   */
  static readonly GetUserStatisticalVolatilityPersonnelPath = '/api/v1/user/statistical-volatility-personnel';

  /**
   * Link Api: /api/v1/user/statistical-volatility-personnel
   *
   * thống kê biến động nhân sự theo năm.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserStatisticalVolatilityPersonnel_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserStatisticalVolatilityPersonnel_Plain_Response(params?: {
    year?: number;
  }): Observable<THRMStrictHttpResponse<Array<AppUserStatisticalVolatilityPersonnelByMonthDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserStatisticalVolatilityPersonnelPath, 'get');
    if (params) {
      rb.query('year', params.year, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AppUserStatisticalVolatilityPersonnelByMonthDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/statistical-volatility-personnel
   *
   * thống kê biến động nhân sự theo năm.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserStatisticalVolatilityPersonnel_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserStatisticalVolatilityPersonnel_Plain(params?: {
    year?: number;
  }): Observable<Array<AppUserStatisticalVolatilityPersonnelByMonthDto>> {

    return this.getUserStatisticalVolatilityPersonnel_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AppUserStatisticalVolatilityPersonnelByMonthDto>>) => r.body as Array<AppUserStatisticalVolatilityPersonnelByMonthDto>)
    );
  }

  /**
   * Link Api: /api/v1/user/statistical-volatility-personnel
   *
   * thống kê biến động nhân sự theo năm.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserStatisticalVolatilityPersonnel_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserStatisticalVolatilityPersonnel_Json_Response(params?: {
    year?: number;
  }): Observable<THRMStrictHttpResponse<Array<AppUserStatisticalVolatilityPersonnelByMonthDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserStatisticalVolatilityPersonnelPath, 'get');
    if (params) {
      rb.query('year', params.year, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AppUserStatisticalVolatilityPersonnelByMonthDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/statistical-volatility-personnel
   *
   * thống kê biến động nhân sự theo năm.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserStatisticalVolatilityPersonnel_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserStatisticalVolatilityPersonnel_Json(params?: {
    year?: number;
  }): Observable<Array<AppUserStatisticalVolatilityPersonnelByMonthDto>> {

    return this.getUserStatisticalVolatilityPersonnel_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AppUserStatisticalVolatilityPersonnelByMonthDto>>) => r.body as Array<AppUserStatisticalVolatilityPersonnelByMonthDto>)
    );
  }

  /**
   * Path part for operation getUserStatisticalPositionAndCount
   */
  static readonly GetUserStatisticalPositionAndCountPath = '/api/v1/user/statistical-position-and-count';

  /**
   * Link Api: /api/v1/user/statistical-position-and-count
   *
   * thống kê số lượng nhân sự theo vị trí với thời gian theo tháng của năm.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserStatisticalPositionAndCount_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserStatisticalPositionAndCount_Plain_Response(params?: {
    Month?: number;
    Year?: number;
    PositionNames?: Array<string>;
  }): Observable<THRMStrictHttpResponse<AppUserStatisticalPersonnelByPositionAndMonthDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserStatisticalPositionAndCountPath, 'get');
    if (params) {
      rb.query('Month', params.Month, {});
      rb.query('Year', params.Year, {});
      rb.query('PositionNames', params.PositionNames, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserStatisticalPersonnelByPositionAndMonthDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/statistical-position-and-count
   *
   * thống kê số lượng nhân sự theo vị trí với thời gian theo tháng của năm.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserStatisticalPositionAndCount_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserStatisticalPositionAndCount_Plain(params?: {
    Month?: number;
    Year?: number;
    PositionNames?: Array<string>;
  }): Observable<AppUserStatisticalPersonnelByPositionAndMonthDto> {

    return this.getUserStatisticalPositionAndCount_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserStatisticalPersonnelByPositionAndMonthDto>) => r.body as AppUserStatisticalPersonnelByPositionAndMonthDto)
    );
  }

  /**
   * Link Api: /api/v1/user/statistical-position-and-count
   *
   * thống kê số lượng nhân sự theo vị trí với thời gian theo tháng của năm.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserStatisticalPositionAndCount_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserStatisticalPositionAndCount_Json_Response(params?: {
    Month?: number;
    Year?: number;
    PositionNames?: Array<string>;
  }): Observable<THRMStrictHttpResponse<AppUserStatisticalPersonnelByPositionAndMonthDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserStatisticalPositionAndCountPath, 'get');
    if (params) {
      rb.query('Month', params.Month, {});
      rb.query('Year', params.Year, {});
      rb.query('PositionNames', params.PositionNames, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<AppUserStatisticalPersonnelByPositionAndMonthDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/statistical-position-and-count
   *
   * thống kê số lượng nhân sự theo vị trí với thời gian theo tháng của năm.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserStatisticalPositionAndCount_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserStatisticalPositionAndCount_Json(params?: {
    Month?: number;
    Year?: number;
    PositionNames?: Array<string>;
  }): Observable<AppUserStatisticalPersonnelByPositionAndMonthDto> {

    return this.getUserStatisticalPositionAndCount_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AppUserStatisticalPersonnelByPositionAndMonthDto>) => r.body as AppUserStatisticalPersonnelByPositionAndMonthDto)
    );
  }

  /**
   * Path part for operation putUserUpdateUserName
   */
  static readonly PutUserUpdateUserNamePath = '/api/v1/user/update-user-name';

  /**
   * Link Api: /api/v1/user/update-user-name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putUserUpdateUserName()` instead.
   *
   * This method doesn't expect any request body.
   */
  putUserUpdateUserName_Response(params?: {
    userName?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PutUserUpdateUserNamePath, 'put');
    if (params) {
      rb.query('userName', params.userName, {});
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
   * Link Api: /api/v1/user/update-user-name
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putUserUpdateUserName_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  putUserUpdateUserName(params?: {
    userName?: string;
  }): Observable<void> {

    return this.putUserUpdateUserName_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getUserFaceUserId
   */
  static readonly GetUserFaceUserIdPath = '/api/v1/user/face/{userId}';

  /**
   * Link Api: /api/v1/user/face/{userId}
   *
   * lấy danh sách ảnh chấm công của user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserFaceUserId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserFaceUserId_Plain_Response(params: {
    userId: string;
  }): Observable<THRMStrictHttpResponse<Array<AttachmentRDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserFaceUserIdPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AttachmentRDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/face/{userId}
   *
   * lấy danh sách ảnh chấm công của user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserFaceUserId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserFaceUserId_Plain(params: {
    userId: string;
  }): Observable<Array<AttachmentRDto>> {

    return this.getUserFaceUserId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AttachmentRDto>>) => r.body as Array<AttachmentRDto>)
    );
  }

  /**
   * Link Api: /api/v1/user/face/{userId}
   *
   * lấy danh sách ảnh chấm công của user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserFaceUserId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserFaceUserId_Json_Response(params: {
    userId: string;
  }): Observable<THRMStrictHttpResponse<Array<AttachmentRDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserFaceUserIdPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<Array<AttachmentRDto>>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/face/{userId}
   *
   * lấy danh sách ảnh chấm công của user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUserFaceUserId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserFaceUserId_Json(params: {
    userId: string;
  }): Observable<Array<AttachmentRDto>> {

    return this.getUserFaceUserId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<Array<AttachmentRDto>>) => r.body as Array<AttachmentRDto>)
    );
  }

  /**
   * Path part for operation postUserCheckFace
   */
  static readonly PostUserCheckFacePath = '/api/v1/user/check-face';

  /**
   * Link Api: /api/v1/user/check-face
   *
   * kiểm tra ảnh chấm công hợp lệ.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserCheckFace_Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserCheckFace_Plain_Response(params?: {
    body?: {
'direction': string;
'image': Blob;
}
  }): Observable<THRMStrictHttpResponse<CommonResponseAiDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserCheckFacePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<CommonResponseAiDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/check-face
   *
   * kiểm tra ảnh chấm công hợp lệ.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserCheckFace_Plain_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserCheckFace_Plain(params?: {
    body?: {
'direction': string;
'image': Blob;
}
  }): Observable<CommonResponseAiDto> {

    return this.postUserCheckFace_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<CommonResponseAiDto>) => r.body as CommonResponseAiDto)
    );
  }

  /**
   * Link Api: /api/v1/user/check-face
   *
   * kiểm tra ảnh chấm công hợp lệ.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserCheckFace_Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserCheckFace_Json_Response(params?: {
    body?: {
'direction': string;
'image': Blob;
}
  }): Observable<THRMStrictHttpResponse<CommonResponseAiDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserCheckFacePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<CommonResponseAiDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/check-face
   *
   * kiểm tra ảnh chấm công hợp lệ.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserCheckFace_Json_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserCheckFace_Json(params?: {
    body?: {
'direction': string;
'image': Blob;
}
  }): Observable<CommonResponseAiDto> {

    return this.postUserCheckFace_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<CommonResponseAiDto>) => r.body as CommonResponseAiDto)
    );
  }

  /**
   * Path part for operation postUserAddFaceUserId
   */
  static readonly PostUserAddFaceUserIdPath = '/api/v1/user/add-face/{userId}';

  /**
   * Link Api: /api/v1/user/add-face/{userId}
   *
   * thêm hình ảnh chấm công cho user by HR.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserAddFaceUserId_Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFaceUserId_Plain_Response(params: {
    userId: string;
    body?: {
'direction': string;
'image': Blob;
}
  }): Observable<THRMStrictHttpResponse<AttachmentRDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserAddFaceUserIdPath, 'post');
    if (params) {
      rb.path('userId', params.userId, {});
      rb.body(params.body, 'multipart/form-data');
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
   * Link Api: /api/v1/user/add-face/{userId}
   *
   * thêm hình ảnh chấm công cho user by HR.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserAddFaceUserId_Plain_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFaceUserId_Plain(params: {
    userId: string;
    body?: {
'direction': string;
'image': Blob;
}
  }): Observable<AttachmentRDto> {

    return this.postUserAddFaceUserId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AttachmentRDto>) => r.body as AttachmentRDto)
    );
  }

  /**
   * Link Api: /api/v1/user/add-face/{userId}
   *
   * thêm hình ảnh chấm công cho user by HR.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserAddFaceUserId_Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFaceUserId_Json_Response(params: {
    userId: string;
    body?: {
'direction': string;
'image': Blob;
}
  }): Observable<THRMStrictHttpResponse<AttachmentRDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserAddFaceUserIdPath, 'post');
    if (params) {
      rb.path('userId', params.userId, {});
      rb.body(params.body, 'multipart/form-data');
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
   * Link Api: /api/v1/user/add-face/{userId}
   *
   * thêm hình ảnh chấm công cho user by HR.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserAddFaceUserId_Json_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFaceUserId_Json(params: {
    userId: string;
    body?: {
'direction': string;
'image': Blob;
}
  }): Observable<AttachmentRDto> {

    return this.postUserAddFaceUserId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AttachmentRDto>) => r.body as AttachmentRDto)
    );
  }

  /**
   * Path part for operation postUserAddFace
   */
  static readonly PostUserAddFacePath = '/api/v1/user/add-face';

  /**
   * Link Api: /api/v1/user/add-face
   *
   * thêm 1 hình ảnh chấm công cho chính mình.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserAddFace_Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFace_Plain_Response(params?: {
    body?: {
'direction': string;
'image': Blob;
}
  }): Observable<THRMStrictHttpResponse<AttachmentRDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserAddFacePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
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
   * Link Api: /api/v1/user/add-face
   *
   * thêm 1 hình ảnh chấm công cho chính mình.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserAddFace_Plain_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFace_Plain(params?: {
    body?: {
'direction': string;
'image': Blob;
}
  }): Observable<AttachmentRDto> {

    return this.postUserAddFace_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AttachmentRDto>) => r.body as AttachmentRDto)
    );
  }

  /**
   * Link Api: /api/v1/user/add-face
   *
   * thêm 1 hình ảnh chấm công cho chính mình.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserAddFace_Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFace_Json_Response(params?: {
    body?: {
'direction': string;
'image': Blob;
}
  }): Observable<THRMStrictHttpResponse<AttachmentRDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserAddFacePath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
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
   * Link Api: /api/v1/user/add-face
   *
   * thêm 1 hình ảnh chấm công cho chính mình.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserAddFace_Json_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFace_Json(params?: {
    body?: {
'direction': string;
'image': Blob;
}
  }): Observable<AttachmentRDto> {

    return this.postUserAddFace_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<AttachmentRDto>) => r.body as AttachmentRDto)
    );
  }

  /**
   * Path part for operation postUserAddFacesUserId
   */
  static readonly PostUserAddFacesUserIdPath = '/api/v1/user/add-faces/{userId}';

  /**
   * Link Api: /api/v1/user/add-faces/{userId}
   *
   * thêm nhiều hình ảnh chấm công cho user by HR.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserAddFacesUserId_Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFacesUserId_Plain_Response(params: {
    userId: string;
    body?: {
'Images': Array<Blob>;
}
  }): Observable<THRMStrictHttpResponse<CheckFaceValidWithUrlResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserAddFacesUserIdPath, 'post');
    if (params) {
      rb.path('userId', params.userId, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<CheckFaceValidWithUrlResponseDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/add-faces/{userId}
   *
   * thêm nhiều hình ảnh chấm công cho user by HR.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserAddFacesUserId_Plain_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFacesUserId_Plain(params: {
    userId: string;
    body?: {
'Images': Array<Blob>;
}
  }): Observable<CheckFaceValidWithUrlResponseDto> {

    return this.postUserAddFacesUserId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<CheckFaceValidWithUrlResponseDto>) => r.body as CheckFaceValidWithUrlResponseDto)
    );
  }

  /**
   * Link Api: /api/v1/user/add-faces/{userId}
   *
   * thêm nhiều hình ảnh chấm công cho user by HR.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserAddFacesUserId_Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFacesUserId_Json_Response(params: {
    userId: string;
    body?: {
'Images': Array<Blob>;
}
  }): Observable<THRMStrictHttpResponse<CheckFaceValidWithUrlResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserAddFacesUserIdPath, 'post');
    if (params) {
      rb.path('userId', params.userId, {});
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<CheckFaceValidWithUrlResponseDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/add-faces/{userId}
   *
   * thêm nhiều hình ảnh chấm công cho user by HR.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserAddFacesUserId_Json_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFacesUserId_Json(params: {
    userId: string;
    body?: {
'Images': Array<Blob>;
}
  }): Observable<CheckFaceValidWithUrlResponseDto> {

    return this.postUserAddFacesUserId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<CheckFaceValidWithUrlResponseDto>) => r.body as CheckFaceValidWithUrlResponseDto)
    );
  }

  /**
   * Path part for operation postUserAddFaces
   */
  static readonly PostUserAddFacesPath = '/api/v1/user/add-faces';

  /**
   * Link Api: /api/v1/user/add-faces
   *
   * thêm nhiều hình ảnh chấm công cho chính mình.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserAddFaces_Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFaces_Plain_Response(params?: {
    body?: {
'Images': Array<Blob>;
}
  }): Observable<THRMStrictHttpResponse<CheckFaceValidWithUrlResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserAddFacesPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<CheckFaceValidWithUrlResponseDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/add-faces
   *
   * thêm nhiều hình ảnh chấm công cho chính mình.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserAddFaces_Plain_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFaces_Plain(params?: {
    body?: {
'Images': Array<Blob>;
}
  }): Observable<CheckFaceValidWithUrlResponseDto> {

    return this.postUserAddFaces_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<CheckFaceValidWithUrlResponseDto>) => r.body as CheckFaceValidWithUrlResponseDto)
    );
  }

  /**
   * Link Api: /api/v1/user/add-faces
   *
   * thêm nhiều hình ảnh chấm công cho chính mình.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postUserAddFaces_Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFaces_Json_Response(params?: {
    body?: {
'Images': Array<Blob>;
}
  }): Observable<THRMStrictHttpResponse<CheckFaceValidWithUrlResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostUserAddFacesPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<CheckFaceValidWithUrlResponseDto>;
      })
    );
  }

  /**
   * Link Api: /api/v1/user/add-faces
   *
   * thêm nhiều hình ảnh chấm công cho chính mình.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postUserAddFaces_Json_Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  postUserAddFaces_Json(params?: {
    body?: {
'Images': Array<Blob>;
}
  }): Observable<CheckFaceValidWithUrlResponseDto> {

    return this.postUserAddFaces_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<CheckFaceValidWithUrlResponseDto>) => r.body as CheckFaceValidWithUrlResponseDto)
    );
  }

  /**
   * Path part for operation deleteUserRemoveFace
   */
  static readonly DeleteUserRemoveFacePath = '/api/v1/user/remove-face';

  /**
   * Link Api: /api/v1/user/remove-face
   *
   * xóa 1 ảnh chấm công của user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUserRemoveFace()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserRemoveFace_Response(params?: {
    userId?: string;
    attachmentId?: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.DeleteUserRemoveFacePath, 'delete');
    if (params) {
      rb.query('userId', params.userId, {});
      rb.query('attachmentId', params.attachmentId, {});
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
   * Link Api: /api/v1/user/remove-face
   *
   * xóa 1 ảnh chấm công của user.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteUserRemoveFace_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUserRemoveFace(params?: {
    userId?: string;
    attachmentId?: string;
  }): Observable<void> {

    return this.deleteUserRemoveFace_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getApiIdentityUsersId
   */
  static readonly GetApiIdentityUsersIdPath = '/api/identity/users/{id}';

  /**
   * Link Api: /api/identity/users/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersId_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersId_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<IdentityUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetApiIdentityUsersIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityUserDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersId_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersId_Plain(params: {
    id: string;
  }): Observable<IdentityUserDto> {

    return this.getApiIdentityUsersId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityUserDto>) => r.body as IdentityUserDto)
    );
  }

  /**
   * Link Api: /api/identity/users/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersId_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersId_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<IdentityUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetApiIdentityUsersIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityUserDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersId_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersId_Json(params: {
    id: string;
  }): Observable<IdentityUserDto> {

    return this.getApiIdentityUsersId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityUserDto>) => r.body as IdentityUserDto)
    );
  }

  /**
   * Path part for operation putApiIdentityUsersId
   */
  static readonly PutApiIdentityUsersIdPath = '/api/identity/users/{id}';

  /**
   * Link Api: /api/identity/users/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putApiIdentityUsersId_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiIdentityUsersId_Plain_Response(params: {
    id: string;
    body?: IdentityUserUpdateDto
  }): Observable<THRMStrictHttpResponse<IdentityUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PutApiIdentityUsersIdPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityUserDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putApiIdentityUsersId_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiIdentityUsersId_Plain(params: {
    id: string;
    body?: IdentityUserUpdateDto
  }): Observable<IdentityUserDto> {

    return this.putApiIdentityUsersId_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityUserDto>) => r.body as IdentityUserDto)
    );
  }

  /**
   * Link Api: /api/identity/users/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putApiIdentityUsersId_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiIdentityUsersId_Json_Response(params: {
    id: string;
    body?: IdentityUserUpdateDto
  }): Observable<THRMStrictHttpResponse<IdentityUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PutApiIdentityUsersIdPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityUserDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putApiIdentityUsersId_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiIdentityUsersId_Json(params: {
    id: string;
    body?: IdentityUserUpdateDto
  }): Observable<IdentityUserDto> {

    return this.putApiIdentityUsersId_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityUserDto>) => r.body as IdentityUserDto)
    );
  }

  /**
   * Path part for operation deleteApiIdentityUsersId
   */
  static readonly DeleteApiIdentityUsersIdPath = '/api/identity/users/{id}';

  /**
   * Link Api: /api/identity/users/{id}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteApiIdentityUsersId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiIdentityUsersId_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.DeleteApiIdentityUsersIdPath, 'delete');
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
   * Link Api: /api/identity/users/{id}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteApiIdentityUsersId_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteApiIdentityUsersId(params: {
    id: string;
  }): Observable<void> {

    return this.deleteApiIdentityUsersId_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getApiIdentityUsers
   */
  static readonly GetApiIdentityUsersPath = '/api/identity/users';

  /**
   * Link Api: /api/identity/users
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsers_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsers_Plain_Response(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<IdentityUserDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetApiIdentityUsersPath, 'get');
    if (params) {
      rb.query('Filter', params.Filter, {});
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
        return r as THRMStrictHttpResponse<IdentityUserDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsers_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsers_Plain(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<IdentityUserDtoPagedResultDto> {

    return this.getApiIdentityUsers_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityUserDtoPagedResultDto>) => r.body as IdentityUserDtoPagedResultDto)
    );
  }

  /**
   * Link Api: /api/identity/users
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsers_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsers_Json_Response(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<THRMStrictHttpResponse<IdentityUserDtoPagedResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetApiIdentityUsersPath, 'get');
    if (params) {
      rb.query('Filter', params.Filter, {});
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
        return r as THRMStrictHttpResponse<IdentityUserDtoPagedResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsers_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsers_Json(params?: {
    Filter?: string;
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  }): Observable<IdentityUserDtoPagedResultDto> {

    return this.getApiIdentityUsers_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityUserDtoPagedResultDto>) => r.body as IdentityUserDtoPagedResultDto)
    );
  }

  /**
   * Path part for operation postApiIdentityUsers
   */
  static readonly PostApiIdentityUsersPath = '/api/identity/users';

  /**
   * Link Api: /api/identity/users
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiIdentityUsers_Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiIdentityUsers_Plain_Response(params?: {
    body?: IdentityUserCreateDto
  }): Observable<THRMStrictHttpResponse<IdentityUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostApiIdentityUsersPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityUserDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiIdentityUsers_Plain_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiIdentityUsers_Plain(params?: {
    body?: IdentityUserCreateDto
  }): Observable<IdentityUserDto> {

    return this.postApiIdentityUsers_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityUserDto>) => r.body as IdentityUserDto)
    );
  }

  /**
   * Link Api: /api/identity/users
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postApiIdentityUsers_Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiIdentityUsers_Json_Response(params?: {
    body?: IdentityUserCreateDto
  }): Observable<THRMStrictHttpResponse<IdentityUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PostApiIdentityUsersPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityUserDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postApiIdentityUsers_Json_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  postApiIdentityUsers_Json(params?: {
    body?: IdentityUserCreateDto
  }): Observable<IdentityUserDto> {

    return this.postApiIdentityUsers_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityUserDto>) => r.body as IdentityUserDto)
    );
  }

  /**
   * Path part for operation getApiIdentityUsersIdRoles
   */
  static readonly GetApiIdentityUsersIdRolesPath = '/api/identity/users/{id}/roles';

  /**
   * Link Api: /api/identity/users/{id}/roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersIdRoles_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersIdRoles_Plain_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<IdentityRoleDtoListResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetApiIdentityUsersIdRolesPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityRoleDtoListResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/{id}/roles
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersIdRoles_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersIdRoles_Plain(params: {
    id: string;
  }): Observable<IdentityRoleDtoListResultDto> {

    return this.getApiIdentityUsersIdRoles_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityRoleDtoListResultDto>) => r.body as IdentityRoleDtoListResultDto)
    );
  }

  /**
   * Link Api: /api/identity/users/{id}/roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersIdRoles_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersIdRoles_Json_Response(params: {
    id: string;
  }): Observable<THRMStrictHttpResponse<IdentityRoleDtoListResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetApiIdentityUsersIdRolesPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityRoleDtoListResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/{id}/roles
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersIdRoles_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersIdRoles_Json(params: {
    id: string;
  }): Observable<IdentityRoleDtoListResultDto> {

    return this.getApiIdentityUsersIdRoles_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityRoleDtoListResultDto>) => r.body as IdentityRoleDtoListResultDto)
    );
  }

  /**
   * Path part for operation putApiIdentityUsersIdRoles
   */
  static readonly PutApiIdentityUsersIdRolesPath = '/api/identity/users/{id}/roles';

  /**
   * Link Api: /api/identity/users/{id}/roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putApiIdentityUsersIdRoles()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiIdentityUsersIdRoles_Response(params: {
    id: string;
    body?: IdentityUserUpdateRolesDto
  }): Observable<THRMStrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.PutApiIdentityUsersIdRolesPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
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
   * Link Api: /api/identity/users/{id}/roles
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `putApiIdentityUsersIdRoles_Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  putApiIdentityUsersIdRoles(params: {
    id: string;
    body?: IdentityUserUpdateRolesDto
  }): Observable<void> {

    return this.putApiIdentityUsersIdRoles_Response(params).pipe(
      map((r: THRMStrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getApiIdentityUsersAssignableRoles
   */
  static readonly GetApiIdentityUsersAssignableRolesPath = '/api/identity/users/assignable-roles';

  /**
   * Link Api: /api/identity/users/assignable-roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersAssignableRoles_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersAssignableRoles_Plain_Response(params?: {
  }): Observable<THRMStrictHttpResponse<IdentityRoleDtoListResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetApiIdentityUsersAssignableRolesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityRoleDtoListResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/assignable-roles
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersAssignableRoles_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersAssignableRoles_Plain(params?: {
  }): Observable<IdentityRoleDtoListResultDto> {

    return this.getApiIdentityUsersAssignableRoles_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityRoleDtoListResultDto>) => r.body as IdentityRoleDtoListResultDto)
    );
  }

  /**
   * Link Api: /api/identity/users/assignable-roles
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersAssignableRoles_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersAssignableRoles_Json_Response(params?: {
  }): Observable<THRMStrictHttpResponse<IdentityRoleDtoListResultDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetApiIdentityUsersAssignableRolesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityRoleDtoListResultDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/assignable-roles
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersAssignableRoles_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersAssignableRoles_Json(params?: {
  }): Observable<IdentityRoleDtoListResultDto> {

    return this.getApiIdentityUsersAssignableRoles_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityRoleDtoListResultDto>) => r.body as IdentityRoleDtoListResultDto)
    );
  }

  /**
   * Path part for operation getApiIdentityUsersByUsernameUserName
   */
  static readonly GetApiIdentityUsersByUsernameUserNamePath = '/api/identity/users/by-username/{userName}';

  /**
   * Link Api: /api/identity/users/by-username/{userName}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersByUsernameUserName_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersByUsernameUserName_Plain_Response(params: {
    userName: string;
  }): Observable<THRMStrictHttpResponse<IdentityUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetApiIdentityUsersByUsernameUserNamePath, 'get');
    if (params) {
      rb.path('userName', params.userName, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityUserDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/by-username/{userName}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersByUsernameUserName_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersByUsernameUserName_Plain(params: {
    userName: string;
  }): Observable<IdentityUserDto> {

    return this.getApiIdentityUsersByUsernameUserName_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityUserDto>) => r.body as IdentityUserDto)
    );
  }

  /**
   * Link Api: /api/identity/users/by-username/{userName}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersByUsernameUserName_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersByUsernameUserName_Json_Response(params: {
    userName: string;
  }): Observable<THRMStrictHttpResponse<IdentityUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetApiIdentityUsersByUsernameUserNamePath, 'get');
    if (params) {
      rb.path('userName', params.userName, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityUserDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/by-username/{userName}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersByUsernameUserName_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersByUsernameUserName_Json(params: {
    userName: string;
  }): Observable<IdentityUserDto> {

    return this.getApiIdentityUsersByUsernameUserName_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityUserDto>) => r.body as IdentityUserDto)
    );
  }

  /**
   * Path part for operation getApiIdentityUsersByEmailEmail
   */
  static readonly GetApiIdentityUsersByEmailEmailPath = '/api/identity/users/by-email/{email}';

  /**
   * Link Api: /api/identity/users/by-email/{email}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersByEmailEmail_Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersByEmailEmail_Plain_Response(params: {
    email: string;
  }): Observable<THRMStrictHttpResponse<IdentityUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetApiIdentityUsersByEmailEmailPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityUserDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/by-email/{email}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersByEmailEmail_Plain_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersByEmailEmail_Plain(params: {
    email: string;
  }): Observable<IdentityUserDto> {

    return this.getApiIdentityUsersByEmailEmail_Plain_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityUserDto>) => r.body as IdentityUserDto)
    );
  }

  /**
   * Link Api: /api/identity/users/by-email/{email}
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getApiIdentityUsersByEmailEmail_Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersByEmailEmail_Json_Response(params: {
    email: string;
  }): Observable<THRMStrictHttpResponse<IdentityUserDto>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetApiIdentityUsersByEmailEmailPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: TDSSafeAny) => r instanceof HttpResponse),
      map((r: HttpResponse<TDSSafeAny>) => {
        return r as THRMStrictHttpResponse<IdentityUserDto>;
      })
    );
  }

  /**
   * Link Api: /api/identity/users/by-email/{email}
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getApiIdentityUsersByEmailEmail_Json_Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getApiIdentityUsersByEmailEmail_Json(params: {
    email: string;
  }): Observable<IdentityUserDto> {

    return this.getApiIdentityUsersByEmailEmail_Json_Response(params).pipe(
      map((r: THRMStrictHttpResponse<IdentityUserDto>) => r.body as IdentityUserDto)
    );
  }

}
