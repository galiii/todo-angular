import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../services/questions/questions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionItem, UserAnswer } from '../../interfaces/question-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wrapper-quiz',
  templateUrl: './wrapper-quiz.component.html',
  styleUrls: ['./wrapper-quiz.component.scss'],
})
export class WrapperQuizComponent implements OnInit {
  questions: Observable<QuestionItem[]>;
  question: QuestionItem;
  currentIndex: number;
  user: UserAnswer[];
  selectedId: number;

  constructor(private service: QuestionsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCurrentQuestion((this.currentIndex = 0));
    //this.getAllQuestions();
    //this.updateUserAnswers();
  }

  getCurrentQuestion(currentIndex: number | 0) {
    console.log(currentIndex);
    this.question = this.service.getQuestion(currentIndex);
    console.log(this.question);
    //this.service.getQuestion(this.currentIndex);
  }

  private getAllQuestions() {
    console.log('Hello in line 32 wrapper-quiz component');
    this.questions = this.service.getQuestionsList();
    console.log(this.questions);
  }

  /* User Answers*/
  private updateUserAnswers() {
    this.user = this.service.getUserAnswers();
  }

  saveUserAnswer(userAnswer: UserAnswer) {
    this.service.saveUserAnswer(userAnswer); //set
    this.updateUserAnswers();
  }
}
