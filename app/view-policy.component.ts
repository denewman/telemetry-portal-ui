import { Component, Input, Output, EventEmitter } from '@angular/core';

import './rxjs-operators';

import { Policy } from './policy';


@Component({
    selector: 'view-policy',
    templateUrl: '../templates/view-policy.component.tpl.html',
    styleUrls: ['../css/view-object.component.css']
})
export class ViewPolicyComponent  {
    @Input() policy: Policy;
    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    errorMessage: string;

    constructor(){}

    closeModal() {
        console.log("Close button clicked!");
        this.close.emit(null);
    }
}