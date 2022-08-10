import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustHomeComponent } from './cust-home/cust-home.component';

const routes: Routes = [
  {
    path: '', component: CustHomeComponent
  },
  {
    path: 'home', component: CustHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
