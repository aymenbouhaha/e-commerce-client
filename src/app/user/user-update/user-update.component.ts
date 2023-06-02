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


    //console.log(this.userA) ;
   this.http.patch('http://localhost:3000/user/update',
     {"firstName" : form.value.firstname ,
       "lastName" :form.value.lastname  ,
       "address" : form.value.address ,
       "email" :form.value.email ,
       "phoneNumber" : form.value.phonenumber }
   ).subscribe
    (
      responseData => {console.log(responseData) ;  },error => console.log(error)
    ) ;


  }


}
