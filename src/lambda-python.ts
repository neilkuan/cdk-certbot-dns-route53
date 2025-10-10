import * as path from 'path';
import * as lambdaPython from '@aws-cdk/aws-lambda-python-alpha';
import { CfnOutput, Duration } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';

export interface LambdaFunctionProps {
  readonly timeout: Duration;
  readonly environment?: { [key: string]: string };
  readonly role?: iam.IRole;
  readonly architecture: lambda.Architecture;
}


export class LambdaPythonFunction extends Construct {
  readonly handler: lambdaPython.PythonFunction;
  constructor(scope: Construct, id: string, props: LambdaFunctionProps) {
    super(scope, id);
    this.handler = new lambdaPython.PythonFunction(this, 'PythonFunction', {
      entry: path.join(__dirname, '../assets/'),
      handler: 'handler',
      index: 'main.py',
      runtime: lambda.Runtime.PYTHON_3_12,
      timeout: props.timeout ?? Duration.seconds(60),
      logGroup: new logs.LogGroup(this, 'LogGroup', {
        retention: logs.RetentionDays.ONE_DAY,
      }),
      environment: props.environment,
      role: props.role,
      architecture: props.architecture,
      memorySize: 1024,
      bundling: {
        platform: props.architecture.dockerPlatform,
      },
    });
    new CfnOutput(this, 'LogGroupOutput', { value: this.handler.logGroup.logGroupName });
  }
}