import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { signUp } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerloggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private route:Router) { }
  userSignup(data: signUp) {
   this.http.post("http://localhost:3000/seller",data, {observe : 'response'}).subscribe((result) =>{
   this.isSellerloggedIn.next(true)   
   localStorage.setItem('seller',JSON.stringify(result.body))
   console.warn("result", result);
   this.route.navigate(['seller-home'])
   })

  }
  reloadSeller() {
    if(localStorage.getItem('seller'))
    {
      this.isSellerloggedIn.next(true)
       this.route.navigate(['seller-home'])
    }
  }
}
