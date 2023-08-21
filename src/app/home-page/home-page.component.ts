import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(){}

  ngOnInit():void {}

  loginChoice : boolean = true;
  registerChoice : boolean = false;

  activeMove : boolean = false;

}
