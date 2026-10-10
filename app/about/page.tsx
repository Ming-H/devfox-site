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
