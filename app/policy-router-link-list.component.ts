import { Component, Input } from '@angular/core';

import { PolicyRouterLink } from './policy-router-link';
import './rxjs-operators';

@Component({
  selector: 'policy-router-link-list',
  templateUrl: '../templates/policy-router-link-list.component.tpl.html',
  styleUrls: ['../css/policy-router-link-list.component.css']
})
export class PolicyRouterLinkListComponent {
  @Input() policyRouterLinks: PolicyRouterLink[];

}