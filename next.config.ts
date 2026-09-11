import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 开发态左下角的悬浮指示器会挡住底部 Tab，也会污染 e2e 截图
  devIndicators: false,
};

export default nextConfig;
