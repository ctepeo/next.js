import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { appConfig } from '@/config/app.config';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: appConfig.images,
};

const withNextIntl = createNextIntlPlugin('./src/lib/i18n.lib.ts');
export default withNextIntl(nextConfig);
