import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-box',
  templateUrl: './scroll-box.component.html',
  styleUrls: ['./scroll-box.component.scss']
})
export class ScrollBoxComponent {

  progress_variable : boolean = false;

  @HostListener("document:scroll")
  scrollFunction(){
    let scrollBox:any = document.getElementById("scrollBox");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    scrollBox.style.background = `conic-gradient(#4194c1 ${scrollValue}%, transparent ${scrollValue}%)`
    if(document.body.scrollTop > 12 || document.documentElement.scrollTop > 12){
      this.progress_variable = true;
    }else {
      this.progress_variable = false;
    }
  };
  scrollProgress(){
    document.documentElement.scrollTop = 0;
  }

}
