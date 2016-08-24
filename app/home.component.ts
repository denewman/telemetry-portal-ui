import { Component, OnInit } from '@angular/core';

import { TabsComponent } from './tabs.component';
import { Config } from './config';

@Component({
  selector: 'home',
  templateUrl: '../templates/home.component.tpl.html',
  styleUrls: ['../css/setconfig.component.css']
})
export class HomeComponent {
  templates = ['Model Driven', 'Policy Driven'];
  selectedConfig: Config = new Config(this.templates[0]);
}