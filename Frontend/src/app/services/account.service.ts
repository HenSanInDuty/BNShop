import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AgencyDTO, CustomerDTO } from '../dto/account.dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  createCustomer(data: CustomerDTO): Observable<CustomerDTO> {
    return this.http.post<CustomerDTO>(
      environment.apiBNShop + `account/sign-up/customer/`, data)
  }
  createAgency(data: AgencyDTO): Observable<AgencyDTO> {
    return this.http.post<AgencyDTO>(
      environment.apiBNShop + `account/sign-up/agency/`, data)
  }
}
