import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import createMiddleware from 'next-intl/middleware';
import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { appConfig } from '@/configs/app.config';
import { TAppLocale } from '@/types/config.types';

export const i18nRouting = defineRouting({
  locales: appConfig.supportedLocales,
  defaultLocale: appConfig.defaultLocale,
});
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(i18nRouting);
export const i18nMiddleware = createMiddleware(i18nRouting);
export default getRequestConfig(async ({ requestLocale }) => {
  const requested: string = (await requestLocale) || i18nRouting.defaultLocale;
  const locale: TAppLocale = hasLocale(i18nRouting.locales, requested) ? requested : i18nRouting.defaultLocale;

  return {
    locale,
    messages: {
      common: {
        hello: 'Hello',
      },
    }, //(await import(`../../messages/${locale}.json`)).default,
  };
});
