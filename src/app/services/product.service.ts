import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  categories: string[] = ['Fruits', 'Vegetables', 'Sweets'];

  products: Product[] = [
    new Product(1, 'Orange', 5, this.categories[0], true, 32, new Date()),
    new Product(2, 'Carrot', 6, this.categories[1], true, 40, new Date()),
    new Product(3, 'Chocolate', 7, this.categories[2], false, 50, new Date())
  ];

  productsBasket: { [key: number]: number; } = {};

  constructor() {
   }

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

  getProduct(id: number) {
    return this.products.find((b) => b.id === id);
  }

  updateProduct(product: Product) {
     const pr = this.getProduct(product.id);
     pr.id = product.id;
     pr.title = product.title;
     pr.quantity = product.quantity;
     pr.price = product.price;
     pr.date = product.date;
     pr.available = product.available;
     pr.category = product.category;
  }

  addToBasket(id: number) {
    const keys = Object.keys(this.productsBasket);
    if (keys.includes(id.toString())) {
      const values = Object.keys(this.productsBasket).map(key => id);
      this.productsBasket[values[0]]++;
    } else {
      this.productsBasket[id] = 1;
    }
  }

  getAllProducts() {
    return this.productsBasket;
  }

}
