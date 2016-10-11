import { Component, Input, Output, EventEmitter } from '@angular/core';

import './rxjs-operators';

import { Collector } from './collector';


@Component({
    selector: 'view-collector',
    templateUrl: '../templates/view-collector.component.tpl.html',
    styleUrls: ['../css/view-object.component.css']
})
export class ViewCollectorComponent  {
    @Input() collector: Collector;
    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    errorMessage: string;

    constructor(){}

    closeModal() {
        console.log("Close button clicked!");
        this.close.emit(null);
    }
}