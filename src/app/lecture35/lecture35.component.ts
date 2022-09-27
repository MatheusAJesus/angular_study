import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lecture35',
  templateUrl: './lecture35.component.html',
  styleUrls: ['./lecture35.component.css']
})

export class Lecture35Component{
  serverName = 'Server 35';
  serverCreationStatus = 'No server was created!';
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }


  onCreateServer(){
    this.serverCreationStatus = 'Server was create! Name is ' + this.serverName;
  }

}
