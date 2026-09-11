# IELTSBull 雅思牛 — 项目约定

雅思备考网站，结构参考 readmeow.top（考研英语站，已获授权），见 `docs/00-readmeow-brief.md`。

## 角色分工
- **统筹（Fable）**：需求、架构、任务拆分、代码审查。任务包在 `docs/tasks/`。
- **实现（Opus）**：只做当前任务包里写明的事。任务包里没写、又必须决定的事，**停下来把问题写进 `docs/tasks/QUESTIONS.md`**，不要自行猜测扩展范围。

## 技术栈（已定，不要更换）
- Next.js 15 App Router + TypeScript（strict）+ Tailwind CSS
- 数据：Supabase（Auth + Postgres），本地开发先用 `supabase start` 或 mock；题库内容用仓库内静态 JSON（`content/`）
- 包管理：pnpm。Node 22。
- 测试：Vitest（单元）+ Playwright（关键路径 e2e）
- 语言：界面默认简体中文，`lang="zh-CN"`

## 硬性规则
1. 真实路由，每个页面有可分享 URL（如 `/reading/cam18-t1-p1`）。
2. 考试作答模式默认关闭一切辅助（译文、词义提示），交卷后才开放。
3. 不做装饰性 3D、不引入 three.js。首页首屏资源 < 300KB。
4. 移动端优先，600–768px 平板宽度必须正常（原站在此宽度有 bug）。
5. 每个任务完成后：`pnpm lint && pnpm typecheck && pnpm test` 全绿再提交。
6. 提交信息用英文，格式 `feat(reading): ...` / `fix(ui): ...`。
7. 品牌：吉祥物是黄色小牛（`public/brand/`），站名「雅思牛 IELTSBull」，主色取自小牛的黄色 `#F5C542`，深色文字 `#2B2B2B`。

## 内容版权
剑桥雅思真题是版权内容。仓库里只放**自制/改写的示例题**用于开发，正式题库走「用户自行导入」路径（见简报第 6 节）。
