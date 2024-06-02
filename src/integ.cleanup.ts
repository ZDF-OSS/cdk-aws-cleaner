import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { AwsCleaner } from './index';

export class CleanupStacks extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new cdk.aws_iam.Role(this, 'some-role', {
      assumedBy: new cdk.aws_iam.AccountRootPrincipal(),
    });

    new AwsCleaner(this, 'aws-cleaner-test', {
      cleanup: cdk.Duration.minutes(1),
      email: 'aws@zerodotfive.com',
    });
  }
}
