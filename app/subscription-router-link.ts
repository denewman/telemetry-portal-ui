export class SubscriptionRouterLink {
  constructor(
    public subscriptionName: string,
    public routers: string[],
    public status: boolean) { }
}