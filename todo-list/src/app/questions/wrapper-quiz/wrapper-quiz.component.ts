import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions/questions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionItem } from '../../interfaces/question-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wrapper-quiz',
  templateUrl: './wrapper-quiz.component.html',
  styleUrls: ['./wrapper-quiz.component.scss'],
})
export class WrapperQuizComponent implements OnInit {
  // question: QuestionItem;
  questions: Observable<QuestionItem[]>;
  selectedId: number;
  // question$: Observable<QuestionItem>;

  constructor(private service: QuestionsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    //this.getQuestions();
    this.getAllQuestions();
  }

  /*
 private getQuestions() {
   console.log("line 27");
   this.question = this.service.getQuestion(11);
   console.log("line 32",this.question);
   /*this.route.params.subscribe(
     params => {
         const id = +params['id'];
         this.question = this.service.getQuestion(id);
     }
 );

 }*/

  private getAllQuestions() {
    console.log('Hello in line 37 list manager component');
    this.questions = this.service.getQuestionsList();
    console.log(this.questions);
  }
}
