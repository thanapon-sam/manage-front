import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './modules/admin/admin-home/admin-home.component';
import { AdminProfileComponent } from './modules/admin/admin-profile/admin-profile.component';
// import { AdminUserComponent } from './modules/admin/admin-user/admin-user.component';

import { HomeComponent } from './modules/home/home/home.component';
import { LoginComponent } from './modules/home/login/login.component';

import { QuestionComponent } from './modules/user/question/question.component';
import { QuestionfiveComponent } from './modules/user/questionfive/questionfive.component';
import { QuestionfourComponent } from './modules/user/questionfour/questionfour.component';
import { QuestionthreeComponent } from './modules/user/questionthree/questionthree.component';
import { QuestiontwoComponent } from './modules/user/questiontwo/questiontwo.component';
import { UserAboutusComponent } from './modules/user/user-aboutus/user-aboutus.component';
import { UserChapterfiveComponent } from './modules/user/user-chapterfive/user-chapterfive.component';
import { UserChapterfourComponent } from './modules/user/user-chapterfour/user-chapterfour.component';
import { UserChapteroneComponent } from './modules/user/user-chapterone/user-chapterone.component';
import { UserChaptersixComponent } from './modules/user/user-chaptersix/user-chaptersix.component';
import { UserChapterthreeComponent } from './modules/user/user-chapterthree/user-chapterthree.component';
import { UserChaptertwoComponent } from './modules/user/user-chaptertwo/user-chaptertwo.component';
import { UserEditComponent } from './modules/user/user-edit/user-edit.component';
import { UserHomeComponent } from './modules/user/user-home/user-home.component';
import { UserNewsComponent } from './modules/user/user-news/user-news.component';
import { UserQuizComponent } from './modules/user/user-quiz/user-quiz.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/login', component: LoginComponent },
  { path: 'user/home', component: UserHomeComponent },
  { path: 'user/edit', component:  UserEditComponent},
  { path: 'user/aboutus', component: UserAboutusComponent },
  { path: 'user/chapterone', component: UserChapteroneComponent },
  { path: 'user/chaptertwo', component: UserChaptertwoComponent },
  { path: 'user/chapterthree', component:  UserChapterthreeComponent},
  { path: 'user/chapterfour', component:  UserChapterfourComponent},
  { path: 'user/chapterfive', component:   UserChapterfiveComponent},
  { path: 'user/chaptersix', component:  UserChaptersixComponent},
  { path: 'user/news', component:  UserNewsComponent},
  { path: 'user/quiz', component:  UserQuizComponent},
  { path: 'question', component:  QuestionComponent},
  { path: 'questiontwo', component: QuestiontwoComponent },
  { path: 'questionthree', component: QuestionthreeComponent },
  { path: 'questionfour', component: QuestionfourComponent },
  { path: 'questionfive', component: QuestionfiveComponent },


  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/profile', component: AdminProfileComponent},
  // { path: 'admin/user', component: AdminUserComponent},




  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }, {
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }, {
    path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
    {
     path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
