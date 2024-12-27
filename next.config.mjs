/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/Staking-Mastery-Program/' : '',
  basePath: isProd ? '/Staking-Mastery-Program' : '',
  output: 'export'
};

export default nextConfig;
