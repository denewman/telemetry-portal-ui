import { Injectable } from '@angular/core';
import { Config } from './config';

@Injectable()
export class ConfigDataService {
    selectedTab: number;
    config: Config;
    constructor() {
        this.selectedTab = 0;
        this.config = new Config('SSH', 'cisco123', 'cisco123', 22);
    }
    setSelectedTab(selectedTab: number) {
        console.log('setting '+ selectedTab + ' as selected tab');
        this.selectedTab = selectedTab;
    }
    getSelectedTab() {
        console.log('getting ' + this.selectedTab + 'as selected tab');
        return this.selectedTab;
    }
    setConfig(configOption: string, username: string, password: string, port: number) {
        this.config.configOption = configOption;
        this.config.username = username;
        this.config.password = password;
        this.config.port = port;
    }
    getConfig() {
        return this.config;
    }
}