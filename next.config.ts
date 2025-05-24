import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { appConfig } from '@/configs/app.config';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: appConfig.images,
};

const withNextIntl = createNextIntlPlugin('./src/libs/i18n.lib.ts');
export default withNextIntl(nextConfig);
