import {Component, Output, EventEmitter, OnInit } from '@angular/core';

import { HttpService } from './http.service';

import { SubscriptionRouterLink } from './subscription-router-link';
import { Subscription } from './subscription';
import { Router } from './router';

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
  routersSelected: string[] = [];
  mode = 'Observable';

  openNewRouterModal: boolean = false;

  constructor (
      private httpService: HttpService) {}

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
    this.submit.emit(new SubscriptionRouterLink(subscriptionName, this.routersSelected, true));
    this.routersSelected = [];
  }

  onCancel() {
    this.cancel.emit();
  }

  onNewRouterClick() {
    this.openNewRouterModal = true;
  }

  submitNewRouter(router: Router) {
    this.httpService.addRouter(router.routerName, router.routerAddress)
      .subscribe(
            router => this.routers.push(router),
            error => this.errorMessage = <any>error);
    this.openNewRouterModal = false;
  }

  closeNewRouterModal() {
    this.openNewRouterModal = false;
  }

}