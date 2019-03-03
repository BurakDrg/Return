import { Component, OnInit } from '@angular/core';
import { CourierService } from './courier.service';
import { Courier } from './courier';

@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.scss'],
  providers: [CourierService]
})
export class CourierComponent implements OnInit {

  title = 'Orders';
  orders: Courier[] = [];
  constructor(private courierService: CourierService) { }

  ngOnInit() {
    this.getCourier();
  }

  getCourier() {
    this.courierService.getCourier().subscribe(res => {
      this.orders = res;
    });
  }

}
