import * as cloudflare from '@pulumi/cloudflare';
import { account } from './account';

export const zone = new cloudflare.Zone(
  'zone',
  {
    accountId: account.id,
    plan: 'free',
    type: 'full',
    zone: 'sonoranit.technology',
  },
  {
    protect: true,
    parent: account,
  }
);
