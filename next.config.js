/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // 👈 This enables static export mode properly
};

module.exports = nextConfig;

