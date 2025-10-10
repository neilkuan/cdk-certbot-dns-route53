import * as fs from 'fs';
import * as path from 'path';
import { CfnOutput, Duration } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';

export interface BashExecFunctionProps {
  /**
   * The path of the shell script to be executed.
   */
  readonly script: string;

  /**
   * The path of your custom dockerfile.
   */
  readonly dockerfile?: string;

  /**
   * Lambda environment variables.
   */
  readonly environment?: { [key: string]: string };

  /**
   * The function execution time (in seconds) after which Lambda terminates the function.
   * Because the execution time affects cost, set this value based on the function's expected execution time.
   * @default - Duration.seconds(60)
   * */
  readonly timeout?: Duration;

  /**
   * Custom lambda execution role.
   *
   * @default - auto generated role.
   */
  readonly role?: iam.IRole;

  /**
   * Custom lambda Image Architecture.
   *
   * @default - lambda.Architecture.X86_64
   */
  readonly architecture?: lambda.Architecture;
}

export class BashExecFunction extends Construct {
  readonly handler: lambda.DockerImageFunction;
  constructor(scope: Construct, id: string, props: BashExecFunctionProps) {
    super(scope, id);

    const dockerDirPath = path.join(__dirname, '../docker.d');
    const scriptPath = props.script;

    // copy the user script to the docker.d directory as main.sh so we can bundle it up into a new docker image
    const mainFile = path.join(dockerDirPath, '/main.sh');
    fs.copyFileSync(scriptPath, mainFile);

    this.handler = new lambda.DockerImageFunction(this, 'BashExecFunction', {
      code: lambda.DockerImageCode.fromImageAsset(dockerDirPath, {
      }),
      timeout: props.timeout ?? Duration.seconds(60),
      logGroup: new logs.LogGroup(this, 'LogGroup', {
        retention: logs.RetentionDays.ONE_DAY,
      }),
      environment: props.environment,
      role: props.role,
      architecture: props.architecture,
      memorySize: 1024,
    });
    new CfnOutput(this, 'LogGroupOutput', { value: this.handler.logGroup.logGroupName });
  }
}