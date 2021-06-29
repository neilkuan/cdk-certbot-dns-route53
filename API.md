# API Reference

**Classes**

Name|Description
----|-----------
[CertbotDnsRoute53Job](#cdk-certbot-dns-route53-certbotdnsroute53job)|*No description*


**Structs**

Name|Description
----|-----------
[CertbotDnsRoute53JobProps](#cdk-certbot-dns-route53-certbotdnsroute53jobprops)|*No description*
[CertbotOptions](#cdk-certbot-dns-route53-certbotoptions)|*No description*



## class CertbotDnsRoute53Job  <a id="cdk-certbot-dns-route53-certbotdnsroute53job"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new CertbotDnsRoute53Job(scope: Construct, id: string, props: CertbotDnsRoute53JobProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[CertbotDnsRoute53JobProps](#cdk-certbot-dns-route53-certbotdnsroute53jobprops)</code>)  *No description*
  * **certbotOptions** (<code>[CertbotOptions](#cdk-certbot-dns-route53-certbotoptions)</code>)  certbot cmd options. 
  * **destinationBucket** (<code>[IBucket](#aws-cdk-aws-s3-ibucket)</code>)  The S3 bucket to store certificate. 
  * **zone** (<code>[IHostedZone](#aws-cdk-aws-route53-ihostedzone)</code>)  The HostZone on route53 to dns-01 challenge. 
  * **schedule** (<code>[Schedule](#aws-cdk-aws-events-schedule)</code>)  run the Job with defined schedule. __*Default*__: no shedule




## struct CertbotDnsRoute53JobProps  <a id="cdk-certbot-dns-route53-certbotdnsroute53jobprops"></a>






Name | Type | Description 
-----|------|-------------
**certbotOptions** | <code>[CertbotOptions](#cdk-certbot-dns-route53-certbotoptions)</code> | certbot cmd options.
**destinationBucket** | <code>[IBucket](#aws-cdk-aws-s3-ibucket)</code> | The S3 bucket to store certificate.
**zone** | <code>[IHostedZone](#aws-cdk-aws-route53-ihostedzone)</code> | The HostZone on route53 to dns-01 challenge.
**schedule**? | <code>[Schedule](#aws-cdk-aws-events-schedule)</code> | run the Job with defined schedule.<br/>__*Default*__: no shedule



## struct CertbotOptions  <a id="cdk-certbot-dns-route53-certbotoptions"></a>






Name | Type | Description 
-----|------|-------------
**domainName** | <code>string</code> | the domain must host on route53 like example.com.
**email** | <code>string</code> | Email address for important account notifications.



