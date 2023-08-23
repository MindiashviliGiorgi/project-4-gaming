import { Component, EventEmitter } from '@angular/core';
import { MarketPageService } from './market-page.service';
import { Product } from '../types/product';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.scss']
})
export class MarketPageComponent {

  constructor(
    private marketService : MarketPageService, 
    private authService : AuthService
    ){}

  product : Product[] = [];

  isAuthenticated(){
    return this.authService.isAuthenticated;
  }

  ngOnInit(): void {
    this.product = this.marketService.getProduct();
  }

  searchValue : string = '';
  searchYearValue : string = '';
  searchPriceValue : number = 0;
  
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
