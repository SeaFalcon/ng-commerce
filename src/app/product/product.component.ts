import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../shared/product';

@Component({
  selector: 'fc-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  _product: Product = {
    id: '1',
    name: '-',
    price: 2000,
    info: '-',
    avg_stars: 0,
    total_reviews: 0
  }
  stars: number[] = Array(5).fill(0);

  constructor() { }

  get product() {
    return this._product
  }

  @Input()
  set product(product: Product) {
    this._product = product;
    this.stars = this.stars.map((x, i) => (i+1 <= this.product.avg_stars) ? 1 : 0);
  }

  @Output()
  onStarClick = new EventEmitter<Product>();

  @Output()
  onCartClick = new EventEmitter<Product>();

  @Output()
  onDetailClick = new EventEmitter<Product>();

  ngOnInit() {}

}
