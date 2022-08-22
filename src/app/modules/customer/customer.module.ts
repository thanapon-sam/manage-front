import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustHomeComponent } from './cust-home/cust-home.component';
import { CustBookingComponent } from './cust-booking/cust-booking.component';
import { CustManageComponent } from './cust-manage/cust-manage.component';
import { CustOrderbillComponent } from './cust-orderbill/cust-orderbill.component';
import { CustEditComponent } from './cust-edit/cust-edit.component';
import { CustAboutusComponent } from './cust-aboutus/cust-aboutus.component';
import { CustAtmosphereComponent } from './cust-atmosphere/cust-atmosphere.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ 
    CustHomeComponent,
    CustBookingComponent,
    CustManageComponent,
    CustOrderbillComponent,
    CustEditComponent,
    CustAboutusComponent,
    CustAtmosphereComponent,
 
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerModule { }
