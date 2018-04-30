import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server Created';
  serverName = '';
  serverCreated = false;
  servers = ['Server 1', 'Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }


  onCreateServer() {
    this.serverCreationStatus = 'Server was created successfully, server name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }

}
