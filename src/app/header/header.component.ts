import { Component, HostListener } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService : AuthService){}

  isAuthenticated(){
    return this.authService.isAuthenticated;
  }
  signout(){
    this.authService.logout();
  }

  menu : boolean = false;

  @HostListener("document:scroll")
  scrollFunction(){
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    
  }
  scrollZero(){
    document.documentElement.scrollTop = 708;
  }


}
