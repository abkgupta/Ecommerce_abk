import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { FormsModule } from '@angular/forms';
import { SellerService } from './services/seller.service';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { SearchComponent } from './search/search.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    ProductDetailsComponent,
    SellerAddProductComponent,
    UserAuthComponent,
    FooterComponent,
    MyOrdersComponent,
    SearchComponent,
    CheckoutComponent,
    CartPageComponent,
    SellerUpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
