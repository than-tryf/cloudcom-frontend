import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../shared/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Array<any>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAll().subscribe(data => {
      this.products = data;
    });
  }

}
