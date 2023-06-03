import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {Route, Router, Routes} from "@angular/router";
import {Subject} from "rxjs";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  router : Router ;
  public userA :User = new User(1,localStorage.getItem("firstname"),
    localStorage.getItem("lastname")     ,
    localStorage.getItem("address"),
    localStorage.getItem("email"),
    localStorage.getItem("phonenumber"),
    "client",
    true) ;
  mail=localStorage.getItem("usermail")
  constructor(private userservice:UserService) { } ;
  user:User
   verif(status : boolean) : string {
    if(status)
      return "Verified" ;

    return "Not Verified" ;
  }
  GoToUpdate() {
    this.router.navigate(['/Home']);
  }

  ngOnInit(): void {
    console.log(this.mail) ;

  }

}
