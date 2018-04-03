import { Component, ViewChild } from '@angular/core';
import { Product } from './shared/product';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'fc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(ProductComponent) productComponent: ProductComponent

  productList: Product[] = [
    {
      id: "1", info: 'lorem info', name: 'Angular Note 01', price: 2000, avg_stars:
        4, total_reviews: 10
    },
    {
      id: "2", info: 'lorem info', name: 'Angular Note 02', price: 3000, avg_stars:
        3, total_reviews: 10
    },
    {
      id: "3", info: 'lorem info', name: 'Angular Note 03', price: 4000, avg_stars:
        1, total_reviews: 10
    },
    {
      id: "4", info: 'lorem info', name: 'Angular Note 04', price: 5000, avg_stars:
        5, total_reviews: 10
    },
    {
      id: "2", info: 'lorem info', name: 'Angular Note 02', price: 3000, avg_stars:
        3, total_reviews: 10
    },
    {
      id: "3", info: 'lorem info', name: 'Angular Note 03', price: 4000, avg_stars:
        1, total_reviews: 10
    },
    {
      id: "4", info: 'lorem info', name: 'Angular Note 04', price: 5000, avg_stars:
        5, total_reviews: 10
    },
    {
      id: "2", info: 'lorem info', name: 'Angular Note 02', price: 3000, avg_stars:
        3, total_reviews: 10
    },
    {
      id: "3", info: 'lorem info', name: 'Angular Note 03', price: 4000, avg_stars:
        1, total_reviews: 10
    },
    {
      id: "4", info: 'lorem info', name: 'Angular Note 04', price: 5000, avg_stars:
        5, total_reviews: 10
    }
  ];

  viewDetail(product: Product) {
    console.log(product);
  }

  addCart(product: Product) {
    console.log(product);
  }

  addStar(product: Product) {
    console.log(product);
  }
}
