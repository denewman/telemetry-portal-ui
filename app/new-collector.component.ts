import { Component, Output, EventEmitter } from '@angular/core';

import { Collector } from './collector';

@Component({
    selector: 'new-collector',
    templateUrl: '../templates/new-collector.component.tpl.html',
    styleUrls: ['../css/new-collector.component.css']
})
export class NewCollectorComponent {
    @Output() closeCollectorModal: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitNewCollector: EventEmitter<Collector> = new EventEmitter<Collector>();

    submit(collectorName: string, collectorAddress: string, collectorEncoder: string,
           collectorPort: string, collectorProtocol: string) {
        this.submitNewCollector.emit(new Collector(collectorName, collectorAddress,
                            collectorEncoder, collectorPort, collectorProtocol));
    }

    cancel() {
        this.closeCollectorModal.emit();
    }
}