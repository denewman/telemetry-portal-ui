import { Component, Input } from '@angular/core';

import { ConfigDataService } from './config-data.service';

@Component({
  selector: 'set-config',
  templateUrl: '../templates/setconfig.component.tpl.html',
  styleUrls: ['../css/setconfig.component.css']
})
export class SetConfigComponent {
  configOptions = ['SSH', 'Netconfig/Yang', 'YDK'];
  constructor(public configDataService: ConfigDataService) {}

  onSubmit(configOption: string, username: string, password: string, port: number) {
    this.configDataService.setConfig(configOption, username, password, port);
    this.configDataService.setSelectedTab(0);
  }
}