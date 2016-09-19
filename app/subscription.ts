export class Subscription {
  constructor(
    public subscriptionId: number,
    public subscriptionName: string,
    public destinationGroupName: string,
    public sensorName: string,
    public subscriptionInterval: number) { }
}