import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminService } from './admin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminAddbookingComponent } from './admin-addbooking/admin-addbooking.component';
import { AdminEditbookingComponent } from './admin-editbooking/admin-editbooking.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminPaymentComponent } from './admin-payment/admin-payment.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';







@NgModule({
  declarations: [

    AdminAddbookingComponent,
    AdminEditbookingComponent,
    AdminManageComponent,
    AdminHomeComponent,
    AdminPaymentComponent,
    AdminReportComponent,
    AdminTableComponent,
    AdminBookingComponent,
    AdminCustomerComponent,
  ],


  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    

  ],
  providers: [AdminService]
})
export class AdminModule { }
