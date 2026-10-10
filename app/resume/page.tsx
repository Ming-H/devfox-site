import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "简历 — 郝明 · 大模型应用工程师 / 增长算法专家",
  description:
    "九年增长算法与 AI 工程经验：补贴优化、因果推断、计算广告，到 LLM 应用端到端交付。开源作品见 devfoxai.cn。",
};

const jobs = [
  {
    company: "某头部新能源车企",
    role: "大模型应用工程师",
    period: "2024.11 – 至今",
    bullets: [
      "独立负责 LLM 应用的端到端交付（智能算法团队）",
      "试驾质检系统：ASR + LLM + Prompt Engineering，全量自动质检效率提升 10×，虚假试驾识别准确率 95%+",
      "域外线索挖掘 Agent：面向小红书/抖音的线索识别 Agent，日均处理社媒数据 20w+，产出意向线索 1k+",
      "一客一策系统：大小模型协作的实时个性化策略生成，已全量推广至销售端 APP",
    ],
  },
  {
    company: "某头部出行平台",
    role: "资深算法工程师 · MPT",
    period: "2021.07 – 2024.11",
    bullets: [
      "管理 3–5 人算法团队，连续两年绩效 A",
      "智能补贴系统：因果推断 + 整数规划求解全局最优个性化发券策略，ROI 显著提升",
      "司机拉新广告：独立负责 RTA / oCPC 投放，开发 CVR 与 Uplift 增量模型",
    ],
  },
  {
    company: "某国际化直播平台",
    role: "广告算法工程师",
    period: "2020.04 – 2021.06",
    bullets: [
      "冷启动策略：UCB Bandit 优化新广告探索，探索成功率 30% → 60%",
      "多目标模型：基于 MMoE 构建 7 目标 CVR 模型；负采样 + 权重校正优化 CTR",
    ],
  },
  {
    company: "某金融科技公司",
    role: "算法工程师 · 理财精准营销",
    period: "2019.05 – 2020.03",
    bullets: ["理财产品人群圈选与触达策略建模"],
  },
  {
    company: "某电商平台",
    role: "增长算法工程师 · 金融营销",
    period: "2018.05 – 2019.04",
    bullets: ["金融产品营销算法：圈人、权益、时机联合优化"],
  },
  {
    company: "某央企研究所",
    role: "算法工程师 · 信用评分",
    period: "2017.07 – 2018.04",
    bullets: ["信用评分与意向评分模型"],
  },
];

const works = [
  {
    name: "灯塔 Lighthouse",
    desc: "A 股投资辅助终端，每交易日自动更新，120+ 期存档",
    href: "https://ming-h.github.io/lighthouse/",
  },
  {
    name: "GrowthGym",
    desc: "补贴策略 Agent 道场：IP 对贪心 4.1×，11 项测试，含求解器 bug 追踪实录",
    href: "https://github.com/Ming-H/growth-gym",
  },
  {
    name: "句读 judou",
    desc: "开源 AI 财报伴读器（AGPL-3.0），强制页码引用、零幻觉设计",
    href: "https://github.com/Ming-H/judou",
  },
  {
    name: "月老 Yinyuan Skills",
    desc: "社区人气 Claude Code 技能：6 种测算模式，结构化知识库",
    href: "https://github.com/Ming-H/yinyuan-skills",
  },
  {
    name: "Claude Code 技能仓库 20+",
    desc: "静水投资 / CAN SLIM / 资金流向 / 长文写作等，持续维护",
    href: "https://github.com/Ming-H?tab=repositories",
  },
  {
    name: "增长方法论知识库 ×10",
    desc: "因果推断 / 实验平台 / 定价 / 归因等领域，九年经验结构化沉淀",
    href: "https://github.com/Ming-H/causal-inference",
  },
];

const skills = [
  { k: "LLM 应用", v: "LangChain · LangGraph · RAG · Multi-Agent · Prompt Engineering · Claude Code/Skills 工程化" },
  { k: "算法", v: "Uplift / 因果推断 · A/B 与序贯检验 · MMoE / Bandit · LightGBM · 推荐与广告（RTA/oCPC）" },
  { k: "工程", v: "Python（精通）· C++ · SQL · PyTorch · scikit-learn · FastAPI · Next.js" },
];

