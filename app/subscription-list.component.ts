import { Component, Input } from '@angular/core';

import { HttpService } from './http.service';

import './rxjs-operators';

import { Subscription } from './subscription';
import { DestinationGroup } from './destination-group';
import { Sensor } from './sensor';
import { StatusCode } from './status-code';

@Component({
  selector: 'subscription-list',
  templateUrl: '../templates/subscription-list.component.tpl.html',
  styleUrls: ['../css/subscription-list.component.css']
})
export class SubscriptionListComponent {
  @Input() subscriptions: Subscription[];

  statusCode: any;
  destinationGroup: DestinationGroup;
  sensor: Sensor;
  errorMessage: string;
  mode = 'Observable';

  viewDestinationGroup: boolean = false;
  viewSensor: boolean = false;

  constructor(private httpService: HttpService) { }

  onDestinationGroupClick(dgName: string){
    this.httpService.getDestinationGroup(dgName)
      .subscribe(
        destinationGroup => this.destinationGroup = destinationGroup,
        error => this.errorMessage = <any>error
      );

    this.viewDestinationGroup = true;
  }

  viewDestinationGroupClose(){
    this.viewDestinationGroup = false;
  }

  onSensorClick(sensorName: string){
    this.httpService.getSensor(sensorName)
      .subscribe(
        sensor => this.sensor = sensor,
        error => this.errorMessage = <any>error
      );
    this.viewSensor = true;
  }

  viewSensorClose(){
    this.viewSensor = false;
  }

  onDelete(subscription: Subscription) {
    this.httpService.deleteSubscription(subscription.subscriptionName)
        .subscribe(
            statusCode => {
              this.statusCode = statusCode;
              var index = this.subscriptions.indexOf(subscription);
              if (this.statusCode == "200" && index >= 0) {
                this.subscriptions.splice(index, 1);
              }
            },
            error => this.errorMessage = error);
  }
}