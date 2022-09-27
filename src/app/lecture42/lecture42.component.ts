import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';

@Component({
  selector: 'app-lecture42',
  templateUrl: './lecture42.component.html',
  styleUrls: ['./lecture42.component.css']
})
export class Lecture42Component {
  servers = []
  number = 0
  constructor() {
  }

  addServer(){
    this.number += 1
    this.servers.push('Server ' + this.number)
  }

  removeServer(){
    this.number -= 1
    this.servers.splice(this.servers.lastIndexOf(this.servers.length),1)
  }
}

