import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Subscription } from './subscription';
import { PolicyGroup } from './policy-group';
import { DestinationGroup } from './destination-group';
import { Sensor } from './sensor';
import { Collector } from './collector';
import { Policy } from './policy';
import { Router } from './router';
import { SubscriptionRouterLink } from './subscription-router-link';
import { PolicyRouterLink } from './policy-router-link';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
    constructor (private http: Http) {}

    private url = "http://localhost:5002";

    private subscriptionUrl = this.url + '/subscription';
    private policyGroupUrl = this.url + '/policyGroup';
    private destinationGroupUrl = this.url + '/destinationGroup';
    private sensorUrl = this.url + '/sensor';
    private collectorUrl = this.url + '/collector';
    private policyUrl = this.url + '/policy';
    private routerUrl = this.url + '/router';
    private subscriptionRouterLinkUrl = this.url + '/subscriptionRouterLink';
    private policyRouterLinkUrl = this.url + '/policyRouterLink';

    getSubscriptions(): Observable<Subscription[]> {
        return this.http.get(this.subscriptionUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    addSubscription (subscriptionName: string, destinationGroupName: string,
                     sensorName: string, subscriptionInterval: number): Observable<Subscription> {
        let body = JSON.stringify({ subscriptionName, destinationGroupName, sensorName, subscriptionInterval });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.subscriptionUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPolicyGroups(): Observable<PolicyGroup[]> {
        return this.http.get(this.policyGroupUrl)
            .map(this.extractPolicyGroupData)
            .catch(this.handleError);
    }
    addPolicyGroup (policyGroupName: string, collectorName: string, policyName: string): Observable<PolicyGroup> {
        let body = JSON.stringify({ policyGroupName, collectorName, policyName });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.policyGroupUrl, body, options)
            .map(this.extractPolicyGroupData)
            .catch(this.handleError);
    }

    getDestinationGroups(): Observable<DestinationGroup[]> {
        return this.http.get(this.destinationGroupUrl)
            .map(this.extractDestinationGroupData)
            .catch(this.handleError);
    }
    addDestinationGroup (destinationGroupName: string, destinationGroupAddress: string,
                         destinationGroupEncoding: string, destinationGroupPort: string,
                         destinationGroupProtocol: string): Observable<DestinationGroup> {
        let body = JSON.stringify({ destinationGroupName, destinationGroupAddress,
                                    destinationGroupEncoding, destinationGroupPort,
                                    destinationGroupProtocol});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.destinationGroupUrl, body, options)
            .map(this.extractDestinationGroupData)
            .catch(this.handleError);
    }

    getSensors(): Observable<Sensor[]> {
        return this.http.get(this.sensorUrl)
            .map(this.extractSensorData)
            .catch(this.handleError);
    }
    addSensor (sensorName: string, sensorPaths: string[]): Observable<Sensor> {
        let body = JSON.stringify({ sensorName, sensorPaths });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.sensorUrl, body, options)
            .map(this.extractSensorData)
            .catch(this.handleError);
    }

    getCollectors(): Observable<Collector[]> {
        return this.http.get(this.collectorUrl)
            .map(this.extractCollectorData)
            .catch(this.handleError);
    }

    addCollector (collectorName: string, collectorAddress: string,
                         collectorEncoding: string, collectorPort: string,
                         collectorProtocol: string): Observable<Collector> {
        let body = JSON.stringify({ collectorName, collectorAddress,
                                    collectorEncoding, collectorPort,
                                    collectorProtocol});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.collectorUrl, body, options)
            .map(this.extractCollectorData)
            .catch(this.handleError);
    }

    getPolicies(): Observable<Policy[]> {
        return this.http.get(this.policyUrl)
            .map(this.extractPolicyData)
            .catch(this.handleError);
    }

    addPolicy (policyName: string, policyDescription: string,
                         policyComment: string, policyIdentifier: string,
                         policyPeriod: number, policyPaths: string[]): Observable<Policy> {
        let body = JSON.stringify({ policyName, policyDescription,
                                    policyComment, policyIdentifier,
                                    policyPeriod, policyPaths});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.policyUrl, body, options)
            .map(this.extractPolicyData)
            .catch(this.handleError);
    }

    getRouters(): Observable<Router[]> {
        return this.http.get(this.routerUrl)
            .map(this.extractRouterData)
            .catch(this.handleError);
    }
    addRouter (routerName: string, routerAddress: string): Observable<Router> {
        let body = JSON.stringify({ routerName, routerAddress });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.routerUrl, body, options)
            .map(this.extractRouterData)
            .catch(this.handleError);
    }

    getSubscriptionRouterLinks(): Observable<SubscriptionRouterLink[]> {
        return this.http.get(this.subscriptionRouterLinkUrl)
            .map(this.extractSubscriptionRouterLinkData)
            .catch(this.handleError);
    }
    addSubscriptionRouterLink (subscriptionName: string, routers: string[], status: boolean): Observable<SubscriptionRouterLink> {
        let body = JSON.stringify({ subscriptionName, routers, status });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.subscriptionRouterLinkUrl, body, options)
            .map(this.extractSubscriptionRouterLinkData)
            .catch(this.handleError);
    }

    deleteSubscriptionRouterLink (linkId: number): Observable<any> {
        return this.http.delete(this.subscriptionRouterLinkUrl + '/' + linkId)
            .map((res:Response) => res.json())
            .catch(this.handleError);
    }

    getPolicyRouterLinks(): Observable<PolicyRouterLink[]> {
        return this.http.get(this.policyRouterLinkUrl)
            .map(this.extractPolicyRouterLinkData)
            .catch(this.handleError);
    }

    addPolicyRouterLink (policyGroupName: string, routers: string[], status: boolean): Observable<PolicyRouterLink> {
        let body = JSON.stringify({ policyGroupName, routers, status });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.policyRouterLinkUrl, body, options)
            .map(this.extractPolicyRouterLinkData)
            .catch(this.handleError);
    }

    deletePolicyRouterLink (linkId: number): Observable<any> {
        return this.http.delete(this.policyRouterLinkUrl + '/' + linkId)
            .map((res:Response) => res.json())
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.subscription || {};
    }

    private extractPolicyGroupData(res: Response) {
        let body = res.json();
        return body.policyGroup || {};
    }

    private extractDestinationGroupData(res: Response) {
        let body = res.json();
        return body.destinationGroup || {};
    }

    private extractSensorData(res: Response) {
        let body = res.json();
        return body.sensor || {};
    }

    private extractCollectorData(res: Response) {
        let body = res.json();
        return body.collector || {};
    }

    private extractPolicyData(res: Response) {
        let body = res.json();
        return body.policy || {};
    }

    private extractRouterData(res: Response) {
        let body = res.json();
        return body.router || {};
    }

    private extractSubscriptionRouterLinkData(res: Response) {
        let body = res.json();
        return body.subscriptionRouterLink || {};
    }

    private extractPolicyRouterLinkData(res: Response) {
        let body = res.json();
        return body.policyRouterLink || {};
    }

    private handleError (error: any) {
        //In real world app use a remote logging infrastructure
        //and dig deeper in to the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.error(errMsg); //log to console instead
        return Observable.throw(errMsg);
    }
}