const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Neil Kuan',
  authorAddress: 'guan840912@gmail.com',
  cdkVersion: '2.219.0',
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
    exclude: ['mock-fs'],
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
    'assets/venv/**',
    'assets/layers/**',
    'venv/**',
  ],
  npmignore: [
    'cdk.context.json',
    'yarn-error.log',
    'cdk.out',
    'images',
    'assets/venv/**',
    'assets/layers/**',
  ],
  workflowNodeVersion: '^20',
  typescriptVersion: '^5',
  jsiiVersion: '5.7.x',
  deps: [
    '@aws-cdk/aws-lambda-python-alpha@2.219.0-alpha.0',
  ],
  peerDependencies: [
    '@aws-cdk/aws-lambda-python-alpha@2.219.0-alpha.0',
  ],
});
project.synth();
