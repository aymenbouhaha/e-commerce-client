import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../shared/models/product/product";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BasketBackEndService} from "../../basket/basket-back-end.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-to-basket-pop-up',
  templateUrl: './add-to-basket-pop-up.component.html',
  styleUrls: ['./add-to-basket-pop-up.component.css']
})
export class AddToBasketPopUpComponent implements OnInit {

  product : Product



  constructor(
    private dialogRef: MatDialogRef<AddToBasketPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private basketBackService : BasketBackEndService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.product=this.data
    this.addToBasketForm=new FormGroup(
      {
        itemsNumber :new FormControl(1,[Validators.required,Validators.min(1)])
      }
    )
  }

  addToBasketForm : FormGroup
  isLoading: boolean = false;
  errorMessage: string = null;


  onSubmit(){
    this.isLoading=true
    if (this.addToBasketForm.valid){
      this.basketBackService.addToBasket(this.product,this.addToBasketForm.get("itemsNumber").value)
        .subscribe(
          (res)=>{
                this.isLoading=false
                this.router.navigate(["/basket"])
          },
          error => {
            this.isLoading=false
            this.errorMessage="The product is not added to your basket , Please Retry"
          }
        )
    }
  }

}
