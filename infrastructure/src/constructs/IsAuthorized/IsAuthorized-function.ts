// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for IsAuthorizedFunction
 */
export interface IsAuthorizedFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/constructs/IsAuthorized/IsAuthorized.
 */
export class IsAuthorizedFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: IsAuthorizedFunctionProps) {
    super(scope, id, {
      description: 'src/constructs/IsAuthorized/IsAuthorized.lambda.ts',
      ...props,
      runtime: new lambda.Runtime('nodejs14.x', lambda.RuntimeFamily.NODEJS),
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../../assets/constructs/IsAuthorized/IsAuthorized.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}