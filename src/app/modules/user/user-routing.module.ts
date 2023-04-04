import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { UserAboutusComponent } from './user-aboutus/user-aboutus.component';
import { UserHomeComponent } from './user-home/user-home.component';





const routes: Routes = [
  { path: '', component: UserHomeComponent },
  { path: 'home', component: UserHomeComponent },
  { path: 'aboutus', component: UserAboutusComponent },
  { path: 'question', component:  QuestionComponent},


 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UesrRoutingModule { }
