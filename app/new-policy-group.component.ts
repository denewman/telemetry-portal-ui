import {Component, Output, EventEmitter, OnInit } from '@angular/core';

import { HttpService } from './http.service';

import { PolicyGroup } from './policy-group';
import { Collector } from './collector';
import { Policy } from './policy';

@Component({
  selector: 'new-policy-group',
  templateUrl: '../templates/new-policy-group.component.tpl.html',
  styleUrls: ['../css/new-policy-group.component.css']
})
export class NewPolicyGroupComponent implements OnInit {

  @Output() submit: EventEmitter<PolicyGroup> = new EventEmitter<PolicyGroup>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  errorMessage: string;
  collectors: Collector[];
  policies: Policy[];
  mode = 'Observable';

  openNewCollectorModal: boolean = false;
  openNewPolicyModal: boolean = false;

  constructor (
      private httpService: HttpService) {}

  ngOnInit() {
    this.getCollectors();
    this.getPolicies();
  }

  getCollectors() {
    this.httpService.getCollectors()
        .subscribe(
            collectors => this.collectors = collectors,
            error => this.errorMessage = <any>error);
  }

  getPolicies() {
    this.httpService.getPolicies()
        .subscribe(
            policies => this.policies = policies,
            error => this.errorMessage = <any>error);
  }

  onSubmit(policyGroupName: string, collector: string,
                  policy: string) {
    this.submit.emit(new PolicyGroup(policyGroupName, collector, policy));
  }

  onCancel() {
    this.cancel.emit();
  }

  onNewCollectorClick() {
    this.openNewCollectorModal = true;
  }

  onNewPolicyClick() {
    this.openNewPolicyModal = true;
  }

  submitNewCollector(collector: Collector) {
    this.httpService.addCollector(collector.collectorName, collector.collectorAddress,
        collector.collectorEncoding, collector.collectorPort, collector.collectorProtocol)
      .subscribe(
            collector => this.collectors.push(collector),
            error => this.errorMessage = <any>error);
    this.openNewCollectorModal = false;
  }

  submitNewPolicy(policy: Policy) {
    this.httpService.addPolicy(policy.policyName, policy.policyDescription,
                        policy.policyComment, policy.policyIdentifier, policy.policyPeriod, policy.policyPaths)
      .subscribe(
            policy => this.policies.push(policy),
            error => this.errorMessage = <any>error);
    this.openNewPolicyModal = false;
  }

  closeNewCollectorModal() {
    this.openNewCollectorModal = false;
  }

  closeNewPolicyModal() {
    this.openNewPolicyModal = false;
  }
}