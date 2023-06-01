import {Component , ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../../shared/models/user";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private http: HttpClient, private router: Router) {
    console.log("sign up component")
  }

  @ViewChild('myForm') form: NgForm;

  onSubmit() {
    let user = new User()
    console.log(this.form);
    user.firstName = this.form.value.personDetails.firstname;
    user.lastName = this.form.value.personDetails.lastname;
    user.email = this.form.value.personDetails.email;
    user.password = this.form.value.personDetails.passwordGroup.password;
    user.phoneNumber = this.form.value.personDetails.phoneNumber;
    user.role = "user";
    this.http.post('http://localhost:8080/api/auth/signup', user).subscribe(response => {
        console.log("user created successfully");
      }, error => {
        console.log("error");
      }
    )

    if (this.form.valid) {
      this.router.navigate(['login']);
    }
    else {
      this.form.resetForm()
    }
  }
}
