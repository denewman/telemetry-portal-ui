import { Component } from '@angular/core';

import { Config } from './config';
import { ConfigDataService } from './config-data.service';

@Component({
  selector: 'set-config',
  templateUrl: '../templates/setconfig.component.tpl.html',
  styleUrls: ['../css/setconfig.component.css']
})
export class SetConfigComponent {
  templates = ['Model Driven', 'Policy Driven'];
  constructor(public configDataService: ConfigDataService) {}
}