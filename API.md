# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BashExecFunction <a name="BashExecFunction" id="cdk-certbot-dns-route53.BashExecFunction"></a>

#### Initializers <a name="Initializers" id="cdk-certbot-dns-route53.BashExecFunction.Initializer"></a>

```typescript
import { BashExecFunction } from 'cdk-certbot-dns-route53'

new BashExecFunction(scope: Construct, id: string, props: BashExecFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-certbot-dns-route53.BashExecFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-certbot-dns-route53.BashExecFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-certbot-dns-route53.BashExecFunction.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-certbot-dns-route53.BashExecFunctionProps">BashExecFunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-certbot-dns-route53.BashExecFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-certbot-dns-route53.BashExecFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-certbot-dns-route53.BashExecFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-certbot-dns-route53.BashExecFunctionProps">BashExecFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-certbot-dns-route53.BashExecFunction.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-certbot-dns-route53.BashExecFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-certbot-dns-route53.BashExecFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-certbot-dns-route53.BashExecFunction.isConstruct"></a>

```typescript
import { BashExecFunction } from 'cdk-certbot-dns-route53'

BashExecFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-certbot-dns-route53.BashExecFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-certbot-dns-route53.BashExecFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-certbot-dns-route53.BashExecFunction.property.handler">handler</a></code> | <code>aws-cdk-lib.aws_lambda.DockerImageFunction</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-certbot-dns-route53.BashExecFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `handler`<sup>Required</sup> <a name="handler" id="cdk-certbot-dns-route53.BashExecFunction.property.handler"></a>

```typescript
public readonly handler: DockerImageFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.DockerImageFunction

---


### CertbotDnsRoute53Job <a name="CertbotDnsRoute53Job" id="cdk-certbot-dns-route53.CertbotDnsRoute53Job"></a>

#### Initializers <a name="Initializers" id="cdk-certbot-dns-route53.CertbotDnsRoute53Job.Initializer"></a>

```typescript
import { CertbotDnsRoute53Job } from 'cdk-certbot-dns-route53'