function Section({ no, title, children }: { no: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <div className="mb-4 flex items-baseline gap-4 border-b pb-2" style={{ borderColor: "var(--line-strong)" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--accent)" }}>{no}</span>
        <h2 className="display" style={{ fontSize: 21 }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="print-plain">
      <div className="wrap max-w-[900px] pb-16 pt-[72px]">
        {/* 头部 */}
        <header className="mb-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="display" style={{ fontSize: 40, lineHeight: 1.15 }}>
                郝明 <span style={{ color: "var(--ink-faint)", fontWeight: 500 }}>Ming Hao</span>
              </h1>
              <p className="mt-2 text-[16px]" style={{ color: "var(--ink-sub)" }}>
                大模型应用工程师 · 增长算法专家 —— 增长为主轴，AI 为杠杆
              </p>
            </div>
            <div
              className="no-print rounded-md border px-4 py-2.5 text-[12px]"
              style={{ borderColor: "var(--line)", color: "var(--ink-faint)", fontFamily: "var(--font-mono)" }}
            >
              ⌘P → 打印为 PDF
            </div>
          </div>
          <div
            className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-[13px]"
            style={{ fontFamily: "var(--font-mono)", color: "var(--ink-sub)" }}
          >
            <span>1518246548@qq.com</span>
            <a href="https://github.com/Ming-H" target="_blank" rel="noopener noreferrer" className="no-underline" style={{ color: "var(--accent)" }}>
              github.com/Ming-H
            </a>
            <a href="https://devfoxai.cn" className="no-underline" style={{ color: "var(--accent)" }}>
              devfoxai.cn（作品集）
            </a>
            <span>北京 · 1992.02</span>
            <span>CET-6</span>
          </div>
          <p className="tw-pretty mt-6 max-w-[760px] text-[14.5px]" style={{ color: "var(--ink-sub)" }}>
            九年增长算法与 AI 工程经验：从补贴优化、因果推断、计算广告，到 LLM 应用的端到端交付。
            相信「会 AI 的增长老手」是最稀缺的交集——AI 改变交付速度，不变的是对证据的要求。
          </p>
        </header>

        <Section no="01" title="工作经历">
          <div className="space-y-8">
            {jobs.map((j) => (
              <div key={j.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 style={{ fontSize: 16, fontWeight: 600 }}>
                    {j.company} <span style={{ color: "var(--ink-faint)", fontWeight: 400 }}>· {j.role}</span>
                  </h3>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-faint)" }}>{j.period}</span>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[14px]" style={{ color: "var(--ink-sub)" }}>
                  {j.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section no="02" title="开源与作品">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {works.map((w) => (
              <a
                key={w.name}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md border p-4 no-underline"
                style={{ borderColor: "var(--line)" }}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13.5, color: "var(--accent)" }}>{w.name} ↗</div>
                <div className="tw-pretty mt-1.5 text-[13px]" style={{ color: "var(--ink-sub)" }}>{w.desc}</div>
              </a>
            ))}
          </div>
        </Section>

        <Section no="03" title="学术背景">
          <div className="space-y-4 text-[14px]" style={{ color: "var(--ink-sub)" }}>
            <div className="flex flex-wrap justify-between gap-2">
              <span style={{ color: "var(--ink)" }}>北京工业大学 · 信息学部</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-faint)" }}>2014 – 2017</span>
            </div>
            <p>控制科学与工程 硕士（本科：自动化，2010–2014）</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                FMST 神经元自动重构方法（第一作者）：BIH 2016, Springer LNCS 9919（EI）；扩展版发表于
                Neuroinformatics 2019, 17(2)（SCI）
              </li>
              <li>Allen Institute 国际合作项目 BigNeuron：所提方法在 27 种主流方法中综合排名前二</li>
              <li>软件著作权 1 项：基于形态学特征的神经元分类模型系统（2016）</li>
            </ul>
          </div>
        </Section>

        <Section no="04" title="专业技能">
          <div className="space-y-3">
            {skills.map((s) => (
              <div key={s.k} className="grid grid-cols-[110px_1fr] gap-4 text-[14px]">
                <span style={{ fontWeight: 600 }}>{s.k}</span>
                <span style={{ color: "var(--ink-sub)" }}>{s.v}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
