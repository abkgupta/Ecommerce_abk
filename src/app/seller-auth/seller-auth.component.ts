import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signUp } from '../datatype';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller: SellerService, private route: Router) { }
 showLogin = false
  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  signUp(data: signUp) {
    console.log(data);
    this.seller.userSignup(data)
  }
  openLogin() {
    this.showLogin = true
  }
  opensignUp() {
    this.showLogin = false
  }
  login(data: signUp){
  console.warn(data);
  }
}