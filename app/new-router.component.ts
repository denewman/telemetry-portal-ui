import { Component, Output, EventEmitter } from '@angular/core';

import { Router } from './router';
import {ConfigDataService} from "./config-data.service";
import {Config} from "./config";

@Component({
    selector: 'new-router',
    templateUrl: '../templates/new-router.component.tpl.html',
    styleUrls: ['../css/new-router.component.css']
})
export class NewRouterComponent {
    @Output() closeRouterModal: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitNewRouter: EventEmitter<Router> = new EventEmitter<Router>();

    configData: Config;

    constructor(private configDataService: ConfigDataService) {}

    submit(routerName: string, routerAddress: string) {
        this.configData = this.configDataService.getConfig();
        this.submitNewRouter.emit(new Router(routerName, routerAddress, this.configData.username,
                                    this.configData.password, this.configData.port));
    }

    cancel() {
        this.closeRouterModal.emit();
    }
}