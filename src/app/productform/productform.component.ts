import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {

  product: Product = new Product();

  categories: string[];

  get title() {return this.productForm.get('title'); }
  get price() {return this.productForm.get('price'); }
  get category() {return this.productForm.get('category'); }
  get available() {return this.productForm.get('available'); }
  get quantity() {return this.productForm.get('quantity'); }
  get date() {return this.productForm.get('date'); }

  productForm = this.fb.group({
    title: [this.product.title, [Validators.required]],
    price: [this.product.price, [Validators.required]],
    category: [this.product.category, [Validators.required]],
    available: [this.product.available, [Validators.required]],
    quantity: [this.product.quantity, [Validators.required]],
    date: [this.product.date, [Validators.required]]
  });

  constructor(private productService: ProductService, private fb: FormBuilder) { }

  ngOnInit() {
    this.categories = this.productService.getCategories();
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService.addProduct(new Product(
        0,
        this.productForm.value.title,
        this.productForm.value.price,
        this.productForm.value.category,
        this.productForm.value.available,
        this.productForm.value.quantity,
        this.productForm.value.date
      ));
    }
  }
}
