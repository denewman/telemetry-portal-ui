import { Component, Output, ViewChild, EventEmitter } from '@angular/core';

import { Sensor } from './sensor';

@Component({
    selector: 'new-sensor',
    templateUrl: '../templates/new-sensor.component.tpl.html',
    styleUrls: ['../css/new-sensor.component.css']
})
export class NewSensorComponent {
    @Output() closeSensorModal: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitNewSensor: EventEmitter<Sensor> = new EventEmitter<Sensor>();

    submit(sensorName: string) {
        this.submitNewSensor.emit(new Sensor(sensorName));
    }

    cancel() {
        this.closeSensorModal.emit();
    }
}