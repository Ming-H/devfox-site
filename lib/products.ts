export type ProductStatus = "live" | "new" | "popular" | "oss" | "active";

export interface Product {
  name: string;
  en?: string;
  category: string;
  glyph: string;
  status: ProductStatus;
  statusLabel: string;
  desc: string;
  href: string;
  linkLabel: string;
}

export const products: Product[] = [
  {
    name: "灯塔",
    en: "Lighthouse",
    category: "投资研究",
    glyph: "▲",
    status: "live",
    statusLabel: "每日更新 · live",
    desc: "A 股投资辅助终端：新闻联播宏观研判 + 全市场 CAN SLIM 每日打分，一屏完成每日决策，120+ 期存档。",
    href: "https://ming-h.github.io/lighthouse/",
    linkLabel: "打开产品",
  },
  {
    name: "句读",
    en: "judou",
    category: "投资研究",
    glyph: "¶",
    status: "oss",
    statusLabel: "开源 · AGPL-3.0",
    desc: "AI 财报伴读器：数字句读、术语点读、AI 解读强制页码引用，原文无据不答。",
    href: "https://github.com/Ming-H/judou",
    linkLabel: "查看仓库",
  },
  {
    name: "GrowthGym",
    category: "AI 工程",
    glyph: "⚖",
    status: "new",
    statusLabel: "新发布",
    desc: "补贴策略上秤的 Agent 道场：uplift 估计、整数规划、排行榜，LLM 编排真算法而非编故事。",
    href: "https://github.com/Ming-H/growth-gym",
    linkLabel: "查看仓库",
  },
  {
    name: "月老",
    en: "Yinyuan",
    category: "Claude Code Skill",
    glyph: "♥",
    status: "popular",
    statusLabel: "人气之作",
    desc: "赛博月老·姻缘测算：八字合婚、生肖配对、紫微夫妻宫。严格 Prompt 约束，不靠玄学幻觉。",
    href: "https://github.com/Ming-H/yinyuan-skills",
    linkLabel: "查看仓库",
  },
  {
    name: "Skills 家族",
    category: "技能仓库",
    glyph: "✦",
    status: "oss",
    statusLabel: "持续维护",
    desc: "20+ Claude Code 技能：静水投资方法论、长文写作、CAN SLIM 选股、资金流向、巨潮财报。",
    href: "https://github.com/Ming-H?tab=repositories",
    linkLabel: "全部仓库",
  },
  {
    name: "AI Insights",
    category: "写作",
    glyph: "✎",
    status: "active",
    statusLabel: "持续更新",
    desc: "技术写作与长期思考：AI 工程实践、学习路径、行业观察。",
    href: "https://ming-h.github.io/ai-insights/",
    linkLabel: "开始阅读",
  },
];

export const site = {
  name: "DevFox",
  url: "https://devfoxai.cn",
  tagline: ["起于自用，", "成于开放。"],
  heroSub:
    "独立开发 · AI 工程。每件作品都始于一个真实问题，成于一次公开交付——工具给自己用，接口留给你调。",
  asideNote: "这里陈列的每件东西都在日常运转，不在橱窗积灰。",
  asideQuote: ["Built for myself,", "left open for you."],
  nowBuilding: {
    name: "灯塔 Lighthouse",
    msg: "每日更新中：全市场 CAN SLIM 打分 + 宏观研判 · 120+ 期存档",
  },
  updated: "更新于 2026 年 10 月",
  x: "https://x.com/MingFire520",
  github: "https://github.com/Ming-H",
  insights: "https://ming-h.github.io/ai-insights/",
  footerQuote: ["Small tools,", "shipped with tests."],
};
