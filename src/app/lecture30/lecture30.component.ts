import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture30',
  templateUrl: './lecture30.component.html',
  styleUrls: ['./lecture30.component.css']
})
export class Lecture30Component{
  serverCreationStatus = 'No server was created!';
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!'
  }
}
