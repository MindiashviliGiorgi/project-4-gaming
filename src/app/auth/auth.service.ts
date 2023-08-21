import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated : boolean = false;
  isLoading : boolean = false;
  loginDone : boolean = false;
  registrationDone : boolean = false;
  passwordMatched : boolean = true;

  constructor() { }

  login(form : LoginForm){

    this.isLoading = true;

    const auth = getAuth()
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      this.isAuthenticated = true;
      this.loginDone = true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.isAuthenticated = false;
    }).finally(() => this.isLoading = false)
  }

  register(form : RegisterForm){
    
    this.isLoading = true;

    if(form.password != form.confirm_password){
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      this.isAuthenticated = true;
      this.registrationDone = true;
    })
    .catch((error) => {
      this.isAuthenticated = false;
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    }).finally(() => this.isLoading = false)
  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.isAuthenticated = false;
    }).catch((error) => {
      
    });
  }

}
