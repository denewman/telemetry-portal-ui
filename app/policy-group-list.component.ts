import { Component, Input } from '@angular/core';

import { PolicyGroup } from './policy-group';
import './rxjs-operators';

@Component({
  selector: 'policy-group-list',
  templateUrl: '../templates/policy-group-list.component.tpl.html',
  styleUrls: ['../css/policy-group-list.component.css']
})
export class PolicyGroupListComponent {
  @Input() policyGroups: PolicyGroup[];
}