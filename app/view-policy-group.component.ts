import { Component, Input, Output, EventEmitter } from '@angular/core';

import './rxjs-operators';

import { PolicyGroup } from './policy-group';


@Component({
    selector: 'view-policy-group',
    templateUrl: '../templates/view-policy-group.component.tpl.html',
    styleUrls: ['../css/view-object.component.css']
})
export class ViewPolicyGroupComponent  {
    @Input() policyGroup: PolicyGroup;
    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    errorMessage: string;

    constructor(){}

    closeModal() {
        console.log("Close button clicked!");
        this.close.emit(null);
    }
}