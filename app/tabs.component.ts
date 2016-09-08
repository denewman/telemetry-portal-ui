import { Component } from '@angular/core';

import { ConfigDataService } from './config-data.service';

import { SubHomeButtonComponent } from './sub-homebuttons.component';
import { TabComponent } from './tab.component';
import { Tab } from './tab.interface';

@Component({
  selector: 'tabs',
  templateUrl: '../templates/tabs.component.tpl.html',
  styleUrls: ['../css/tabs.component.css']
})
export class TabsComponent {
  tabs: Tab[] = [];

  constructor(private configData: ConfigDataService) {}

  selectedTab: number = this.configData.getSelectedTab();

  addTab(tab:Tab) {
    if (this.tabs.length === this.selectedTab) {
      tab.selected = true;
    }

    this.tabs.push(tab);
  }

  selectTab(tab:Tab) {
    this.tabs.forEach((tab) => {
      tab.selected = false;
    });
    tab.selected = true;
    this.configData.setSelectedTab(this.tabs.indexOf(tab));
  }

}