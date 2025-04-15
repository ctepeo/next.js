import { NextConfig } from 'next';

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

export default nextConfig;
