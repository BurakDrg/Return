import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  title = 'Products';
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

}
