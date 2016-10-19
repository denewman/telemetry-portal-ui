import { Component, Input } from '@angular/core';

import './rxjs-operators';

import { HttpService } from './http.service';

import { SubscriptionRouterLink } from './subscription-router-link';
import { Subscription } from './subscription';
import { Router } from './router';

@Component({
  selector: 'subscription-router-link-list',
  templateUrl: '../templates/subscription-router-link-list.component.tpl.html',
  styleUrls: ['../css/subscription-router-link-list.component.css']
})
export class SubscriptionRouterLinkListComponent {
  @Input() subscriptionRouterLinks: SubscriptionRouterLink[];
  
  viewSubscription: boolean;
  viewRouter: boolean;

  subscription: Subscription;
  router: Router;
  statusCode: any;
  errorMessage: string;

  constructor(private httpService: HttpService) { }

  onViewSubscriptionClick(subscriptionName: string){
    this.httpService.getSubscription(subscriptionName)
      .subscribe(
          subscription => this.subscription = subscription,
          error => this.errorMessage = <any>error
      );
    this.viewSubscription = true;
  }

  onViewSubscriptionClose(){
    this.viewSubscription = false;
  }

  onViewRouterClick(routerName: string){
    this.httpService.getRouter(routerName)
      .subscribe(
        router => this.router = router,
        error => this.errorMessage = <any>error
      );

    this.viewRouter = true;
  }

  onViewRouterClose(){
    this.viewRouter = false;
  }

  onDelete(subscriptionRouterLink: SubscriptionRouterLink) {
    this.httpService.deleteSubscriptionRouterLink(subscriptionRouterLink.linkId)
        .subscribe(
            statusCode => {
              this.statusCode = statusCode;
              var index = this.subscriptionRouterLinks.indexOf(subscriptionRouterLink);
              if (this.statusCode == "200" && index >= 0) {
                this.subscriptionRouterLinks.splice(index, 1);
              }
            },
            error => this.errorMessage = error
        );
  }
}