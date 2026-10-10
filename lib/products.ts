export type ProductStatus = "live" | "new" | "popular" | "oss" | "active";

export interface Product {
  name: string;
  en?: string;
  category: string;
  glyph: string;
  status: ProductStatus;
  statusLabel: string;
  /** 量化数字行：真数据，面试与读者的第一印象 */
  metric: string[];
  desc: string;
  href: string;
  linkLabel: string;
  caseHref?: string;
}

/** 产品：独立运转的完整作品 */
export const products: Product[] = [
  {
    name: "灯塔",
    en: "Lighthouse",
    category: "投资研究",
    glyph: "▲\ufe0e",
    status: "live",
    statusLabel: "每日更新 · live",
    metric: ["120+ 期存档", "每交易日更新", "全市场 CAN SLIM 打分"],
    desc: "A 股投资辅助终端：新闻联播宏观研判 + CAN SLIM 七要素打分 + 资金流向，一屏完成每日决策。",
    href: "https://ming-h.github.io/lighthouse/",
    linkLabel: "打开产品",
    caseHref: "/case/lighthouse",
  },
  {
    name: "句读",
    en: "judou",
    category: "投资研究",
    glyph: "¶\ufe0e",
    status: "oss",
    statusLabel: "开源 · AGPL-3.0",
    metric: ["100+ 条术语词典", "数字句读零幻觉", "AI 解读强制页码引用"],
    desc: "开源 AI 财报伴读器：给财报断句，给标的编年。原文无据不答，所有输出挂「以原文为准」。",
    href: "https://github.com/Ming-H/judou",
    linkLabel: "查看仓库",
  },
  {
    name: "GrowthGym",
    category: "AI 工程",
    glyph: "⚖\ufe0e",
    status: "new",
    statusLabel: "新发布",
    metric: ["IP 对贪心 4.1×", "11 项测试", "regret 23.4%"],
    desc: "补贴策略上秤的 Agent 道场：uplift 估计 + 整数规划 + 排行榜，LLM 编排真算法而非编故事。",
    href: "https://github.com/Ming-H/growth-gym",
    linkLabel: "查看仓库",
    caseHref: "/case/growth-gym",
  },
  {
    name: "月老",
    en: "Yinyuan",
    category: "Claude Code Skill",
    glyph: "♥\ufe0e",
    status: "popular",
    statusLabel: "社区人气之作",
    metric: ["6 种测算模式", "结构化知识库", "严格 Prompt 约束"],
    desc: "赛博月老·姻缘测算：八字合婚、生肖配对、紫微夫妻宫。不靠玄学幻觉，娱乐为主理性参考。",
    href: "https://github.com/Ming-H/yinyuan-skills",
    linkLabel: "查看仓库",
  },
];

/** 技能仓库：20+ Claude Code 技能（橱窗列代表作出处） */
export const skillFamily = {
  count: "20+",
  items: [
    { name: "jingshui", desc: "静水投资方法论", href: "https://github.com/Ming-H/jingshui" },
    { name: "can-slim", desc: "笑傲股市七要素选股", href: "https://github.com/Ming-H/can-slim" },
    { name: "lynch", desc: "彼得·林奇十倍股体系", href: "https://github.com/Ming-H/lynch" },
    { name: "hithink-moneyflow", desc: "A股板块资金流向", href: "https://github.com/Ming-H/hithink-moneyflow" },
    { name: "cninfo-disclosure", desc: "巨潮财报 PDF 下载", href: "https://github.com/Ming-H/cninfo-disclosure" },
    { name: "fox-writer", desc: "公众号长文写作", href: "https://github.com/Ming-H/fox-writer" },
    { name: "xhs-image-generator", desc: "小红书轮播卡片", href: "https://github.com/Ming-H/xhs-image-generator" },
    { name: "tech-book-generator", desc: "技术文档排版生成", href: "https://github.com/Ming-H/tech-book-generator" },
  ],
  href: "https://github.com/Ming-H?tab=repositories",
};

/** 增长方法论知识库：九年增长算法的结构化沉淀（求职叙事的硬底座） */
export const methodology = {
  title: "增长方法论知识库",
  domains: [
    { name: "因果推断", repo: "causal-inference" },
    { name: "实验平台", repo: "experiment-platform" },
    { name: "用户增长", repo: "user-growth" },
    { name: "定价策略", repo: "pricing-strategy" },
    { name: "归因分析", repo: "marketing-attribution" },
    { name: "广告策略", repo: "ad-strategy" },
    { name: "风控", repo: "risk-control" },
    { name: "电商分析", repo: "ecommerce-analytics" },
    { name: "时间序列", repo: "time-series" },
    { name: "产品分析", repo: "product-analytics" },
  ],
  href: (repo: string) => `https://github.com/Ming-H/${repo}`,
};

export const site = {
  name: "DevFox",
  url: "https://devfoxai.cn",
  tagline: ["起于自用，", "成于开放。"],
  heroSub:
    "独立开发 · AI 工程。每件作品都始于一个真实问题，成于一次公开交付——工具给自己用，接口留给你调。",
  asideNote: "这里陈列的每件东西都在日常运转，不在橱窗积灰。",
  asideQuote: ["$ built for myself,", "  --open for you"],
  nowBuilding: {
    name: "灯塔 Lighthouse",
    msg: "每日更新中：全市场 CAN SLIM 打分 + 宏观研判 · 120+ 期存档",
  },
  updated: "更新于 2026 年 10 月",
  x: "https://x.com/MingFire520",
  github: "https://github.com/Ming-H",
  insights: "https://ming-h.github.io/ai-insights/",
  gzh: "极客狐DevFox",
  footerQuote: ["Small tools,", "shipped with tests."],
};
