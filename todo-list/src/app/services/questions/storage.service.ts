import { Injectable } from '@angular/core';
import { QuestionItem, OptionItem, UserAnswer } from '../../interfaces/question-item';
import { tick } from '@angular/core/testing';
//import sampleData from '../../../db/trivia.json';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private optionsList: OptionItem[][] = [
    [
      { text: 'All the time', points: 3 },
      { text: 'Often', points: 2 },
      { text: 'Rarely', points: 1 },
      { text: 'Never', points: 0 },
    ],
    [
      { text: 'Red', points: 1 },
      { text: 'Green', points: 2 },
      { text: 'Blue', points: 3 },
      { text: 'None', points: 0 },
    ],
    [
      { text: 'Rose', points: 3 },
      { text: 'Anemone', points: 2 },
      { text: 'Lily', points: 1 },
      { text: 'None', points: 0 },
    ],
    [
      { text: 'Carlsberg', points: 3 },
      { text: 'Maccabi', points: 2 },
      { text: 'Corona', points: 1 },
      { text: "I don't drink", points: 0 },
    ],
    [
      { text: 'summer', points: 3 },
      { text: 'Spring', points: 2 },
      { text: 'Fall', points: 1 },
      { text: 'winter', points: 0 },
    ],
    [
      { text: 'Blues', points: 3 },
      { text: 'rock', points: 2 },
      { text: 'Pop', points: 1 },
      { text: 'None', points: 0 },
    ],
    [
      { text: 'tail', points: 2 },
      { text: 'Tofu', points: 3 },
      { text: 'Nothing', points: 0 },
    ],
    [
      { text: 'Family', points: 3 },
      { text: 'Religion', points: 2 },
      { text: 'Hobbies', points: 1 },
      { text: 'Nothing', points: 0 },
    ],
    [
      { text: 'Tel-Aviv', points: 3 },
      { text: 'Ramat-Gan', points: 2 },
      { text: 'Nothing', points: 1 },
      { text: 'Bnei Brak', points: 0 },
    ],
    [
      { text: 'All the time', points: 3 },
      { text: 'Often', points: 2 },
      { text: 'Rarely', points: 1 },
      { text: 'Never', points: 0 },
    ],
  ];

  private questions: QuestionItem[] = [
    { id: 1, title: 'How often do you play sports?', answers: this.optionsList[0] },
    { id: 2, title: 'What’s your favorite color?', answers: this.optionsList[1] },
    { id: 3, title: 'What’s your favorite flower?', answers: this.optionsList[2] },
    { id: 4, title: 'What’s your favorite beer?', answers: this.optionsList[3] },
    { id: 5, title: 'What’s your favorite weather?', answers: this.optionsList[4] },
    { id: 6, title: 'What is your favorite music?', answers: this.optionsList[5] },
    { id: 7, title: "Where are a dog's sweat glands located?", answers: this.optionsList[6] },
    { id: 8, title: 'What gives your life meaning?', answers: this.optionsList[7] },
    { id: 9, title: 'What city would you most like to live in?', answers: this.optionsList[8] },
    { id: 10, title: 'How  sports?', answers: this.optionsList[9] },
  ];

  private user: UserAnswer[] = [{ questionId: 0, optionId: -1 }];

  constructor() {
    console.log('CONSTRUCTOR IN STORAGE');
    this.setData('questionsArray', this.questions);

    this.setData('userAnswers', this.user); //array for user answers
  }

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
