import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreCommonService } from '@core/services';
import { BehaviorSubject, Observable } from 'rxjs';
import { paramGetProductDTO } from 'src/app/dto/product.dto';
import { environment } from 'src/environments/environment';

import { TDSSafeAny } from 'tds-ui/shared/utility';
import { CategoryDTO, getCategoryDTO } from '../models/category.dto';
import { editProductDTO, getProductDTO, ProducePriceDTO, ProductDTO } from '../models/product.dto';
import { TypeProductDTO } from '../models/typeProduct.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public idProduct: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  constructor(private apiService: CoreCommonService, private http: HttpClient) { }

  getParams(params?: paramGetProductDTO) {
    let result: String[] = [];
    let resultFinal =`?`
    if (params?.agency) {
      result.push(`agency=${params.agency}`)
    }
    if (params?.brand) {
      result.push(`brand=${params.brand}`)

    }
    if (params?.category) {
      result.push(`category=${params.category}`)

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

  getProduct(params?: paramGetProductDTO): Observable<getProductDTO> {
    return this.http.get<getProductDTO>(
      environment.apiBNShop + `products/${this.getParams(params)}`)
  }
  getProductId(id:number): Observable<any> {
    return this.http.get<any>(
      environment.apiBNShop + `products/${id}`)
  }
  getCategory(): Observable<getCategoryDTO> {
    return this.http.get<getCategoryDTO>(
      environment.apiBNShop + `products/category/`)
  }
  getType(): Observable<TypeProductDTO[]> {
    return this.http.get<TypeProductDTO[]>(
      environment.apiBNShop + `products/type/`)
  }
  createProduct(data: ProductDTO): Observable<ProductDTO> {
    return this.http.post<ProductDTO>(
      environment.apiBNShop + `products/`, data)
  }
  editProduct(id: string, data: editProductDTO): Observable<editProductDTO> {
    return this.http.patch<any>(
      environment.apiBNShop + `products/${id}/`, data)
  }
  editProductQuantity(id: string, data: ProducePriceDTO): Observable<any> {
    return this.http.post<any>(
      environment.apiBNShop + `products/quantity/${id}/`, data)
  }
  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(
      environment.apiBNShop + `products/${id}/`)
  }
  createCategory(data: CategoryDTO): Observable<CategoryDTO> {
    return this.http.post<CategoryDTO>(
      environment.apiBNShop + `products/category/`, data)
  }
  editCategory(id: string, name: string): Observable<CategoryDTO> {
    return this.http.patch<any>(
      environment.apiBNShop + `products/category/${id}/`, name)
  }
  deleteCategory(id: string): Observable<any>{
    return this.http.delete( environment.apiBNShop + `products/category/${id}/`)
  }
}
