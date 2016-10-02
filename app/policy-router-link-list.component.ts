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

  statusCode: any;

  errorMessage: string;

  constructor(private httpService: HttpService) { }

  onDelete(policyRouterLink: PolicyRouterLink) {
    this.httpService.deletePolicyRouterLink(policyRouterLink.linkId)
        .subscribe(
            statusCode => {
              this.statusCode = statusCode;
              var index = this.policyRouterLinks.indexOf(policyRouterLink);
              if (this.statusCode === "200" && index >= 0) {
                this.policyRouterLinks.splice(index, 1);
              }
            },
            error => this.errorMessage = error);
  }
}