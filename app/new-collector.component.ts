import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'

import { Collector } from './collector';

@Component({
    selector: 'new-collector',
    templateUrl: '../templates/new-collector.component.tpl.html',
    styleUrls: ['../css/new-collector.component.css']
})
export class NewCollectorComponent {
    @Output() closeCollectorModal: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitNewCollector: EventEmitter<Collector> = new EventEmitter<Collector>();

    constructor(){}

    //Using template driven validation
    onSubmit(f:NgForm){
        this.submitNewCollector.emit(
            new Collector(
                f.value.collectorName,
                f.value.collectorAddress,
                f.value.collectorEncoding, 
                f.value.collectorPort, 
                f.value.collectorIPFamilyType
            )
        );
    }

    onCancel() {
        this.closeCollectorModal.emit();
    }
}