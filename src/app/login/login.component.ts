import { Component } from '@angular/core';
import { LoginForm } from '../auth/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  form : LoginForm = {
    email : '',
    password : '',
  }

  submit(){
    console.log(this.form)
  }

}
