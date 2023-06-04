import { Component, OnInit } from '@angular/core';
import {Route, Router, Routes} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../../shared/models/user";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {


  router : Router ;

  constructor(private userService:UserService) { } ;

  user : User

  ngOnInit(): void {
    this.userService.user.subscribe(
      (user) => {
        this.user=user
      }
    )
  }

}
