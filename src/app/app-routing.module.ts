import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './modules/admin/admin-home/admin-home.component';
import { CustAboutusComponent } from './modules/customer/cust-aboutus/cust-aboutus.component';
import { CustAtmosphereComponent } from './modules/customer/cust-atmosphere/cust-atmosphere.component';
import { CustEditComponent } from './modules/customer/cust-edit/cust-edit.component';
import { CustHomeComponent } from './modules/customer/cust-home/cust-home.component';
import { CustManageComponent } from './modules/customer/cust-manage/cust-manage.component';
import { HomeComponent } from './modules/home/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'atmosphere', component: CustAtmosphereComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'customer/home', component: CustHomeComponent },
  { path: 'customer/atmosphere', component: CustAtmosphereComponent },
  { path: 'customer/manage', component: CustManageComponent },
  { path: 'customer/aboutus', component: CustAboutusComponent },
  { path: 'customer/edit', component: CustEditComponent},
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }, {
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }, {
    path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
