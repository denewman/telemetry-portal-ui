import {Component, Output, EventEmitter, OnInit } from '@angular/core';

import { HttpService } from './http.service';

import { PolicyRouterLink } from './policy-router-link';
import { Router } from './router';

@Component({
  selector: 'new-policy-router-link',
  templateUrl: '../templates/new-policy-router-link.component.tpl.html',
  styleUrls: ['../css/new-policy-router-link.component.css']
})
export class NewPolicyRouterLinkComponent implements OnInit {

  @Output() submit: EventEmitter<PolicyRouterLink> = new EventEmitter<PolicyRouterLink>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  errorMessage: string;
  routers: Router[];
  mode = 'Observable';

  constructor (
      private httpService: HttpService) {}

  ngOnInit() {
    this.getRouters();
  }

  getRouters() {
    this.httpService.getRouters()
        .subscribe(
            routers => this.routers = routers,
            error => this.errorMessage = <any>error);
  }

  onSubmit(policyName: string, routers: string[]) {
    this.submit.emit(new PolicyRouterLink(policyName, routers));
  }

  onCancel() {
    this.cancel.emit();
  }

}