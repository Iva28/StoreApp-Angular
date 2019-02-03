import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Array<any> = [];

  ngOnInit() {
    const ps = this.productService.getBasketProducts();
      Object.keys(ps).forEach(p => {
      const product = this.productService.getProduct(+p);
      if (product != null) {
        const pr = {title: product.title, quantity: ps[p], totalPrice: (product.price * ps[p])};
        this.products.push(pr);
      }
    });
  }
}
