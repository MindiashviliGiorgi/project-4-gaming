import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProductPageComponent } from './product-page/product-page.component';



const routes: Routes = [
  {
    path : '',
    component : HomePageComponent
  },
  {
    path : 'about',
    component : AboutPageComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'cart',
    component : CartPageComponent,

  },
  {
    path : 'product',
    component : ProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
