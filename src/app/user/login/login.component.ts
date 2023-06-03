import {Component, ViewChild, OnInit} from '@angular/core';
import { Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {UserService} from "../user.service";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private http: HttpClient, private userService : UserService ,private router : Router) {
  }
  @ViewChild('myForm') form: NgForm;

  onSubmit() {
  const email = this.form.value.personDetails.email;
  const password = this.form.value.personDetails.password;
  this.userService.login(email,password).subscribe(
    (response)=>{
      setTimeout(
        ()=>{
          localStorage.removeItem("token")
          localStorage.removeItem("user")
        },1000*3600
      )
      this.router.navigate(['/shop'])
    },
    error => alert(error.message.message)
  )
  }

}
