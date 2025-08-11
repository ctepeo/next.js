import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { appConfig } from '@configs/app.config.ts';
//import { AuthSecurityHeaders } from '@configs/auth.config';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: appConfig.images,
  // headers: async () => {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: AuthSecurityHeaders,
  //     },
  //   ];
  // },
};

const withNextIntl = createNextIntlPlugin('./src/libs/i18n.lib.ts');
export default withNextIntl(nextConfig);
