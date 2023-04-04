import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  declarations: [

 
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    HomeRoutingModule,
  ]
})
export class HomeModule { }
