import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // The link-preview image routes read the brand fonts from disk.
  outputFileTracingIncludes: {
    '/*': ['./src/app/fonts/**/*'],
  },
};

export default nextConfig;
