import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import createMiddleware from 'next-intl/middleware';
import { getRequestConfig, GetRequestConfigParams, RequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { appConfig } from '@/configs/app.config';
import { TAppLocale } from '@/types/config.types';
import { LanguageStrings, LanguageStringsCombined } from '@/types/i18n.types';

export const i18nRouting = defineRouting({
  locales: appConfig.supportedLocales,
  defaultLocale: appConfig.defaultLocale,
});
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(i18nRouting);
export const i18nMiddleware = createMiddleware(i18nRouting);

const getMessages: (locale: string) => Promise<LanguageStrings> = async (locale: TAppLocale) => {
  try {
    const messages: LanguageStringsCombined = await import(`@/i18n/${locale}.lang`);
    return messages.messages || {};
  } catch (error) {
    console.error(`Failed to load messages for locale "${locale}":`, error);
    return {};
  }
};

const buildRequestConfig: (requestParams: GetRequestConfigParams) => Promise<RequestConfig> = async (requestParams: GetRequestConfigParams) => {
  const { requestLocale } = requestParams;
  if (!requestLocale) {
    throw new Error('Request locale is not provided.');
  }
  const requested: string = (await requestLocale) || i18nRouting.defaultLocale;
  const locale: TAppLocale = hasLocale(i18nRouting.locales, requested) ? requested : i18nRouting.defaultLocale;

  const messages: LanguageStrings = await getMessages(locale);
  if (!messages) {
    throw new Error(`Messages for locale "${locale}" not found.`);
  }

  return {
    locale,
    messages,
  } as RequestConfig;
};

export default buildRequestConfig;
