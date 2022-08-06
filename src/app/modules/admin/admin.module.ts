import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWorkComponent } from './list-work/list-work.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminService } from './admin.service';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { ManageAdminComponent } from './manage-admin/manage-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListWorkComponent,
    ListBookingComponent,
    EditBookingComponent,
    ManageAdminComponent
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AdminService]
})
export class AdminModule { }
