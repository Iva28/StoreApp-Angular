import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AdminModule } from './admin/admin.module';
import { BasketComponent } from './basket/basket.component';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    HomeComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule
   /*  FormsModule,
    ReactiveFormsModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
