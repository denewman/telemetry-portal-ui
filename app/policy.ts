export class Policy {
  constructor(
    public policyName: string,
    public policyVersion: number,
    public policyDescription: string,
    public policyComment: string,
    public policyIdentifier: string,
    public policyPeriod: number,
    public policyPath: string[]) { }
}