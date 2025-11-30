import { awscdk } from 'projen';

const PROJECT_NAME = 'cdk-aws-cleaner';
const PROJECT_DESCRIPTION =
  'The construct cleans up the stack it is used in and after a defined time period has passed.';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'ZeroDotFive',
  authorAddress: 'ayoub.umoru@zerodotfive.com',
  cdkVersion: '2.230.0',
  majorVersion: 1,
  constructsVersion: '10.4.3',
  defaultReleaseBranch: 'main',
  authorOrganization: true,
  jsiiVersion: '~5.9.0',
  name: PROJECT_NAME,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/ZDF-OSS/cdk-aws-cleaner.git',
  homepage: 'https://zerodotfive.com',
  description: PROJECT_DESCRIPTION,
  keywords: [
    'aws',
    'cdk',
    'awscdk',
    'aws-cdk',
    'cleanup',
    'cost',
    'stack',
    'stack-remover',
    'cloudformation',
  ],
  gitignore: ['cdk.out/'],
});
project.synth();
