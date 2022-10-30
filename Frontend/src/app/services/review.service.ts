import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { DataReviewDTO, ReviewShopDTO } from '../model/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private REST_API_SERVER ='https://tshop-dev.tpos.dev'
  constructor(private http: HttpClient) { }
  ReviewShopDTO: ReviewShopDTO[] = [];
  public ReviewSubject$ = new BehaviorSubject<boolean>(true);
  public getReviewShopList(pageIndex: number, pageSize: number, filetername?: string,ratingFilter?:number,statusFilter?: number ): Observable<DataReviewDTO> {
    const url= `${this.REST_API_SERVER}/api/v1/appshop-review/list-review-shop${this.getParams(pageIndex, pageSize, filetername,ratingFilter,statusFilter)}`
    return this.http.get<DataReviewDTO>(url)
  } 
  getParams(pageIndex: number, pageSize: number, filetername?: string,ratingFilter?:number, statusFilter?: number) {
    let maxResultCount: number = pageSize;
    let skipCount = (pageIndex - 1) * maxResultCount
    let result = `?SkipCount=${skipCount}&MaxResultCount=${pageSize}`
    let param: String[]=[] 
    if (filetername) {
      param.push(`customerName~contains~${filetername}~or~reviewMessage~contains~${filetername}`)
      // param.push(`reviewMessage~contains~${filetername}`)
    }
    if (ratingFilter) {
      param.push(`rating~eq~${ratingFilter}`)
    }
    if (statusFilter) {
      param.push(`status~eq~${statusFilter}`)
      
    }
    
    if (param.length>0) {
      result += '&filter='
      for(let i = 0; i<param.length;i++) { 
        if(i==0){
          result+=param[i]
          continue
        }
        result+='~and~'+param[i]
        
     }
     
    }
    return result
  }
  
  getListStatusForShop( params: { ShopId: any, Rating: any } ): Observable<any> {
    return this.http
    .post<any>(`${this.REST_API_SERVER}/api/v1/appshop-review/status-list-forshop`, params)
    .pipe(
      tap (()=>{
        this.ReviewSubject$.next(true)
      })
    )
  }
}
