import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';
import { shoppingProduct } from './shoppingProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [DatabaseService]
})
export class DatabaseComponent implements OnInit {

  products: shoppingProduct[] = [];
  constructor(private productService: DatabaseService) { }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe( data => {
      this.products = data;
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe(result => {
      this.products = result;
    });
  }


}