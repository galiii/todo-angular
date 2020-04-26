import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionItem, OptionItem, UserAnswer } from '../../interfaces/question-item';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; //for tokens
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'; //you need it later to process the Observable route parameters.
import { of } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() question: QuestionItem;
  @Input() currentIndex: number; //the id of the current question we in
  @Output() valueChosen: EventEmitter<UserAnswer> = new EventEmitter();
  @Output() nextIndex: EventEmitter<number> = new EventEmitter();
  exampleFlag = false;

  // question$: Observable<QuestionItem>;

  constructor(private route: ActivatedRoute, private service: QuestionsService) {}

  ngOnInit(): void {
    this.getQuestion();
  }

  /*GET ONLY 1 Question with the current index*/
  private getQuestion() {
    const id = this.question;
    console.log('line 31');
    console.log(this.question);
  }

  saveRadioBtn(answer) {
    this.exampleFlag = !this.exampleFlag;
    console.log(`exampleFlag = ${this.exampleFlag}`);
    console.log(typeof answer);
    console.log(this.question);
    let itemAdded: UserAnswer = { questionId: this.question.id, optionId: answer.points };
    console.log(itemAdded);
    this.valueChosen.emit(itemAdded);
  }

  /*
I have 10 questions with the id 1 to 10
So if i'm in id 1 i don't want to go goToPrevQuestion()
and i dont want to see the button -> PREV.
if i'm in id 10 i don't want to go goToNextQuestion()
and i dont want to see the button -> NEXT.
*/

  isCorrectIndex(btnType) {
    console.log(`we in buttom number ${btnType}   and the id is ${this.question.id}`);
    return this.question.id - 1 > 0 && this.question.id <= 3 ? { btn: true } : { 'btn-hide': true };
  }

  goToPrevQuestion(): void {
    this.currentIndex = this.question.id; // get question number
    console.log(`Click event in prev ${this.question.id}`);
    // prev question = current - 1 (if it's valid)
    // change route
  }

  goToNextQuestion(i: number): void {
    //quiz wrapper
    this.currentIndex = this.question.id; // get question number
    console.log(`Click event in NEXT question.id = ${this.question.id}`);
    console.log(`Click event in NEXT currentIndex = ${this.currentIndex}`);
    this.nextIndex.emit(+this.currentIndex++);
    console.log(`exampleFlag = ${this.exampleFlag}`);
    this.exampleFlag = false;
  }
}
