import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture27',
  templateUrl: './lecture27.component.html',
  styleUrls: ['./lecture27.component.css']
})
export class Lecture27Component{
  serverId : number = 10;
  private serverStatus : string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }

}
