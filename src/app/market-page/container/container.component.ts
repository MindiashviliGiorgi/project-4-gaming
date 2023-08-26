import { Component, Input } from '@angular/core';
import { MarketPageService } from '../market-page.service';
import { Product } from 'src/app/types/product';
import { ProductService } from 'src/app/cart-page/product.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  
  @Input() product : Product = {} as Product;

  constructor(private productService : ProductService, private authService : AuthService){}

  ngOnInit():void {}

  isInCart : boolean = false;

  isAuthenticated(){
    return this.authService.isAuthenticated;
  }
  addToCart(){
    this.productService.addProduct(this.product);
    this.isInCart = true;
  }
  removeFromCart(){
    this.productService.removeProduct(this.product)
    this.isInCart = false;
  }


}
