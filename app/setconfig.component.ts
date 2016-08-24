import { Component } from '@angular/core';

import { Config } from './config';

@Component({
  selector: 'set-config',
  templateUrl: '../templates/setconfig.component.tpl.html',
  styleUrls: ['../css/setconfig.component.css']
})
export class SetConfigComponent {
  templates = ['Model Driven', 'Policy Driven'];
  selectedConfig = new Config(this.templates[0]);
}