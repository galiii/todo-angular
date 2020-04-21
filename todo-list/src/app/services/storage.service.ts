import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { QuestionItem,OptionItem } from '../interfaces/question-item';

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  private todoList: TodoItem[] = [
    { title: 'install NodeJS', completed: true },
    { title: 'install Angular CLI', completed: false },
    { title: 'create new app', completed: true },
    { title: 'serve app', completed: false },
    { title: 'develop app', completed: true },
    { title: 'deploy app', completed: false }
  ];




  constructor() {
    this.setData("itemsArray", this.todoList);
  }


  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

}
