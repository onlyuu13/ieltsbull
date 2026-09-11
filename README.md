# 雅思牛 IELTSBull

在真题里学雅思：精读 → 背词 → 作答 → 解析 → 错题/收藏 → 统计/计划。

结构参考 readmeow.top（考研英语站，已获授权），拆解见 `docs/00-readmeow-brief.md`，
总体方案见 `docs/01-plan.md`，开发约定见 `CLAUDE.md`。

## 环境要求

- Node 22+
- pnpm 10+

## 常用命令

```bash
pnpm install
pnpm dev          # 开发服务器 http://localhost:3000
pnpm build        # 生产构建
pnpm lint         # ESLint
pnpm typecheck    # tsc --noEmit
pnpm test         # Vitest 单元测试
pnpm test:e2e     # Playwright 端到端测试
```

`pnpm test:e2e` 会自行拉起 dev server（端口 3100）。若运行环境已预装 Chromium
而不想让 Playwright 下载浏览器，设置可执行文件路径即可：

```bash
PLAYWRIGHT_CHROMIUM_PATH=/opt/pw-browsers/chromium pnpm test:e2e
```

## 目录

```
src/app/          路由与页面（App Router）
src/components/   UI 组件
src/lib/          纯逻辑，优先在这里写可测试的函数
tests/            Vitest 单元测试
e2e/              Playwright 端到端测试
docs/tasks/       任务包与待裁决问题
public/brand/     品牌资源
```

## 当前进度

T01 已完成：脚手架、全局壳、主题切换、首页。后端、背词、阅读内容尚未接入。
