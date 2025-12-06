/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true, // ถ้ารูปมีปัญหา
    },
    eslint: {
      ignoreDuringBuilds: true, // ข้าม eslint error
    },
    typescript: {
      ignoreBuildErrors: true, // ถ้าใช้ .jsx แทน .tsx
    },
  }
  
  module.exports = nextConfig