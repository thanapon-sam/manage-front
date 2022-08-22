import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustAboutusComponent } from './cust-aboutus/cust-aboutus.component';
import { CustAtmosphereComponent } from './cust-atmosphere/cust-atmosphere.component';
import { CustHomeComponent } from './cust-home/cust-home.component';
import { CustManageComponent } from './cust-manage/cust-manage.component';


const routes: Routes = [
  { path: '', component: CustHomeComponent },
  { path: 'home', component: CustHomeComponent },
  { path: 'atmosphere', component: CustAtmosphereComponent },
  { path: 'manage', component: CustManageComponent },
  { path: 'aboutus', component: CustAboutusComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
