import Link from "next/link";
import type { ReactNode } from "react";

export function CaseShell({
  index,
  title,
  summary,
  metrics,
  liveHref,
  liveLabel,
  children,
}: {
  index: string;
  title: ReactNode;
  summary: string;
  metrics: { k: string; v: string }[];
  liveHref: string;
  liveLabel: string;
  children: ReactNode;
}) {
  return (
    <div className="pb-4">
      <section className="border-b" style={{ borderColor: "var(--line)" }}>
        <div className="wrap pb-16 pt-[100px]">
          <div className="mb-8 flex items-center gap-4">
            <Link
              href="/#products"
              className="text-[12.5px] no-underline"
              style={{ fontFamily: "var(--font-mono)", color: "var(--ink-sub)" }}
            >
              ← 产品
            </Link>
            <span className="eyebrow">CASE STUDY {index}</span>
          </div>
          <h1 className="display fade-up" style={{ fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.16 }}>
            {title}
          </h1>
          <p className="tw-pretty mt-7 max-w-[640px] text-[16.5px]" style={{ color: "var(--ink-sub)" }}>
            {summary}
          </p>
          {/* 关键数字带 */}
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg md:grid-cols-4" style={{ background: "var(--line)", border: "1px solid var(--line)" }}>
            {metrics.map((m) => (
              <div key={m.k} className="p-5" style={{ background: "var(--panel)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 500, color: "var(--accent)" }}>
                  {m.v}
                </div>
                <div className="mt-1 text-[12.5px]" style={{ color: "var(--ink-sub)" }}>
                  {m.k}
                </div>
              </div>
            ))}
          </div>
          <a
            href={liveHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-md px-[24px] py-[12px] text-sm no-underline"
            style={{ background: "var(--cta-bg)", color: "var(--cta-ink)", fontFamily: "var(--font-mono)" }}
          >
            {liveLabel} ↗
          </a>
        </div>
      </section>
      <article className="wrap max-w-[820px] pt-16">{children}</article>
    </div>
  );
}

export function CaseSection({ no, title, children }: { no: string; title: string; children: ReactNode }) {
  return (
    <section className="mb-14">
      <div className="mb-5 flex items-baseline gap-4">
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent)" }}>{no}</span>
        <h2 className="display" style={{ fontSize: 26, lineHeight: 1.3 }}>
          {title}
        </h2>
      </div>
      <div className="tw-pretty space-y-5 text-[15.5px] leading-[1.85]" style={{ color: "var(--ink-sub)" }}>
        {children}
      </div>
    </section>
  );
}

export function CaseTable({ head, rows }: { head: string[]; rows: (string | number)[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg" style={{ border: "1px solid var(--line)" }}>
      <table className="w-full text-left text-[13.5px]" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "var(--bg-2)" }}>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-medium" style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-sub)" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderTop: "1px solid var(--line)" }}>
              {r.map((c, j) => (
                <td
                  key={j}
                  className="px-4 py-3"
                  style={{
                    color: j === 0 ? "var(--ink)" : "var(--ink-sub)",
                    fontFamily: j > 0 ? "var(--font-mono)" : undefined,
                    fontSize: j > 0 ? 12.5 : undefined,
                  }}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
