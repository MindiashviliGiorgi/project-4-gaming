import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class MarketPageService {

  constructor(){}

  ngOnInit():void {}

  getProduct(){
    return [
      {
        image : "/assets/images/game-1.jfif",
        title : 'Hogwarts Legacy',
        price :  69.99,
        year  :  2023,
      },
      {
        image : "/assets/images/game-2.jfif",
        title : 'EA SPORTS FIFA 23',
        price :  89.99,
        year  :  2022,
      },
      {
        image : "/assets/images/game-3.jpg",
        title : 'Resident Evil 4 Remake',
        price :  59.99,
        year  :  2022,
      },
      {
        image : "/assets/images/game-4.jpg",
        title : 'God of War Ragnarok',
        price :  69.99,
        year  :  2022,
      },
      {
        image : "/assets/images/game-5.jpg",
        title : 'Call of Duty: Modern Warface II',
        price :  79.99,
        year  :  2022,
      },
      {
        image : "/assets/images/game-6.jpg",
        title : `Assassin's Creed Mirage`,
        price :  49.99,
        year  :  2023,
      },
      {
        image : "/assets/images/game-7.jpg",
        title : 'HELLDIVERS™ 2',
        price :  49.99,
        year  :  2023,
      },
      {
        image : "/assets/images/game-8.jfif",
        title : 'Dead Space',
        price :  39.99,
        year  :  2023,
      },
      {
        image : "/assets/images/game-9.jpg",
        title : 'Forza Horizon 5',
        price :  59.99,
        year  :  2022,
      },
      {
        image : "/assets/images/game-10.jpg",
        title : 'UFC 4',
        price :  59.99,
        year  :  2021,
      },
      {
        image : "/assets/images/game-11.jfif",
        title : 'NBA 2K23',
        price :  59.99,
        year  :  2023,
      },
      {
        image : "/assets/images/game-12.png",
        title : 'Counter Strike',
        price :  99.99,
        year  :  2000,
      },
    ]
  }

}