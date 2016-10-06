import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from './http.service';

import { SubscriptionRouterLink } from './subscription-router-link';

@Component({
  selector: 'apply-subscriptions',
  templateUrl: '../templates/apply-subscriptions.component.tpl.html',
  styleUrls: ['../css/apply-subscriptions.component.css']
})
export class ApplySubscriptionsComponent implements OnInit {
  errorMessage: string;
  subscriptionRouterLinks: SubscriptionRouterLink[];
  subscriptionRouterLink: SubscriptionRouterLink;
  mode = 'Observable';

  newSubscriptionRouterLink: boolean = false;

  constructor (private httpService: HttpService, private router: Router) {}

  ngOnInit() { this.getSubscriptionRouterLinks(); }

  getSubscriptionRouterLinks() {
    this.httpService.getSubscriptionRouterLinks()
        .subscribe(
            subscriptionRouterLinks => this.subscriptionRouterLinks = subscriptionRouterLinks,
            error => this.errorMessage = <any>error);
  }

  addSubscriptionRouterLink(subscriptionRouterLink: SubscriptionRouterLink) {
    if (!subscriptionRouterLink.subscriptionName || !subscriptionRouterLink.routers ||
        !subscriptionRouterLink.status) { return; }
    this.httpService.addSubscriptionRouterLink(subscriptionRouterLink.subscriptionName,
        subscriptionRouterLink.routers, subscriptionRouterLink.status)
        .subscribe(
            subscriptionRouterLink => {
              this.subscriptionRouterLink = subscriptionRouterLink;
              if (this.subscriptionRouterLink.subscriptionName) {
                this.subscriptionRouterLinks.push(subscriptionRouterLink);
              }
            },
            error => this.errorMessage = <any>error);
    this.newSubscriptionRouterLink = false;
  }

  onNewSubscriptionRouterLinkClick() {
    this.newSubscriptionRouterLink = true;
  }

  cancelNewSubscriptionRouterLink() {
    this.newSubscriptionRouterLink = false;
  }

  goToHome() {
    this.router.navigate(['/home'])
  }
}