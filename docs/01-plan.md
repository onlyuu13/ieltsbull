# 雅思牛 IELTSBull — 总体方案（v0.1，2026-09-11）

## 1. 目标
把 readmeow.top 的「在真题里学」闭环搬到雅思：
精读 → 背词 → 作答 → 解析 → 错题/收藏 → 统计/计划，并新增听力、写作、口语。

## 2. 技术决策（及理由）
| 决策 | 选择 | 理由 |
|---|---|---|
| 框架 | Next.js 15 App Router | 真实路由、SSR、部署到 Vercel 零配置；解决原站「无路由、刷新回首页」问题 |
| 样式 | Tailwind | 快、移动端优先、暗色主题用 `dark:` 前缀即可 |
| 后端 | Supabase | Auth + Postgres + RLS 一体，省一个后端；激活码用一张 `activation_codes` 表 |
| 题库 | 静态 JSON in `content/` | 版本可控、可 diff、构建期校验 schema |
| 记忆算法 | FSRS（`ts-fsrs`） | 简报第 4 节第 6 条：原站固定间隔太弱 |
| AI 批改 | 后置到 M4 | 先把无 AI 的闭环跑通 |

## 3. 里程碑
- **M1 壳 + 账号 + 设置 + 倒计时 + 词书/背词**（本阶段）
- M2 Reading 精读 + 作答（8 种题型控件）+ Band 换算 + 解析/错题本
- M3 Listening 音频 + transcript + 精听
- M4 Writing 模板库 + 限时写作 + AI 批改（付费点）
- M5 Speaking 题库 + 录音 + AI 评分
- M6 统计 + 由考试日期自动生成计划

## 4. 路由规划
```
/                     首页（今日任务、四科入口、最近学习）
/login /register      账号
/activate             激活码
/settings             学习设置
/vocab                背单词（今日队列）
/vocab/browse         词库浏览
/reading              精读目录
/reading/[passageId]  精读
/exam/reading/[testId]      作答
/exam/reading/[testId]/result 解析
/listening ...        M3
/writing ...          M4
/speaking ...         M5
/mistakes  /favorites /stats /plan
```

## 5. 数据模型
以简报第 3 节为基础，雅思化改动：
- `Passage` 增加 `module: academic|general`, `part: 1|2|3`
- `Question.type` 扩展为 8 种雅思题型；`answer` 允许字符串/数组
- `Attempt` 增加 `band`（由 `rawScore` 换算）
- `User` 增加 `examDate`, `targetBand`

## 6. 任务包流程
1. 统筹写 `docs/tasks/Txx-*.md`
2. 实现按任务包做，疑问写 `docs/tasks/QUESTIONS.md`
3. 统筹审查 PR，回答疑问，写下一包
