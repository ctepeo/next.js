import { auth } from '@/libs/auth.lib';
import { NextRequest, NextResponse } from 'next/server';
import { NemoEvent } from '@rescale/nemo';

const protectedRoutes = ['en/protected'];

export const AuthMiddleware = async (request: NextRequest, _event: NemoEvent) => {
  const session = await auth();
  const pathname = request.nextUrl.pathname;
  console.log({
    pathname,
  });
  if (protectedRoutes.includes(pathname) && !session) {
    return NextResponse.redirect(new URL('/', request.url));
  }
};
