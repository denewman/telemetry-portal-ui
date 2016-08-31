import { Component, Output, ViewChild, EventEmitter } from '@angular/core';

import { Policy } from './policy';

@Component({
    selector: 'new-policy',
    templateUrl: '../templates/new-policy.component.tpl.html',
    styleUrls: ['../css/new-policy.component.css']
})
export class NewPolicyComponent {
    @Output() closePolicyModal: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitNewPolicy: EventEmitter<Policy> = new EventEmitter<Policy>();

    submit(policyName: string, policyDescription: string, policyComment: string,
           policyIdentifier: string, policyPeriod: number) {
        this.submitNewPolicy.emit(new Policy(policyName, policyDescription,
                            policyComment, policyIdentifier, policyPeriod));
    }

    cancel() {
        this.closePolicyModal.emit();
    }
}