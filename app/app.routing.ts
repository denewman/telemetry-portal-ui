import { Routes, RouterModule } from '@angular/router';

import { VisualizationComponent } from './visualization.component';
import { HomeComponent } from './home.component';
import {ManageSubscriptionsComponent} from "./manage-subscriptions.component";
import {ApplySubscriptionsComponent} from "./apply-subscriptions.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'manage-subscriptions',
        component: ManageSubscriptionsComponent
    },
    {
        path: 'apply-subscriptions',
        component: ApplySubscriptionsComponent
    },
    {
        path: 'visualization',
        component: VisualizationComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);