import { Component, Input } from '@angular/core';

import { TabsComponent } from './tabs.component';
import { Tab } from './tab.interface';

@Component({
  selector: 'tab',
  templateUrl: '../templates/tab.component.tpl.html'
})
export class TabComponent implements Tab {
  @Input() tabTitle;
  @Input() selected;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this)
  }
}