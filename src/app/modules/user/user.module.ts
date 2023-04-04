import { NgModule } from '@angular/core';



import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserAboutusComponent } from './user-aboutus/user-aboutus.component';
import { UserService } from './user.service';
import { UesrRoutingModule } from './user-routing.module';
import { QuestionComponent } from './question/question.component';
import { ChangeBgDirective } from 'src/app/change-bg.directive';


import { UserChaptertwoComponent } from './user-chaptertwo/user-chaptertwo.component';
import { UserChapterthreeComponent } from './user-chapterthree/user-chapterthree.component';
import { UserChaptersixComponent } from './user-chaptersix/user-chaptersix.component';
import { UserChapteroneComponent } from './user-chapterone/user-chapterone.component';
import { UserChapterfourComponent } from './user-chapterfour/user-chapterfour.component';
import { UserChapterfiveComponent } from './user-chapterfive/user-chapterfive.component';
import { UserQuizComponent } from './user-quiz/user-quiz.component';
import { UserNewsComponent } from './user-news/user-news.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { QuestiontwoComponent } from './questiontwo/questiontwo.component';
import { QuestionthreeComponent } from './questionthree/questionthree.component';
import { QuestionfourComponent } from './questionfour/questionfour.component';
import { QuestionfiveComponent } from './questionfive/questionfive.component';






@NgModule({
  declarations: [

    UserHomeComponent,
    UserAboutusComponent,
    QuestionComponent,
    ChangeBgDirective,
  
   
    UserChaptertwoComponent,
    UserChapterthreeComponent,
    UserChaptersixComponent,
    UserChapteroneComponent,
    UserChapterfourComponent,
    UserChapterfiveComponent,
    UserQuizComponent,
    UserNewsComponent,
    // UserEditComponent,
    QuestiontwoComponent,
    QuestionthreeComponent,
    QuestionfourComponent,
    QuestionfiveComponent,
    


  ],
  imports: [
    UesrRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,


  ],
  providers: [UserService]
})
export class UserModule { }
