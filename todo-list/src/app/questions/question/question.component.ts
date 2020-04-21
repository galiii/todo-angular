import { Component, OnInit, Input } from '@angular/core';
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
    let id = this.route.snapshot.paramMap.get('id');

    this.question = this.service.getQuestion(id);
  }

  goToPrevQuestion(): void {
    // get question number
    // prev question = current - 1 (if it's valid)
    // change route
  }

  goToNextQuestion(): void {
    //quiz wrapper
  }
}
