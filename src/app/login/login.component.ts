import { Component } from '@angular/core';
import { LoginForm } from '../auth/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  ngOnInit():void {

  }

  constructor(private authService : AuthService){}
  
  form : LoginForm = {
    email : '',
    password : '',
  };


  submit(){
    this.authService.login(this.form);
  }
  isLoading(){
    return this.authService.isLoading;
  }
  loginDone(){
    return this.authService.loginDone;
  }


}
