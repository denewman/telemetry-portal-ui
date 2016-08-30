import { Component, Input } from '@angular/core';

import { Subscription } from './subscription';
import { NewSubscriptionComponent } from './new-subscription.component';
import { HttpService } from './http.service';
import './rxjs-operators';

@Component({
  selector: 'subscription-list',
  templateUrl: '../templates/subscription-list.component.tpl.html',
  styleUrls: ['../css/subscription-list.component.css'],
  providers: [HttpService]
})
export class SubscriptionListComponent {
  @Input() subscriptions: Subscription[];

}