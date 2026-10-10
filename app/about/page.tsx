import type { Metadata } from "next";
import { site } from "@/lib/products";

export const metadata: Metadata = {
  title: "关于 — DevFox",
  description:
    "DevFox 是独立开发与 AI 工程的个人工作室：九年增长算法与计算广告的工程经验，如今用 AI 把判断做成作品。",
};

const timeline = [
  {
    year: "2024",
    title: "开始系统化构建 Agent 项目",
    desc: "从原型验证进入日常使用，把 Agent 当作可落地的产品能力来设计。",
  },
  {
    year: "2025",
    title: "深入多 Agent 与工作流编排",
    desc: "围绕增长、销售、内容生产等场景完成多套可运行系统，方法沉淀为 Claude Code 技能。",
  },
  {
    year: "2026",
    title: "以 DevFox 统一对外表达",
    desc: "把技术交付、案例叙事和项目能力整合成一个持续生长的产品工作室。",
  },
];

const links = [
  { label: "GitHub", title: "github.com/Ming-H", desc: "公开项目、代码风格和持续输出", href: site.github },
  { label: "AI Insights", title: "内容与技术输出", desc: "长期思考、写作和项目背景", href: site.insights },
];

/** 履历精编版：完整可打印版在 /resume */
const experience = [
  {
    period: "2024.11 – 至今",
    org: "某头部新能源车企",
    role: "大模型应用工程师",
    highlight: "独立负责 LLM 应用端到端交付：试驾质检效率 10×、社媒线索挖掘 Agent 日均 20w+ 数据、一客一策全量推广",
  },
  {
    period: "2021.07 – 2024.11",
    org: "某头部出行平台",
    role: "资深算法工程师 · MPT",
    highlight: "管理 3–5 人团队；智能补贴：因果推断 + 整数规划，ROI 显著提升；司机拉新 RTA/oCPC",
  },
  {
    period: "2020.04 – 2021.06",
    org: "某国际化直播平台",
    role: "广告算法工程师",
    highlight: "UCB Bandit 冷启动探索成功率 30% → 60%；MMoE 七目标 CVR 模型",
  },
  {
    period: "2019.05 – 2020.03",
    org: "某金融科技公司",
    role: "算法工程师",
    highlight: "理财产品人群圈选与精准触达",
  },
  {
    period: "2018.05 – 2019.04",
    org: "某电商平台",
    role: "增长算法工程师",
    highlight: "金融产品营销算法：圈人、权益、时机联合优化",
  },
  {
    period: "2017.07 – 2018.04",
    org: "某央企研究所",
    role: "算法工程师",
    highlight: "信用评分与意向评分模型",
  },
];

const education = {
  school: "北京工业大学 · 信息学部",
  degree: "控制科学与工程 硕士（本科自动化）",
  note: "BigNeuron 国际合作（Allen Institute）：神经元重构方法在 27 种主流方法中综合排名前二；SCI/EI 论文各一篇（第一作者）",
};

