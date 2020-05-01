import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  @Output() question: QuestionItem;
  currentIndex: number;
  user: UserAnswer[];
  @Output() submit: EventEmitter<UserAnswer[]> = new EventEmitter(); //submit for result component
  subResult: false;

  constructor(private service: QuestionsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(`this.user = ${this.user}`);
    this.loadQuestion((this.currentIndex = 0));
  }

  loadQuestion(currentIndex: number | 0) {
    console.log(`loadQuestion(${currentIndex})`);
    this.question = this.service.getQuestion(currentIndex);
    this.user = this.service.getUserAnswers();
  }

  getPrevQuestion(currentIndex: number | 0) {
    this.question = this.service.getQuestion(currentIndex);
    this.user = this.updateUserAnswers();
  }

  /* User Answers*/
  private updateUserAnswers() {
    return this.service.getUserAnswers();
  }

  /*ERORR DONT GET INSIDE THIS FUNCTION*/
  saveUserAnswer(userAnswer: UserAnswer) {
    this.service.saveUserAnswer(userAnswer); //set
    this.updateUserAnswers();
  }

  /* The result affter click button submit*/
  addResult(event) {
    this.user = this.updateUserAnswers();
    console.log('SUBMIT RESULT', this.user);
    this.submit.emit(this.user);
  }
}
