import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {UserRoutingModule} from "./user-routing.module";
import { UserInfoComponent } from './user-info/user-info.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserUpdateComponent} from "./user-update/user-update.component";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    UserUpdateComponent,
    UserInfoComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule
    ]
})
export class UserModule { }
