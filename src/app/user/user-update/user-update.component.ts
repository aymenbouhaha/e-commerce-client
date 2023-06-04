import { Component, OnInit } from '@angular/core';
import {UserInfoComponent} from "../user-info/user-info.component";
import {User} from "../../shared/models/user";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
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

  constructor(
    private userService: UserService,
    private router:Router
  ) { }

  updateForm : FormGroup

  ngOnInit(): void {
    this.updateForm= new FormGroup(
      {
          "firstName" : new FormControl(null),
        "lastName": new FormControl(null),
        "email" : new FormControl(null),
        "phoneNumber" : new FormControl(null),
        "address" : new FormControl(null)
      }
    )
      this.userService.user.subscribe(
        (user)=>{
              this.updateForm.setValue({
                firstName : user? user.firstName: null,
                lastName : user?  user.lastName : null ,
                email : user?  user.email : null,
                phoneNumber : user?  user.phoneNumber : null,
                address : user?  user.address : null
              })
        }
      )
  }

  onSubmit() {
    this.userService.updateUserInfo(this.updateForm.value)
      .subscribe(
        (respo)=>{
          console.log(respo)
        },
        error => console.log(error)
      )
  }


}
