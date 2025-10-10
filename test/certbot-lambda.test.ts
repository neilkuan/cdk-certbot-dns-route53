import * as cdk from 'aws-cdk-lib';
import * as assertions from 'aws-cdk-lib/assertions';
import * as events from 'aws-cdk-lib/aws-events';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as r53 from 'aws-cdk-lib/aws-route53';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { CertbotDnsRoute53Job, CertbotDnsRoute53JobPython } from '../src/index';
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
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
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
  assertions.Template.fromStack(stack).findResources('AWS::IAM::Role');
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
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
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
  assertions.Template.fromStack(stack).findResources('AWS::IAM::Role');
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Events::Rule', {
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

test('test right customPrefixDirectory.', () => {
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
      customPrefixDirectory: 'abc',
    },
    zone,
    destinationBucket: bucket,
    schedule: events.Schedule.cron({ month: '2' }),
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
    Environment: {
      Variables: {
        BUCKET_NAME: {
          Ref: 'testingBucket9FA8E574',
        },
        EMAIL: 'user@example.com',
        DOMAIN_NAME: 'example.com',
        CUSTOM_PREFIX_DIRECTORY: 'abc',
      },
    },
  });
});

test('test right / path customPrefixDirectory.', () => {
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
      customPrefixDirectory: '/',
    },
    zone,
    destinationBucket: bucket,
    schedule: events.Schedule.cron({ month: '2' }),
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
    Environment: {
      Variables: {
        BUCKET_NAME: {
          Ref: 'testingBucket9FA8E574',
        },
        EMAIL: 'user@example.com',
        DOMAIN_NAME: 'example.com',
        CUSTOM_PREFIX_DIRECTORY: '/',
      },
    },
  });
});

test('test define right Lambda Image Architecture x86_64', () => {
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
      customPrefixDirectory: '/',
    },
    zone,
    destinationBucket: bucket,
    schedule: events.Schedule.cron({ month: '2' }),
    architecture: lambda.Architecture.X86_64,
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
    Architectures: [
      'x86_64',
    ],
    Environment: {
      Variables: {
        BUCKET_NAME: {
          Ref: 'testingBucket9FA8E574',
        },
        EMAIL: 'user@example.com',
        DOMAIN_NAME: 'example.com',
        CUSTOM_PREFIX_DIRECTORY: '/',
      },
    },
  });
});

test('test define right Lambda Image Architecture arm64', () => {
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
      customPrefixDirectory: '/',
    },
    zone,
    destinationBucket: bucket,
    schedule: events.Schedule.cron({ month: '2' }),
    architecture: lambda.Architecture.ARM_64,
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
    Architectures: [
      'arm64',
    ],
    Environment: {
      Variables: {
        BUCKET_NAME: {
          Ref: 'testingBucket9FA8E574',
        },
        EMAIL: 'user@example.com',
        DOMAIN_NAME: 'example.com',
        CUSTOM_PREFIX_DIRECTORY: '/',
      },
    },
  });
});

test('test enabled LambdaFunctionUrl', () => {
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
      customPrefixDirectory: '/',
    },
    zone,
    destinationBucket: bucket,
    schedule: events.Schedule.cron({ month: '2' }),
    architecture: lambda.Architecture.ARM_64,
    enabledLambdaFunctionUrl: true,
    functionUrlOptions: {
      authType: lambda.FunctionUrlAuthType.AWS_IAM,
    },
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
    Architectures: [
      'arm64',
    ],
    Environment: {
      Variables: {
        BUCKET_NAME: {
          Ref: 'testingBucket9FA8E574',
        },
        EMAIL: 'user@example.com',
        DOMAIN_NAME: 'example.com',
        CUSTOM_PREFIX_DIRECTORY: '/',
      },
    },
  });

  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
    Architectures: [
      'arm64',
    ],
    Environment: {
      Variables: {
        BUCKET_NAME: {
          Ref: 'testingBucket9FA8E574',
        },
        EMAIL: 'user@example.com',
        DOMAIN_NAME: 'example.com',
        CUSTOM_PREFIX_DIRECTORY: '/',
      },
    },
  });


  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Url', {
    AuthType: 'AWS_IAM',
    TargetFunctionArn: {
      'Fn::GetAtt': [
        'TesttaskcertbotDnsRoute53JobLambdaBashExecFunction83E58B7B',
        'Arn',
      ],
    },
  });

});
test('test define right Lambda Image Architecture arm64', () => {
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
      customPrefixDirectory: '/',
    },
    zone,
    destinationBucket: bucket,
    schedule: events.Schedule.cron({ month: '2' }),
    architecture: lambda.Architecture.ARM_64,
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
    Architectures: [
      'arm64',
    ],
    Environment: {
      Variables: {
        BUCKET_NAME: {
          Ref: 'testingBucket9FA8E574',
        },
        EMAIL: 'user@example.com',
        DOMAIN_NAME: 'example.com',
        CUSTOM_PREFIX_DIRECTORY: '/',
      },
    },
  });
});

test('test PythonLambdaFunction', () => {
  const mockApp = new cdk.App();
  const stack = new cdk.Stack(mockApp, 'teststack', { env: devEnv });
  const bucket = new s3.Bucket(stack, 'testingBucket');
  const zone = r53.HostedZone.fromHostedZoneAttributes(stack, 'zone', {
    zoneName: mock.zoneName, hostedZoneId: mock.zoneId,
  });
  new CertbotDnsRoute53JobPython(stack, 'Testtask', {
    certbotOptions: {
      domainName: 'example.com',
      email: 'user@example.com',
      customPrefixDirectory: '/',
    },
    zone,
    destinationBucket: bucket,
    schedule: events.Schedule.cron({ month: '2' }),
    enabledLambdaFunctionUrl: true,
    functionUrlOptions: {
      authType: lambda.FunctionUrlAuthType.AWS_IAM,
    },
  });
  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
    Environment: {
      Variables: {
        BUCKET_NAME: {
          Ref: 'testingBucket9FA8E574',
        },
        EMAIL: 'user@example.com',
        DOMAIN_NAME: 'example.com',
        CUSTOM_PREFIX_DIRECTORY: '/',
      },
    },
  });

  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Function', {
    Environment: {
      Variables: {
        BUCKET_NAME: {
          Ref: 'testingBucket9FA8E574',
        },
        EMAIL: 'user@example.com',
        DOMAIN_NAME: 'example.com',
        CUSTOM_PREFIX_DIRECTORY: '/',
      },
    },
  });


  assertions.Template.fromStack(stack).hasResourceProperties('AWS::Lambda::Url', {
    AuthType: 'AWS_IAM',
    TargetFunctionArn: {
      'Fn::GetAtt': [
        'TesttaskcertbotDnsRoute53JobPythonLambdaPythonFunctionD27DC536',
        'Arn',
      ],
    },
  });

});