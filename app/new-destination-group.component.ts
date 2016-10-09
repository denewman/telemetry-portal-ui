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
           var ipRegExp = new RegExp('(^(\\d{1,3}\.){3}(\\d{1,3})$)|(^([\\da-fA-F]{1,4}:){7}([\\da-fA-F]{1,4})$)');
           var portRegExp = new RegExp('^\\d{1,5}$');
           

           if(!destinationGroupAddress||!destinationGroupName||!destinationGroupEncoding||!destinationGroupPort||!destinationGroupProtocol)
           {
               return;

           }
           else if(!ipRegExp.test(destinationGroupAddress)||!portRegExp.test(destinationGroupPort))
           {

                return;
           }else
           {

            this.submitNewDestinationGroup.emit(new DestinationGroup(destinationGroupName, destinationGroupAddress,
                            destinationGroupEncoding, destinationGroupPort, destinationGroupProtocol));
           }
    }

    cancel() {
        this.closeDestinationGroupModal.emit();
    }
}