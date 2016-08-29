export class Subscription {
  constructor(
    public subscriptionName: string,
    public destinationGroupName: string,
    public sensorname: string,
    public subscriptionInterval: number) { }
}