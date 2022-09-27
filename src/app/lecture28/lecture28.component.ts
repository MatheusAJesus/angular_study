import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture28',
  templateUrl: './lecture28.component.html',
  styleUrls: ['./lecture28.component.css']
})
export class Lecture28Component {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

}
