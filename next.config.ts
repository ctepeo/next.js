import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    minimumCacheTTL: 360, // 10 minutes
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.domain.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin('./src/lib/i18n.lib.ts');
export default withNextIntl(nextConfig);
