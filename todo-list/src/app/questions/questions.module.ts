import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';

//the components
import {QuestionComponent} from "./question/question.component";
import { WrapperQuizComponent } from './wrapper-quiz/wrapper-quiz.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    QuestionComponent,
    WrapperQuizComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ]
})
export class QuestionsModule { }
