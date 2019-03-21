import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DenemeComponent} from './deneme/deneme.component';
import { ShoppingComponent } from './shopping/shopping.component';

  /*Add This to Routes array for main page redirection: (utku)
{ path: '', redirectTo: '/deneme', pathMatch: 'full' }

*/
const routes: Routes = [
  {path: 'deneme', component: DenemeComponent},
  {path: 'shopping' , component: ShoppingComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
