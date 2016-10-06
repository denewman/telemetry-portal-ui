export class SubscriptionRouterLink {
  constructor(
    public linkId: number,
    public subscriptionName: string,
    public routers: string[],
    public status: boolean) { }
}