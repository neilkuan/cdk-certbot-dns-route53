import * as events from '@aws-cdk/aws-events';
import * as r53 from '@aws-cdk/aws-route53';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import '@aws-cdk/assert/jest';
import { CertbotDnsRoute53Job } from '../src/index';
const devEnv = {
  account: '1234567890xx',
  region: 'ap-northeast-1',
};

const mock = {
  zoneId: 'XXXXXXXXXXXXX',
  zoneName: 'example.com',
};

test('only create certbot lambda.', () => {
  const mockApp = new cdk.App();
  const stack = new cdk.Stack(mockApp, 'teststack', { env: devEnv });
  const bucket = new s3.Bucket(stack, 'testingBucket');
  const zone = r53.HostedZone.fromHostedZoneAttributes(stack, 'zone', {
    zoneName: mock.zoneName, hostedZoneId: mock.zoneId,
  });
  new CertbotDnsRoute53Job(stack, 'Testtask', {
    certbotOptions: {
      domainName: 'example.com',
      email: 'user@example.com',
    },
    zone,
    destinationBucket: bucket,
  });
  expect(stack).toHaveResource('AWS::Lambda::Function', {
    Environment: {
      Variables: {
        BUCKET_NAME: {
          Ref: 'testingBucket9FA8E574',
        },
        EMAIL: 'user@example.com',
        DOMAIN_NAME: 'example.com',
      },
    },
  });
  expect(stack).toHaveResource('AWS::IAM::Role');
  expect(stack).toHaveResource('AWS::IAM::Policy', {
    PolicyDocument: {
      Statement: [
        {
          Action: [
            'logs:PutRetentionPolicy',
            'logs:DeleteRetentionPolicy',
          ],
          Effect: 'Allow',
          Resource: '*',
        },
      ],
      Version: '2012-10-17',
    },
  });
});

test('create certbot lambda schedule rule.', () => {
  const mockApp = new cdk.App();
  const stack = new cdk.Stack(mockApp, 'teststack', { env: devEnv });
  const bucket = new s3.Bucket(stack, 'testingBucket');
  const zone = r53.HostedZone.fromHostedZoneAttributes(stack, 'zone', {
    zoneName: mock.zoneName, hostedZoneId: mock.zoneId,
  });
  new CertbotDnsRoute53Job(stack, 'Testtask', {
    certbotOptions: {
      domainName: 'example.com',
      email: 'user@example.com',
    },
    zone,
    destinationBucket: bucket,
    schedule: events.Schedule.cron({ month: '2' }),
  });
  expect(stack).toHaveResource('AWS::Lambda::Function', {
    Environment: {
      Variables: {
        BUCKET_NAME: {
          Ref: 'testingBucket9FA8E574',
        },
        EMAIL: 'user@example.com',
        DOMAIN_NAME: 'example.com',
      },
    },
  });
  expect(stack).toHaveResource('AWS::IAM::Role');
  expect(stack).toHaveResource('AWS::IAM::Policy', {
    PolicyDocument: {
      Statement: [
        {
          Action: [
            'logs:PutRetentionPolicy',
            'logs:DeleteRetentionPolicy',
          ],
          Effect: 'Allow',
          Resource: '*',
        },
      ],
      Version: '2012-10-17',
    },
  });
  expect(stack).toHaveResource('AWS::Events::Rule', {
    ScheduleExpression: 'cron(* * * 2 ? *)',
    State: 'ENABLED',
    Targets: [
      {
        Arn: {
          'Fn::GetAtt': [
            'TesttaskcertbotDnsRoute53JobLambdaBashExecFunction83E58B7B',
            'Arn',
          ],
        },
        Id: 'Target0',
      },
    ],
  });
});