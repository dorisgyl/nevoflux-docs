import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  // Static export cannot use the Next.js image optimizer.
  images: { unoptimized: true },
};

export default withMDX(config);
