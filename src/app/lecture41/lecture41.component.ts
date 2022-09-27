import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture41',
  templateUrl: './lecture41.component.html',
  styleUrls: ['./lecture41.component.css']
})
export class Lecture41Component {
  private serverStatus: string = 'offline';
  serverStyleTest: boolean;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }

  getClass(){
    return this.serverStatus === 'online' ? 'online' : 'offline'
  }

  getServerStatus(){
    return this.serverStatus
  }

}
