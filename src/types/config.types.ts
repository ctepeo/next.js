export type TAppLocale = 'en' | 'de' | 'by';
export type TAppTheme = 'light' | 'dark';

export interface TAppConfig {
  appName: string;
  defaultLocale: TAppLocale;
  supportedLocales: TAppLocale[];
  defaultTheme: TAppTheme;
  supportedThemes: TAppTheme[];
}
