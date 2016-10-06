import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { Router } from './router';
import { ConfigDataService } from "./config-data.service";
import { Config } from "./config";

@Component({
    selector: 'new-router',
    templateUrl: '../templates/new-router.component.tpl.html',
    styleUrls: ['../css/new-router.component.css']
})
export class NewRouterComponent implements OnInit {
    @Output() closeRouterModal: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitNewRouter: EventEmitter<Router> = new EventEmitter<Router>();

    configOptions = ['YDK', 'SSH'];
    configType: string;

    configData: Config;

    constructor(private configDataService: ConfigDataService) {}

    ngOnInit() {
        this.configData = this.configDataService.getConfig();
        this.configType = this.configDataService.config.configOption;
  }

    submit(routerName: string, routerAddress: string, username: string, password: string,
           configType: string, port: number) {
        this.submitNewRouter.emit(new Router(routerName, routerAddress, username,
                                    password, port, configType));
    }

    cancel() {
        this.closeRouterModal.emit();
    }
}