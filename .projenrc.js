const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Neil Kuan',
  authorAddress: 'guan840912@gmail.com',
  cdkVersion: '1.125.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-certbot-dns-route53',
  repositoryUrl: 'https://github.com/neilkuan/cdk-certbot-dns-route53.git',
  description: 'Create Cron Job Via Lambda, to update certificate and put it to S3 Bucket.',
  keywords: ['aws', 'cdk', 'certbot'],
  cdkDependencies: [
    '@aws-cdk/aws-lambda',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-logs',
    '@aws-cdk/aws-s3',
    '@aws-cdk/core',
    '@aws-cdk/aws-route53',
    '@aws-cdk/aws-events',
    '@aws-cdk/aws-events-targets',
  ],
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      secret: 'PROJEN_GITHUB_TOKEN',
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
});
project.synth();
