import { Component, Input } from '@angular/core';

import { SubscriptionRouterLink } from './subscription-router-link';
import './rxjs-operators';

@Component({
  selector: 'subscription-router-link-list',
  templateUrl: '../templates/subscription-router-link-list.component.tpl.html',
  styleUrls: ['../css/subscription-router-link-list.component.css']
})
export class SubscriptionRouterLinkListComponent {
  @Input() subscriptionRouterLinks: SubscriptionRouterLink[];

}