/** /writing 页数据：AI Insights（ming-h.github.io/ai-insights）的策展入口 */

const BASE = "https://ming-h.github.io/ai-insights";

export interface Post {
  title: string;
  date: string;
  desc: string;
  href: string;
  tag: string;
}

export const featuredPosts: Post[] = [
  {
    title: "深度拆解 Claude Code：五层架构如何驱动 AI 自主编程",
    date: "2026-03",
    desc: "从 CLI 到 Agent 运行时的分层解剖，工程视角看 AI 编程工具的内核。",
    href: `${BASE}/blog/claude-code-architecture/`,
    tag: "深度",
  },
  {
    title: "AI 时代的新资产：为什么你的 Skills 需要工程化",
    date: "2026-03",
    desc: "技能即资产：版本、测试、复用——Skills 是个人能力的可复利形态。",
    href: `${BASE}/blog/skills-engineering/`,
    tag: "方法论",
  },
  {
    title: "1 个模式让项目自动迭代：AutoResearch + Vibe Coding 10 倍效率",
    date: "2026-03",
    desc: "把研究-开发循环交给 Agent 编排，人只保留判断。",
    href: `${BASE}/blog/autoresearch-vibe-coding/`,
    tag: "实战",
  },
  {
    title: "Vibe Coding 实战指南：从玄学到工程化",
    date: "2026-03",
    desc: "把「氛围编程」变成可交付流程：上下文、验收、回归一个不少。",
    href: `${BASE}/blog/vibe-coding-guide/`,
    tag: "实战",
  },
  {
    title: "Claude Code 并行指南：子代理与代理团队的 7 个选择标准",
    date: "2026-03",
    desc: "什么时候单代理、什么时候 fan-out——并行的决策树。",
    href: `${BASE}/blog/claude-code-parallel-guide/`,
    tag: "工程",
  },
  {
    title: "我用 5029 行 Markdown 复活了诸葛亮",
    date: "2026-04",
    desc: "用结构化知识库 + Prompt 约束复活一个「人」——月老 skill 的同款思路。",
    href: `${BASE}/blog/cyber-zhugeliang/`,
    tag: "有趣",
  },
  {
    title: "造 Claude 的人自己怎么用 Claude？Boris Cherny 的 10 条实战秘诀",
    date: "2026-03",
    desc: "一线译介：Claude Code 作者的工作流细节。",
    href: `${BASE}/blog/boris-claude-tips/`,
    tag: "译介",
  },
  {
    title: "AI Agent 高效创建全流程：5 步构建你的第一个智能体",
    date: "2026-03",
    desc: "新手友好的 Agent 构建路径图。",
    href: `${BASE}/blog/ai-agent-workflow/`,
    tag: "入门",
  },
];

export interface Series {
  name: string;
  count: string;
  desc: string;
  href: string;
}

export const seriesList: Series[] = [
  {
    name: "Agent 工程五部曲",
    count: "5 系列",
    desc: "基础 → 架构 → 多智能体 → 安全评估 → 生产化",
    href: `${BASE}/series/ae_series_1_agent_foundation/`,
  },
  {
    name: "AI 工程十一讲",
    count: "11 系列",
    desc: "LLM 基础、RAG、Agent、Prompt、部署、多模态、AI Coding、数据工程……",
    href: `${BASE}/series/series_1_llm_foundation/`,
  },
  {
    name: "机器学习全系列",
    count: "10 系列",
    desc: "从传统 ML、深度学习到 CV/NLP/RL/推荐系统与特征工程",
    href: `${BASE}/series/ml_series_1_ml_foundation/`,
  },
  {
    name: "语音助手系列",
    count: "5 系列",
    desc: "语音基础 → 语音 × LLM → 对话理解 → 开发 → 应用",
    href: `${BASE}/series/va_series_1_speech_fundamentals/`,
  },
];

export const bookDigests = [
  { name: "Claude 源码分析", href: `${BASE}/books/claude-source-analysis/` },
  { name: "Agent 设计指南", href: `${BASE}/books/agent-design-guide/` },
  { name: "LLM 原理", href: `${BASE}/books/llm-principles/` },
  { name: "LLM 史话", href: `${BASE}/books/llm-history/` },
  { name: "Claude Code 教程", href: `${BASE}/books/claude-code-tutorial/` },
  { name: "Hermes Agent 教程", href: `${BASE}/books/hermes-agent-tutorial/` },
  { name: "AI 副业", href: `${BASE}/books/ai-side-income/` },
];
