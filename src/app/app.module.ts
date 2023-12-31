import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MarketPageComponent } from './market-page/market-page.component';
import { StatsPageComponent } from './stats-page/stats-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { SaleProductComponent } from './sale-product/sale-product.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ScrollBoxComponent } from './scroll-box/scroll-box.component';
import { ContainerComponent } from './market-page/container/container.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    CartPageComponent,
    NavbarComponent,
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    MarketPageComponent,
    StatsPageComponent,
    ProductPageComponent,
    SaleProductComponent,
    ContactPageComponent,
    ScrollBoxComponent,
    ContainerComponent,
    ShoppingCartComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
