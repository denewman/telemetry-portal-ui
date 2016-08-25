import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Subscription } from './subscription';
import { PolicyGroup } from './policy-group';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
    constructor (private http: Http) {}

    private subscriptionUrl = 'http://localhost:5002/subscriptions';
    private policyGroupUrl = 'http://localhost:5002/policyGroups';

    getSubscriptions(): Observable<Subscription[]> {
        return this.http.get(this.subscriptionUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    addSubscription (subName: string, groupId: string, sensorId: string): Observable<Subscription> {
        let body = JSON.stringify({ subName, groupId, sensorId });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.subscriptionUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPolicyGroups(): Observable<PolicyGroup[]> {
        return this.http.get(this.policyGroupUrl)
            .map(this.extractPolicyData)
            .catch(this.handleError);
    }
    addPolicyGroup (policyGroupName: string, collector: string, policy: string): Observable<PolicyGroup> {
        let body = JSON.stringify({ policyGroupName, collector, policy });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.policyGroupUrl, body, options)
            .map(this.extractPolicyData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.subscription || {};
    }

    private extractPolicyData(res: Response) {
        let body = res.json();
        return body.policyGroup || {};
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