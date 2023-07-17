import { awscdk } from 'projen';

const PROJECT_NAME = 'cdk-aws-cleaner';
const PROJECT_DESCRIPTION =
  'The construct cleans up the stack it is integrated with after a defined time period has passed.';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'ZeroDotFive',
  authorAddress: 'ayoub.umoru@zerodotfive.com',
  cdkVersion: '2.84.0',
  majorVersion: 1,
  defaultReleaseBranch: 'main',
  authorOrganization: true,
  jsiiVersion: '~5.0.0',
  name: PROJECT_NAME,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/ZDF-OSS/cdk-aws-cleaner.git',
  homepage: 'https://zerodotfive.com',
  description: PROJECT_DESCRIPTION,
  keywords: ['aws', 'cdk', 'awscdk', 'aws-cdk', 'cleanup', 'cost'],
  gitignore: [
    'cdk.out/',
  ],
});

project.addBundledDeps('@types/aws-lambda');
project.addBundledDeps('@aws-cdk/aws-lambda-python-alpha');
project.addBundledDeps('aws-sdk');
project.synth();
