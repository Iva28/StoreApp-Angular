import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {

  product: Product;
  btn: string;

  categories: string[];

  get title() {return this.productForm.get('title'); }
  get price() {return this.productForm.get('price'); }
  get category() {return this.productForm.get('category'); }
  get available() {return this.productForm.get('available'); }
  get quantity() {return this.productForm.get('quantity'); }
  get date() {return this.productForm.get('date'); }

  productForm: FormGroup;

  constructor(private productService: ProductService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.route.params.forEach(params => {
      const id = +params['id'];
      if (!isNaN(id)) {
        this.product = this.productService.getProduct(id);
        this.btn = 'Save';
      } else {
        this.product = new Product();
        this.btn = 'Add';
      }
      this.productForm = this.fb.group({
        title: [this.product.title, [Validators.required]],
        price: [this.product.price, [Validators.required]],
        category: [this.product.category, [Validators.required]],
        available: [this.product.available, [Validators.required]],
        quantity: [this.product.quantity, [Validators.required]],
        date: [this.product.date, [Validators.required]]
      });
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const pr = new Product(
        this.product.id,
        this.productForm.value.title,
        this.productForm.value.price,
        this.productForm.value.category,
        this.productForm.value.available,
        this.productForm.value.quantity,
        this.productForm.value.date
      );
      if (this.btn === 'Add') {
        this.productService.addProduct(pr);
      } else {
        this.productService.updateProduct(pr);
      }
      this.productForm.reset();
    }
  }

}
