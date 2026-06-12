import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Security fix: hides that you are using Next.js
  compress: true,        // Performance fix: compresses assets automatically
  images: {
    formats: ['image/avif', 'image/webp'], // Forces modern high-compression image formats
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Generates a tight 256px option for mobile
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Supports both mobile breakpoints and full desktop resolutions
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
