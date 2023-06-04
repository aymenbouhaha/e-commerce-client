import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product/product";
import {ActivatedRoute, Router} from "@angular/router";
import {BasketService} from "../../basket/basket.service";
import {BasketBackEndService} from "../../basket/basket-back-end.service";
import {MatDialog} from "@angular/material/dialog";
import {DiscountDialogComponent} from "../../discount/discount-dialog/discount-dialog.component";
import {AddToBasketPopUpComponent} from "../add-to-basket-pop-up/add-to-basket-pop-up.component";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product : Product


  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private basketService : BasketBackEndService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  navigateToProductDetails(product: Product) {
    this.router.navigate(["product",product.id],{relativeTo : this.activatedRoute})
  }

  addToBasket(){
    const dialogRef = this.dialog.open(
      AddToBasketPopUpComponent,
      {
        width : "600px",
        data : this.product,
      }
    )
  }

  makeDiscount() {
    const dialogRef = this.dialog.open(
      DiscountDialogComponent,
      {
        width : "600px",
            data : this.product,
      }
    )
  }
}
