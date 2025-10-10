import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as r53 from 'aws-cdk-lib/aws-route53';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { CertbotDnsRoute53JobPython } from '.';

const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new cdk.App();

const stack = new cdk.Stack(app, 'lambda-certbot-dev-python', { env: devEnv });

new CertbotDnsRoute53JobPython(stack, 'Demo', {
  certbotOptions: {
    domainName: stack.node.tryGetContext('DOMAIN'),
    email: stack.node.tryGetContext('EMAIL'),
    customPrefixDirectory: '/',
  },
  zone: r53.HostedZone.fromHostedZoneAttributes(stack, 'myZone', {
    zoneName: stack.node.tryGetContext('ZONENAME'),
    hostedZoneId: stack.node.tryGetContext('HOSTZONEID'),
  }),
  destinationBucket: new s3.Bucket(stack, 'myBucket123', {
    removalPolicy: cdk.RemovalPolicy.DESTROY,
  }),
  architecture: lambda.Architecture.ARM_64,
  enabledLambdaFunctionUrl: true,
  // enabledLambdaFunctionUrl: false,
});

app.synth();