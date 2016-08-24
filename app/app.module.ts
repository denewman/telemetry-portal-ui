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
import {ManageSubscriptionsComponent} from "./manage-subscriptions.component";
import {ApplySubscriptionsComponent} from "./apply-subscriptions.component";
import {SubscriptionListComponent} from "./subscription-list.component";
import { SubscriptionService } from './subscription.service';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      routing,
      HttpModule,
      JsonpModule
  ],
  declarations: [
      AppComponent,
      ManageSubscriptionsComponent,
      SubscriptionListComponent,
      ApplySubscriptionsComponent,
      SubHomeButtonComponent,
      PolicyHomeButtonComponent,
      TabsComponent,
      TabComponent,
      HomeComponent,
      SetConfigComponent
  ],
    providers: [
        SubscriptionService,
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