new CertbotDnsRoute53Job(scope: Construct, id: string, props: CertbotDnsRoute53JobProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53Job.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53Job.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53Job.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobProps">CertbotDnsRoute53JobProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-certbot-dns-route53.CertbotDnsRoute53Job.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-certbot-dns-route53.CertbotDnsRoute53Job.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-certbot-dns-route53.CertbotDnsRoute53Job.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobProps">CertbotDnsRoute53JobProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53Job.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-certbot-dns-route53.CertbotDnsRoute53Job.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53Job.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-certbot-dns-route53.CertbotDnsRoute53Job.isConstruct"></a>

```typescript
import { CertbotDnsRoute53Job } from 'cdk-certbot-dns-route53'

CertbotDnsRoute53Job.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-certbot-dns-route53.CertbotDnsRoute53Job.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53Job.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-certbot-dns-route53.CertbotDnsRoute53Job.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### CertbotDnsRoute53JobPython <a name="CertbotDnsRoute53JobPython" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobPython"></a>

#### Initializers <a name="Initializers" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.Initializer"></a>

```typescript
import { CertbotDnsRoute53JobPython } from 'cdk-certbot-dns-route53'

new CertbotDnsRoute53JobPython(scope: Construct, id: string, props: CertbotDnsRoute53JobProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobProps">CertbotDnsRoute53JobProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobProps">CertbotDnsRoute53JobProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.isConstruct"></a>

```typescript
import { CertbotDnsRoute53JobPython } from 'cdk-certbot-dns-route53'

CertbotDnsRoute53JobPython.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### LambdaPythonFunction <a name="LambdaPythonFunction" id="cdk-certbot-dns-route53.LambdaPythonFunction"></a>

#### Initializers <a name="Initializers" id="cdk-certbot-dns-route53.LambdaPythonFunction.Initializer"></a>

```typescript
import { LambdaPythonFunction } from 'cdk-certbot-dns-route53'

new LambdaPythonFunction(scope: Construct, id: string, props: LambdaFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-certbot-dns-route53.LambdaPythonFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-certbot-dns-route53.LambdaPythonFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-certbot-dns-route53.LambdaPythonFunction.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-certbot-dns-route53.LambdaFunctionProps">LambdaFunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-certbot-dns-route53.LambdaPythonFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-certbot-dns-route53.LambdaPythonFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-certbot-dns-route53.LambdaPythonFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-certbot-dns-route53.LambdaFunctionProps">LambdaFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-certbot-dns-route53.LambdaPythonFunction.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-certbot-dns-route53.LambdaPythonFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-certbot-dns-route53.LambdaPythonFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-certbot-dns-route53.LambdaPythonFunction.isConstruct"></a>

```typescript
import { LambdaPythonFunction } from 'cdk-certbot-dns-route53'

LambdaPythonFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-certbot-dns-route53.LambdaPythonFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-certbot-dns-route53.LambdaPythonFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-certbot-dns-route53.LambdaPythonFunction.property.handler">handler</a></code> | <code>@aws-cdk/aws-lambda-python-alpha.PythonFunction</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-certbot-dns-route53.LambdaPythonFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `handler`<sup>Required</sup> <a name="handler" id="cdk-certbot-dns-route53.LambdaPythonFunction.property.handler"></a>

```typescript
public readonly handler: PythonFunction;
```

- *Type:* @aws-cdk/aws-lambda-python-alpha.PythonFunction

---


## Structs <a name="Structs" id="Structs"></a>

### BashExecFunctionProps <a name="BashExecFunctionProps" id="cdk-certbot-dns-route53.BashExecFunctionProps"></a>

#### Initializer <a name="Initializer" id="cdk-certbot-dns-route53.BashExecFunctionProps.Initializer"></a>

```typescript
import { BashExecFunctionProps } from 'cdk-certbot-dns-route53'

const bashExecFunctionProps: BashExecFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-certbot-dns-route53.BashExecFunctionProps.property.script">script</a></code> | <code>string</code> | The path of the shell script to be executed. |
| <code><a href="#cdk-certbot-dns-route53.BashExecFunctionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | Custom lambda Image Architecture. |
| <code><a href="#cdk-certbot-dns-route53.BashExecFunctionProps.property.dockerfile">dockerfile</a></code> | <code>string</code> | The path of your custom dockerfile. |
| <code><a href="#cdk-certbot-dns-route53.BashExecFunctionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Lambda environment variables. |
| <code><a href="#cdk-certbot-dns-route53.BashExecFunctionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Custom lambda execution role. |
| <code><a href="#cdk-certbot-dns-route53.BashExecFunctionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |

---

##### `script`<sup>Required</sup> <a name="script" id="cdk-certbot-dns-route53.BashExecFunctionProps.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

The path of the shell script to be executed.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="cdk-certbot-dns-route53.BashExecFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* lambda.Architecture.X86_64

Custom lambda Image Architecture.

---

##### `dockerfile`<sup>Optional</sup> <a name="dockerfile" id="cdk-certbot-dns-route53.BashExecFunctionProps.property.dockerfile"></a>

```typescript
public readonly dockerfile: string;
```

- *Type:* string

The path of your custom dockerfile.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-certbot-dns-route53.BashExecFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Lambda environment variables.

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-certbot-dns-route53.BashExecFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* auto generated role.

Custom lambda execution role.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-certbot-dns-route53.BashExecFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(60)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value based on the function's expected execution time.

---

### CertbotDnsRoute53JobProps <a name="CertbotDnsRoute53JobProps" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps"></a>

#### Initializer <a name="Initializer" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.Initializer"></a>

```typescript
import { CertbotDnsRoute53JobProps } from 'cdk-certbot-dns-route53'

const certbotDnsRoute53JobProps: CertbotDnsRoute53JobProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.certbotOptions">certbotOptions</a></code> | <code><a href="#cdk-certbot-dns-route53.CertbotOptions">CertbotOptions</a></code> | certbot cmd options. |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.destinationBucket">destinationBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The S3 bucket to store certificate. |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.zone">zone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | The HostZone on route53 to dns-01 challenge. |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | Custom lambda Image Architecture. |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.enabledLambdaFunctionUrl">enabledLambdaFunctionUrl</a></code> | <code>boolean</code> | Enabled Lambda Function URL. |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.functionUrlOptions">functionUrlOptions</a></code> | <code>aws-cdk-lib.aws_lambda.FunctionUrlOptions</code> | Options to add a url to a Lambda function. |
| <code><a href="#cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | run the Job with defined schedule. |

---

##### `certbotOptions`<sup>Required</sup> <a name="certbotOptions" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.certbotOptions"></a>

```typescript
public readonly certbotOptions: CertbotOptions;
```

- *Type:* <a href="#cdk-certbot-dns-route53.CertbotOptions">CertbotOptions</a>

certbot cmd options.

---

##### `destinationBucket`<sup>Required</sup> <a name="destinationBucket" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.destinationBucket"></a>

```typescript
public readonly destinationBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The S3 bucket to store certificate.

---

##### `zone`<sup>Required</sup> <a name="zone" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.zone"></a>

```typescript
public readonly zone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

The HostZone on route53 to dns-01 challenge.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* lambda.Architecture.X86_64

Custom lambda Image Architecture.

---

##### `enabledLambdaFunctionUrl`<sup>Optional</sup> <a name="enabledLambdaFunctionUrl" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.enabledLambdaFunctionUrl"></a>

```typescript
public readonly enabledLambdaFunctionUrl: boolean;
```

- *Type:* boolean
- *Default:* false

Enabled Lambda Function URL.

---

##### `functionUrlOptions`<sup>Optional</sup> <a name="functionUrlOptions" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.functionUrlOptions"></a>

```typescript
public readonly functionUrlOptions: FunctionUrlOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrlOptions
- *Default:* authType: lambda.FunctionUrlAuthType.NONE

Options to add a url to a Lambda function.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule
- *Default:* no schedule

run the Job with defined schedule.

---

### CertbotOptions <a name="CertbotOptions" id="cdk-certbot-dns-route53.CertbotOptions"></a>

#### Initializer <a name="Initializer" id="cdk-certbot-dns-route53.CertbotOptions.Initializer"></a>

```typescript
import { CertbotOptions } from 'cdk-certbot-dns-route53'

const certbotOptions: CertbotOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-certbot-dns-route53.CertbotOptions.property.domainName">domainName</a></code> | <code>string</code> | the domain must host on route53 like example.com. |
| <code><a href="#cdk-certbot-dns-route53.CertbotOptions.property.email">email</a></code> | <code>string</code> | Email address for important account notifications. |
| <code><a href="#cdk-certbot-dns-route53.CertbotOptions.property.customPrefixDirectory">customPrefixDirectory</a></code> | <code>string</code> | Custom prefix directory on s3 bucket object path. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="cdk-certbot-dns-route53.CertbotOptions.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

the domain must host on route53 like example.com.

---

*Example*

```typescript
- `*.example.com` or `a.example.com` .
```


##### `email`<sup>Required</sup> <a name="email" id="cdk-certbot-dns-route53.CertbotOptions.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Email address for important account notifications.

---

##### `customPrefixDirectory`<sup>Optional</sup> <a name="customPrefixDirectory" id="cdk-certbot-dns-route53.CertbotOptions.property.customPrefixDirectory"></a>

```typescript
public readonly customPrefixDirectory: string;
```

- *Type:* string
- *Default:* `s3://YOUR_BUCKET_NAME/2021-01-01/your.domain.name/`

Custom prefix directory on s3 bucket object path.

---

*Example*

```typescript
- customPrefixDirectory: 'abc' -> `s3://YOUR_BUCKET_NAME/abc/your.domain.name/`
```


### LambdaFunctionProps <a name="LambdaFunctionProps" id="cdk-certbot-dns-route53.LambdaFunctionProps"></a>

#### Initializer <a name="Initializer" id="cdk-certbot-dns-route53.LambdaFunctionProps.Initializer"></a>

```typescript
import { LambdaFunctionProps } from 'cdk-certbot-dns-route53'

const lambdaFunctionProps: LambdaFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-certbot-dns-route53.LambdaFunctionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | *No description.* |
| <code><a href="#cdk-certbot-dns-route53.LambdaFunctionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |
| <code><a href="#cdk-certbot-dns-route53.LambdaFunctionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#cdk-certbot-dns-route53.LambdaFunctionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | *No description.* |

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="cdk-certbot-dns-route53.LambdaFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="cdk-certbot-dns-route53.LambdaFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-certbot-dns-route53.LambdaFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-certbot-dns-route53.LambdaFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

---



