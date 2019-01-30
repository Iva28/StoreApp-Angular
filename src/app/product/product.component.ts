import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  product: Product;


  @Output()
  onRemoveProduct: EventEmitter<Product> = new EventEmitter();

  ngOnInit() {
    this.route.params.forEach((params) => {
      const id = +params['id'];
      this.product = this.productService.getProduct(id);
   });
  }

  removeProduct() {
    this.onRemoveProduct.emit(this.product);
  }

  editProduct() {
    this.router.navigate(['/products/edit', this.product.id]);
  }
}
