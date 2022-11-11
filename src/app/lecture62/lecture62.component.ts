import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture62',
  templateUrl: './lecture62.component.html',
  styleUrls: ['./lecture62.component.css']
})
export class Lecture62Component{
  servers = [];

  onAddServer() {
    this.servers.push('Another Server');
  }

  onRemoveServer(id: number) {
    const position = id + 1;
    this.servers.splice(position, 1);
  }
}

