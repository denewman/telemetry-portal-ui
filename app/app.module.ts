import { NgModule }      from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { SubHomeButtonComponent } from "./sub-homebuttons.component";
import { PolicyHomeButtonComponent } from './policy-homebuttons.component';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
import { HomeComponent } from './home.component';
import { SetConfigComponent } from './setconfig.component';
import { ManageSubscriptionsComponent} from "./manage-subscriptions.component";
import { ApplySubscriptionsComponent} from "./apply-subscriptions.component";
import { ApplyPolicyGroupsComponent } from './apply-policy-groups.component';
import { SubscriptionListComponent} from "./subscription-list.component";
import { PolicyGroupListComponent } from './policy-group-list.component';
import { ManagePolicyGroupsComponent } from './manage-policy-groups.component';
import { HttpService } from './http.service';
import { ConfigDataService } from './config-data.service';
import { NewSubscriptionComponent } from './new-subscription.component';
import { NewSensorComponent } from './new-sensor.component';
import { NewDestinationGroupComponent } from './new-destination-group.component';
import { NewPolicyGroupComponent } from './new-policy-group.component';
import { NewCollectorComponent } from './new-collector.component';
import { NewPolicyComponent } from './new-policy.component';
import { SubscriptionRouterLinkListComponent } from './subscription-router-link-list.component';
import { PolicyRouterLinkListComponent } from './policy-router-link-list.component';
import { NewSubscriptionRouterLinkComponent } from './new-subscription-router-link.component';
import { NewPolicyRouterLinkComponent } from './new-policy-router-link.component';
import { NewRouterComponent } from './new-router.component';
import { ViewSubComponent } from './view-sub.component';
import { ViewPolicyGroupComponent } from './view-policy-group.component';
import { ViewRouterComponent } from './view-router.component';
import { ViewDestinationGroupComponent } from './view-destination-group.component';
import { ViewSensorComponent } from './view-sensor.component';
import { ViewPolicyComponent } from './view-policy.component';
import { ViewCollectorComponent } from './view-collector.component';
import { VisualizationComponent } from './visualization.component';
import { InfoMessageComponent } from './info-message.component';
import { ConfirmDialogComponent } from './confirm-dialog.component';

 

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      routing,
      HttpModule,
      JsonpModule,

  ],
  declarations: [
      AppComponent,
      ManageSubscriptionsComponent,
      SubscriptionListComponent,
      ApplySubscriptionsComponent,
      ApplyPolicyGroupsComponent,
      SubHomeButtonComponent,
      PolicyHomeButtonComponent,
      PolicyGroupListComponent,
      ManagePolicyGroupsComponent,
      TabsComponent,
      TabComponent,
      HomeComponent,
      SetConfigComponent,
      NewSubscriptionComponent,
      NewSensorComponent,
      NewDestinationGroupComponent,
      NewPolicyGroupComponent,
      NewCollectorComponent,
      NewPolicyComponent,
      SubscriptionRouterLinkListComponent,
      PolicyRouterLinkListComponent,
      NewSubscriptionRouterLinkComponent,
      NewPolicyRouterLinkComponent,
      NewRouterComponent,
      ViewSubComponent,
      ViewPolicyGroupComponent,
      ViewRouterComponent,
      ViewDestinationGroupComponent,
      ViewSensorComponent,
      ViewPolicyComponent,
      ViewCollectorComponent,
      VisualizationComponent,
      InfoMessageComponent,
      ConfirmDialogComponent

  ],
    providers: [
        HttpService,
        ConfigDataService
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
