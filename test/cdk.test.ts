import { App, Duration, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AwsCleaner } from '../src';

const mockApp = new App();
const stack = new Stack(mockApp);
new AwsCleaner(stack, 'cleaner', {
  cleanup: Duration.minutes(5),
});

const template = Template.fromStack(stack);

test('Should contain a Lambda ressource.', () => {
  template.hasResourceProperties('AWS::Lambda::Function', {
    Environment: {
      Variables: { STACK_NAME: 'Default' },
    },
  });


});