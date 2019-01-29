import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

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

  }
}
