import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'http://192.168.1.107:8080/api/product';
  }


  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.baseURL);
  }

  createProduct(product: Product) {
    return this.http.post(this.baseURL, product);
  }
  updateProduct(product: Product) {
    return this.http.put(this.baseURL + '/' + product.id, product);
  }
  deleteProduct(id: number) {
    return this.http.delete(this.baseURL + '/' + id);
  }

}
