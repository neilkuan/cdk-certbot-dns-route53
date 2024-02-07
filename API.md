# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### BashExecFunction <a name="cdk-certbot-dns-route53.BashExecFunction"></a>

#### Initializers <a name="cdk-certbot-dns-route53.BashExecFunction.Initializer"></a>

```typescript
import { BashExecFunction } from 'cdk-certbot-dns-route53'

new BashExecFunction(scope: Construct, id: string, props: BashExecFunctionProps)
```

##### `scope`<sup>Required</sup> <a name="cdk-certbot-dns-route53.BashExecFunction.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-certbot-dns-route53.BashExecFunction.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-certbot-dns-route53.BashExecFunction.parameter.props"></a>

- *Type:* [`cdk-certbot-dns-route53.BashExecFunctionProps`](#cdk-certbot-dns-route53.BashExecFunctionProps)

---



#### Properties <a name="Properties"></a>

##### `handler`<sup>Required</sup> <a name="cdk-certbot-dns-route53.BashExecFunction.property.handler"></a>

```typescript
public readonly handler: DockerImageFunction;
```

- *Type:* [`aws-cdk-lib.aws_lambda.DockerImageFunction`](#aws-cdk-lib.aws_lambda.DockerImageFunction)

---


### CertbotDnsRoute53Job <a name="cdk-certbot-dns-route53.CertbotDnsRoute53Job"></a>

#### Initializers <a name="cdk-certbot-dns-route53.CertbotDnsRoute53Job.Initializer"></a>

```typescript
import { CertbotDnsRoute53Job } from 'cdk-certbot-dns-route53'

new CertbotDnsRoute53Job(scope: Construct, id: string, props: CertbotDnsRoute53JobProps)
```

##### `scope`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53Job.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53Job.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53Job.parameter.props"></a>

- *Type:* [`cdk-certbot-dns-route53.CertbotDnsRoute53JobProps`](#cdk-certbot-dns-route53.CertbotDnsRoute53JobProps)

---





### CertbotDnsRoute53JobPython <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobPython"></a>

#### Initializers <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.Initializer"></a>

```typescript
import { CertbotDnsRoute53JobPython } from 'cdk-certbot-dns-route53'

new CertbotDnsRoute53JobPython(scope: Construct, id: string, props: CertbotDnsRoute53JobProps)
```

##### `scope`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobPython.parameter.props"></a>

- *Type:* [`cdk-certbot-dns-route53.CertbotDnsRoute53JobProps`](#cdk-certbot-dns-route53.CertbotDnsRoute53JobProps)

---





### LambdaPythonFunction <a name="cdk-certbot-dns-route53.LambdaPythonFunction"></a>

#### Initializers <a name="cdk-certbot-dns-route53.LambdaPythonFunction.Initializer"></a>

```typescript
import { LambdaPythonFunction } from 'cdk-certbot-dns-route53'

new LambdaPythonFunction(scope: Construct, id: string, props: LambdaFunctionProps)
```

##### `scope`<sup>Required</sup> <a name="cdk-certbot-dns-route53.LambdaPythonFunction.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-certbot-dns-route53.LambdaPythonFunction.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-certbot-dns-route53.LambdaPythonFunction.parameter.props"></a>

- *Type:* [`cdk-certbot-dns-route53.LambdaFunctionProps`](#cdk-certbot-dns-route53.LambdaFunctionProps)

---



#### Properties <a name="Properties"></a>

##### `handler`<sup>Required</sup> <a name="cdk-certbot-dns-route53.LambdaPythonFunction.property.handler"></a>

```typescript
public readonly handler: PythonFunction;
```

- *Type:* [`@aws-cdk/aws-lambda-python-alpha.PythonFunction`](#@aws-cdk/aws-lambda-python-alpha.PythonFunction)

---


## Structs <a name="Structs"></a>

### BashExecFunctionProps <a name="cdk-certbot-dns-route53.BashExecFunctionProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { BashExecFunctionProps } from 'cdk-certbot-dns-route53'

const bashExecFunctionProps: BashExecFunctionProps = { ... }
```

##### `script`<sup>Required</sup> <a name="cdk-certbot-dns-route53.BashExecFunctionProps.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* `string`

The path of the shell script to be executed.

---

##### `architecture`<sup>Optional</sup> <a name="cdk-certbot-dns-route53.BashExecFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* [`aws-cdk-lib.aws_lambda.Architecture`](#aws-cdk-lib.aws_lambda.Architecture)
- *Default:* lambda.Architecture.X86_64

Custom lambda Image Architecture.

---

##### `dockerfile`<sup>Optional</sup> <a name="cdk-certbot-dns-route53.BashExecFunctionProps.property.dockerfile"></a>

```typescript
public readonly dockerfile: string;
```

- *Type:* `string`

The path of your custom dockerfile.

---

##### `environment`<sup>Optional</sup> <a name="cdk-certbot-dns-route53.BashExecFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Lambda environment variables.

---

##### `role`<sup>Optional</sup> <a name="cdk-certbot-dns-route53.BashExecFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole)
- *Default:* auto generated role.

Custom lambda execution role.

---

##### `timeout`<sup>Optional</sup> <a name="cdk-certbot-dns-route53.BashExecFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration)
- *Default:* Duration.seconds(60)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value based on the function's expected execution time.

---

### CertbotDnsRoute53JobProps <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CertbotDnsRoute53JobProps } from 'cdk-certbot-dns-route53'

const certbotDnsRoute53JobProps: CertbotDnsRoute53JobProps = { ... }
```

##### `certbotOptions`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.certbotOptions"></a>

```typescript
public readonly certbotOptions: CertbotOptions;
```

- *Type:* [`cdk-certbot-dns-route53.CertbotOptions`](#cdk-certbot-dns-route53.CertbotOptions)

certbot cmd options.

---

##### `destinationBucket`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.destinationBucket"></a>

```typescript
public readonly destinationBucket: IBucket;
```

- *Type:* [`aws-cdk-lib.aws_s3.IBucket`](#aws-cdk-lib.aws_s3.IBucket)

The S3 bucket to store certificate.

---

##### `zone`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.zone"></a>

```typescript
public readonly zone: IHostedZone;
```

- *Type:* [`aws-cdk-lib.aws_route53.IHostedZone`](#aws-cdk-lib.aws_route53.IHostedZone)

The HostZone on route53 to dns-01 challenge.

---

##### `architecture`<sup>Optional</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* [`aws-cdk-lib.aws_lambda.Architecture`](#aws-cdk-lib.aws_lambda.Architecture)
- *Default:* lambda.Architecture.X86_64

Custom lambda Image Architecture.

---

##### `enabledLambdaFunctionUrl`<sup>Optional</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.enabledLambdaFunctionUrl"></a>

```typescript
public readonly enabledLambdaFunctionUrl: boolean;
```

- *Type:* `boolean`
- *Default:* false

Enabled Lambda Function URL.

---

##### `functionUrlOptions`<sup>Optional</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.functionUrlOptions"></a>

```typescript
public readonly functionUrlOptions: FunctionUrlOptions;
```

- *Type:* [`aws-cdk-lib.aws_lambda.FunctionUrlOptions`](#aws-cdk-lib.aws_lambda.FunctionUrlOptions)
- *Default:* authType: lambda.FunctionUrlAuthType.NONE

Options to add a url to a Lambda function.

---

##### `schedule`<sup>Optional</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* [`aws-cdk-lib.aws_events.Schedule`](#aws-cdk-lib.aws_events.Schedule)
- *Default:* no schedule

run the Job with defined schedule.

---

### CertbotOptions <a name="cdk-certbot-dns-route53.CertbotOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CertbotOptions } from 'cdk-certbot-dns-route53'

const certbotOptions: CertbotOptions = { ... }
```

##### `domainName`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotOptions.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* `string`

the domain must host on route53 like example.com.

---

##### `email`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotOptions.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

Email address for important account notifications.

---

##### `customPrefixDirectory`<sup>Optional</sup> <a name="cdk-certbot-dns-route53.CertbotOptions.property.customPrefixDirectory"></a>

```typescript
public readonly customPrefixDirectory: string;
```

- *Type:* `string`
- *Default:* `s3://YOUR_BUCKET_NAME/2021-01-01/your.domain.name/`

Custom prefix directory on s3 bucket object path.

---

### LambdaFunctionProps <a name="cdk-certbot-dns-route53.LambdaFunctionProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { LambdaFunctionProps } from 'cdk-certbot-dns-route53'

const lambdaFunctionProps: LambdaFunctionProps = { ... }
```

##### `architecture`<sup>Required</sup> <a name="cdk-certbot-dns-route53.LambdaFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* [`aws-cdk-lib.aws_lambda.Architecture`](#aws-cdk-lib.aws_lambda.Architecture)

---

##### `timeout`<sup>Required</sup> <a name="cdk-certbot-dns-route53.LambdaFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* [`aws-cdk-lib.Duration`](#aws-cdk-lib.Duration)

---

##### `environment`<sup>Optional</sup> <a name="cdk-certbot-dns-route53.LambdaFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `role`<sup>Optional</sup> <a name="cdk-certbot-dns-route53.LambdaFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole)

---



