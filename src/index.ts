import * as cdk from 'aws-cdk-lib';
import { Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Architecture, Runtime } from 'aws-cdk-lib/aws-lambda';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subscriptions from 'aws-cdk-lib/aws-sns-subscriptions';
import { Construct } from 'constructs';

export interface IAwsCleanerProps {
  /** When the Stack should be removed. */
  cleanup: cdk.Duration;
  /** E-Mail Notification for the removal event */
  email: string;
}
export class AwsCleaner extends Construct {

  constructor(scope: Construct, id: string, props: IAwsCleanerProps) {

    super(scope, id);
    const stack = cdk.Stack.of(this);

    const notification_topic = new sns.Topic(this, 'cleanup-sns-topic', {
    });

    const emailSubscription = new subscriptions.EmailSubscription(props.email);
    notification_topic.addSubscription(emailSubscription);

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
    notification_topic.grantPublish(cleanupRole);
    cleanupRole.addToPolicy(
      new iam.PolicyStatement({
        resources: [`arn:aws:cloudformation:${cdk.Aws.REGION}:${cdk.Aws.ACCOUNT_ID}:stack/${stack.stackName}/*`],
        actions: ['cloudformation:DeleteStack'],
      }),
    );

    const cleanupLambda = new lambda.Function(this, 'cleanup-lambda-function', {
      runtime: Runtime.PYTHON_3_10,
      handler: 'index.handler',
      description: `Lambda that cleanups the stack ${stack.stackName} automatically.`,
      role: cleanupRole,
      architecture: Architecture.ARM_64,
      environment: {
        STACK_NAME: stack.stackName,
      },
      code: lambda.Code.fromInline(`
import boto3
import os
from botocore.exceptions import NoCredentialsError, PartialCredentialsError

STACK_NAME = os.getenv("STACK_NAME")
client = boto3.client("cloudformation")
snsTopic = "${notification_topic.topicArn}"

def get_account_id():
    try:
        # Create an STS client
        sts_client = boto3.client('sts')
        
        # Get caller identity
        response = sts_client.get_caller_identity()
        
        # Extract and return the account ID
        account_id = response['Account']
        return account_id
    
    except NoCredentialsError:
        print("Error: AWS credentials not found.")
        return None
    except PartialCredentialsError:
        print("Error: Incomplete AWS credentials.")
        return None
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

def publish_to_sns(topic_arn, message, subject):
    try:
        # Create an SNS client
        sns_client = boto3.client('sns')
        
        # Publish a message to the specified SNS topic
        response = sns_client.publish(
            TopicArn=topic_arn,
            Message=message,
            Subject=subject
        )
        
        print(f"Message sent to topic {topic_arn}. Message ID: {response['MessageId']}")
    
    except NoCredentialsError:
        print("Error: AWS credentials not found.")
    except PartialCredentialsError:
        print("Error: Incomplete AWS credentials.")
    except Exception as e:
        print(f"An error occurred: {e}")

def remove_stack(stack: str):
    response = client.delete_stack(
        StackName=stack
    )
    return response


def handler(event, context):
    print(remove_stack(STACK_NAME))
    publish_to_sns(snsTopic, f"Stack {STACK_NAME} deletion triggered for account {get_account_id()}.", f"Stack deletion for {STACK_NAME} - {get_account_id()}")
      `),
    });

    new Rule(this, 'stack-cleanup-rule', {
      description: `Schedule for Cleaning up the stack ${stack.stackName}.`,
      schedule: Schedule.rate(props.cleanup),
      targets: [new LambdaFunction(cleanupLambda)],
    });


  }
}