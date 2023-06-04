import {Component, Inject, OnInit} from '@angular/core';
import {Product} from "../../shared/models/product/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DiscountService} from "../discount.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";


@Component({
  selector: 'app-discount-dialog',
  templateUrl: './discount-dialog.component.html',
  styleUrls: ['./discount-dialog.component.css']
})
export class DiscountDialogComponent implements OnInit {

  constructor(
    private discountService : DiscountService,
    private dialogRef: MatDialogRef<DiscountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private router : Router
  ) { }


  product : Product

  range : FormGroup

  addDiscountForm : FormGroup

  ngOnInit(): void {
    this.product=this.data
    this.range=new FormGroup({
      startDate: new FormControl(null,[Validators.required]),
      endDate: new FormControl(null,[Validators.required]),
    });
    this.addDiscountForm= new FormGroup(
      {
        range : this.range ,
        value : new FormControl(null,[Validators.required, Validators.min(0),Validators.max(100)])
      }
    )
  }

  cancel(){
    this.dialogRef.close()
  }

  onSubmit() {
    if (this.addDiscountForm.valid){
      const startDate : Date = this.range.value.startDate
      const endDate : Date = this.range.value.endDate
      this.discountService.makeDiscount({
        productId : this.product.id,
        value : this.addDiscountForm.value.value,
        startDate : startDate.toISOString(),
        endDate : endDate.toISOString()
      }).subscribe(
        (respon)=>{
          this.dialogRef.close()
        },
        error => {
          this.dialogRef.close()
        }
      )
    }
  }
}
