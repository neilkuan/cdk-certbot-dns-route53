const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Neil Kuan',
  authorAddress: 'guan840912@gmail.com',
  cdkVersion: '1.134.0',
  /**
   * we default release the main branch(cdkv2) with major version 2.
   */
  majorVersion: 2,
  defaultReleaseBranch: 'main',
  /**
    * we also release the cdkv1 branch with major version 1.
    */
  releaseBranches: {
    cdkv1: { npmDistTag: 'cdkv1', majorVersion: 1 },
  },
  defaultReleaseBranch: 'main',
  name: 'cdk-certbot-dns-route53',
  repositoryUrl: 'https://github.com/neilkuan/cdk-certbot-dns-route53.git',
  description: 'Create Cron Job Via Lambda, to update certificate and put it to S3 Bucket.',
  keywords: ['aws', 'cdk', 'certbot'],
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['neilkuan'],
  },
  publishToPypi: {
    distName: 'cdk-certbot-dns-route53',
    module: 'cdk_certbot_dns_route53',
  },
  catalog: {
    announce: true,
    twitter: 'neilkuan',
  },
  gitignore: [
    'cdk.context.json',
    'yarn-error.log',
    'cdk.out',
  ],
  npmignore: [
    'cdk.context.json',
    'yarn-error.log',
    'cdk.out',
    'images',
  ],
  deps: [
    '@aws-cdk/core@^1.134.0',
    '@aws-cdk/aws-iam@^1.134.0',
    '@aws-cdk/aws-logs@^1.134.0',
    '@aws-cdk/aws-s3@^1.134.0',
    '@aws-cdk/aws-route53@^1.134.0',
    '@aws-cdk/aws-events@^1.134.0',
    '@aws-cdk/aws-lambda@^1.134.0',
    '@aws-cdk/aws-events-targets@^1.134.0',
  ],
  peerDeps: [
    '@aws-cdk/aws-iam@^1.134.0',
    '@aws-cdk/aws-s3@^1.134.0',
    '@aws-cdk/aws-route53@^1.134.0',
    '@aws-cdk/core@^1.134.0',
    '@aws-cdk/aws-lambda@^1.134.0',
    '@aws-cdk/aws-events@^1.134.0',
  ],
  workflowNodeVersion: '^14.17.0',
  typescriptVersion: '3.9.10',
});
project.package.addField('resolutions', {
  got: '12.3.0',
});
project.synth();
