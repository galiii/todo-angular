import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//components
import { PhotoComponent } from './photo/photo.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; //page 404

//services
import { PhotoService } from './services/photo.service';
import { QuestionsService } from './services/questions/questions.service';

//router
import { AppRoutingModule } from './app-routing.module';
import { QuestionsModule } from './questions/questions.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

//

@NgModule({
  declarations: [
    //component
    AppComponent,
    PhotoComponent,
    HomeComponent,
    PageNotFoundComponent,
    MenuBarComponent,
  ],
  imports: [
    //modules
    BrowserModule,
    FormsModule,
    QuestionsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [PhotoService, QuestionsService], //servise
  bootstrap: [AppComponent],
})
export class AppModule {}
