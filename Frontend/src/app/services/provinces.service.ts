import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { provinceDTO } from '../dto/address.dto';

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {

  constructor(private http: HttpClient) { }

  getProvinces(): Observable<provinceDTO> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', 'http://localhost:4200/')
      .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
      .set('Access-Control-Allow-Headers', 'X-Requested-With, content-type')
    return this.http.get<provinceDTO>("https://provinces.open-api.vn/api/p/", { headers: headers })
  }
  getDitric(provinceCode:number): Observable<provinceDTO> {
    return this.http.get<provinceDTO>(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
  }
  getWard(ditricCode:number): Observable<provinceDTO> {
    return this.http.get<provinceDTO>(`https://provinces.open-api.vn/api/d/${ditricCode}?depth=2`)
  }
}
