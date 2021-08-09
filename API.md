# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### CertbotDnsRoute53Job <a name="cdk-certbot-dns-route53.CertbotDnsRoute53Job"></a>

#### Initializer <a name="cdk-certbot-dns-route53.CertbotDnsRoute53Job.Initializer"></a>

```typescript
import { CertbotDnsRoute53Job } from 'cdk-certbot-dns-route53'

new CertbotDnsRoute53Job(scope: Construct, id: string, props: CertbotDnsRoute53JobProps)
```

##### `scope`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53Job.parameter.scope"></a>

- *Type:* [`@aws-cdk/core.Construct`](#@aws-cdk/core.Construct)

---

##### `id`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53Job.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53Job.parameter.props"></a>

- *Type:* [`cdk-certbot-dns-route53.CertbotDnsRoute53JobProps`](#cdk-certbot-dns-route53.CertbotDnsRoute53JobProps)

---





## Structs <a name="Structs"></a>

### CertbotDnsRoute53JobProps <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CertbotDnsRoute53JobProps } from 'cdk-certbot-dns-route53'

const certbotDnsRoute53JobProps: CertbotDnsRoute53JobProps = { ... }
```

##### `certbotOptions`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.certbotOptions"></a>

- *Type:* [`cdk-certbot-dns-route53.CertbotOptions`](#cdk-certbot-dns-route53.CertbotOptions)

certbot cmd options.

---

##### `destinationBucket`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.destinationBucket"></a>

- *Type:* [`@aws-cdk/aws-s3.IBucket`](#@aws-cdk/aws-s3.IBucket)

The S3 bucket to store certificate.

---

##### `zone`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.zone"></a>

- *Type:* [`@aws-cdk/aws-route53.IHostedZone`](#@aws-cdk/aws-route53.IHostedZone)

The HostZone on route53 to dns-01 challenge.

---

##### `schedule`<sup>Optional</sup> <a name="cdk-certbot-dns-route53.CertbotDnsRoute53JobProps.property.schedule"></a>

- *Type:* [`@aws-cdk/aws-events.Schedule`](#@aws-cdk/aws-events.Schedule)
- *Default:* no shedule

run the Job with defined schedule.

---

### CertbotOptions <a name="cdk-certbot-dns-route53.CertbotOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CertbotOptions } from 'cdk-certbot-dns-route53'

const certbotOptions: CertbotOptions = { ... }
```

##### `domainName`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotOptions.property.domainName"></a>

- *Type:* `string`

the domain must host on route53 like example.com.

---

##### `email`<sup>Required</sup> <a name="cdk-certbot-dns-route53.CertbotOptions.property.email"></a>

- *Type:* `string`

Email address for important account notifications.

---



