import { Component, Input } from '@angular/core';

import './rxjs-operators';

import { HttpService } from './http.service';

import { SubscriptionRouterLink } from './subscription-router-link';

@Component({
  selector: 'subscription-router-link-list',
  templateUrl: '../templates/subscription-router-link-list.component.tpl.html',
  styleUrls: ['../css/subscription-router-link-list.component.css']
})
export class SubscriptionRouterLinkListComponent {
  @Input() subscriptionRouterLinks: SubscriptionRouterLink[];

  errorMessage: string;

  constructor(private httpService: HttpService) { }

  onDelete(subscriptionRouterLink: SubscriptionRouterLink) {
    this.httpService.deleteSubscriptionRouterLink(subscriptionRouterLink.linkId)
        .subscribe();
    var index = this.subscriptionRouterLinks.indexOf(subscriptionRouterLink);
    if (subscriptionRouterLink.linkId >= 1) {
      this.subscriptionRouterLinks.splice(index, 1);
    }

  }

}