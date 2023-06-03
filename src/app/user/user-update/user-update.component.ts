import { Component, OnInit } from '@angular/core';
import {UserInfoComponent} from "../user-info/user-info.component";
import {User} from "../../shared/models/user";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user.service";
import {take} from "rxjs";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  public userA :User = new User(1,"Firas","Saada" ,"borj Baccouche", "firassaada@gmail.com","96584693","aaaaeeee",true) ;
  constructor( private loginUser: UserService,private http : HttpClient ,private router:Router) { }

  user:User
  ngOnInit(): void {
  this.loginUser.user.subscribe(
    (user)=>{
    }
  )
    this.userA = JSON.parse(localStorage.getItem("user"))
  }
  OnSumbit(form : NgForm) {

   this.http.patch('http://localhost:3000/user/update',
     {
       "firstName" : form.value.firstname ,
       "lastName" :form.value.lastname  ,
       "address" : form.value.address ,
       "email" :form.value.email ,
       "phoneNumber" : form.value.phonenumber
     }
   ).subscribe
    (
      responseData => {
        console.log(responseData) ;
        this.router.navigate(["/profile"])

        },error => console.log(error)
    ) ;




  }


}
