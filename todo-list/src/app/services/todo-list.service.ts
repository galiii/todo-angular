import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {


  constructor(private storageService: StorageService) {

  }


  getTodoList() {
    return this.storageService.getData("itemsArray");
  }


  addItem(item: TodoItem) {
    let currentList = this.getTodoList();
    currentList.push(item);
    this.storageService.setData("itemsArray", currentList);
  }

  deleteItem(item) {
    let currentList = this.getTodoList();
    for (let i = 0; i < currentList.length; i++) {
      if (currentList[i].title == item.title) {
        //console.log(currentList[i]);
        //console.log(item);
        currentList.splice(i, 1);
        break;
      }
    }
    this.storageService.setData("itemsArray", currentList);
    //console.log(currentList);
  }


  updateItem(item, changes) {
    let currentList = this.getTodoList();
    for (let i = 0; i < currentList.length; i++) {
      if (currentList[i].title == item.title) {
        //console.log(currentList[i]);
        //console.log(item);
        currentList[i].completed = changes.completed;
        break;
      }
    }
    this.storageService.setData("itemsArray", currentList);
    //console.log(currentList);
  }

}
