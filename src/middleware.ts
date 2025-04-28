import { NextResponse, NextRequest } from 'next/server';
import { appConfig } from '@/config/app.config';
import { TAppLocale } from '@/types/config.types';

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): TAppLocale {
  console.log({ request });
  return appConfig.defaultLocale; // Default locale
}

export function middleware(request: NextRequest) {
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
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    //'/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
  ],
};
