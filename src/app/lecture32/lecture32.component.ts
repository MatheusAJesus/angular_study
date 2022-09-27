import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture32',
  templateUrl: './lecture32.component.html',
  styleUrls: ['./lecture32.component.css']
})
export class Lecture32Component{
  serverName = 'Server 32';

  constructor() { }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }
  
}
