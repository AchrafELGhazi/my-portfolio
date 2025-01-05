/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  eslint: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // analyzerMode: 'static',
  // analyzerPort: 8888,
};

module.exports = withBundleAnalyzer(nextConfig);
