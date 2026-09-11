import type { NextConfig } from 'next';

/**
 * 默认是完整的 Next 应用（后面接 Supabase、服务端路由要用）。
 * 只有 GitHub Pages 的预览构建才切成静态导出：NEXT_OUTPUT=export。
 */
const isStaticExport = process.env.NEXT_OUTPUT === 'export';

/** 项目页部署在 /<repo> 子路径下，本地开发留空。 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 开发态左下角的悬浮指示器会挡住底部 Tab，也会污染 e2e 截图
  devIndicators: false,
  ...(basePath ? { basePath } : {}),
  ...(isStaticExport
    ? {
        output: 'export' as const,
        // 导出成 /reading/index.html，避免 Pages 的无扩展名解析差异
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
