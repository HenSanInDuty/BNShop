import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getOrderDTO, OrderDTO } from '../dto/order.dto';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public dataObsevable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public listIdOrderObsevable: BehaviorSubject<any> = new BehaviorSubject<number[]>([]);
  constructor(private http: HttpClient) { }

  getOrder(): Observable<getOrderDTO> {
    return this.http.get<getOrderDTO>(
      environment.apiBNShop + `orders/`)
  }
  editOrder(id:number,data: number): Observable<getOrderDTO> {
    return this.http.patch<getOrderDTO>(
      environment.apiBNShop + `orders/${id}/`, {
        qty: data
      })
  }

  createOrder(data: OrderDTO): Observable<OrderDTO> {
    return this.http.post<OrderDTO>(
      environment.apiBNShop + `orders/`, data)
  }
  deleteOrder(id: number): Observable<any> {
    return this.http.delete<any>(
      environment.apiBNShop + `orders/${id}/`)
  }
}
