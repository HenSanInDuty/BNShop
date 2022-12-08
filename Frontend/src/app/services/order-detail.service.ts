import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getOrderDetailDTO, OrderDetailDTO } from '../dto/orderDetail.dto';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  public dataObsevable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }

  getOrderDetail(): Observable<getOrderDetailDTO[]> {
    return this.http.get<getOrderDetailDTO[]>(
      environment.apiBNShop + `orders/order-detail/`)
  }
  getOrderDetailId(id: number): Observable<getOrderDetailDTO> {
    return this.http.get<getOrderDetailDTO>(
      environment.apiBNShop + `orders/order-detail/${id}/`)
  }
  editOrderDetailId(id:number, status:number): Observable<any> {
    return this.http.patch<any>(environment.apiBNShop + `orders/order-detail/${id}/`, {status: status})
  }

  createOrder(data: OrderDetailDTO): Observable<OrderDetailDTO> {
    return this.http.post<OrderDetailDTO>(
      environment.apiBNShop + `orders/order-detail/`, data)
  }
}
