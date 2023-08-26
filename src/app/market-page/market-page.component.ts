import { Component, EventEmitter, Input } from '@angular/core';
import { MarketPageService } from './market-page.service';
import { Product } from '../types/product';
import { AuthService } from '../auth/auth.service';
import { ProductService } from '../cart-page/product.service';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.scss']
})
export class MarketPageComponent {

  prod : Product[] = [];

  constructor(
    private authService : AuthService,
    private marketService : MarketPageService
    ){}

  

  isAuthenticated(){
    return this.authService.isAuthenticated;
  }


  ngOnInit(): void {
    this.prod = this.marketService.getProduct();
  }

  searchValue : string = '';
  searchYearValue : string = '';
  searchPriceValue : number = 200;
  
  searchTextChange : EventEmitter<string> = new EventEmitter<string>();
  searchItem(){
    this.searchTextChange.emit(this.searchValue)
  }

  searchYearChange : EventEmitter<string> = new EventEmitter<string>();
  searchItemYear(){
    this.searchYearChange.emit(this.searchYearValue)
  }

  searchPriceChange : EventEmitter<number> = new EventEmitter<number>();
  searchItemPrice(){
    this.searchPriceChange.emit(this.searchPriceValue)
  }


}
