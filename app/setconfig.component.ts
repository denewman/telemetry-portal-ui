import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Config } from './config';
import { ConfigDataService } from './config-data.service';

@Component({
  selector: 'set-config',
  templateUrl: '../templates/setconfig.component.tpl.html',
  styleUrls: ['../css/setconfig.component.css']
})
export class SetConfigComponent {
  configOptions = ['SSH', 'Netconfig/Yang', 'YDK'];
  constructor(public configDataService: ConfigDataService, private router: Router) {}

  onSubmit(configOption: string, username: string, password: string, port: number) {
    this.configDataService.setConfig(configOption, username, password, port);
    this.configDataService.setSelectedTab(0);
    this.router.navigate(['/home']);
  }
}