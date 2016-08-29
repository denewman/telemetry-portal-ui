import { Component, OnInit } from '@angular/core';

import { Subscription } from './subscription';
import { HttpService } from './http.service';
import './rxjs-operators';

@Component({
  selector: 'subscription-list',
  templateUrl: '../templates/subscription-list.component.tpl.html',
  styleUrls: ['../css/subscription-list.component.css'],
  providers: [HttpService]
})
export class SubscriptionListComponent implements OnInit {
  errorMessage: string;
  subscriptions: Subscription[];
  mode = 'Observable';

  constructor (private httpService: HttpService) {}

  ngOnInit() { this.getSubscriptions(); }

  getSubscriptions() {
    this.httpService.getSubscriptions()
        .subscribe(
            subscriptions => this.subscriptions = subscriptions,
            error => this.errorMessage = <any>error);
  }

  addSubscription(subscriptionName: string, destinationGroupName: string,
                  sensorName: string, subscriptionInterval: number) {
    if (!subscriptionName || !destinationGroupName || !sensorName || !subscriptionInterval) { return; }
    this.httpService.addSubscription(subscriptionName, destinationGroupName, sensorName, subscriptionInterval)
        .subscribe(
            subscription => this.subscriptions.push(subscription),
            error => this.errorMessage = <any>error);
  }

}