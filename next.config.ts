import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    qualities: [75],
    // WebP only: sources are already WebP, and on-demand AVIF encoding adds
    // ~1s to each image's first request.
    formats: ['image/webp'],
    // Static imports are content-hashed, so optimized results can live long.
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
