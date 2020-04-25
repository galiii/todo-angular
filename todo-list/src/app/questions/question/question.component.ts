import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionItem, OptionItem } from '../../interfaces/question-item';
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
  @Input() value: string;
  @Output() valueChosen: EventEmitter<any> = new EventEmitter();

  currentIndex: number;

  // question$: Observable<QuestionItem>;

  constructor(private route: ActivatedRoute, private service: QuestionsService) {}

  ngOnInit(): void {
    this.getQuestion();
  }

  private getQuestion() {
    console.log('line 31');
    /*
    this.question$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getQuestion(params.get('id')))
    );*/
    //let id = this.route.snapshot.paramMap.get('id');
    //console.log(id);
    //this.question = this.service.getQuestion(id);
    console.log(this.question);
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

  goToNextQuestion(): void {
    //quiz wrapper
    this.currentIndex = this.question.id; // get question number
    console.log(`Click event in next ${this.question.id}`);
  }
}
