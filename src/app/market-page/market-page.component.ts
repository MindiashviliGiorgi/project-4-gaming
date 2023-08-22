import { Component } from '@angular/core';
import { MarketPageService } from './market-page.service';
import { Product } from '../types/product';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.scss']
})
export class MarketPageComponent {

  constructor(private marketService : MarketPageService){}

  product : Product[] = [];

  ngOnInit(): void {
    this.product = this.marketService.getProduct();
  }

}
