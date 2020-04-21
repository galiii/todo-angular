import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<TodoItem> = new EventEmitter();

  title = "gali";
  constructor() {
    console.log(`constractour in ${this.title}`);
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
    console.log(this.title);
  }

  addItem() {
    let itemAdded: TodoItem = { title: this.title, completed: false }
    this.submit.emit(itemAdded);
  }

  generateTitle(): string {
    return "I'm input generateTitle() " + this.title;
  }

  /* #6
  changeValUsingDocument(name: string) {
    let idInput: any = document.getElementById("inputVal");
    idInput.value = "From the document input"
  }
*/


  consoleEventData(e): void {
    /*if (e.keyCode === 13) {
      console.log("Enter me !!!");
    }*/
    console.log("i'm function consoleEventData()", e);
    //console.log("i'm function consoleEventData()");
  }

  ngOnInit(): void {
    console.log("lifecycle in gali component");
    this.changeTitle("Update Me !!!!");
    /* #6
    setTimeout(() => {
       this.changeValUsingDocument("Checking");
     }, 4000);*/
  }
}
