import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { paymentDTO } from '../dto/payment.dto';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  getPayment(): Observable<paymentDTO> {
    return this.http.get<paymentDTO>(
      environment.apiBNShop + `orders/payment/`)
  }
}
