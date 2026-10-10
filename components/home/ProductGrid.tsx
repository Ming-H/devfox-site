import Link from "next/link";
import {
  products,
  skillFamily,
  methodology,
  type Product,
} from "@/lib/products";
import { site } from "@/lib/products";

const statusColor: Record<Product["status"], string> = {
  live: "var(--ok)",
  new: "var(--accent)",
  popular: "var(--accent)",
  oss: "var(--ink-sub)",
  active: "var(--ink-sub)",
};

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col no-underline transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-[rgba(232,89,12,0.55)]"
      style={{
        background: "var(--panel)",
        border: "1px solid var(--line)",
        borderRadius: 8,
        padding: "28px 28px 22px",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div className="mb-4 flex items-start justify-between">
        <span className="eyebrow">{product.category}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 19, color: "var(--accent)", lineHeight: 1 }}>
          {product.glyph}
        </span>
      </div>
      <span
        className="block"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11.5px",
          color: statusColor[product.status],
          marginBottom: 10,
        }}
      >
        {product.status === "live" ? "● " : ""}
        {product.statusLabel}
      </span>
      <h3 className="display" style={{ fontSize: 23, lineHeight: 1.3, marginBottom: 10 }}>
        {product.name}
        {product.en ? <span style={{ color: "var(--ink-faint)", fontWeight: 500 }}> {product.en}</span> : null}
      </h3>
      <p className="tw-pretty flex-1 text-[13.5px]" style={{ color: "var(--ink-sub)", lineHeight: 1.75 }}>
        {product.desc}
      </p>
      {/* 量化数字行：真数据，一屏说服 */}
      <div
        className="mt-4 flex flex-wrap gap-x-2 gap-y-1"
        style={{ fontFamily: "var(--font-mono)", fontSize: "11.5px", color: "var(--ink-faint)" }}
      >
        {product.metric.map((m, i) => (
          <span key={m}>
            {i > 0 && <span style={{ color: "var(--accent)" }}> · </span>}
            {m}
          </span>
        ))}
      </div>
      <div
        className="mt-5 flex items-center justify-between pt-4"
        style={{ borderTop: "1px solid var(--line)", marginLeft: -28, marginRight: -28, paddingLeft: 28, paddingRight: 28 }}
      >
        <span className="text-[13px]" style={{ color: "var(--ink)" }}>
          {product.linkLabel}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}>↗</span>
      </div>
    </a>
  );
}

function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
      <span className="eyebrow pt-[20px]">{eyebrow}</span>
      <div>
        <h2 className="display fade-up" style={{ fontSize: "clamp(32px, 3.8vw, 52px)", lineHeight: 1.22 }}>
          {title}
        </h2>
        {intro ? (
          <p className="tw-pretty mt-5 max-w-[560px] text-[15px]" style={{ color: "var(--ink-sub)" }}>
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function ProductGrid() {
  return (
    <>
      {/* ── 产品 ── */}
      <section id="products" className="pt-[128px]">
        <div className="wrap">
          <SectionHead
            eyebrow="01 / PRODUCTS"
            title={
              <>
                一些有具体来历的工具、
                <br />
                方法与实验。
              </>
            }
            intro="每件东西都从一个真实问题开始。有的成了日常依赖，有的保持开源方法，都在仓库里活着。"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
          {/* case study 入口 */}
          <div className="mt-6 flex flex-wrap gap-3">
            {products
              .filter((p) => p.caseHref)
              .map((p) => (
                <Link
                  key={p.caseHref}
                  href={p.caseHref!}
                  className="rounded-md border px-4 py-2 text-[13px] no-underline"
                  style={{ borderColor: "var(--line)", color: "var(--ink-sub)", fontFamily: "var(--font-mono)" }}
                >
                  case study: {p.en ?? p.name} →
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── 技能与方法论 ── */}
      <section className="pt-[128px]">
        <div className="wrap">
          <SectionHead
            eyebrow="02 / SKILLS & PLAYBOOKS"
            title={
              <>
                把方法做成技能，
                <br />
                把经验写成手册。
              </>
            }
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Claude Code Skills */}
            <div
              className="p-8"
              style={{ background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 8 }}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="display" style={{ fontSize: 21 }}>
                  Claude Code 技能仓库
                </h3>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)" }}>
                  {skillFamily.count} skills
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {skillFamily.items.map((s) => (
                  <li key={s.name} className="flex items-baseline gap-3 text-[14px]">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline"
                      style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent)" }}
                    >
                      {s.name}
                    </a>
                    <span style={{ color: "var(--ink-sub)" }}>{s.desc}</span>
                  </li>
                ))}
              </ul>
              <a
                href={skillFamily.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block text-[13px] no-underline"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink-sub)" }}
              >
                全部仓库 ↗
              </a>
            </div>

            {/* 增长方法论知识库 */}
            <div
              className="p-8"
              style={{ background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 8 }}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="display" style={{ fontSize: 21 }}>
                  {methodology.title}
                </h3>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)" }}>
                  10 domains
                </span>
              </div>
              <p className="mt-3 text-[13.5px]" style={{ color: "var(--ink-sub)" }}>
                九年增长算法经验的结构化沉淀——每个领域一个可复用的知识仓库。
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {methodology.domains.map((d) => (
                  <a
                    key={d.repo}
                    href={methodology.href(d.repo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded border px-3 py-1.5 text-[12.5px] no-underline"
                    style={{ borderColor: "var(--line)", color: "var(--ink-sub)", fontFamily: "var(--font-mono)" }}
                  >
                    {d.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 写作 ── */}
      <section className="pt-[128px]">
        <div className="wrap">
          <SectionHead
            eyebrow="03 / WRITING"
            title={<>判断过程，写成文字。</>}
            intro="长文沉淀在 AI Insights，快思考发在 X 和公众号极客狐DevFox。"
          />
          <a
            href={site.insights}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col no-underline transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-[rgba(232,89,12,0.55)] md:flex-row md:items-center md:justify-between"
            style={{ background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 8, padding: "28px 32px" }}
          >
            <div>
              <h3 className="display" style={{ fontSize: 22 }}>
                AI Insights
              </h3>
              <p className="mt-2 text-[13.5px]" style={{ color: "var(--ink-sub)" }}>
                16 篇博客 · 30+ 学习系列 · 8 本书摘——AI 工程的长期思考
              </p>
            </div>
            <span className="mt-4 md:mt-0" style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}>
              开始阅读 ↗
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
