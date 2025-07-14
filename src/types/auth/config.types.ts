import { NextAuthConfig } from 'next-auth';

export interface IAuthConfig extends NextAuthConfig {
  default: 'private' | 'public';
  excluded: string[];
}
