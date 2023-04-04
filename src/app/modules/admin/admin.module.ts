import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminService } from './admin.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';







@NgModule({
  declarations: [


    AdminManageComponent,
    AdminHomeComponent,
    AdminUserComponent,
    AdminProfileComponent,
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
