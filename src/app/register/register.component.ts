import { Component } from '@angular/core';
import { RegisterForm } from '../auth/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form : RegisterForm = {
    email : '',
    password : '',
    confirm_password : '',
  }

  registrationDone : boolean = false;

  isLoading : boolean = false;

  passwordMatched : boolean = true;

  submit() {

    this.isLoading = true;

    if(this.form.password != this.form.confirm_password){
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
    .then((userCredential) => {
      console.log(userCredential)
      this.registrationDone = true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    }).finally(() => this.isLoading = false)
  }

}
