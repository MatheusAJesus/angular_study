import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture38',
  templateUrl: './lecture38.component.html',
  styleUrls: ['./lecture38.component.css']
})

export class Lecture38Component{
  serverCreated = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Server 38';
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)

  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was create! Name is ' + this.serverName;
  }
}
