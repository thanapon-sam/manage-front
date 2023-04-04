import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../../service/question.service';

@Component({
  selector: 'app-questiontwo',
  templateUrl: './questionfour.component.html',
  styleUrls: ['./questionfour.component.css']
})
export class QuestionfourComponent implements OnInit {

  public questionList : any = [];
  public currentQuestion:number = 0;
  public points: number=0;
  // counter=60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted : boolean = false;
  

   constructor(private questionService : QuestionService) { }

  ngOnInit(): void {

    this.getAllQuestionsfour();
    // this.startCounter();
  }
  getAllQuestionsfour() {
    this.questionService.getQuestiontfourJson()
      .subscribe(res => {
        this.questionList = res.questionsfour;
      })
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }

  answer(currentQno: number, option: any) {

    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
      // this.stopCounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        // this.resetCounter();
        // this.getProgressPercent();
      }, 1000);


    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        // this.resetCounter();
        // this.getProgressPercent();
      }, 1000);

      this.points -= 10;
    }
  }
  // startCounter() {
  //   this.interval$ = interval(1000)
  //     .subscribe(val => {
  //       this.counter--;
  //       if (this.counter === 0) {
  //         this.currentQuestion++;
  //         this.counter = 60;
  //         this.points -= 10;
  //       }
  //     });
  
  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;

  }
  

}
