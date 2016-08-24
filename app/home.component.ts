import { Component } from '@angular/core';

import { TabsComponent } from './tabs.component';
import { ConfigOption } from './setconfig.component';
import globals = require('./globals');

@Component({
  selector: 'home',
  templateUrl: '../templates/home.component.tpl.html'
})
export class HomeComponent {
  selectedConfig: ConfigOption = new ConfigOption(globals.configId, globals.configName);
}