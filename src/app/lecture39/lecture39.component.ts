import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture39',
  templateUrl: './lecture39.component.html',
  styleUrls: ['./lecture39.component.css']
})
export class Lecture39Component{
  serverCreated = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Server 39';
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

