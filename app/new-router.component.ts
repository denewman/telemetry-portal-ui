import { Component, Output, EventEmitter } from '@angular/core';

import { Router } from './router';

@Component({
    selector: 'new-router',
    templateUrl: '../templates/new-router.component.tpl.html',
    styleUrls: ['../css/new-router.component.css']
})
export class NewRouterComponent {
    @Output() closeRouterModal: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitNewRouter: EventEmitter<Router> = new EventEmitter<Router>();

    submit(routerName: string, routerAddress: string) {
        this.submitNewRouter.emit(new Router(routerName, routerAddress));
    }

    cancel() {
        this.closeRouterModal.emit();
    }
}