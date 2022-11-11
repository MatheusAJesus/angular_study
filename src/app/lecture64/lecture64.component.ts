import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lecture64',
  templateUrl: './lecture64.component.html',
  styleUrls: ['./lecture64.component.css']
})
export class Lecture64Component implements OnInit {
  serverElements = [
    {
      type:'server',
      name: 'Test server',
      content:'Just a test!'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

}
