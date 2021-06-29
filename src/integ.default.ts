import * as r53 from '@aws-cdk/aws-route53';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import { CertbotDnsRoute53Job } from '.';

const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new cdk.App();

const stack = new cdk.Stack(app, 'lambda-certbot-dev', { env: devEnv });

new CertbotDnsRoute53Job(stack, 'Demo', {
  certbotOptions: {
    domainName: stack.node.tryGetContext('DOMAIN') ?? '*.example.com',
    email: stack.node.tryGetContext('EMAIL') ?? 'user@example.com',
  },
  zone: r53.HostedZone.fromHostedZoneAttributes(stack, 'myZone', {
    zoneName: stack.node.tryGetContext('ZONENAME') ?? 'example.com',
    hostedZoneId: stack.node.tryGetContext('HOSTZONEID') ?? 'mockId',
  }),
  destinationBucket: s3.Bucket.fromBucketName(stack, 'myBucket', stack.node.tryGetContext('BUCKETNAME') ?? 'mybucket'),
});


app.synth();

