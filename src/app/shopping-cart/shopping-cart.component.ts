import { Component } from '@angular/core';
import { ProductService } from '../cart-page/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  constructor(private productService : ProductService){}

  ngOnInit():void {}

  getNum(){
    return this.productService.getProduct();
  }

}
