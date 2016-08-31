import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';

import { PolicyGroup } from './policy-group';
import { PolicyGroupListComponent } from './policy-group-list.component';

@Component({
  selector: 'manage-policy-groups',
  templateUrl: '../templates/manage-policy-groups.component.tpl.html'
})
export class ManagePolicyGroupsComponent implements OnInit {
  errorMessage: string;
  policieGroups: PolicyGroup[];
  mode = 'Observable';

  newPolicy: boolean = false;

  constructor (private httpService: HttpService) {}

  ngOnInit() { }
}