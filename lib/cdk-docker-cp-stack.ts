import * as cdk from '@aws-cdk/core';
import { tmpdir } from "os";

export class CdkDockerCpStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const image = cdk.BundlingDockerImage.fromAsset(`${__dirname}/../image`);

    image.cp('/hello.txt', `${tmpdir()}/hello.txt`);
  }
}
