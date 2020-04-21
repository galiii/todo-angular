import { Component, OnInit } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';
import { TodoListService } from './services/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo-list';
  constructor() {}

  ngOnInit(): void {}
}
