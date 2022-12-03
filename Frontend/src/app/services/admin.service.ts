import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getProductDTOAdmin } from '../dto/account.dto';
import { getOrderDetailAdminDTO } from '../dto/orderDetail.dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getParams(params?: getProductDTOAdmin) {
    let result: String[] = [];
    let resultFinal = `?`
    if (params?.agency) {
      result.push(`agency=${params.agency}`)
    }
    if (params?.type) {
      result.push(`type=${params.type}`)

    }
    if (result.length > 0) {
      for (let i = 0; i < result.length; i++) {
        if (i == 0) {
          resultFinal += result[i]
          continue
        }
        resultFinal += '&' + result[i]
      }

    }
    return resultFinal
  }

  getAccount(type?: number): Observable<any> {
    let param = ''
    if (type) {
      param = `?type=${type}`
    }
    return this.http.get<any>(
      environment.apiBNShop + `admin/account/${param}`)
  }
  getProduct(params?: getProductDTOAdmin): Observable<any> {
    return this.http.get<any>(
      environment.apiBNShop + `admin/product/${this.getParams(params)}`)
  }
  getOrder(status?: number): Observable<getOrderDetailAdminDTO> {
    let param = ''
    if (status) {
      param = `?status=${status}`
    }
    return this.http.get<getOrderDetailAdminDTO>(
      environment.apiBNShop + `admin/order_detail/${param}`)
  }

  ActiveAccount(type?: number): Observable<any> {
    return this.http.patch<any>(
      environment.apiBNShop + `admin/account/active/${type}/`, '')
  }

  DisableAccount(type?: number): Observable<any> {
    return this.http.patch<any>(
      environment.apiBNShop + `admin/account/deactive/${type}/`, '')
  }
}
