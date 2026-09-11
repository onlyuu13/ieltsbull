# T01 — 项目脚手架 + 全局壳 + 首页

## 目标
跑起来一个可部署的 Next.js 站，带全局布局、主题切换、首页，**不接后端**。本任务不做登录、不做背词。

## 交付清单
1. `pnpm create next-app` 初始化：Next.js 15、TypeScript strict、Tailwind、App Router、`src/` 目录、ESLint。
2. 加 Vitest + Playwright，各放一个能跑的最小测试。
3. `package.json` 脚本：`dev` `build` `lint` `typecheck` `test` `test:e2e`。
4. 全局布局 `src/app/layout.tsx`：
   - 顶栏：左 Logo（小牛 + 「雅思牛」）| 中 面包屑占位 | 右 「距考试 N 天」占位（先固定显示 `--`）| 明暗切换 | 「登录」按钮（先链到 `/login` 空页）
   - 底部悬浮 Tab（仅移动端显示，5 个）：首页 / 背单词 / 阅读 / 错题 / 统计。每个对应路由先建空页，显示「建设中」。
   - 桌面端顶栏即导航，无底部 Tab。
5. 首页 `/`：
   - 一句 slogan + 主 CTA「开始今天的任务」
   - 四科入口卡片：听力 / 阅读 / 写作 / 口语（写作、口语、听力卡片显示「即将上线」标签，链接禁用）
   - 「最近学习」卡片占位
6. 主题：`class` 策略 dark mode，用户选择存 localStorage，无闪烁（inline script 在 `<head>` 设 class）。
7. 品牌色写进 `tailwind.config.ts`：`bull: { yellow: '#F5C542', ink: '#2B2B2B' }`。
8. `public/brand/` 里如果没有小牛图片，先用一个内联 SVG 圆形占位，**不要**去网上找图。
9. 响应式验收：375px、680px、1280px 三个宽度下顶栏与首页不溢出、不竖排。Playwright 测这三个宽度截图并断言无横向滚动条。

## 不要做
- 不接 Supabase，不写 API
- 不加动画库、不加 three.js
- 不做背词/阅读的任何页面内容

## 验收
`pnpm lint && pnpm typecheck && pnpm test && pnpm build` 全绿；`pnpm test:e2e` 通过三宽度检查。
提交到分支 `claude/nifty-lamport-vbqz8j`，提交信息 `feat: scaffold app shell and home page (T01)`。
