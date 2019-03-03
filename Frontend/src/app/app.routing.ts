import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { DenemeComponent } from './deneme/deneme.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { CourierComponent } from './courier/courier.component';

export const routes: Routes = [

    {
      path: 'product',
      redirectTo: 'products',
      pathMatch: 'full',
    },
    {
      path: 'cart',
      component: CartComponent,
      pathMatch: 'full',
    },
    {
      path: 'courier',
      component: CourierComponent,
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
    },
    {
      path: 'login',
      component: LoginComponent,
      pathMatch: 'full',
    },
    {
      path: 'admin',
      component: AdminComponent,
      pathMatch: 'full',
    },
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
