import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css']
})
export class VerifyAccountComponent implements OnInit {

  constructor(
    private userService : UserService,
    private router : Router
  ) { }

  verifyForm : FormGroup
  errorMessage: string = null;

  ngOnInit(): void {
    if (this.userService.isVerified){
      this.router.navigate(["/shop"])
    }
    this.verifyForm=new FormGroup(
      {
        "1" : new FormControl(null,[Validators.required , Validators.min(1),Validators.max(9)]),
        "2" : new FormControl(null,[Validators.required,Validators.min(1),Validators.max(9)]),
        "3" : new FormControl(null,[Validators.required,Validators.min(1),Validators.max(9)]),
        "4" : new FormControl(null,[Validators.required ,Validators.min(1),Validators.max(9)]),
      }
    )
  }

  onSubmit(){
    if (this.verifyForm.valid){
      const firstNumer=this.verifyForm.get("1").value
      const secondNumer=this.verifyForm.get("2").value
      const thirdNumer=this.verifyForm.get("3").value
      const fourthNumer=this.verifyForm.get("4").value
      const code : string=`${firstNumer}${secondNumer}${thirdNumer}${fourthNumer}`
      this.userService.verifyAccount(code)
        .subscribe(
          (resp)=>{
            console.log(resp)
            this.errorMessage=null
            this.router.navigate(["/shop"])
          },
          error => {
            console.log(error)
            this.errorMessage="Verification Failed Please Try Again"
          }
        )
    }
  }



}
