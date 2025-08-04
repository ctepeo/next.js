import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { appConfig } from '@/configs/app.config';
import { TAppLocale } from '@/types/config.types';
import { NemoEvent } from '@rescale/nemo';

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): TAppLocale {
  return appConfig.defaultLocale; // Default locale
}

// export function i18nMiddleware(middleware: CustomMiddleware) {
//   return async (request: NextRequest, event: NextFetchEvent, response: NextResponse) => {
//     // Check if there is any supported locale in the pathname
//     const { pathname } = request.nextUrl;
//     const pathnameHasLocale = appConfig.supportedLocales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
//
//     if (pathnameHasLocale) return;
//
//     // Redirect if there is no locale
//     const locale = getLocale(request);
//     request.nextUrl.pathname = `/${locale}${pathname}`;
//     // e.g. incoming request is /products
//     // The new URL is now /en-US/products
//     return NextResponse.redirect(request.nextUrl);
//   };
// }

export const i18nMiddleware = async (request: NextRequest, _event: NemoEvent) => {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = appConfig.supportedLocales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
};
