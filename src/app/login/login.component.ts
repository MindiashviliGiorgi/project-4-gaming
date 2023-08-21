import { Component } from '@angular/core';
import { LoginForm } from '../auth/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  form : LoginForm = {
    email : '',
    password : '',
  };

  isLoading : boolean = false;
  loginDone : boolean = false;

  submit(){
    if ( this.isLoading ) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
    .then((userCredential) => {
      this.loginDone = true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Credentials does not match our record.')
    }).finally(() => this.isLoading = false)
  }

}
