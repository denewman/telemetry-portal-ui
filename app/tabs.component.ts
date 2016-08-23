import { Component, Output, EventEmitter } from '@angular/core';
import { HomeButtonComponent, ButtonContent } from './homebuttons.component';
import { TabComponent } from './tab.component';
import { Tab } from './tab.interface';

@Component({
  selector: 'tabs',
  templateUrl: '../templates/tabs.component.tpl.html',
  styleUrls: ['../css/tabs.component.css']
})
export class TabsComponent {
  tabs: Tab[] = [];

  addTab(tab:Tab) {
    if (this.tabs.length === 0) {
      tab.selected = true;
    }

    this.tabs.push(tab);
  }

  selectTab(tab:Tab) {
    this.tabs.forEach((tab) => {
      tab.selected = false;
    });
    tab.selected = true;
  }

}