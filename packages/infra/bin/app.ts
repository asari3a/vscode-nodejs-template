import * as cdk from 'aws-cdk-lib';

import { MyLambdaStack } from '../lib/lambda-stack';

const app = new cdk.App();

new MyLambdaStack(app, 'my-lambda');
