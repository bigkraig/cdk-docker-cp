#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkDockerCpStack } from '../lib/cdk-docker-cp-stack';

const app = new cdk.App();
new CdkDockerCpStack(app, 'CdkDockerCpStack');
