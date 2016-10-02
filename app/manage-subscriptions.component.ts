import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from './http.service';

import { Subscription } from './subscription';

@Component({
  selector: 'manage-subscriptions',
  templateUrl: '../templates/manage-subscriptions.component.tpl.html',
  styleUrls: ['../css/manage-subscriptions.component.css']
})
export class ManageSubscriptionsComponent implements OnInit {
  errorMessage: string;
  subscriptions: Subscription[];
  subscription: Subscription;
  mode = 'Observable';

  newSubscription: boolean = false;

  constructor (private httpService: HttpService, private router: Router) {}

  ngOnInit() { this.getSubscriptions(); }

  getSubscriptions() {
    this.httpService.getSubscriptions()
        .subscribe(
            subscriptions => this.subscriptions = subscriptions,
            error => this.errorMessage = <any>error);
  }

  addSubscription(subscription: Subscription) {
    if (!subscription.subscriptionId || !subscription.subscriptionName || !subscription.destinationGroupName
        || !subscription.sensorName || !subscription.subscriptionInterval) { return; }
    this.httpService.addSubscription(subscription.subscriptionId,
        subscription.subscriptionName,
        subscription.destinationGroupName,
        subscription.sensorName,
        subscription.subscriptionInterval)
        .subscribe(
            subscription => {
              this.subscription = subscription;
              if (this.subscription.subscriptionName) {
                this.subscriptions.push(subscription);
              }
            },
            error => this.errorMessage = <any>error);
    this.newSubscription = false;
  }

  onNewSubscriptionClick() {
    this.newSubscription = true;
  }

  cancelNewSubscription() {
    this.newSubscription = false;
  }

  goToHome() {
    this.router.navigate(['/home'])
  }


}