import { TAppConfig } from '@/types/config.types';

export const appConfig: TAppConfig = {
  appName: 'Next.js App',
  defaultLocale: 'en',
  supportedLocales: ['en', 'de', 'by'],
  defaultTheme: 'light',
  supportedThemes: ['light', 'dark'],
  //  next.js config
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

//  TS
export type TAppLocales = 'en' | 'de' | 'by';
export type TAppThemes = 'light' | 'dark';
