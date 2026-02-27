import * as cdk from 'aws-cdk-lib';
import * as assertions from 'aws-cdk-lib/assertions';
import * as events from 'aws-cdk-lib/aws-events';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as r53 from 'aws-cdk-lib/aws-route53';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { CertbotDnsRoute53JobPython } from '../src/index';
const devEnv = {
  account: '1234567890xx',
  region: 'ap-northeast-1',
};

const mock = {
  zoneId: 'XXXXXXXXXXXXX',
  zoneName: 'example.com',
};

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