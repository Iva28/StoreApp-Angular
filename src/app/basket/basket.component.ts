import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product[] = [];

  productsBasket: { [key: string]: number; } = {};

  ngOnInit() {
    const ps = this.productService.getAllProducts();
    Object.keys(ps).forEach(p => {
      const product = this.productService.getProduct(+p);
      this.productsBasket[product.title] = ps[p];
    });
  }
}
