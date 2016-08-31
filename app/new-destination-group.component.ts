import { Component, Output, ViewChild, EventEmitter } from '@angular/core';

import { DestinationGroup } from './destination-group';

@Component({
    selector: 'new-destination-group',
    templateUrl: '../templates/new-destination-group.component.tpl.html',
    styleUrls: ['../css/new-destination-group.component.css']
})
export class NewDestinationGroupComponent {
    @Output() closeDestinationGroupModal: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitNewDestinationGroup: EventEmitter<DestinationGroup> = new EventEmitter<DestinationGroup>();

    submit(destinationGroupName: string, destinationGroupAddress: string, destinationGroupEncoding: string,
           destinationGroupPort: string, destinationGroupProtocol: string) {
        this.submitNewDestinationGroup.emit(new DestinationGroup(destinationGroupName, destinationGroupAddress,
                            destinationGroupEncoding, destinationGroupPort, destinationGroupProtocol));
    }

    cancel() {
        this.closeDestinationGroupModal.emit();
    }
}