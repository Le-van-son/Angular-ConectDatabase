import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductServiceService} from "../../service/product-service.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  products: Product [] = []
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  })

  constructor(private productService: ProductServiceService) {
  }

  ngOnInit() {
  }

  createProduct() {
    const product : Product = this.productForm.value;
    this.productService.saveProduct(product)
    console.log("list" ,this.products)
  }

}
