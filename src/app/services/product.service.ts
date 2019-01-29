import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Orange', 7, 'Fruits', true, 32, new Date()),
    new Product(2, 'Apple', 3, 'Fruits', true, 40, new Date()),
    new Product(3, 'Carrot', 5, 'Vegetables', true, 50, new Date())
  ];

  categories: string[] = ['Fruits', 'Vegetables'];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getCategories() {
    return this.categories;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(product: Product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }
}
