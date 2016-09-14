import { Component, Input } from '@angular/core';

import './rxjs-operators';

import {HttpService} from "./http.service";

import { PolicyRouterLink } from './policy-router-link';


@Component({
  selector: 'policy-router-link-list',
  templateUrl: '../templates/policy-router-link-list.component.tpl.html',
  styleUrls: ['../css/policy-router-link-list.component.css']
})
export class PolicyRouterLinkListComponent {
  @Input() policyRouterLinks: PolicyRouterLink[];

  errorMessage: string;

  constructor(private httpService: HttpService) { }

  onDelete(policyRouterLink: PolicyRouterLink) {
    this.httpService.deletePolicyRouterLink(policyRouterLink.linkId)
        .subscribe();
    var index = this.policyRouterLinks.indexOf(policyRouterLink);
    if (policyRouterLink.linkId >= 0) {
      this.policyRouterLinks.splice(index, 1);
    }

  }

}