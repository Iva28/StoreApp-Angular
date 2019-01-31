import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductformComponent } from './productform/productform.component';


const routes: Routes = [
  { path: 'admin', component: HomeComponent, children: [
    { path: 'products', component: ProductsComponent, children: [
      { path: 'edit/:id', component: ProductformComponent },
      { path: 'new', component: ProductformComponent } ] } ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

