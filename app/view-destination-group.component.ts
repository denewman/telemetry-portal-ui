import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';

import './rxjs-operators';

import { DestinationGroup } from './destination-group';


@Component({
    selector: 'view-destination-group',
    templateUrl: '../templates/view-destination-group.component.tpl.html',
    styleUrls: ['../css/view-object.component.css']
})
export class ViewDestinationGroupComponent {
    @Input() destinationGroup: DestinationGroup;
    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    errorMessage: string;

    constructor(){}

    closeModal() {
        console.log("Close button clicked!");
        this.close.emit(null);
    }
}