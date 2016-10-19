import { Component, Input, Output, EventEmitter } from '@angular/core';
import './rxjs-operators';
import { Router } from './router';

@Component({
    selector: 'view-router',
    templateUrl: '../templates/view-router.component.tpl.html',
    styleUrls: ['../css/view-object.component.css']
})

export class ViewRouterComponent {
    @Input() router: Router;
    @Output() close: EventEmitter<any> = new EventEmitter<any>();

    errorMessage: string;

    constructor(){}

    closeModal() {
        console.log("Close button clicked!");
        this.close.emit(null);
    }
}