import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionItem, OptionItem, UserAnswer } from '../../interfaces/question-item';
import { ActivatedRoute } from '@angular/router'; //for tokens
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() question: QuestionItem; //
  @Input() currentIndex: number; //the id of the current question we in
  @Output() valueChosen: EventEmitter<UserAnswer> = new EventEmitter();
  @Output() goToQuestion: EventEmitter<number> = new EventEmitter(); //the next index to warrper quiz

  nextFlag = false;
  prevFlag = false;

  constructor(private route: ActivatedRoute, private service: QuestionsService) {}

  ngOnInit(): void {}

  saveUserAnswer(answer) {
    this.nextFlag = !this.nextFlag; //the next button act like "submit" button
    this.prevFlag = true; //
    let itemAdded: UserAnswer = { questionId: this.question.id, optionId: answer.points };
    this.service.saveUserAnswer(itemAdded);
    let usr = this.service.getUserAnswers();
    console.log('this print', usr);
    //this.valueChosen.emit(itemAdded);
  }

  /*
I have 10 questions with the id 1 to 10
So if i'm in id 1 i don't want to go goToPrevQuestion()
and i dont want to see the button -> PREV.
if i'm in id 10 i don't want to go goToNextQuestion()
and i dont want to see the button -> NEXT.
*/

  goToPrevQuestion(i: number): void {
    // this.prevFlag = true;
    this.goToQuestion.emit(--this.currentIndex);
  }

  goToNextQuestion(i: number): void {
    this.nextFlag = false; //reset for the next qustion
    //you can't put this.currentIndex + 1
    //Because .emit will be excute with  this.currentIndex  and not + 1
    //++ - before the parameter before emit  increace ++this.currentIndex
    this.goToQuestion.emit(++this.currentIndex);
  }
}
