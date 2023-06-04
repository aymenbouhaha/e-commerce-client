import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from "@angular/router";
import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";
import { ImagePipe } from './image.pipe';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoadingSpinnerComponent,
    ImagePipe,
  ],
  exports: [
    HeaderComponent,
    LoadingSpinnerComponent,
    NotFoundComponent,
    FooterComponent,
    ImagePipe
  ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
