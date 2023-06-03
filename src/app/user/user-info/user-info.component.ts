import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user";
import {Route, Router, Routes} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  router : Router ;
  public userA :User = new User(1,"Firas","Saada" ,"borj Baccouche", "firassaada@gmail.com","+21696584693","aaaaeeee",true) ;

  constructor() { } ;
   verif(status : boolean) : string {
    if(status)
      return "Verified" ;

    return "Not Verified" ;
  }
  GoToUpdate() {
    this.router.navigate(['/Home']);
  }

  ngOnInit(): void {
  }

}
