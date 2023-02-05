/** @type {import('next').NextConfig} */
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    withPlugins([
      [
        optimizedImages,
        {
          /* config for next-optimized-images */
          target: 'serverless',
        },
      ],

      // your other plugins here
    ]);

    return config;
  },
};

module.exports = nextConfig;
