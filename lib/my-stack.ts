import { App, Stack, StackProps } from '@aws-cdk/core';
import { Code, Function as LambdaFn, Runtime } from '@aws-cdk/aws-lambda';
import { resolve } from 'path';

export class MyStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new LambdaFn(this, 'MyLambda', {
      runtime: Runtime.NODEJS_12_X,
      handler: 'index.handler',
      code: Code.fromAsset(resolve(__dirname, '../dist/lambda/my-lambda')),
    });
  }
}
