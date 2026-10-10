import type { Metadata } from "next";
import { site } from "@/lib/products";
import { featuredPosts, seriesList, bookDigests } from "@/lib/writing";

export const metadata: Metadata = {
  title: "文章 — DevFox",
  description: "AI 工程的长期写作：Claude Code 深拆、Skills 工程化、Vibe Coding 实战、Agent 构建路径。",
};

export default function WritingPage() {
  return (
    <div className="pb-4">
      <section className="border-b" style={{ borderColor: "var(--line)" }}>
        <div className="wrap pb-16 pt-[100px]">
          <span className="eyebrow mb-8 block">
            <span style={{ color: "var(--accent)" }}>$</span> cat ~/writing/index.md
          </span>
          <h1 className="display fade-up" style={{ fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.16 }}>
            判断过程，
            <span className="block" style={{ marginLeft: "clamp(24px, 6vw, 96px)", color: "var(--accent)" }}>
              写成文字。
            </span>
          </h1>
          <p className="tw-pretty mt-7 max-w-[600px] text-[16.5px]" style={{ color: "var(--ink-sub)" }}>
            长文沉淀在 AI Insights，快思考发在 X，深度体迭代在公众号「{site.gzh}」。这里是从全部输出里挑出的代表作。
          </p>
        </div>
      </section>

      {/* 代表作 */}
      <section className="pt-[100px]">
        <div className="wrap">
          <div className="mb-12 flex items-center gap-5">
            <span className="eyebrow">01 / FEATURED</span>
            <span className="h-px flex-1" style={{ background: "var(--line)" }} />
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {featuredPosts.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col no-underline transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-[rgba(232,89,12,0.55)]"
                style={{ background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 8, padding: "24px 26px" }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="rounded px-2 py-0.5"
                    style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", background: "var(--accent-soft)" }}
                  >
                    {p.tag}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-faint)" }}>{p.date}</span>
                </div>
                <h3 className="display mt-4" style={{ fontSize: 18.5, lineHeight: 1.45, color: "var(--ink)" }}>
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-[13.5px]" style={{ color: "var(--ink-sub)" }}>
                  {p.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 系列 */}
      <section className="pt-[100px]">
        <div className="wrap">
          <div className="mb-12 flex items-center gap-5">
            <span className="eyebrow">02 / SERIES</span>
            <span className="h-px flex-1" style={{ background: "var(--line)" }} />
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {seriesList.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-6 no-underline transition-[border-color] duration-200 hover:border-[rgba(232,89,12,0.55)]"
                style={{ background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 8, padding: "24px 26px" }}
              >
                <div>
                  <h3 className="display" style={{ fontSize: 19, color: "var(--ink)" }}>
                    {s.name}
                  </h3>
                  <p className="mt-2 text-[13.5px]" style={{ color: "var(--ink-sub)" }}>
                    {s.desc}
                  </p>
                </div>
                <span className="whitespace-nowrap" style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)" }}>
                  {s.count} ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 书摘 */}
      <section className="pt-[100px]">
        <div className="wrap">
          <div className="mb-12 flex items-center gap-5">
            <span className="eyebrow">03 / BOOK DIGESTS</span>
            <span className="h-px flex-1" style={{ background: "var(--line)" }} />
          </div>
          <div className="flex flex-wrap gap-3">
            {bookDigests.map((b) => (
              <a
                key={b.href}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border px-4 py-2.5 text-[13px] no-underline"
                style={{ borderColor: "var(--line)", color: "var(--ink-sub)", fontFamily: "var(--font-mono)" }}
              >
                {b.name} ↗
              </a>
            ))}
          </div>
          <a
            href={site.insights}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block rounded-md px-[24px] py-[12px] text-sm no-underline"
            style={{ background: "var(--cta-bg)", color: "var(--cta-ink)", fontFamily: "var(--font-mono)" }}
          >
            进入 AI Insights 全站 ↗
          </a>
        </div>
      </section>
    </div>
  );
}
