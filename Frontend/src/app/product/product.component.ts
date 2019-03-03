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
    this.getProducts();
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

  editProduct(product: Product): void {
    localStorage.removeItem("editProductStock");
    localStorage.setItem("editUserStock", product.id.toString());
    this.router.navigate(['edit-product']);
  }

  addProduct(): void {
    this.router.navigate(['add-product']);
  };


}
