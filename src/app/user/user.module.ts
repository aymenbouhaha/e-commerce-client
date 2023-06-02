import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {UserRoutingModule} from "./user-routing.module";
import { UserInfoComponent } from './user-info/user-info.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserUpdateComponent } from './user-update/user-update.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
    declarations: [
        LoginComponent,
        SignUpComponent,
        UserInfoComponent,
        UserUpdateComponent
    ],
    exports: [
        UserInfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule ,
        HttpClientModule,
        UserRoutingModule,
        ReactiveFormsModule
    ]
})
export class UserModule { }
