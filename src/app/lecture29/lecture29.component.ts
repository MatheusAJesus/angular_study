import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture29',
  templateUrl: './lecture29.component.html',
  styleUrls: ['./lecture29.component.css']
})
export class Lecture29Component{
  allowNewServer = false;


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
   }
}
