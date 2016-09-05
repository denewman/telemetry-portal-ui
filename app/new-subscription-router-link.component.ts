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
  mode = 'Observable';

  constructor (
      private httpService: HttpService) {}

  ngOnInit() {
    this.getRouters();
    this.getSubscriptions();
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

  onSubmit(subscriptionName: string, routers: string[]) {
    this.submit.emit(new SubscriptionRouterLink(subscriptionName, routers));
  }

  onCancel() {
    this.cancel.emit();
  }

}