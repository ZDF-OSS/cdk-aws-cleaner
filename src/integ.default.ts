import * as cdk from 'aws-cdk-lib';
import { CleanupStacks } from './integ.cleanup';

const app = new cdk.App();

new CleanupStacks(app, 'CleanupStacks', {});
