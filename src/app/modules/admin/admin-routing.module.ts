import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { LoginComponent } from '../home/login/login.component';
import { RegisterComponent } from '../home/register/register.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { ListWorkComponent } from './list-work/list-work.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'works', component: ListWorkComponent
  },
  {
    path: 'booking', component: ListBookingComponent
  },

  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'register', component: RegisterComponent
  },

  {
    path: 'editbooking', component: EditBookingComponent
  },

  {
    path: 'edit/editbooking/:bookId', component: EditBookingComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
