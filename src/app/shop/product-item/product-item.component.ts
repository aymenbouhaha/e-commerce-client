import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product/product";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DiscountDialogComponent} from "../../discount/discount-dialog/discount-dialog.component";
import {AddToBasketPopUpComponent} from "../add-to-basket-pop-up/add-to-basket-pop-up.component";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product : Product

  isAdmin : boolean = false
  isAuthenticated : boolean = false
  isVerfied : boolean=false

  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    public dialog: MatDialog,
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.userService.user
      .subscribe(
        (user)=>{
          if (user){
            this.isAuthenticated=true
            if (user.verified){
              this.isVerfied=true
            }
            if (user.role=="admin"){
              this.isAdmin=true
            }
          }else {
            this.isVerfied=false
            this.isAuthenticated=false
            this.isAdmin=false
          }
        }
      )
  }

  navigateToProductDetails(product: Product) {
    this.router.navigate(["/shop/product",product.id])
  }

  addToBasket(){
    if (this.isAuthenticated && this.isVerfied &&  !this.isAdmin){
      const dialogRef = this.dialog.open(
        AddToBasketPopUpComponent,
        {
          width : "600px",
          data : this.product,
        }
      )
    }else {
      this.router.navigate(["/user/login"])
    }
  }

  makeDiscount() {
    if (this.isAuthenticated && this.isVerfied && this.isAdmin){
      const dialogRef = this.dialog.open(
        DiscountDialogComponent,
        {
          width : "600px",
          data : this.product,
        }
      )
    }
  }
}
