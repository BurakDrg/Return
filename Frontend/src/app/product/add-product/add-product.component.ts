import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService) {
    this.createForm();
   }

  ngOnInit() {
    }

    createForm() {
      this.angForm = this.fb.group({
        name: ['', Validators.required ],
        stock: ['', Validators.required ],
        price: ['', Validators.required ]
      });
    }


  onSubmit() {
    this.productService.createProduct(this.angForm.value)
      .subscribe( data => {
        this.router.navigate(['product']);
      });
  }

}
