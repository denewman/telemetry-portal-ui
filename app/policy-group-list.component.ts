import { Component, Input } from '@angular/core';

import { HttpService } from './http.service';

import './rxjs-operators';

import { PolicyGroup } from './policy-group';
import { StatusCode } from './status-code';

@Component({
  selector: 'policy-group-list',
  templateUrl: '../templates/policy-group-list.component.tpl.html',
  styleUrls: ['../css/policy-group-list.component.css']
})
export class PolicyGroupListComponent {
  @Input() policyGroups: PolicyGroup[];
  statusCode: StatusCode;

  errorMessage: string;

  constructor(private httpService: HttpService) { }

  onDelete(policyGroup: PolicyGroup) {
    this.httpService.deletePolicyGroup(policyGroup.policyGroupName)
        .subscribe(
            statusCode => {
              this.statusCode = statusCode;
              var index = this.policyGroups.indexOf(policyGroup);
              if (this.statusCode.statusCode === '200' && index >= 0) {
                this.policyGroups.splice(index, 1);
              }
            },
            error => this.errorMessage = error);
  }
}