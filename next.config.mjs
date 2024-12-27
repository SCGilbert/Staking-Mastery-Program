/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const basePath = isProd ? '/Staking-Mastery-Program' : '';
const assetPrefix = isProd ? '/Staking-Mastery-Program/' : '';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix,
  output: 'export',
};

export default nextConfig;
