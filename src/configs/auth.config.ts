import { IAuthConfig } from '@/types/auth/config.types';
import { TAppHeader } from '@/types/request.types';

export const AuthSecurityHeaders: TAppHeader[] = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self'",
  },
];
