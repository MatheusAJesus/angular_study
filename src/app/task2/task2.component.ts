import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component{
  userName = '';

  constructor() { }

  eraseName(){
    this.userName = '';
  }
}
