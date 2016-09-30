import {Component, Output, EventEmitter, OnInit } from '@angular/core';

import { HttpService } from './http.service';
import { ConfigDataService } from './config-data.service';

import { SubscriptionRouterLink } from './subscription-router-link';
import { Subscription } from './subscription';
import { Router } from './router';
import { Config } from "./config";

@Component({
  selector: 'new-subscription-router-link',
  templateUrl: '../templates/new-subscription-router-link.component.tpl.html',
  styleUrls: ['../css/new-subscription-router-link.component.css']
})
export class NewSubscriptionRouterLinkComponent implements OnInit {

  @Output() submit: EventEmitter<SubscriptionRouterLink> = new EventEmitter<SubscriptionRouterLink>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  errorMessage: string;
  subscriptions: Subscription[];
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
    this.getRouters();
    this.getSubscriptions();
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

  getSubscriptions() {
    this.httpService.getSubscriptions()
        .subscribe(
            subscriptions => this.subscriptions = subscriptions,
            error => this.errorMessage = <any>error);
  }

  onSubmit(subscriptionName: string) {
    this.configData = this.configDataService.getConfig();
    this.submit.emit(new SubscriptionRouterLink(0, subscriptionName, this.routersSelected, true,
        this.configData.configOption));
    this.routersSelected = [];
  }

  onCancel() {
    this.cancel.emit();
  }

  onNewRouterClick() {
    this.openNewRouterModal = true;
  }

  submitNewRouter(router: Router) {
    this.httpService.addRouter(router.routerName, router.routerAddress, router.routerUsername,
                                router.routerPassword, router.routerPort)
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