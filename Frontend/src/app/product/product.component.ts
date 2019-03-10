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
  products: Product[] = [];
  router: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe( data => {
      this.products = data;
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
    });
  }
  deleteProduct(product: Product): void {
    this.productService.deleteProduct(product.id)
      .subscribe( data => {
        this.products = this.products.filter(u => u !== product);
      });
  }

  editUser(product: Product): void {
    window.localStorage.removeItem('editProductId');
    window.localStorage.setItem('editProductId', product.id.toString());
    this.router.navigate(['edit-user']);
  }

  addProduct(): void {
    this.router.navigate(['add-product']);
  }


}
