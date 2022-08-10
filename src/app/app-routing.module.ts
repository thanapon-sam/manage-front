import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './modules/admin/admin-home/admin-home.component';
import { CustHomeComponent } from './modules/customer/cust-home/cust-home.component';
import { HomeComponent } from './modules/home/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'customer/home', component: CustHomeComponent },
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
