import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lectures2: Array<string> = [
    'Task 1',
    '27.String Interpolation',
    '28.Property Binding',
    '29.Property Binding or String Interpolation',
    '30.Event Binding',
    '32.Passing and Using Data with Event Binding',
    '34.Two-Way-Databinding',
    '35.Combining all Forms of Databinding',
    'Task 2',
    '38.Using ngIf to Output Data Conditionally',
    '39.Enhancing ngIf with an Else Condition',
    '40.Styling Elements Dynamically with ngStyle',
    '41.Applying CSS Classes Dynamically with ngClass',
    '42.Outputting Lists with ngFor',
    'Task 3'
  ]

  lectures4: Array<string> = [
    '62. Understanding Angular Error Messages',
    '63. Debugging Code in the Browser Using Sourcemaps'
  ]

  lectures5: Array<string> = [
    '64. Introduction of the Module up to 69. Binding to Custom Events'
  ]

  lectureSelected: string
  firstP: boolean = true;

  constructor() {
  }


  selectLecture(event: Event){
    this.firstP = false;
    this.lectureSelected = (<HTMLButtonElement>event.target).innerText
  }
}
