![npm](https://img.shields.io/npm/dw/cdk-aws-cleaner) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/ZDF-OSS/cdk-aws-cleaner/main) ![GitHub issues](https://img.shields.io/github/issues/ZDF-OSS/cdk-aws-cleaner)

# AWS cleaner cdk construct for Cloud Development Kit (AWS CDK)


The AWS CDK Auto-Deletion Construct is a powerful infrastructure-as-code (IaC) tool that enables you to automatically remove an AWS CloudFormation stack after a specified period. Built on top of the AWS Cloud Development Kit (CDK), this construct simplifies the process of managing the lifecycle of your infrastructure resources.

By leveraging the AWS CDK Auto-Deletion Construct, you can ensure the efficient usage of your AWS resources while avoiding unnecessary costs and clutter in your AWS account. This construct automates the deletion of stacks that are no longer needed, streamlining the cleanup process and promoting a tidy and cost-effective environment.

**Key Features:**

**Automated Stack Removal**: The Auto-Deletion Construct enables you to set an expiration time for your CloudFormation stack. Once the specified time has elapsed, the construct automatically triggers the removal process, effectively eliminating the need for manual intervention.

**Seamless Integration**: The Auto-Deletion Construct seamlessly integrates with existing AWS CDK applications. You can easily incorporate it into your CDK stacks, alongside other constructs, to enable automatic deletion functionality for specific resources or entire infrastructure deployments.

**Security and Control**: The Auto-Deletion Construct follows AWS best practices for security and permissions. This helps prevent accidental or unauthorized deletions.

The AWS CDK Auto-Deletion Construct empowers developers and DevOps teams to effectively manage their AWS infrastructure by automating the removal of unused resources. With its simplicity, flexibility, and integration capabilities, this construct streamlines the cleanup process and optimizes resource utilization, ultimately contributing to a more cost-efficient and organized AWS environment.

## TL;TR;

Use our construct by installing the module and using our construct in your code:

```sh
npm install -g aws-cdk
npm install aws-cdk-lib
npm install aws-cdk-cleaner
```

```ts
  import { AwsCleaner } from 'cdk-aws-cleaner'
```

```ts
    new AwsCleaner(this, 'aws-cleaner', {
      cleanup: cdk.Duration.minutes(60),
    });

```
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsCleaner <a name="AwsCleaner" id="cdk-aws-cleaner.AwsCleaner"></a>

#### Initializers <a name="Initializers" id="cdk-aws-cleaner.AwsCleaner.Initializer"></a>

```typescript
import { AwsCleaner } from 'cdk-aws-cleaner'

new AwsCleaner(scope: Construct, id: string, props: IAwsCleanerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aws-cleaner.AwsCleaner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-aws-cleaner.AwsCleaner.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-aws-cleaner.AwsCleaner.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-aws-cleaner.IAwsCleanerProps">IAwsCleanerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-aws-cleaner.AwsCleaner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-aws-cleaner.AwsCleaner.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-aws-cleaner.AwsCleaner.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-aws-cleaner.IAwsCleanerProps">IAwsCleanerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-aws-cleaner.AwsCleaner.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-aws-cleaner.AwsCleaner.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-aws-cleaner.AwsCleaner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-aws-cleaner.AwsCleaner.isConstruct"></a>

```typescript
import { AwsCleaner } from 'cdk-aws-cleaner'

AwsCleaner.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-aws-cleaner.AwsCleaner.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aws-cleaner.AwsCleaner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-aws-cleaner.AwsCleaner.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IAwsCleanerProps <a name="IAwsCleanerProps" id="cdk-aws-cleaner.IAwsCleanerProps"></a>

- *Implemented By:* <a href="#cdk-aws-cleaner.IAwsCleanerProps">IAwsCleanerProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-aws-cleaner.IAwsCleanerProps.property.cleanup">cleanup</a></code> | <code>aws-cdk-lib.Duration</code> | When the Stack should be removed. |

---

##### `cleanup`<sup>Required</sup> <a name="cleanup" id="cdk-aws-cleaner.IAwsCleanerProps.property.cleanup"></a>

```typescript
public readonly cleanup: Duration;
```

- *Type:* aws-cdk-lib.Duration

When the Stack should be removed.

---

