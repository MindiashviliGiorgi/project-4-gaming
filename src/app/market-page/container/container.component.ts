import { Component, Input } from '@angular/core';
import { MarketPageService } from '../market-page.service';
import { Product } from 'src/app/types/product';
import { ProductService } from 'src/app/cart-page/product.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  
  @Input() product : Product = {} as Product;

  constructor(private productService : ProductService, private authService : AuthService,
    private router : Router){}

  ngOnInit():void {}

  isInCart : boolean = false;

  isAuthenticated(){
    return this.authService.isAuthenticated;
  }
  addToCart(){
    this.productService.addProduct(this.product);
    this.isInCart = true;
  }
  openItemPage(){
    this.productService.addProduct(this.product)
    this.router.navigate(['/product']);
  }
  removeFromCart(){
    this.productService.removeProduct(this.product)
    this.isInCart = false;
  }


}
