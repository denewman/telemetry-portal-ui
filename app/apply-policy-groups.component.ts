import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from './http.service';

import { PolicyRouterLink } from './policy-router-link';
import { PolicyRouterLinkListComponent } from './policy-router-link-list.component';

@Component({
  selector: 'apply-policy-groups',
  templateUrl: '../templates/apply-policy-groups.component.tpl.html',
  styleUrls: ['../css/apply-policy-groups.component.css']
})
export class ApplyPolicyGroupsComponent {
  errorMessage: string;
  policyRouterLinks: PolicyRouterLink[];
  mode = 'Observable';

  newPolicyRouterLink: boolean = false;

  constructor (private httpService: HttpService, private router: Router) {}

  ngOnInit() { this.getPolicyRouterLinks(); }

  getPolicyRouterLinks() {
    this.httpService.getPolicyRouterLinks()
        .subscribe(
            policyRouterLinks => this.policyRouterLinks = policyRouterLinks,
            error => this.errorMessage = <any>error);
  }

  addPolicyRouterLink(policyRouterLink: PolicyRouterLink) {
    this.httpService.addPolicyRouterLink(policyRouterLink.policyName,
        policyRouterLink.routers, policyRouterLink.status)
        .subscribe(
            policyRouterLink => this.policyRouterLinks.push(policyRouterLink),
            error => this.errorMessage = <any>error);
    this.newPolicyRouterLink = false;
  }

  onNewPolicyRouterLinkClick() {
    this.newPolicyRouterLink = true;
  }

  cancelNewPolicyRouterLink() {
    this.newPolicyRouterLink = false;
  }

  goToHome() {
    this.router.navigate(['/home'])
  }
}