import { Component, OnInit } from '@angular/core';

import { PolicyGroup } from './policy-group';
import { HttpService } from './http.service';
import './rxjs-operators';

@Component({
  selector: 'policy-group-list',
  templateUrl: '../templates/policy-group-list.component.tpl.html',
  providers: [HttpService]
})
export class PolicyGroupListComponent implements OnInit {
  errorMessage: string;
  policyGroups: PolicyGroup[];
  mode = 'Observable';

  constructor (private httpService: HttpService) {}

  ngOnInit() { this.getPolicyGroups(); }

  getPolicyGroups() {
    this.httpService.getPolicyGroups()
        .subscribe(
            policyGroups => this.policyGroups = policyGroups,
            error => this.errorMessage = <any>error);
  }

  addPolicyGroup(policyGroupName: string, collector: string, policy: string) {
    if (!policyGroupName || !collector || !policy) { return; }
    this.httpService.addPolicyGroup(policyGroupName, collector, policy)
        .subscribe(
            policyGroup => this.policyGroups.push(policyGroup),
            error => this.errorMessage = <any>error);
  }

}