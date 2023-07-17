import { PythonFunction } from '@aws-cdk/aws-lambda-python-alpha';
import * as cdk from 'aws-cdk-lib';
import { Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Architecture, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export interface IAwsCleanerProps {
  /** When the Stack should be removed. */
  cleanup: cdk.Duration;
}
export class AwsCleaner extends Construct {

  constructor(scope: Construct, id: string, props: IAwsCleanerProps) {

    super(scope, id);
    const stack = cdk.Stack.of(this);

    const cleanupRole = new iam.Role(
      this,
      'cleanup-lambda-role',
      {
        assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
        description: `Lambda role that cleans up stack ${stack.stackName}, after a given period of time.`,
        managedPolicies: [
          cdk.aws_iam.ManagedPolicy.fromAwsManagedPolicyName(
            'service-role/AWSLambdaBasicExecutionRole',
          ),
        ],
      },
    );
    cleanupRole.addToPolicy(
      new iam.PolicyStatement({
        resources: [`arn:aws:cloudformation:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:stack/${stack.stackName}/*`],
        actions: ['cloudformation:DeleteStack'],
      }),
    );
    const cleanupLambda = new PythonFunction(
      this,
      'cleanup-lambda',
      {
        entry: './src/lambda/',
        runtime: new lambda.Runtime(
          Runtime.PYTHON_3_10.name,
          lambda.RuntimeFamily.PYTHON,
        ),
        role: cleanupRole,
        description:
            `Lambda that cleans up stack ${stack.stackName}, after a given period of time.`,
        index: 'remover.py',
        architecture: Architecture.ARM_64,
        handler: 'handler',
        environment: {
          STACK_NAME: stack.stackName,
        },
        timeout: cdk.Duration.minutes(6),
      },
    );
    new Rule(this, 'stack-cleanup-rule', {
      description: `Schedule for Cleaning up the stack ${stack.stackName}.`,
      schedule: Schedule.rate(props.cleanup),
      targets: [new LambdaFunction(cleanupLambda)],
    });
  }
}