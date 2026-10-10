import { site } from "@/lib/products";

export function Hero() {
  return (
    <section className="border-b" style={{ borderColor: "var(--line)" }}>
      <div className="wrap relative grid grid-cols-1 pb-[104px] pt-[116px] lg:grid-cols-[1fr_300px]">
        <div
          aria-hidden
          className="absolute bottom-0 right-[348px] top-[68px] hidden w-px lg:block"
          style={{ background: "var(--line)" }}
        />
        <div className="pr-0 lg:pr-[72px]">
          <span className="eyebrow mb-9 block">
            <span style={{ color: "var(--accent)" }}>$</span> {site.name} — 独立产品工作室
          </span>
          <h1 className="display fade-up" style={{ fontSize: "clamp(48px, 6.4vw, 84px)", lineHeight: 1.14 }}>
            {site.tagline[0]}
            <span className="block" style={{ marginLeft: "clamp(24px, 6vw, 96px)", color: "var(--accent)" }}>
              {site.tagline[1]}
            </span>
          </h1>
          <p className="tw-pretty mt-9 max-w-[560px] text-[16.5px]" style={{ color: "var(--ink-sub)" }}>
            {site.heroSub}
          </p>
          <div className="mt-11 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="rounded-md px-[24px] py-[12px] text-sm no-underline"
              style={{ background: "var(--cta-bg)", color: "var(--cta-ink)", fontFamily: "var(--font-mono)" }}
            >
              看看正在做什么 ↓
            </a>
            <a
              href="/writing"
              className="rounded-md border px-[24px] py-[12px] text-sm no-underline"
              style={{ borderColor: "var(--line)", color: "var(--ink-sub)", fontFamily: "var(--font-mono)" }}
            >
              /writing
            </a>
          </div>
        </div>
        <aside className="hidden flex-col justify-end pl-11 text-[13.5px] lg:flex" style={{ color: "var(--ink-sub)" }}>
          <span className="mb-[18px] block h-px w-10" style={{ background: "var(--ink)" }} />
          <span>{site.asideNote}</span>
          <span
            className="mt-[14px] block"
            style={{ fontFamily: "var(--font-mono)", fontSize: 13.5, color: "var(--accent)", lineHeight: 1.7 }}
          >
            {site.asideQuote[0]}
            <br />
            {site.asideQuote[1]}
          </span>
        </aside>
      </div>
    </section>
  );
}
