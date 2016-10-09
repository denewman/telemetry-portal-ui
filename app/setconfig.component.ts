import { Component, Input, OnInit } from '@angular/core';

import { ConfigDataService } from './config-data.service';

@Component({
  selector: 'set-config',
  templateUrl: '../templates/setconfig.component.tpl.html',
  styleUrls: ['../css/setconfig.component.css']
})
export class SetConfigComponent implements OnInit {
  configOptions = ['YDK', 'Netconfig/Yang', 'SSH'];
  disableSubmit: boolean = true;
  routerPort: number;

  constructor(public configDataService: ConfigDataService) {}

  ngOnInit() {
        this.routerPort = this.configDataService.config.port;
  }

  enableSubmit() {
    this.disableSubmit = false;
  }

  onSubmit(configOption: string, username: string, password: string, port: number) {
    this.configDataService.setConfig(configOption, username, password, port);
    this.disableSubmit = true;
  }

  changePort(configOption: string) {
        if (configOption == 'SSH') {
            this.routerPort = 5000;
        }
        else if(configOption == 'YDK') {
            this.routerPort = 5001;
        }
    }
}