import { Component, Input } from '@angular/core';

import { HttpService } from './http.service';

import './rxjs-operators';

import { PolicyGroup } from './policy-group';
import { Policy } from './policy';
import { Collector } from './collector';
import { StatusCode } from './status-code';

@Component({
  selector: 'policy-group-list',
  templateUrl: '../templates/policy-group-list.component.tpl.html',
  styleUrls: ['../css/policy-group-list.component.css']
})
export class PolicyGroupListComponent {
  @Input() policyGroups: PolicyGroup[];
  statusCode: any;

  viewCollector: boolean = false;
  viewPolicy: boolean = false;
  
  //Create variables to store the selected object to be used by the view componenet
  collector: Collector;
  policy: Policy;

  errorMessage: string;

  constructor(private httpService: HttpService) { }

  onCollectorClick(collectorName: string){
    this.httpService.getCollector(collectorName)
      .subscribe(
        collector => this.collector = collector,
        error => this.errorMessage = <any>error
      );

    this.viewCollector = true;
  }

  onPolicyClick(policyName: string){
    this.httpService.getPolicy(policyName)
      .subscribe(
        policy => this.policy = policy,
        error => this.errorMessage = <any>error
      );
      
    this.viewPolicy = true;
  }

  viewCollectorModalClose(){
    this.viewCollector = false;
  }

  viewPolicyModalClose(){
    this.viewPolicy = false;
  }
  

  onDelete(policyGroup: PolicyGroup) {
    this.httpService.deletePolicyGroup(policyGroup.policyGroupName)
        .subscribe(
            statusCode => {
              this.statusCode = statusCode;
              var index = this.policyGroups.indexOf(policyGroup);
              if (this.statusCode == "200" && index >= 0) {
                console.log(this.statusCode);
                this.policyGroups.splice(index, 1);
              }
            },
            error => this.errorMessage = error);
  }
}