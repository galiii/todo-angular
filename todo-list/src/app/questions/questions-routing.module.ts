import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionComponent} from './question/question.component';
import { from } from 'rxjs';
import { WrapperQuizComponent } from './wrapper-quiz/wrapper-quiz.component';


const routes: Routes = [
  { path: "questions", component: WrapperQuizComponent,data: { animation: 'question' } },
  { path: "question/:id", component:QuestionComponent,data: { animation: 'question' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
