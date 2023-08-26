import { Injectable } from '@angular/core';
import { Product } from '../types/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn : 'root'
})
export class ProductService {

  product : Array<Product> = [];

  constructor(){}

  addProduct(product : Product){
    this.product.push(product)
  }

  getProduct(){
    return this.product
  }

  getItemPage(){
    return this.product;
  }

  removeProduct(product : Product){
    this.product = this.product.filter((c) => c!= product)
  }
}