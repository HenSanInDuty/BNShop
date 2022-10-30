import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, observable } from 'rxjs';
import { TAPICacheDTO, TAPIDTO, TIDictionary } from '../dto';
import { THelperCacheService, THelperObject } from '../utility';
import { TApiMethodType } from '../enum';
import { TCoreFunction } from './core.function';


@Injectable({
    providedIn: 'root'
})

export class TCommonService {
    private _dicData: TIDictionary<Subject<any>> = {};
    private _dicRunning: TIDictionary<Boolean> = {};

    constructor(
        private http: HttpClient,
        private cache: THelperCacheService
    ) { }
    public init(): Observable<boolean> {
        let that = this;
        return new Observable<boolean>(o => {
            this.cache.init().subscribe(s => {
                let keys: Array<string> = this.cache.apiGetKeys();
                keys.forEach(val => {
                    that._dicData[val] = new Subject<any>();
                    that._dicRunning[val] = false;
                });
                o.next(s);
                o.complete();
            });
        });
    }
    //Kết nối server lấy dữ liệu
    public connect<T>(
        pmethod: TApiMethodType,
        URL: string,
        data: unknown,
        headers?: HttpHeaders,
        withCredent: boolean = false,
        observe: any = 'body',
        responseType: any = 'json'
    ): Observable<T> {
        let that = this;

        if (!THelperObject.hasValue(headers))
            headers = that.getHeader();

        let options: {
            headers?: HttpHeaders,
            observe?: any,
            params?: any,
            reportProgress?: boolean,
            responseType?: any,
            withCredentials?: boolean
        } = { 
            headers: headers, 
            withCredentials: withCredent, 
            observe: observe, 
            responseType: responseType 
        };
        let result: Observable<T>;
        switch (pmethod) {
            case TApiMethodType.get:
                options.params = data;
                result = that.http.get<T>(URL, options);
                break;
            case TApiMethodType.post:
                result = this.http.post<T>(URL, data, options)
                break;
            case TApiMethodType.put:
                result = this.http.put<T>(URL, data, options)
                break;
            case TApiMethodType.delete:
                result = this.http.delete<T>(URL, options)
                break;
            default:
                result = this.http.post<T>(URL, JSON.stringify(data), options)
                break;
        }
        return result;
    }
    //Reset lại toàn bộ dữ liệu Data và các key đang running
    public resetData() {
        let that = this;

        that._dicData = {};
        that._dicRunning = {};
    }
    //Lấy dữ liệu
    public getData<T>(api: TAPIDTO, param: any): Observable<T> {
        let that = this;
        return that.connectWithAuthFormURL<T>(api.method, api.url, param);
    }
    //Tạo mới dữ liệu
    public create<T>(api: TAPIDTO, param: any): Observable<T> {
        let that = this;
        return that.connect<T>(api.method, api.url, param, that.getHeader());
    }
    //Cập nhật dữ liệu
    public updateData<T>(api: TAPIDTO, param: any): Observable<T> {
        let that = this;
        return that.connect<T>(api.method, api.url, param, that.getHeader());
    }
    //Xóa dữ liệu
    public deleteData<T>(api: TAPIDTO, param: any): Observable<T> {
        let that = this;
        return that.connect<T>(api.method, api.url, param, that.getHeader());
    }
    //Thực thi redirect trang login
    public redirectLogin(urlLogin: string): void {
        if (THelperObject.hasValue(TCoreFunction.redirectLogin)) {
            return TCoreFunction.redirectLogin(urlLogin);
        } else {
            throw "Redirect Login no implement";
        }
    }
    //Thực thi lấy header
    public getHeader(isAuthorize: boolean = true): HttpHeaders {
        if (THelperObject.hasValue(TCoreFunction.getHeader)) {
            return TCoreFunction.getHeader( isAuthorize);
        } else {
            throw "getUserInfo no implement";
        }
    }
    //lấy dữ liệu trên cache/server với việc truyền vào form để xác nhận phân quyền
    private connectWithAuthFormURL<T>(
        pmethod: TApiMethodType,
        URL: string,
        data: any,
    ): Observable<T> {
        let that = this;
        let strkey: string = JSON.stringify(pmethod) + JSON.stringify(data) + URL;
        let headers = this.getHeader();
        if (THelperObject.hasValue(that._dicData[strkey])) {

            if (that._dicRunning[strkey]) {
                return that._dicData[strkey];
            } else {
                that.cache.apiGet(strkey).subscribe(obs => {
                    let flag: Boolean = false;
                    if (obs != null) {
                        let itemCache: TAPICacheDTO = Object.assign(new TAPICacheDTO(), obs);
                        if (itemCache.Expire > (new Date()).getTime()) {
                            flag = true;
                            that._dicData[strkey].next(itemCache.Data);
                            that._dicData[strkey].complete();
                            that._dicData[strkey] = new Subject<T>();
                        }
                    }
                    if (flag == false && that._dicRunning[strkey] == false) {
                        that._dicRunning[strkey] = true;
                        that.connect<T>(pmethod, URL, data, headers).subscribe(res => {
                            that._dicData[strkey].next(res);
                            that._dicRunning[strkey] = false;
                            that._dicData[strkey].complete();
                            that._dicData[strkey] = new Subject<T>();
                            let item: TAPICacheDTO = new TAPICacheDTO();
                            if (item.build(res) == true) {
                                that.cache.apiSet(strkey, item).subscribe(() => { });
                            }
                        },
                            f => {
                                that._dicData[strkey].error(f);
                                that._dicRunning[strkey] = false;
                                that._dicData[strkey].complete();
                                that._dicData[strkey] = new Subject<T>();
                            });
                    }
                }
                );
                return that._dicData[strkey];
            }
        } else {
            that._dicData[strkey] = new Subject<T>();
            that._dicRunning[strkey] = true;
            that.connect<T>(pmethod, URL, data, headers).subscribe(
                res => {
                    that._dicData[strkey].next(res);
                    that._dicRunning[strkey] = false;
                    that._dicData[strkey].complete();
                    that._dicData[strkey] = new Subject<T>();
                    let item: TAPICacheDTO = new TAPICacheDTO();
                    if (item.build(res) == true) {
                        that.cache.apiSet(strkey, item).subscribe(() => { });
                    }
                },
                f => {
                    that._dicData[strkey].error(f);
                    that._dicRunning[strkey] = false;
                    that._dicData[strkey].complete();
                    that._dicData[strkey] = new Subject<T>();
                }
            );
            return that._dicData[strkey];
        }
    }
}