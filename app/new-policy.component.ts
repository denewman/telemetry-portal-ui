import { Component, Output, EventEmitter } from '@angular/core';

import { Policy } from './policy';

@Component({
    selector: 'new-policy',
    templateUrl: '../templates/new-policy.component.tpl.html',
    styleUrls: ['../css/new-policy.component.css']
})
export class NewPolicyComponent {
    @Output() closePolicyModal: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitNewPolicy: EventEmitter<Policy> = new EventEmitter<Policy>();

    paths = ['RootOper.InfraStatistics.Interface(*).Latest.GenericCounters',
        'RootOper.InfraStatistics.Interface.Latest.DataRate'];
    pathsMap = {
        'RootOper.InfraStatistics.Interface(*).Latest.GenericCounters': false,
        'RootOper.InfraStatistics.Interface.Latest.DataRate': false
    };
    pathsSelected = [];

    setSelected(path, event) {
        this.pathsMap[path] = event.target.checked;
    }

    updatePathsSelected() {
        for (var x in this.pathsMap) {
            if (this.pathsMap[x]) {
                this.pathsSelected.push(x);
            }
        }
        this.paths = this.pathsSelected;
        this.pathsSelected = [];
    }

    submit(policyName: string, policyVersion: number, policyDescription: string, policyComment: string,
           policyIdentifier: string, policyPeriod: number) {
        this.updatePathsSelected();
        this.submitNewPolicy.emit(new Policy(policyName, policyVersion, policyDescription,
                            policyComment, policyIdentifier, policyPeriod, this.paths));
    }

    cancel() {
        this.closePolicyModal.emit();
    }
}