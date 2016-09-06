export class PolicyRouterLink {
  constructor(
    public linkId: number,
    public policyName: string,
    public routers: string[],
    public status: boolean) { }
}