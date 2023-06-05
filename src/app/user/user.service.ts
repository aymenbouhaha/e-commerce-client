import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, catchError, map, of, ReplaySubject, tap, throwError} from 'rxjs';
import { environment } from 'src/environments/environment';
import {  User } from '../shared/models/user';
import {UserInterface} from "../shared/models/interfaces/user.interface";
import {BasketService} from "../basket/basket.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : BehaviorSubject<User> = new BehaviorSubject<User>(null)

  isAdmin : boolean = false

  isAuthenticated : boolean

  isVerified : boolean

  constructor(private http: HttpClient, private router: Router , private basketService : BasketService) { }


  login(email : string , password : string) {
         return this.http.post<UserInterface>(
           'http://localhost:3000/user/login',
           { email: email, password: password })
           .pipe(
           catchError((err)=>{return throwError(err)}),
             tap(
               (response)=> {
                 const user = new User(response.id,response.firstName,response.lastName,response.address,response.email,response.phoneNumber,response.role,response.verified)
                 this.user.next(user)
                 this.isAuthenticated=true
                 if (user.verified)
                   this.isVerified=true
                 this.basketService.setBasket(response.basket)
                 if (user.role=="admin"){
                   this.isAdmin=true
                 }
                 localStorage.setItem("user",JSON.stringify(user))
                 localStorage.setItem("token",response.token)
               }
             )
         )
  }

  signUp(credentials :{email : string ,firstName : string , phoneNumber : string, lastName : string,password : string, address : string}){
      return this.http.post(
        "http://localhost:3000/user/signup",
        credentials
      )
  }

  updateUserInfo(userInfo:{firstName :string, lastName : string, phoneNumber : string, address: string, email : string}){
    return this.http.patch(
          "http://localhost:3000/user/update",userInfo
    )
  }

  verifyAccount(code: string){
    return this.http.patch(
      "http://localhost:3000/user/verify",{
        code
      }
    )
  }


  logout() {
    this.isVerified=false
    this.isAdmin=false
    this.isAuthenticated=false
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.user.next(null);
    this.router.navigateByUrl('/user/login');
  }

}
