
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component{
  counter = 0
  log = []
  display = false;
  buttonContent = 'Display Password'

  constructor() { }


  show(){
    this.counter += 1
    this.log.push([this.counter , this.buttonContent, new Date()])
    this.buttonContent = this.buttonContent === 'Hide Password' ? 'Display Password' : 'Hide Password'
    this.display = !this.display

  }

}
