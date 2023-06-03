import { Component, OnInit } from '@angular/core';
import {UserInfoComponent} from "../user-info/user-info.component";
import {User} from "../../shared/models/user";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  public userA :User = new User("Firas","Saada" ,"borj Baccouche", "firassaada@gmail.com","96584693","aaaaeeee",true) ;
  constructor( private http : HttpClient) { }

  ngOnInit(): void {
  }
  OnSumbit(form : NgForm) {
/*
    this.userA.firstName=form.value.firstname ;
    this.userA.lastName=form.value.lastname ;
    this.userA.address=form.value.address ;
    this.userA.email=form.value.email ;
    this.userA.phoneNumber=form.value.phonenumber ;
    this.userA.password=form.value.Password ;
    console.log(this.userA) ;
  */
   this.http.patch('http://localhost:3000/user/update',
     {
       "firstName" : form.value.firstname ,
       "lastName" :form.value.lastname  ,
       "address" : form.value.address ,
       "email" :form.value.email ,
       "password" : form.value.Password ,
       "phoneNumber" : form.value.phonenumber
     }
   ).subscribe
    (
      responseData => {console.log(responseData) ;  },error => console.log(error)
    ) ;




  }


}
