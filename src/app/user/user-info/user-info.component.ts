import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {Route, Router, Routes} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {


  router : Router ;

  constructor(private userService:UserService) { } ;
  userA:User



  ngOnInit(): void {

    this.userA = JSON.parse(localStorage.getItem("user"))
  }

}
