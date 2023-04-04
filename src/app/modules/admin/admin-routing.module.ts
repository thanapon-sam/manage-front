import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';

import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminUserComponent } from './admin-user/admin-user.component';






const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'profile', component: AdminProfileComponent },
  { path: 'user', component: AdminUserComponent },


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
