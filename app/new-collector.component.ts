import { Component, Output, EventEmitter } from '@angular/core';

import { Collector } from './collector';

@Component({
    selector: 'new-collector',
    templateUrl: '../templates/new-collector.component.tpl.html',
    styleUrls: ['../css/new-collector.component.css']
})
export class NewCollectorComponent {
    @Output() closeCollectorModal: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitNewCollector: EventEmitter<Collector> = new EventEmitter<Collector>();

    IPFamilyTypes: string[];
    encodings: string[];

    constructor(){
        this.IPFamilyTypes = new Array<string>();
        this.IPFamilyTypes.push("ipV4");
        this.IPFamilyTypes.push("ipV6");

        this.encodings = new Array<string>();
        this.encodings.push("JSON");
        this.encodings.push("GPB");
    }

    submit(collectorName: string, collectorAddress: string, collectorEncoder: string,
           collectorPort: string, collectorProtocol: string) {
        var ipRegExp = new RegExp('(^(\\d{1,3}\.){3}(\\d{1,3})$)|(^([\\da-fA-F]{1,4}:){7}([\\da-fA-F]{1,4})$)');
        var portRegExp = new RegExp('^\\d{1,5}$');
        
           if(!collectorName||!collectorAddress||!collectorEncoder||!collectorPort||!collectorProtocol)
           {
            return;
           }
           else if(!ipRegExp.test(collectorAddress)||!portRegExp.test(collectorPort))
           {
           return;

           }else{
                   this.submitNewCollector.emit(new Collector(collectorName, collectorAddress,
                            collectorEncoder, collectorPort, collectorProtocol));
           }

    }

    cancel() {
        this.closeCollectorModal.emit();
    }
}