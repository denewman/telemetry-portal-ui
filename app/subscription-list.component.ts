import { Component, Input } from '@angular/core';

import { HttpService } from './http.service';

import './rxjs-operators';

import { Subscription } from './subscription';
import { StatusCode } from './status-code';

@Component({
  selector: 'subscription-list',
  templateUrl: '../templates/subscription-list.component.tpl.html',
  styleUrls: ['../css/subscription-list.component.css']
})
export class SubscriptionListComponent {
  @Input() subscriptions: Subscription[];

  statusCode: StatusCode;

  errorMessage: string;

  constructor(private httpService: HttpService) { }

  onDelete(subscription: Subscription) {
    this.httpService.deleteSubscription(subscription.subscriptionName)
        .subscribe(
            statusCode => {
              this.statusCode = statusCode;
              var index = this.subscriptions.indexOf(subscription);
              if (index >= 0) {
                this.subscriptions.splice(index, 1);
              }
            },
            error => this.errorMessage = error);
  }
}