export default function AboutPage() {
  return (
    <div className="pb-2">
      <section className="border-b" style={{ borderColor: "var(--line)" }}>
        <div className="wrap relative grid grid-cols-1 pb-[104px] pt-[120px] lg:grid-cols-[1fr_300px]">
          <div
            aria-hidden
            className="absolute bottom-0 right-[348px] top-[72px] hidden w-px lg:block"
            style={{ background: "var(--line)" }}
          />
          <div className="pr-0 lg:pr-[72px]">
            <span className="eyebrow mb-9 block">ABOUT</span>
            <h1 className="display fade-up" style={{ fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.16 }}>
              把判断做成作品，
              <span className="block" style={{ marginLeft: "clamp(24px, 6vw, 96px)", color: "var(--accent)" }}>
                把过程留在明处。
              </span>
            </h1>
            <div className="tw-pretty mt-10 max-w-[600px] space-y-5 text-[16px]" style={{ color: "var(--ink-sub)" }}>
              <p>
                DevFox 是一个独立开发与 AI 工程的个人工作室。背后是九年增长算法与计算广告的工程经验——补贴优化、因果推断、实验平台——如今把这些判断力用 AI 重新做成作品。
              </p>
              <p>
                我关心的事情没变过：一个策略是否真的有效，一个工具是否真的被用。AI
                改变的是交付速度，不变的是对证据的要求。所以这里的每件作品都带测试、带文档、带可复现的入口。
              </p>
            </div>
          </div>
          <aside className="hidden flex-col justify-end pl-11 text-[13.5px] lg:flex" style={{ color: "var(--ink-sub)" }}>
            <span className="mb-[18px] block h-px w-10" style={{ background: "var(--ink)" }} />
            <span>九年前优化补贴，如今给判断造秤。</span>
            <span
              className="mt-[14px] block"
              style={{ fontFamily: "var(--font-mono)", fontSize: 13.5, color: "var(--accent)", lineHeight: 1.7 }}
            >
              $ judgment --shipped
            </span>
          </aside>
        </div>
      </section>

      <section className="pt-[120px]">
        <div className="wrap">
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
            <span className="eyebrow pt-[22px]">TIMELINE</span>
            <h2
              className="display"
              style={{
                fontSize: "clamp(30px, 3.4vw, 46px)",
                lineHeight: 1.22,
                marginLeft: "11%",
              }}
            >
              从工程实践到方法论沉淀。
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {timeline.map((t) => (
              <div key={t.year}>
                <div className="mb-4" style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent)" }}>
                  {t.year}
                </div>
                <h3 className="display" style={{ fontSize: 20, marginBottom: 8, lineHeight: 1.35 }}>
                  {t.title}
                </h3>
                <p className="max-w-[320px] text-sm" style={{ color: "var(--ink-sub)", lineHeight: 1.8 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 履历精编：招聘方看关于页即可，完整可打印版一键直达 */}
      <section className="pt-[120px]">
        <div className="wrap">
          <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
            <span className="eyebrow pt-[20px]">EXPERIENCE</span>
            <div>
              <h2 className="display" style={{ fontSize: "clamp(30px, 3.4vw, 46px)", lineHeight: 1.22 }}>
                九年，一条增长的主轴。
              </h2>
              <p className="tw-pretty mt-4 max-w-[560px] text-[15px]" style={{ color: "var(--ink-sub)" }}>
                从补贴优化、因果推断、计算广告，到 LLM 应用交付——方法换了工具，没换的是对证据的要求。
              </p>
            </div>
          </div>
          <div className="max-w-[860px]">
            {experience.map((e, i) => (
              <div
                key={e.period}
                className="grid grid-cols-1 gap-1.5 py-6 md:grid-cols-[168px_1fr] md:gap-8"
                style={{ borderTop: i === 0 ? "1px solid var(--line-strong)" : "1px solid var(--line)" }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-faint)", paddingTop: 4 }}>
                  {e.period}
                </span>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 600 }}>
                    {e.org}
                    <span style={{ color: "var(--ink-faint)", fontWeight: 400 }}> · {e.role}</span>
                  </h3>
                  <p className="tw-pretty mt-1 text-[14px]" style={{ color: "var(--ink-sub)" }}>
                    {e.highlight}
                  </p>
                </div>
              </div>
            ))}
            <div className="grid grid-cols-1 gap-1.5 py-6 md:grid-cols-[168px_1fr] md:gap-8" style={{ borderTop: "1px solid var(--line)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-faint)", paddingTop: 4 }}>
                2014 – 2017
              </span>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600 }}>
                  {education.school}
                  <span style={{ color: "var(--ink-faint)", fontWeight: 400 }}> · {education.degree}</span>
                </h3>
                <p className="tw-pretty mt-1 text-[14px]" style={{ color: "var(--ink-sub)" }}>
                  {education.note}
                </p>
              </div>
            </div>
            <div className="py-8" style={{ borderTop: "1px solid var(--line)" }}>
              <a
                href="/resume"
                className="rounded-md border px-5 py-2.5 text-[13px] no-underline"
                style={{ borderColor: "var(--line)", color: "var(--ink-sub)", fontFamily: "var(--font-mono)" }}
              >
                完整简历（可打印 PDF）→
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[120px]">
        <div className="wrap">
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
            <span className="eyebrow pt-[22px]">CONNECT</span>
            <h2
              className="display"
              style={{
                fontSize: "clamp(30px, 3.4vw, 46px)",
                lineHeight: 1.22,
                marginLeft: "11%",
              }}
            >
              找到我的三种方式。
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline transition-[border-color] duration-200"
                style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10, padding: "28px 30px" }}
              >
                <span className="eyebrow">{l.label}</span>
                <h3 className="display mt-4" style={{ fontSize: 20 }}>
                  {l.title}
                </h3>
                <p className="mt-2 text-[13.5px]" style={{ color: "var(--ink-sub)" }}>
                  {l.desc}
                </p>
              </a>
            ))}
            <a
              href={site.x}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-[border-color] duration-200"
              style={{ background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10, padding: "28px 30px" }}
            >
              <span className="eyebrow">X</span>
              <h3 className="display mt-4" style={{ fontSize: 20 }}>
                x.com/MingFire520
              </h3>
              <p className="mt-2 text-[13.5px]" style={{ color: "var(--ink-sub)" }}>
                日常动态与碎碎念
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
