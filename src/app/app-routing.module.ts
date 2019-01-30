import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductformComponent } from './productform/productform.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent},
  { path: '', pathMatch: 'full', redirectTo: 'products'},
  { path: 'products', component: ProductsComponent, children: [
    { path: ':id', component: ProductComponent},
    { path: 'edit/:id', component: ProductformComponent },
    { path: 'add', component: ProductformComponent }] },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
