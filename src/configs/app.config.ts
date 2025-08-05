import { TAppConfig } from '@/types/config.types';

//  this import breaks the app for some reason
//  import { i18nConfig } from './i18n.config.ts';

export const appConfig: TAppConfig = {
  appName: 'Next.js App',
  // duplicated in i18n.config.ts
  defaultLocale: 'en',
  supportedLocales: ['en', 'de', 'by'],
  defaultTheme: 'light',
  supportedThemes: ['light', 'dark'],
  //  next.js configs
  images: {
    minimumCacheTTL: 360, // 10 minutes
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.domain.com',
        pathname: '/**',
      },
    ],
  },
  // Add any other configuration options you need
};
