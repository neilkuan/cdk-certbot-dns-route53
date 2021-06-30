const { AwsCdkConstructLibrary, DependenciesUpgradeMechanism } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Neil Kuan',
  authorAddress: 'guan840912@gmail.com',
  cdkVersion: '1.110.1',
  defaultReleaseBranch: 'main',
  name: 'cdk-certbot-dns-route53',
  repositoryUrl: 'https://github.com/neilkuan/cdk-certbot-dns-route53.git',
  description: 'Create Cron Job Via Lambda, to update certificat and put it to S3 Bucket',
  keywords: ['aws', 'cdk', 'certbot'],
  cdkDependencies: [
    '@aws-cdk/aws-lambda',
    '@aws-cdk/core',
    '@aws-cdk/aws-iam',
    '@aws-cdk/aws-logs',
    '@aws-cdk/aws-s3',
    '@aws-cdk/aws-route53',
    '@aws-cdk/aws-events',
    '@aws-cdk/aws-events-targets',
  ],
  deps: [
    'cdk-lambda-bash',
  ],
  peerDeps: [
    'cdk-lambda-bash',
  ],
  depsUpgrade: DependenciesUpgradeMechanism.githubWorkflow({
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      secret: 'PROJEN_GITHUB_TOKEN',
    },
  }),
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['neilkuan'],
  },
  publishToPypi: {
    distName: 'cdk-certbot-dns-route53',
    module: 'cdk_certbot_dns_route53',
  },
  catalog: {
    announce: false,
    twitter: 'neilkuan',
  },
  gitignore: [
    'cdk.context.json',
    'yarn-error.log',
    'venv',
    'cdk.out',
  ],
  npmignore: [
    'cdk.context.json',
    'yarn-error.log',
    'venv',
    'cdk.out',
    'images',
  ],
});
project.synth();