import { Component, Input } from '@angular/core';

import './rxjs-operators';

import {HttpService} from "./http.service";

import { PolicyRouterLink } from './policy-router-link';
import { PolicyGroup } from './policy-group';
import { Router } from './router';


@Component({
  selector: 'policy-router-link-list',
  templateUrl: '../templates/policy-router-link-list.component.tpl.html',
  styleUrls: ['../css/policy-router-link-list.component.css']
})
export class PolicyRouterLinkListComponent {
  @Input() policyRouterLinks: PolicyRouterLink[];

  viewPolicyGroup: boolean;
  viewRouter: boolean;

  policyGroup: PolicyGroup;
  router: Router;

  statusCode: any;
  errorMessage: string;

  constructor(private httpService: HttpService) { }

  onViewPolicyGroupClick(policyGroupName: string){
    this.httpService.getPolicyGroup(policyGroupName)
      .subscribe(
        policyGroup => this.policyGroup = policyGroup,
        error => this.errorMessage = <any>error
      );
    this.viewPolicyGroup = true;
  }

  onViewPolicyGroupClose(){
    this.viewPolicyGroup = false;
  }

  onViewRouterClick(routerName: string){
    this.httpService.getRouter(routerName)
      .subscribe(
          router => this.router = router,
          error => this.errorMessage = <any>error
      );
    this.viewRouter = true;
  }

  onViewRouterClose(){
    this.viewRouter = false;
  }

  onDelete(policyRouterLink: PolicyRouterLink) {
    this.httpService.deletePolicyRouterLink(policyRouterLink.linkId)
        .subscribe(
            statusCode => {
              this.statusCode = statusCode;
              var index = this.policyRouterLinks.indexOf(policyRouterLink);
              if (this.statusCode == "200" && index >= 0) {
                this.policyRouterLinks.splice(index, 1);
              }
            },
            error => this.errorMessage = error);
  }
}
