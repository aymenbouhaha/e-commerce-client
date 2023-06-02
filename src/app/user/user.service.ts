import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, catchError, map, of, ReplaySubject, tap, throwError} from 'rxjs';
import { environment } from 'src/environments/environment';
import {  User } from '../shared/models/user';
import {UserInterface} from "../shared/models/interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : BehaviorSubject<User> = new BehaviorSubject<User>(null)


  constructor(private http: HttpClient, private router: Router) { }


  login(email : string , password : string) {
         return this.http.post<UserInterface>(
           'http://localhost:3000/user/login',
           { email: email, password: password })
           .pipe(
           catchError((err)=>{return throwError("err")}),
             tap(
               (response)=> {
                 const user = new User(response.id,response.firstName,response.lastName,response.address,response.email,response.phoneNumber,response.role,response.verified)
                 this.user.next(user)
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


  logout() {
    localStorage.removeItem('token');
    this.user.next(null)
    this.router.navigateByUrl('/');
  }

}
