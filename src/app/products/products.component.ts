import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  removeProduct(product: Product) {
    this.productService.removeProduct(product);
  }

  addProduct() {
    this.router.navigate(['/products/add']);
  }
}
