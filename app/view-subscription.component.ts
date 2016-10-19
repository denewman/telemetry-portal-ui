import { Component, Input, Output, EventEmitter } from '@angular/core';
import './rxjs-operators';
import { Subscription } from './subscription';

@Component({
    selector: 'view-subscription',
    templateUrl: '../templates/view-subscripton.component.tpl.html',
    styleUrls: ['../css/view-object.component.css']
})

export class ViewSubscriptionComponent {
    @Input() subscription: Subscription;
    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    errorMessage: string;

    constructor(){}

    closeModal() {
        console.log("Close button clicked!");
        this.close.emit(null);
    }
}