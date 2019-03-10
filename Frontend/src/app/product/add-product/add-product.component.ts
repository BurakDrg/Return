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

  constructor(private formBuilder: FormBuilder, private router: Router, private productService: ProductService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      stock: ['', Validators.required],
      price: ['', Validators.required]
    });

  }

  onSubmit() {
    this.productService.createProduct(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['product']);
      });
  }

}
