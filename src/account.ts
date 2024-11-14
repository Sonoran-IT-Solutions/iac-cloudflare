import { Account } from '@pulumi/cloudflare/account';

export const account = new Account(
  'sitsAccount',
  { name: 'Sonoran IT Solutions, LLC', enforceTwofactor: true },
  {
    protect: true,
  }
);
