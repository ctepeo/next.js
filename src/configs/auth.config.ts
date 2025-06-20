import { AuthConfig } from '@/types/auth/config.types';

export const authConfig: AuthConfig = {
  default: 'private',
  excluded: ['/api/auth/callback/credentials', '/api/auth/signin/credentials'],
};
