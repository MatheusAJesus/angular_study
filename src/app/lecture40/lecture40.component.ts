import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture40',
  templateUrl: './lecture40.component.html',
  styleUrls: ['./lecture40.component.css']
})
export class Lecture40Component{
  private serverStatus : string = 'offline';
 
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus(){
    return this.serverStatus
  }
}
