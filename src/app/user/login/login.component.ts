import {Component, OnInit, ViewChild} from '@angular/core';
import { Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {UserService} from "../user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor( private http: HttpClient, private userService : UserService ,private router : Router) {
  }
  @ViewChild('myForm') form: NgForm;

  isLoading : boolean = false

  error : boolean = false

  errorMessage : string = null

  onSubmit() {
    this.isLoading=true
    const email = this.form.value.personDetails.email;
    const password = this.form.value.personDetails.password;
    this.userService.login(email,password).
      subscribe(
    (response)=>{
      this.router.navigate(['/shop'])
      this.errorMessage=null
      this.isLoading=false
    },
    error => {
      this.isLoading=false
      this.errorMessage="The email or the password is wrong"
    }
  )
  }

  ngOnInit(): void {
    this.userService.user.subscribe((user)=>{
      if (user){
        this.router.navigate(["/shop"])
      }
    })
  }

}
