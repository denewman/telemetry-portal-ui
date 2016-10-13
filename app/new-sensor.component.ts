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

    paths = ['Cisco-IOS-XR-infra-statsd-oper:infra-statistics/interfaces/interface/latest/generic-counters',
        'Cisco-IOS-XR-infra-statsd-oper:infra-statistics/interfaces/interface/latest/peak-counters'];
    pathsMap = {
        'Cisco-IOS-XR-infra-statsd-oper:infra-statistics/interfaces/interface/latest/generic-counters': false,
        'Cisco-IOS-XR-infra-statsd-oper:infra-statistics/interfaces/interface/latest/peak-counters': false
    };
    pathsSelected = [];

    setSelected(path, event) {
        this.pathsMap[path] = event.target.checked;
    }

    updatePathsSelected() {
        for (var x in this.pathsMap) {
            if (this.pathsMap[x]) {
                this.pathsSelected.push(x);
            }
        }
        this.paths = this.pathsSelected;
        this.pathsSelected = [];
    }

    submit(sensorName: string) {
        if (!sensorName) {
            return;
        }
        this.updatePathsSelected();
        this.submitNewSensor.emit(new Sensor(sensorName, this.paths));
    }

    cancel() {
        this.closeSensorModal.emit();
    }
}