import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {UserRoutingModule} from "./user-routing.module";
import { UserInfoComponent } from './user-info/user-info.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    UserInfoComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule
    ]
})
export class UserModule { }
