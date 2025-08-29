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
| <code><a href="#cdk-aws-cleaner.IAwsCleanerProps.property.email">email</a></code> | <code>string</code> | E-Mail Notification for the removal event. |

---

##### `cleanup`<sup>Required</sup> <a name="cleanup" id="cdk-aws-cleaner.IAwsCleanerProps.property.cleanup"></a>

```typescript
public readonly cleanup: Duration;
```

- *Type:* aws-cdk-lib.Duration

When the Stack should be removed.

---

##### `email`<sup>Optional</sup> <a name="email" id="cdk-aws-cleaner.IAwsCleanerProps.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

E-Mail Notification for the removal event.

---

