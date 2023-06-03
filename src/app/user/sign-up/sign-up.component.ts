import {Component , ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {log} from "util";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private userService: UserService , private router: Router) {
  }

  @ViewChild('myForm') form: NgForm;

  onSubmit() {
    const firstName = this.form.value.personDetails.firstname;
    const lastName = this.form.value.personDetails.lastname;
    const email = this.form.value.personDetails.email;
    const password = this.form.value.personDetails.password;
    const phoneNumber = this.form.value.personDetails.phoneNumber;
    const address = this.form.value.personDetails.adress
    this.userService.signUp({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      address
    }).subscribe(
      (resp)=>{
        this.router.navigate(["/login"])
      },
      error => console.log("Sign-up Failed:"+error)
    )
  }
}
