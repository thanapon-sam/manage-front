import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { AdminAddbookingComponent } from './admin-addbooking/admin-addbooking.component';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminPaymentComponent } from './admin-payment/admin-payment.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AdminTableComponent } from './admin-table/admin-table.component';






const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'manage', component: AdminManageComponent},
  { path: 'table', component: AdminTableComponent},
  { path: 'addbooking', component: AdminAddbookingComponent},
  { path: 'booking', component: AdminBookingComponent},
  { path: 'payment', component: AdminPaymentComponent},
  { path: 'customer', component: AdminCustomerComponent},
  { path: 'report', component: AdminReportComponent},





];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
