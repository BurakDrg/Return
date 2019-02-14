import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'http://northwindapi.azurewebsites.net/api/products';
  }


  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.baseURL);
  }

}
