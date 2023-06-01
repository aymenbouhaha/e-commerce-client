import {Component, ViewChild} from '@angular/core';
import { Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../../shared/models/user";
import {NgForm} from "@angular/forms";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private http: HttpClient, private router: Router ) {
  }
  @ViewChild('myForm') form: NgForm;

  onSubmit() {
  let user = new User()
  user.email = this.form.value.personDetails.email;
  user.password = this.form.value.personDetails.password;
  this.http.post<any>('/api/login', { username: user.email, password: user.password }).subscribe(response => {
    console.log('Login successful');
    const token = response.headers.get('Authorization');
    // Store the token in local storage
    localStorage.setItem('token', token);
    // You can redirect to another page or perform additional actions upon successful login
  }, error => {
    console.error('Login failed:', error);
    // Handle login failure, such as displaying an error message
  });
  if (this.form.valid) {
    console.log('Form Submitted!');
    this.router.navigate(['/home']);
  }
  else {
    console.log('Invalid Form!');
    this.form.resetForm()
  }
}
}
