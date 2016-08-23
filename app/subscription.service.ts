import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Subscription } from './subscription';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SubscriptionService {
    constructor (private http: Http) {}

    private subscriptionUrl = 'http://localhost:5002/subscriptions';

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

    private extractData(res: Response) {
        let body = res.json();
        return body.subscription || {};
    }

    private extractData1(res: Response) {
        let body = res.json();
        return body || {};
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