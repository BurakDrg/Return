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
import { ProductService } from './product/product.service';
import {FormsModule} from '@angular/forms'
import { AgmCoreModule } from '@agm/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { MatTableModule,MatPaginatorModule,MatSortModule,MatFormFieldModule,MatSelectModule,MatButtonModule,MatCheckboxModule,MatBadgeModule ,MatMenuModule,MatIconModule,MatListModule,MatDividerModule} from  '@angular/material';


@NgModule({
   declarations: [
      AppComponent,
      ProductComponent,
      CategoryComponent,
      CartComponent,
      DenemeComponent
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
      MatFormFieldModule,
      AgmCoreModule.forRoot({
         apiKey: ''// PUT MAPS API KEY HERE
      }),
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
