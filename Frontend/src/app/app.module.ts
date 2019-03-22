import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { DenemeComponent } from './deneme/deneme.component';
import { CourierComponent } from './courier/courier.component';
import { ProductService } from './product/product.service';
import { CourierService } from './courier/courier.service';
import { FormsModule, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
// tslint:disable-next-line:max-line-length
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatBadgeModule , MatMenuModule, MatIconModule, MatListModule, MatDividerModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddProductComponent } from './product/add-product/add-product.component';


@NgModule({
   declarations: [
      AppComponent,
      ProductComponent,
      CategoryComponent,
      CartComponent,
      DenemeComponent,
      LoginComponent,
      AdminComponent,
      HomeComponent,
      CourierComponent,
      AddProductComponent
   ],
   imports: [
      FormsModule,
      BrowserAnimationsModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      MatButtonModule,
      MatCheckboxModule,
      MatBadgeModule,
      MatMenuModule,
      MatIconModule,
      MatListModule,
      MatDividerModule,
      MatSelectModule,
      MatDialogModule,
      MatFormFieldModule,
      AgmCoreModule.forRoot({
         apiKey: 'AIzaSyDrY6e0G3NUnCiSNIypl93xou3Z-SR2vek'// PUT MAPS API KEY HERE
      }),
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule
   ],
   providers: [ProductService],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [ProductComponent]
})
export class AppModule { }
