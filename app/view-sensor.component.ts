import { Component, Input, Output, EventEmitter } from '@angular/core';

import './rxjs-operators';

import { Sensor } from './sensor';


@Component({
    selector: 'view-sensor',
    templateUrl: '../templates/view-sensor.component.tpl.html',
    styleUrls: ['../css/view-object.component.css']
})
export class ViewSensorComponent  {
    @Input() sensor: Sensor;
    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    errorMessage: string;

    constructor(){}

    closeModal() {
        console.log("Close button clicked!");
        this.close.emit(null);
    }
}