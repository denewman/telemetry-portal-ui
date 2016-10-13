import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DestinationGroup } from './destination-group';

@Component({
    selector: 'new-destination-group',
    templateUrl: '../templates/new-destination-group.component.tpl.html',
    styleUrls: ['../css/new-destination-group.component.css']
})

export class NewDestinationGroupComponent {
    @Output() closeDestinationGroupModal: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitNewDestinationGroup: EventEmitter<DestinationGroup> = new EventEmitter<DestinationGroup>();

    //This form uses template driven validation.
    onSubmit(f:NgForm){
        this.submitNewDestinationGroup.emit(
            new DestinationGroup(
                f.value.name,
                f.value.address,
                f.value.encoding, 
                f.value.port, 
                f.value.protocol
            )
        );
    }

    cancel() {
        this.closeDestinationGroupModal.emit();
    }
}