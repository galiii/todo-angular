import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];
  //todoItem: TodoItem;

  //refernce to the service
  constructor(private listService: TodoListService) {

  }

  ngOnInit(): void {
    this.updateList();
  }


  addItem(item: TodoItem) {
    this.listService.addItem(item);
    //this.ngOnInit();
    this.updateList();
  }

  //why when we do removeItem(item) and not like this removeItem(item : TodoItem)  
  //in list-manager.components.ts
  removeItem(item) {
    //console.log(item);
    this.listService.deleteItem(item);
    this.updateList();
  }

  private updateList() {
   this.todoList = this.listService.getTodoList();
  }


  updateItem(item, changes) {
    this.listService.updateItem(item, changes);
    this.updateList();
  }



}
