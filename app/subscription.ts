export class Subscription {
  constructor(
    public subscriptionName: string,
    public destinationGroupName: string,
    public sensorName: string,
    public subscriptionInterval: number) { }
}