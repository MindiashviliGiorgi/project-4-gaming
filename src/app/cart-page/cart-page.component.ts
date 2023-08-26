import { Component } from '@angular/core';
import { MarketPageService } from '../market-page/market-page.service';
import { Product } from '../types/product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  constructor(private marketService : MarketPageService, private productService : ProductService){}

  ngOnInit():void {}

  item : Array<Product> = [];

  getItems(){
    return this.productService.getProduct();
  }



}
