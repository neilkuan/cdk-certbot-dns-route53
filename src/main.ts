import * as path from 'path';
import * as events from '@aws-cdk/aws-events';
import * as target from '@aws-cdk/aws-events-targets';
import * as iam from '@aws-cdk/aws-iam';
// import * as lambda from '@aws-cdk/aws-lambda';
// import * as logs from '@aws-cdk/aws-logs';
import * as r53 from '@aws-cdk/aws-route53';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import { BashExecFunction } from 'cdk-lambda-bash';

export interface CertbotOptions {
  /**
   * the domain must host on route53 like example.com.
   *
   * @example - `*.example.com` or `a.example.com` .
   */
  readonly domainName: string;

  /**
   * Email address for important account notifications.
   */
  readonly email: string;
}

export interface CertbotDnsRoute53JobProps {
  /**
   * run the Job with defined schedule
   * @default - no shedule
   */
  readonly schedule?: events.Schedule;

  /**
   * The S3 bucket to store certificate.
   */
  readonly destinationBucket: s3.IBucket;

  /**
   * The HostZone on route53 to dns-01 challenge.
   */
  readonly zone: r53.IHostedZone;

  /**
   * certbot cmd options.
   */
  readonly certbotOptions: CertbotOptions;
}

export class CertbotDnsRoute53Job extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: CertbotDnsRoute53JobProps ) {
    super(scope, id);
    const certOptions = {
      EMAIL: props.certbotOptions.email,
      DOMAIN_NAME: props.certbotOptions.domainName,
    };
    const lambdaFun = new BashExecFunction(this, 'certbotDnsRoute53JobLambda', {
      script: path.join(__dirname, '../docker.d/entrypoint.sh'),
      dockerfile: path.join(__dirname, '../docker.d/Dockerfile'),
      timeout: cdk.Duration.minutes(5),
      environment: {
        BUCKET_NAME: props.destinationBucket.bucketName,
        ...certOptions,
      },
    });

    props.destinationBucket.grantReadWrite(lambdaFun.handler.role!);
    const route53PolicyJsonList = [{
      Effect: 'Allow',
      Action: [
        'route53:ListHostedZones',
        'route53:GetChange',
      ],
      Resource: [
        '*',
      ],
    },
    {
      Effect: 'Allow',
      Action: [
        'route53:ChangeResourceRecordSets',
      ],
      Resource: [
        `arn:aws:route53:::hostedzone/${props.zone.hostedZoneId}`,
      ],
    }];
    route53PolicyJsonList.forEach(
      e => {
        lambdaFun.handler.role!.addToPrincipalPolicy(iam.PolicyStatement.fromJson(e));
      },
    );


    if (props.schedule) {
      new events.Rule(this, 'ScheduleRule', {
        schedule: props.schedule,
        targets: [
          new target.LambdaFunction(lambdaFun.handler),
        ],
      });
    }
  }
}