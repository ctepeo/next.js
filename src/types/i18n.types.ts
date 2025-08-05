import { FC } from 'react';

export type LanguageStrings = Record<string, string | Record<string, unknown>>;
export interface LanguageStringsCombined {
  messages: LanguageStrings;
}

export type TAppLocales = 'en' | 'de' | 'by';

export interface Ti18nLocaleData {
  title: string;
  icon: FC;
  locale: TAppLocales;
}
