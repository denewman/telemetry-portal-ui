import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Subscription } from './subscription';
import { PolicyGroup } from './policy-group';
import { DestinationGroup } from './destination-group';
import { Sensor } from './sensor';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
    constructor (private http: Http) {}

    private subscriptionUrl = 'http://localhost:5002/subscription';
    private policyGroupUrl = 'http://localhost:5002/policyGroups';
    private destinationGroupUrl = 'http://localhost:5002/destinationGroup';
    private sensorUrl = 'http://localhost:5002/sensor';

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
    addSensor (sensorName: string): Observable<Sensor> {
        let body = JSON.stringify({ sensorName });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.sensorUrl, body, options)
            .map(this.extractSensorData)
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

    private extractDestinationGroupData(res: Response) {
        let body = res.json();
        return body.destinationGroup || {};
    }

    private extractSensorData(res: Response) {
        let body = res.json();
        return body.sensor || {};
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