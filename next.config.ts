import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ['next-mdx-remote'],
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: ''
      }
    ]
  }
  // Configure `pageExtensions` to include markdown and MDX files
  // Optionally, add any other Next.js config below
};

// Merge MDX config with Next.js config
export default nextConfig;
