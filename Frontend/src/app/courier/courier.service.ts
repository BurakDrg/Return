import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Courier } from './courier';
import { Observable } from 'rxjs';

@Injectable()
export class CourierService {

  baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'http://192.168.1.107:8080/api/orders';
  }


  getCourier(): Observable<Array<Courier>> {
    return this.http.get<Array<Courier>>(this.baseURL);
  }

}
