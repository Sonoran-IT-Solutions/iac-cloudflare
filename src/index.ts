import * as pulumi from '@pulumi/pulumi';
import { account } from './account';
import { zone } from './zone';

// Setup Config
const config = new pulumi.Config();
export const domain = config.require('domain');
export const accountID = account.id;
export const zoneID = zone.id;
