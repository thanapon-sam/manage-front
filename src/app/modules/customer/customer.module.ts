import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustHomeComponent } from './cust-home/cust-home.component';
import { CustBookingComponent } from './cust-booking/cust-booking.component';
import { CustManageComponent } from './cust-manage/cust-manage.component';
import { CustOrderbillComponent } from './cust-orderbill/cust-orderbill.component';
import { CustEditComponent } from './cust-edit/cust-edit.component';
import { CustAaboutusComponent } from './cust-aaboutus/cust-aaboutus.component';
import { CustAboutusComponent } from './cust-aboutus/cust-aboutus.component';


@NgModule({
  declarations: [
    CustHomeComponent,
    CustBookingComponent,
    CustManageComponent,
    CustOrderbillComponent,
    CustEditComponent,
    CustAaboutusComponent,
    CustAboutusComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
