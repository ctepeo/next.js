import { TAppLocale } from '@/types/config.types';

export interface TAppRequestParams {
  locale: TAppLocale;
  theme: string;
}

export interface TAppHeader {
  key: string;
  value: string;
}
