import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductformComponent } from './productform/productform.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ProductformComponent, ProductsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
