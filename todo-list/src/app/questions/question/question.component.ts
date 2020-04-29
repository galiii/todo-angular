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
  @Input() question: QuestionItem; //
  @Input() currentIndex: number; //the id of the current question we in
  @Output() valueChosen: EventEmitter<UserAnswer> = new EventEmitter();
  @Output() nextIndex: EventEmitter<number> = new EventEmitter(); //the next index to warrper quiz

  @Output() prevIndex: EventEmitter<number> = new EventEmitter();
  nextFlag = false;
  prevFlag = false;

  // question$: Observable<QuestionItem>;

  constructor(private route: ActivatedRoute, private service: QuestionsService) {}

  ngOnInit(): void {
    //this.getQuestion();
  }

  /*GET ONLY 1 Question with the current index*/
  private getQuestion() {
    const id = this.question;
  }

  saveUserAnswer(answer) {
    this.nextFlag = !this.nextFlag;
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
    console.log('this i === ', i);
    this.prevFlag = true;
    this.currentIndex = this.currentIndex--;
    console.log('this qaaaa', this.question);
    this.prevFlag = false;
  }

  goToNextQuestion(i: number): void {
    //quiz wrapper
    this.currentIndex = this.question.id; // get question number
    this.currentIndex = +this.currentIndex++;
    this.nextIndex.emit(this.currentIndex);
    this.nextFlag = false;
  }
}
