import { createNEMO, GlobalMiddlewareConfig } from '@rescale/nemo';
import { NextMiddleware } from 'next/server';
import { i18nMiddleware } from '@/middlewares/i18n.middleware';
import { AuthMiddleware } from '@/middlewares/auth.middleware';

const globalMiddlewares: GlobalMiddlewareConfig = {
  before: i18nMiddleware,
  after: () => {
    console.log('Global middleware after all routes');
  },
};
const middlewares = {
  // OR: [authMiddleware, ...]
  '/:locale/': [AuthMiddleware], // OR: [authMiddleware, ...]
  // '/(team|t)/:slug/:path*': team, // OR: [team, ...]
};
export const middleware: NextMiddleware = createNEMO(middlewares, globalMiddlewares);
export const config = {
  matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
};
