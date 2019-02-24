import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class CourierService {

  baseURL: string;

constructor(private http: HttpClient) {
  this.baseURL = 'http://192.168.1.107:8080/api/orders';
 }

}
