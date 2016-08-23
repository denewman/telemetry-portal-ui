import { Component, OnInit } from '@angular/core';

import { Subscription } from './subscription';
import { SubscriptionService } from './subscription.service';
import './rxjs-operators';

@Component({
  selector: 'subscription-list',
  templateUrl: '../templates/subscription-list.component.tpl.html',
  providers: [SubscriptionService]
})
export class SubscriptionListComponent implements OnInit {
  errorMessage: string;
  subscriptions: Subscription[];
  mode = 'Observable';

  constructor (private subService: SubscriptionService) {}

  ngOnInit() { this.getSubscriptions(); }

  getSubscriptions() {
    this.subService.getSubscriptions()
        .subscribe(
            subscriptions => this.subscriptions = subscriptions,
            error => this.errorMessage = <any>error);
  }

  addSubscription(subName: string, groupId: string, sensorId: string) {
    if (!subName || !groupId || !sensorId) { return; }
    this.subService.addSubscription(subName, groupId, sensorId)
        .subscribe(
            subscription => this.subscriptions.push(subscription),
            error => this.errorMessage = <any>error);
  }

}