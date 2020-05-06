import { Component, OnInit, Input } from '@angular/core';
import { UserAnswer } from 'src/app/interfaces/question-item';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() userAnswers: UserAnswer[]; //the input come from quiz-warrper
  finalPoint: number; //we will have the final point

  constructor(private route: ActivatedRoute, private service: QuestionsService) {}

  ngOnInit(): void {
    this.addResult(1);
  }

  addResult(result) {
    let pointResult = 0;

    this.userAnswers = this.service.getUserAnswers();
    for (let index = 1; index < this.userAnswers.length; index++) {
      pointResult += this.userAnswers[index].optionId;
      console.log(`ths point ${pointResult}`);
      console.log('the option', this.userAnswers[index]);
    }
    console.log(result);
    console.log('EVENT BUTTON ADD RESULT');
    this.finalPoint = pointResult;
  }
}
