import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listStoreDTO } from '../model/store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private REST_API_SERVER ='https://tshop-dev.tpos.dev'
 
  constructor(private http: HttpClient) { }

  public getStore(): Observable<listStoreDTO> {
    const url= `${this.REST_API_SERVER}/api/v1/app-shops`
    return this.http.get<listStoreDTO>(url)
  }
  public getStoreId(StoreId:any): any {
   
   
    const headers = new HttpHeaders()
    // .set('accessToken', token)
   
    .append('shopid', StoreId)
    const url= `${this.REST_API_SERVER}/api/v1/app-shops`
    return this.http.get<listStoreDTO>(url,{ headers: headers })
  }
}
