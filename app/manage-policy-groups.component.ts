import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from './http.service';

import { PolicyGroup } from './policy-group';

@Component({
  selector: 'manage-policy-groups',
  templateUrl: '../templates/manage-policy-groups.component.tpl.html',
  styleUrls: ['../css/manage-policy-groups.component.css']
})
export class ManagePolicyGroupsComponent implements OnInit {
  errorMessage: string;
  policyGroups: PolicyGroup[];
  policyGroup: PolicyGroup;
  mode = 'Observable';

  newPolicy: boolean = false;

  constructor (private httpService: HttpService, private router: Router) {}

  ngOnInit() { this.getPolicyGroups() }

  getPolicyGroups() {
    this.httpService.getPolicyGroups()
        .subscribe(
            policyGroups => this.policyGroups = policyGroups,
            error => this.errorMessage = <any>error);
  }

  addPolicyGroup(policyGroup: PolicyGroup) {
    if (!policyGroup.policyGroupName || !policyGroup.collectorName || !policyGroup.policyName) {
      return;
    }
    this.httpService.addPolicyGroup(policyGroup.policyGroupName, policyGroup.collectorName,
        policyGroup.policyName)
        .subscribe(
            policyGroup => {
              this.policyGroup = policyGroup;
              if (this.policyGroup.policyGroupName) {
                this.policyGroups.push(policyGroup);
              }
            },
            error => this.errorMessage = <any>error);
    this.newPolicy = false;
  }

  onNewPolicyClick() {
    this.newPolicy = true;
  }

  cancelNewPolicy() {
    this.newPolicy = false;
  }

  goToHome() {
    this.router.navigate(['/home'])
  }
}