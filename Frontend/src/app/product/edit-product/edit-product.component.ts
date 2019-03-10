import { Component, OnInit , Inject} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product: Product;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    const productId = window.localStorage.getItem('editProductId');
    if (!productId) {
      alert('Invalid action.');
      this.router.navigate(['product']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required]
    });
    this.productService.getProductById(+productId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.productService.updateProduct(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
            alert('Product updated successfully.');
            this.router.navigate(['product']);
          });
        }
  }


