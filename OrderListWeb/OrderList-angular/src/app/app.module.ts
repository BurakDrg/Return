import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'cart', component: CartComponent}
];

@NgModule({
   declarations: [
      AppComponent,
      ProductComponent,
      CategoryComponent,
      CartComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
