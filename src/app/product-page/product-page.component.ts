import { Component } from '@angular/core';
import { ProductService } from '../cart-page/product.service';
import { Product } from '../types/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  constructor(private productService : ProductService){}

  ngOnInit():void {
    this.clearArray()
  }

  item : Array<Product> = [];

  clearArray(){
    if(this.getItem().length > 1){
      this.getItem().shift()
    }
  }
  
  getItem(){
    return this.productService.getItemPage();
  }
  // reloadPage(){
  //   if(this.productService.getItemPage().length > 1) {
  //     window.location.reload()
  //   }
  // }

}
