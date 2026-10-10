import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now — DevFox",
  description: "现在在做：灯塔每日更新、GrowthGym v0.2、句读词典扩充、开放增长×AI 的新机会。",
};

const items = [
  {
    status: "live",
    statusLabel: "每交易日",
    title: "灯塔 Lighthouse 日常运转",
    desc: "CAN SLIM 打分 + 宏观研判 + 资金流向，每个交易日早上自动更新，已存档 120+ 期。",
  },
  {
    status: "wip",
    statusLabel: "进行中",
    title: "GrowthGym v0.2：LLM 模式实测",
    desc: "把四角色的决策换成 OpenAI 兼容端点（DeepSeek/GLM），对比 heuristic 模式的编排质量与成本。",
  },
  {
    status: "wip",
    statusLabel: "进行中",
    title: "句读 judou 术语词典扩充",
    desc: "从 100 条向 300 条扩，按科目/指标/报表概念/公司事件四类补齐财报黑话。",
  },
  {
    status: "open",
    statusLabel: "开放机会",
    title: "增长算法 × AI 应用方向",
    desc: "在看增长/算法岗与 LLM 应用工程方向的机会，也欢迎产品与技术合作 conversation。",
  },
];

const statusStyle: Record<string, { color: string; prefix: string }> = {
  live: { color: "var(--ok)", prefix: "● " },
  wip: { color: "var(--accent)", prefix: "▸ " },
  open: { color: "var(--accent)", prefix: "◆ " },
};

export default function NowPage() {
  return (
    <div className="pb-4">
      <section className="border-b" style={{ borderColor: "var(--line)" }}>
        <div className="wrap pb-16 pt-[100px]">
          <span className="eyebrow mb-8 block">
            <span style={{ color: "var(--accent)" }}>$</span> now
          </span>
          <h1 className="display fade-up" style={{ fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.16 }}>
            此刻，
            <span className="block" style={{ marginLeft: "clamp(24px, 6vw, 96px)", color: "var(--accent)" }}>
              正在做的事。
            </span>
          </h1>
          <p className="mt-7 max-w-[560px] text-[16.5px]" style={{ color: "var(--ink-sub)" }}>
            一个公开的「正在做」清单——不完美的进行时，好过完美的完成时。
          </p>
        </div>
      </section>

      <section className="pt-[100px]">
        <div className="wrap max-w-[820px]">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="grid grid-cols-[92px_1fr] gap-6 py-8"
              style={{ borderTop: i === 0 ? "1px solid var(--line-strong)" : "1px solid var(--line)" }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: statusStyle[it.status].color }}>
                {statusStyle[it.status].prefix}
                {it.statusLabel}
              </span>
              <div>
                <h2 className="display" style={{ fontSize: 22, lineHeight: 1.35 }}>
                  {it.title}
                </h2>
                <p className="tw-pretty mt-2 text-[14.5px]" style={{ color: "var(--ink-sub)" }}>
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
          <div className="py-8" style={{ borderTop: "1px solid var(--line)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-faint)" }}>
              last updated: 2026-10
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
