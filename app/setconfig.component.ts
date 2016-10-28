import { Component, Input, OnInit } from '@angular/core';

import { ConfigDataService } from './config-data.service';
import { HttpService } from './http.service';


@Component({
  selector: 'set-config',
  templateUrl: '../templates/setconfig.component.tpl.html',
  styleUrls: ['../css/setconfig.component.css']
})
export class SetConfigComponent implements OnInit {
  configOptions = ['YDK', 'Netconfig/Yang', 'SSH'];
  disableSubmit: boolean = true;
  configType: string;
  routerPort: number;

  statusCode: any;
  viewResetConfirm: boolean = false;
  resetConfirmMessage: string;
  errorMessage: any;

  constructor(public configDataService: ConfigDataService, private httpService: HttpService) {}

  ngOnInit() {
        this.configType = this.configDataService.config.configOption;
        this.routerPort = this.configDataService.config.port;
  }

  enableSubmit() {
    this.disableSubmit = false;
  }

  onSubmit(configOption: string, username: string, password: string, port: number) {
    this.configDataService.setConfig(configOption, username, password, port);
    this.disableSubmit = true;
  }

  changePort(configOption: string) {
        if (configOption == 'SSH') {
            this.routerPort = 5000;
        }
        else if(configOption == 'YDK') {
            this.routerPort = 5001;
        }
    }

    onResetClick(){
        this.resetConfirmMessage = "Reseting will remove all data from the database regardless of any applied devices, you will not be able to undo this operation. Are you sure you want to reset the portal? "
        this.viewResetConfirm = true;      
    }

    onResetConfirm(){
        this.httpService.resetDB()
        .subscribe(
            statusCode => {
              this.statusCode = statusCode;
            },
            error => this.errorMessage = error);
        this.viewResetConfirm = false;
    }

    onResetCancel(){
        this.viewResetConfirm = false;
    }
}