import { Component } from '@angular/core';

import globals = require('./globals');

@Component({
  selector: 'set-config',
  templateUrl: '../templates/setconfig.component.tpl.html',
  styleUrls: ['../css/setconfig.component.css']
})
export class SetConfigComponent {
  public selectedConfig: ConfigOption = new ConfigOption(1, 'Model Driven');
  configOptions = [
      new ConfigOption(1, 'Model Driven'),
      new ConfigOption(2, 'Policy Driven')
  ];
  get selectConfig() {
        return this.selectedConfig;
    }
  set selectConfig(value) {
      this.selectedConfig = value;
      globals.configName = value.name;
      globals.configId = value.id;
  }
}

export class ConfigOption {
    constructor(public id: number, public name: string) { }
}