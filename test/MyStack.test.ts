import '@aws-cdk/assert/jest';
import { App } from '@aws-cdk/core';
import { MyStack } from '../lib/MyStack';

describe('MyStack', () => {
  it('should have a lambda', () => {
    const app = new App();

    expect(new MyStack(app, 'MyStack')).toHaveResource('AWS::Lambda::Function');
  });
});
