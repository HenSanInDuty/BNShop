import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeProductDTO } from '../dto/typeProduct.dto';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  constructor(private http: HttpClient) { }

  getType(): Observable<TypeProductDTO> {
    return this.http.get<TypeProductDTO>(
      environment.apiBNShop + `products/type/`)
  }
}
