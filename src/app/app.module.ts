import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { Solograma } from './solograma/solograma.component';
import { Task1Component } from './task1/task1.component';
import { SuccessAlert } from './success-alert/success-alert.component';
import { WarningAlert } from './warning-alert/warning-alert.component';
import { Lecture27Component } from './lecture27/lecture27.component';
import { Lecture28Component } from './lecture28/lecture28.component';
import { Lecture29Component } from './lecture29/lecture29.component';
import { Lecture30Component } from './lecture30/lecture30.component';
import { Lecture32Component } from "./lecture32/lecture32.component";
import { Lecture34Component } from './lecture34/lecture34.component';
import { Lecture35Component } from './lecture35/lecture35.component';
import { Task2Component } from './task2/task2.component';
import { Lecture38Component } from './lecture38/lecture38.component';
import { Lecture39Component } from './lecture39/lecture39.component';
import { Lecture40Component } from './lecture40/lecture40.component';
import { Lecture41Component } from './lecture41/lecture41.component';
import { Lecture42Component } from './lecture42/lecture42.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';




@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Solograma,
    Task1Component,
    WarningAlert,
    SuccessAlert,
    Lecture27Component,
    Lecture28Component,
    Lecture29Component,
    Lecture30Component,
    Lecture32Component,
    Lecture34Component,
    Lecture35Component,
    Task2Component,
    Lecture38Component,
    Lecture39Component,
    Lecture40Component,
    Lecture41Component,
    Lecture42Component,
    Task3Component,
    Task4Component,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
