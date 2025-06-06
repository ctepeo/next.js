import { TAppLocales, TAppThemes } from '@/configs/app.config';
import { ImageConfigComplete } from 'next/dist/shared/lib/image-config';

export type TAppLocale = TAppLocales[number];
export type TAppTheme = TAppThemes[number];

export interface TAppConfig {
  appName: string;
  defaultLocale: TAppLocale;
  supportedLocales: TAppLocale[];
  defaultTheme: TAppTheme;
  supportedThemes: TAppTheme[];
  // next.js configs
  images: Partial<ImageConfigComplete>;
}

export interface TFontConfig {
  name: string;
  variable: string;
  subsets: string[];
}
