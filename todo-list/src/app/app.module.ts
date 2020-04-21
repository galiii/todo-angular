import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//components
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';

//for my project
import { PhotoComponent } from './photo/photo.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//services
import { TodoListService } from './services/todo-list.service';
import { PhotoService } from './services/photo.service';
import { QuestionsService } from './services/questions/questions.service';

//router
import { AppRoutingModule } from './app-routing.module';
import { QuestionsModule } from './questions/questions.module';

@NgModule({
  declarations: [
    //component
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent,
    PhotoComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    //modules
    BrowserModule,
    FormsModule,
    QuestionsModule,
    AppRoutingModule,
  ],
  providers: [TodoListService, PhotoService, QuestionsService], //servise
  bootstrap: [AppComponent],
})
export class AppModule {}
