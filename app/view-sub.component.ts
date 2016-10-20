import { Component, Input, Output, EventEmitter } from '@angular/core';

import './rxjs-operators';

import { Subscription } from './subscription';


@Component({
    selector: 'view-sub',
    templateUrl: '../templates/view-sub.component.tpl.html',
    styleUrls: ['../css/view-object.component.css']
})
export class ViewSubComponent  {
    @Input() subscription: Subscription;
    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    errorMessage: string;

    constructor(){}

    closeModal() {
        console.log("Close button clicked!");
        this.close.emit(null);
    }
}