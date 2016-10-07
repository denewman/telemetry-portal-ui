import { Component, Input } from '@angular/core';

import { ConfigDataService } from './config-data.service';

@Component({
  selector: 'set-config',
  templateUrl: '../templates/setconfig.component.tpl.html',
  styleUrls: ['../css/setconfig.component.css']
})
export class SetConfigComponent {
  configOptions = ['YDK', 'Netconfig/Yang', 'SSH'];
  disableSubmit: boolean = true;

  constructor(public configDataService: ConfigDataService) {}

  enableSubmit() {
    this.disableSubmit = false;
  }

  onSubmit(configOption: string, username: string, password: string, port: number) {
    this.configDataService.setConfig(configOption, username, password, port);
    this.configDataService.setSelectedTab(0);
  }
}