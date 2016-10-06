import {Component, Output, EventEmitter, OnInit } from '@angular/core';

import { HttpService } from './http.service';
import { ConfigDataService } from './config-data.service';

import { PolicyRouterLink } from './policy-router-link';
import { Router } from './router';
import { PolicyGroup } from "./policy-group";
import { Config } from './config';

@Component({
  selector: 'new-policy-router-link',
  templateUrl: '../templates/new-policy-router-link.component.tpl.html',
  styleUrls: ['../css/new-policy-router-link.component.css']
})
export class NewPolicyRouterLinkComponent implements OnInit {

  @Output() submit: EventEmitter<PolicyRouterLink> = new EventEmitter<PolicyRouterLink>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  errorMessage: string;
  policyGroups: PolicyGroup[];
  routers: Router[];
  newRouter: Router;
  routersSelected: string[] = [];
  mode = 'Observable';

  openNewRouterModal: boolean = false;

  configData: Config;

  constructor (
      private httpService: HttpService,
      private configDataService: ConfigDataService) {}

  ngOnInit() {
    this.getPolicyGroups();
    this.getRouters();
  }

  setSelected(router, event) {
    var index = this.routersSelected.indexOf(router);
    if (event.target.checked) {
      if (index === -1) {
        this.routersSelected.push(router);
      }
    }
    else {
      if (index !== -1) {
        this.routersSelected.splice(index, 1);
      }
    }
  }

  getRouters() {
    this.httpService.getRouters()
        .subscribe(
            routers => this.routers = routers,
            error => this.errorMessage = <any>error);
  }

  getPolicyGroups() {
    this.httpService.getPolicyGroups()
        .subscribe(
            policyGroups => this.policyGroups = policyGroups,
            error => this.errorMessage = <any>error);
  }

  onSubmit(policyName: string) {
    this.submit.emit(new PolicyRouterLink(0, policyName, this.routersSelected, true));
    this.routersSelected = [];
  }

  onCancel() {
    this.cancel.emit();
  }

  onNewRouterClick() {
    this.openNewRouterModal = true;
  }

  submitNewRouter(router: Router) {
    if (!router.routerName || !router.routerAddress || !router.routerUsername ||
        !router.routerPassword || !router.routerPort) { return; }
    this.httpService.addRouter(router.routerName, router.routerAddress, router.routerUsername,
                                router.routerPassword, router.routerPort, this.configData.configOption)
      .subscribe(
            router => {
              this.newRouter = router;
              if (this.newRouter.routerName) {
                this.routers.push(router);
              }
            },
            error => this.errorMessage = <any>error);
    this.openNewRouterModal = false;
  }

  closeNewRouterModal() {
    this.openNewRouterModal = false;
  }

}