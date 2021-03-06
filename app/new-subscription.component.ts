import {Component, Output, EventEmitter, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

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
  newDestinationGroup: DestinationGroup;
  sensors: Sensor[];
  newSensor: Sensor;
  mode = 'Observable';

  openNewSensorModal: boolean = false;
  openNewDestinationGroupModal: boolean = false;

  constructor (
      private httpService: HttpService) {}

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

  onSubmit(f:NgForm) {
    this.submit.emit(
      new Subscription(
        f.value.subscriptionId,
        f.value.subscriptionName,
        f.value.destinationGroupName, 
        f.value.sensorName, 
        f.value.subscriptionInterval
      )
    );
  }

  onCancel() {
    this.cancel.emit();
  }

  onNewSensorClick() {
    this.openNewSensorModal = true;
  }

  onNewDestinationGroupClick() {
    this.openNewDestinationGroupModal = true;
  }

  submitNewSensor(sensor: Sensor) {
    if (!sensor.sensorName || !sensor.sensorPaths) { return; }
    this.httpService.addSensor(sensor.sensorName, sensor.sensorPaths)
      .subscribe(
            sensor => {
              this.newSensor = sensor;
              if (this.newSensor.sensorName) {
                this.sensors.push(sensor);
              }},
            error => this.errorMessage = <any>error);
    this.openNewSensorModal = false;
  }

  submitNewDestinationGroup(destinationGroup: DestinationGroup) {
    if (!destinationGroup.destinationGroupName || !destinationGroup.destinationGroupAddress ||
        !destinationGroup.destinationGroupEncoding || !destinationGroup.destinationGroupPort ||
        !destinationGroup.destinationGroupProtocol) { return; }
    this.httpService.addDestinationGroup(destinationGroup.destinationGroupName, destinationGroup.destinationGroupAddress,
                        destinationGroup.destinationGroupEncoding, destinationGroup.destinationGroupPort,
                        destinationGroup.destinationGroupProtocol)
      .subscribe(
            destinationGroup => {
              this.newDestinationGroup = destinationGroup;
              if (this.newDestinationGroup.destinationGroupName) {
                this.destinationGroups.push(destinationGroup);
              }},
            error => this.errorMessage = <any>error);
    this.openNewDestinationGroupModal = false;
  }

  closeNewSensorModal() {
    this.openNewSensorModal = false;
  }

  closeNewDestinationGroupModal() {
    this.openNewDestinationGroupModal = false;
  }
}