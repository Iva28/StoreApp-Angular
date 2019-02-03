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

  constructor() { }

  getProducts() {
    return this.products;
  }

  getCategories() {
    return this.categories;
  }

  getProduct(id: number) {
    return this.products.find((b) => b.id === id);
  }

  addProduct(product: Product) {
    product.id = this.products.length + 1;
    this.products.push(product);
  }

  removeProduct(product: Product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
    delete this.productsBasket[product.id];
  }

  updateProduct(product: Product) {
     const pr = this.getProduct(product.id);
     pr.title = product.title;
     pr.quantity = product.quantity;
     pr.price = product.price;
     pr.date = product.date;
     pr.available = product.available;
     pr.category = product.category;
  }

  addToBasket(id: number) {
    if (this.productsBasket.hasOwnProperty(id)) {
      this.productsBasket[id]++;
    } else {
      this.productsBasket[id] = 1;
    }
  }

  getBasketProducts() {
    return this.productsBasket;
  }
}
