import { Component, Input } from '@angular/core';

import { HttpService } from './http.service';

import './rxjs-operators';

import { Subscription } from './subscription';
import { DestinationGroup } from './destination-group';
import { StatusCode } from './status-code';

@Component({
  selector: 'subscription-list',
  templateUrl: '../templates/subscription-list.component.tpl.html',
  styleUrls: ['../css/subscription-list.component.css']
})
export class SubscriptionListComponent {
  @Input() subscriptions: Subscription[];

  statusCode: any;
  destinationGroupPack: DestinationGroup[];
  destinationGroup: DestinationGroup;
  errorMessage: string;
  mode = 'Observable';

  viewDestinationGroup: boolean = false;

  constructor(private httpService: HttpService) { }

  onDestinationGroupClick(dgName: string){

    console.log(dgName);

    this.httpService.getDestinationGroup(dgName)
      .subscribe(
        destinationGroup => this.destinationGroup = destinationGroup,
        //destinationGroupPack => this.destinationGroupPack = destinationGroupPack,
        error => this.errorMessage = <any>error
      );

    //this.destinationGroup = this.destinationGroupPack[0];

/*
    this.destinationGroup = new DestinationGroup(
      "testDG1",
      "0.0.0.0",
      "gpd",
      "2000",
      "http"
    )
*/
    this.viewDestinationGroup = true;
  }

  viewDestinationGroupClose(){
    console.log("Event received, trying to close modal");
    this.viewDestinationGroup = false;
  }

  onDelete(subscription: Subscription) {
    this.httpService.deleteSubscription(subscription.subscriptionName)
        .subscribe(
            statusCode => {
              this.statusCode = statusCode;
              var index = this.subscriptions.indexOf(subscription);
              if (this.statusCode == "200" && index >= 0) {
                this.subscriptions.splice(index, 1);
              }
            },
            error => this.errorMessage = error);
  }
}