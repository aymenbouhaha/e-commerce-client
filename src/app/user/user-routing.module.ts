import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {UserInfoComponent} from "./user-info/user-info.component";
import {UserUpdateComponent} from "./user-update/user-update.component";
import {AuthGuard} from "./guard/auth.guard";
import {NotAdminGuard} from "./guard/not-admin.guard";

const routes: Routes=[
  {path : "login", component: LoginComponent},
  {path : "sign-up", component: SignUpComponent},
  {path : "profile", component: UserInfoComponent , canActivate: [AuthGuard , NotAdminGuard] },
  {path : "update", component: UserUpdateComponent , canActivate: [AuthGuard , NotAdminGuard]},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
