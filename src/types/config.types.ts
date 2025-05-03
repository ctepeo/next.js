import { TAppLocales, TAppThemes } from '@/config/app.config';

export type TAppLocale = TAppLocales[number];
export type TAppTheme = TAppThemes[number];

export interface TAppConfig {
  appName: string;
  defaultLocale: TAppLocale;
  supportedLocales: TAppLocale[];
  defaultTheme: TAppTheme;
  supportedThemes: TAppTheme[];
}
