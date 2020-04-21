import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { QuestionItem } from 'src/app/interfaces/question-item';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private storage: StorageService) {}

  getQuestionsList(): Observable<QuestionItem[]> {
    return this.storage.getData('questionsArray');
  }

  getUserAnswers(): any[] {
    // todo: change to UserAnswer type
    return this.storage.getData('userAnswers');
  }

  saveUserAnswer(questionId: number, optionId: number): void {
    let answers = this.getUserAnswers();
    answers.push({ questionId, optionId });
    this.storage.setData('userAnswers', answers);
  }

  /*
  getQuestionsList(): QuestionItem{
    return this.storage.getData("questionsArray");
  }*/

  getQuestion(id: number | string) {
    console.log('the id is', typeof id);
    const som = this.getQuestionsList();
    id = +id;
    return som[--id];
  }
}
