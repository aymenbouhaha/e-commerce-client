import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable, take} from 'rxjs';
import {UserService} from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class VerifiedGuard implements CanActivate {

  constructor(private userService:UserService, private router : Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userService.user.pipe(
      take(1),
      map(user => {
          if (user){
            if (user.verified){
              return true
            }
          }else {
            return this.router.createUrlTree(["/user/verify"]);
          }
        }
      )
    )
  }

}
