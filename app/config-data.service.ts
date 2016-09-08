import { Injectable } from '@angular/core';
import { Config } from './config';

@Injectable()
export class ConfigDataService {
    selectedTab: number;
    constructor() {
        this.selectedTab = 0;
    }
    setSelectedTab(selectedTab: number) {
        console.log('setting '+ selectedTab + ' as selected tab');
        this.selectedTab = selectedTab;
    }
    getSelectedTab() {
        console.log('getting ' + this.selectedTab + 'as selected tab');
        return this.selectedTab;
    }
}