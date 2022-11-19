import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddressDTO, GetAddressDTO } from '../dto/address.dto';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAddress(): Observable<GetAddressDTO> {
    return this.http.get<GetAddressDTO>(
      environment.apiBNShop + `address/`)
  }
  createAddress(data: AddressDTO): Observable<AddressDTO> {
    return this.http.post<AddressDTO>(
      environment.apiBNShop + `address/`, data)
  }
  editAddress(data: AddressDTO): Observable<AddressDTO> {
    return this.http.patch<AddressDTO>(
      environment.apiBNShop + `address/`, data)
  }
  deleteAddress(id: number): Observable<any> {
    return this.http.delete<any>(
      environment.apiBNShop + `address/${id}/`)
  }
  

}
