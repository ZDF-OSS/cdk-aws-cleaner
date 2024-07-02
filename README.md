![npm](https://img.shields.io/npm/dw/cdk-aws-cleaner) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/ZDF-OSS/cdk-aws-cleaner/main) ![GitHub issues](https://img.shields.io/github/issues/ZDF-OSS/cdk-aws-cleaner)

# AWS CDK Auto-Deletion Construct: Automate CloudFormation stack removal after a set time. 

Simplifies cleanup, reduces costs, and promotes efficient resource management.

**This is espacially useful, if you deploy a demo stack or an expirement. It will be removed automatically for you.**

The AWS CDK Auto-Deletion Construct is a powerful infrastructure-as-code (IaC) tool that enables you to automatically remove an AWS CloudFormation stack after a specified period. Built on top of the AWS Cloud Development Kit (CDK), this construct simplifies the process of managing the lifecycle of your infrastructure resources.

By leveraging the AWS CDK Auto-Deletion Construct, you can ensure the efficient usage of your AWS resources while avoiding unnecessary costs and clutter in your AWS account. This construct automates the deletion of stacks that are no longer needed, streamlining the cleanup process and promoting a tidy and cost-effective environment.

**Key Features:**

**Automated Stack Removal**: The Auto-Deletion Construct enables you to set an expiration time for your CloudFormation stack. Once the specified time has elapsed, the construct automatically triggers the removal process, effectively eliminating the need for manual intervention.

**Seamless Integration**: The Auto-Deletion Construct seamlessly integrates with existing AWS CDK applications. You can easily incorporate it into your CDK stacks, alongside other constructs, to enable automatic deletion functionality for specific resources or entire infrastructure deployments.

**Security and Control**: The Auto-Deletion Construct follows AWS best practices for security and permissions. This helps prevent accidental or unauthorized deletions.

**Notifcation**: You are now informed via mail, when the remval of the stack is triggered.

The AWS CDK Auto-Deletion Construct empowers developers and DevOps teams to effectively manage their AWS infrastructure by automating the removal of unused resources. With its simplicity, flexibility, and integration capabilities, this construct streamlines the cleanup process and optimizes resource utilization, ultimately contributing to a more cost-efficient and organized AWS environment.

## TL;TR;

Use our construct by installing the module and using our construct in your code:

```sh
npm i -g aws-cdk
npm i aws-cdk-lib 
npm i cdk-aws-cleaner
```

```ts
  import { AwsCleaner } from 'cdk-aws-cleaner'
```

```ts
    new AwsCleaner(this, 'aws-cleaner', {
      cleanup: cdk.Duration.minutes(60),
      email: "aws@zerodotfive.com"
    });

```

#### Properties <a name="Properties" id="Properties"></a>

| **Name**                                                                              | **Type**                          | **Description**                   |
| ------------------------------------------------------------------------------------- | --------------------------------- | --------------------------------- |
| <code><a href="#cdk-aws-cleaner.IAwsCleanerProps.property.cleanup">cleanup</a></code> | <code>aws-cdk-lib.Duration</code> | When the Stack should be removed. |

---

##### `cleanup`<sup>Required</sup> <a name="cleanup" id="cdk-aws-cleaner.IAwsCleanerProps.property.cleanup"></a>

```typescript
public readonly cleanup: Duration;
```

- *Type:* aws-cdk-lib.Duration

When the Stack should be removed.

For any further assistance or support, please don't hesitate to contact us at aws@zerodotfive.com. We are a German company based in Hamburg, specializing in AWS services and solutions.