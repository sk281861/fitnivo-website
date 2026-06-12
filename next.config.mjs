import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Security fix: hides that you are using Next.js
  compress: true,        // Performance fix: compresses assets automatically
  images: {
    formats: ['image/avif', 'image/webp'], // Forces modern high-compression image formats
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
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
