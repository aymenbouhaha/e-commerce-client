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



  onSubmit() {
  const email = this.form.value.personDetails.email;
  const password = this.form.value.personDetails.password;
  this.userService.login(email,password).subscribe(
    (response)=>{
      this.router.navigate(['/shop'])
    },
    error => console.log(error)
  )
  }

  ngOnInit(): void {
    this.userService
  }

}
