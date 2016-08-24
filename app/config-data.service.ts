import { Injectable } from '@angular/core';
import { Config } from './config';

@Injectable()
export class ConfigDataService {
    selectedConfig: Config;
    constructor() {
        console.log('data service initialized...');
        this.selectedConfig = new Config('Model Driven');
    }
    setSelectedConfig(template: string) {
        this.selectedConfig = new Config(template);
    }
    getSelectedConfig() {
        return this.selectedConfig;
    }
}