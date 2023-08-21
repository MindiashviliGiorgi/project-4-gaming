import { Component } from '@angular/core';
import { RegisterForm } from '../auth/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private authService : AuthService){}

  form : RegisterForm = {
    email : '',
    password : '',
    confirm_password : '',
  }


  submit() {
    this.authService.register(this.form)
  }
  isLoading(){
    return this.authService.isLoading;
  }
  registrationDone(){
    return this.authService.registrationDone;
  }
  

}
