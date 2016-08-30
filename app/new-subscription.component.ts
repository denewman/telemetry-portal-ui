import {Component, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';

import { HttpService } from './http.service';

import { Subscription } from './subscription';
import { DestinationGroup } from './destination-group';
import { Sensor } from './sensor';

@Component({
  selector: 'new-subscription',
  templateUrl: '../templates/new-subscription.component.tpl.html',
  styleUrls: ['../css/new-subscription.component.css']
})
export class NewSubscriptionComponent implements OnInit {

  @Output() submit: EventEmitter<Subscription> = new EventEmitter<Subscription>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  errorMessage: string;
  destinationGroups: DestinationGroup[];
  sensors: Sensor[];
  mode = 'Observable';

  constructor (private httpService: HttpService) {}

  ngOnInit() {
    this.getDestinationGroups();
    this.getSensors();
  }

  getDestinationGroups() {
    this.httpService.getDestinationGroups()
        .subscribe(
            destinationGroups => this.destinationGroups = destinationGroups,
            error => this.errorMessage = <any>error);
  }

  getSensors() {
    this.httpService.getSensors()
        .subscribe(
            sensors => this.sensors = sensors,
            error => this.errorMessage = <any>error);
  }

  onSubmit(subscriptionName: string, destinationGroupName: string,
                  sensorName: string, subscriptionInterval: number) {
    this.submit.emit(new Subscription(subscriptionName, destinationGroupName, sensorName, subscriptionInterval));
  }

  onCancel() {
    this.cancel.emit();
  }
}