import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

  isAuthenticated : boolean = false

  isAdmin : boolean =false


  ngOnInit(): void {
    this.userService.user.subscribe(
      (user)=>{
        if (user){
          this.isAuthenticated=true
          if (user.role=="admin"){
            this.isAdmin=true
          }
        }else {
          this.isAuthenticated=false
          this.isAdmin=false
        }
      }
    )
  }

  logout(){
    this.userService.logout()
  }

}
