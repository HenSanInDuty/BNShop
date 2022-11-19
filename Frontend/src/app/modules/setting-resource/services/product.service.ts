import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreCommonService } from '@core/services';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { TDSSafeAny } from 'tds-ui/shared/utility';
import { CategoryDTO, getCategoryDTO } from '../models/category.dto';
import { editProductDTO, getProductDTO, ProductDTO } from '../models/product.dto';
import { TypeProductDTO } from '../models/typeProduct.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public idProduct: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  constructor(private apiService: CoreCommonService, private http: HttpClient) { }

  getProduct(): Observable<getProductDTO> {
    return this.http.get<getProductDTO>(
      environment.apiBNShop + `products/`)
  }
  getProductId(id:number): Observable<getProductDTO> {
    return this.http.get<getProductDTO>(
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
