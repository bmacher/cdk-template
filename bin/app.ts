import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { MyStack } from '../lib/MyStack';

const app = new App();

new MyStack(app, 'my-stack');
