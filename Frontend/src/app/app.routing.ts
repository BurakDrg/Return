import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { DenemeComponent } from './deneme/deneme.component';

export const routes: Routes = [

    {
      path: '',
      redirectTo: 'products',
      pathMatch: 'full',
    },
    {
      path: 'cart',
      component: CartComponent,
      pathMatch: 'full',
    },
    {
      path: 'products',
      component: ProductComponent,
      pathMatch: 'full',
    },
    {
      path: 'user',
      component: DenemeComponent,
      pathMatch: 'full',
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }