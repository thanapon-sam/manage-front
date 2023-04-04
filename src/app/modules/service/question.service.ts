import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient) { }

  getQuestionJson(){
    return this.http.get<any>("assets/questions.json")
  }

  getQuestiontwoJson(){
    return this.http.get<any>("assets/questionstwo.json")
  }


  getQuestionthreeJson(){
    return this.http.get<any>("assets/questionsthree.json")
  }

  getQuestiontfourJson(){
    return this.http.get<any>("assets/questionsfour.json")
  }

  getQuestionfiveJson(){
    return this.http.get<any>("assets/questionsfive.json")
  }
}
