import { TAppConfig } from '@/types/config.types';

export const appConfig: TAppConfig = {
  appName: 'Next.js App',
  defaultLocale: 'en',
  supportedLocales: ['en', 'de', 'by'],
  defaultTheme: 'light',
  supportedThemes: ['light', 'dark'],
  // Add any other configuration options you need
};

//  TS
export type TAppLocales = 'en' | 'de' | 'by';
export type TAppThemes = 'light' | 'dark';
