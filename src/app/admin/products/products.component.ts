import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
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

  addProduct() {
    this.router.navigate(['admin/products/new']);
  }

  removeProduct(product: Product) {
    this.productService.removeProduct(product);
    this.router.navigate(['/admin/products']);
  }

  editProduct(id: number) {
    this.router.navigate(['/admin/products/edit/' + id]);
  }
}
