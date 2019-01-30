import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { }

  @Input()
  product: Product;

  @Output()
  onRemoveProduct: EventEmitter<Product> = new EventEmitter();

  ngOnInit() {
  }

  removeProduct() {
    this.onRemoveProduct.emit(this.product);
  }

  editProduct() {
    this.router.navigate(['/products/edit', this.product.id]);
  }
}
