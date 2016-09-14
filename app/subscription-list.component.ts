import { Component, Input } from '@angular/core';

import './rxjs-operators';

import { Subscription } from './subscription';

@Component({
  selector: 'subscription-list',
  templateUrl: '../templates/subscription-list.component.tpl.html',
  styleUrls: ['../css/subscription-list.component.css']
})
export class SubscriptionListComponent {
  @Input() subscriptions: Subscription[];

}