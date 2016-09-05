import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from './http.service';

import { SubscriptionRouterLink } from './subscription-router-link';
import { SubscriptionRouterLinkListComponent } from './subscription-router-link-list.component';

@Component({
  selector: 'apply-subscriptions',
  templateUrl: '../templates/apply-subscriptions.component.tpl.html'
})
export class ApplySubscriptionsComponent implements OnInit {
  errorMessage: string;
  subscriptionRouterLinks: SubscriptionRouterLink[];
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
    this.httpService.addSubscriptionRouterLink(subscriptionRouterLink.subscriptionName, subscriptionRouterLink.routers)
        .subscribe(
            subscriptionRouterLink => this.subscriptionRouterLinks.push(subscriptionRouterLink),
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